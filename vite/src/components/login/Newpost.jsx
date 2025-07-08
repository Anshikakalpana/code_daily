import React, { useState, useRef, useEffect, useContext } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import axios from 'axios';
import { UserContext } from '../../UserContext';

function Newpost() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [quillInstance, setQuillInstance] = useState(null);
  const editorRef = useRef(null);
  const { user } = useContext(UserContext);

  const Categories = ['coding', 'system design'];

  useEffect(() => {
    if (editorRef.current && !quillInstance) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        },
        placeholder: 'Type description here...',
      });
      setQuillInstance(quill);
    }
  }, [quillInstance]);

  const needhelp = () => {
    console.log("AI help requested");
    alert("This will be connected to AI Help soon!");
  };

  const createhandle = async () => {
    if (!title || !category || !image || !quillInstance) {
      alert("Please fill in all required fields");
      return;
    }

    if (!user || !user._id) {
      alert("You must be logged in to post.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image); 
      formData.append("title", title);
      formData.append("description", quillInstance.root.innerHTML);
      formData.append("category", category);
      formData.append("postby", user.name);
      formData.append("postid", Date.now()); 

      const res = await axios.post('http://localhost:3000/newpost', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true, 
      });

      alert("Post created successfully!");
      console.log("Post created:", res.data);
      window.location.reload();
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Something went wrong while creating the post.");
    }
  };

  return (

    <div className="flex flex-col items-center min-h-screen bg-black px-4 py-10">
  <div className="w-full max-w-3xl bg-zinc-900 p-8 rounded-2xl shadow-lg">
    
    <label htmlFor="image" className="block cursor-pointer text-white">
      <span className="text-lg font-semibold">Add Image +</span>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          className="mt-3 h-32 w-40 rounded-md border-2 border-indigo-300 object-cover"
        />
      )}
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />
    </label>

    <div className="mt-6">
      <p className="text-white font-semibold">Add Title</p>
      <input
        type="text"
        placeholder="Type here"
        className="w-full mt-2 px-4 py-2 text-white bg-zinc-800 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>


    <div className="mt-6">
      <p className="text-white font-semibold">Select Category</p>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mt-2 px-4 py-2 text-white bg-zinc-800 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={category}
      >
        <option value="">-- Select category --</option>
        {Categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

  
    <div className="mt-6">
      <p className="text-white font-semibold">Add Description</p>
      <div className="w-full h-52 mt-2 bg-white text-black rounded overflow-y-auto px-3 py-2">
        <div ref={editorRef} className="min-h-full" />
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        type="button"
        className="w-full sm:w-1/2 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        onClick={needhelp}
      >
        Need Help From AI?
      </button>
      <button
        type="button"
        className="w-full sm:w-1/2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        onClick={createhandle}
      >
        Post
      </button>
    </div>
  </div>
</div>

  );
}

export default Newpost;