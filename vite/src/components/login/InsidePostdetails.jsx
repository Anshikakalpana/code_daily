


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';


function InsidePostdetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(UserContext); 
const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/getpostbyid/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    fetchPost();
  }, [id]);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
const handleDeletePost = async () => {
  if (!window.confirm("Are you sure you want to delete this post?")) return;
  try {
    await axios.delete(`http://localhost:3000/deletepost/${id}`);
    navigate('/mainpage'); 
  } catch (err) {
    console.error("Error deleting post", err);
  }
};

  useEffect(() => {
    const fetchComments = async () => {
      setLoadingComments(true);
      try {
        const res = await axios.get(`http://localhost:3000/comments/${id}` );
        setComments(res.data || []);
      } catch (err) {
        setError("Failed to load comments");
      } finally {
        setLoadingComments(false);
      }
    };
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    setPosting(true);
    setError("");
    try {
      const res = await axios.post(`http://localhost:3000/comments`, {
        postId: id,
        name: commentName,
        text: commentText,
      });
      setComments([res.data, ...comments]);
      setCommentName("");
      setCommentText("");
    } catch (err) {
      setError("Failed to post comment");
    } finally {
      setPosting(false);
    }
  };

  if (!post) return <div className="text-white">Loading...</div>;

  return (
    <>
      <div className="px-4 md:px-24 py-10 min-h-screen text-white bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center">
        <div className="w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 space-y-10 border border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-700 pb-4">
            <div>
              <h1 className="text-4xl font-extrabold text-indigo-300 tracking-tight mb-2 drop-shadow-lg">{post.title}</h1>
              <p className="text-indigo-200 font-semibold text-sm mb-1">By: {post.postby}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="bg-gray-800 px-2 py-1 rounded">
  {new Date(post.createdAt).toLocaleDateString()}
</span>
<span className="bg-gray-800 px-2 py-1 rounded">
  {new Date(post.createdAt).toLocaleTimeString()}
</span>

              </div>
            </div>
            
  {post.userid!=user?.id&& <button onClick={handleDeletePost} className="px-4 py-2 text-sm text-red-300 hover:text-red-500 border border-red-500 rounded-lg transition">Delete</button> }
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="md:w-1/3 w-full flex flex-col items-center md:items-start">
              <img
                src={post.image}
                alt="Technology"
                className="rounded-xl shadow-2xl h-64 w-full object-cover border-2 border-indigo-700"
              />
            </div>
            <div className="md:w-2/3 w-full text-indigo-100 text-lg leading-relaxed bg-gray-900 bg-opacity-60 rounded-xl p-6 shadow-inner">
              <p className="whitespace-pre-line">{post.description}</p>
            </div>
          </div>
       
          <div className="mt-10 w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-300 mb-6 tracking-wide">Comments</h2>
            <form className="w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-4 mb-10 border border-gray-800" onSubmit={handleCommentSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="flex-1 bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                  value={commentName}
                  onChange={e => setCommentName(e.target.value)}
                  disabled={posting}
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow transition"
                  disabled={posting}
                >
                  {posting ? "Posting..." : "Post Comment"}
                </button>
              </div>
              <textarea
                rows="3"
                placeholder="Write a comment..."
                className="bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow"
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                disabled={posting}
              ></textarea>
              {error && <div className="text-red-400 mt-2">{error}</div>}
            </form>
            <div className="w-full max-w-2xl space-y-6">
              {loadingComments ? (
                <div className="text-indigo-200 text-center">Loading comments...</div>
              ) : comments.length === 0 ? (
                <div className="text-indigo-200 text-center">No comments yet. Be the first to comment!</div>
              ) : (
                comments.map((c, idx) => (
                  <div key={c._id || idx} className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700 rounded-xl p-5 shadow-lg">
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                      <span>💬 <strong className="text-indigo-300">{c.name}</strong></span>
                      <span className="bg-gray-900 px-2 py-1 rounded">{new Date(c.createdAt).toLocaleDateString()} {new Date(c.createdAt).toLocaleTimeString()}</span>
                    </div>
                    <p className="text-indigo-100 text-base leading-relaxed">{c.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InsidePostdetails;
