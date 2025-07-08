import React, { useContext, useEffect, useState  } from 'react';
import Navv from '../components/login/Navv';
import Mainpage from '../components/login/Mainpage';
import axios from 'axios';
import Postdetails from './login/InsidePostdetails';
import { useLocation ,Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Allpost() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [searchres, setSearchres] = useState(false);
const {user} =useContext(UserContext);
console.log(user);
  const fetchposts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/getallpost${search}`, { headers: { 'Content-Type': 'application/json' } });
      setPosts(res.data);
      setSearchres(res.data.length === 0);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setSearchres(true);
    }
  };

  useEffect(() => {
    fetchposts();
  }, [search]);

  return (
    <>
      <Navv />
      <div className='mx-8 md:px-[200px] min-h-[100vh]'>
        {searchres
          ? <h1 className='text-indigo-300 text-2xl align-middle text-center'>No Results Found..Add Something</h1>
          : posts.map((post) => (
              <Link
                to={`/getpost/${post._id}`}
                key={post._id}
                className="text-white"
                style={{ textDecoration: 'none' }}
              >
               <Mainpage post={post} />
               </Link>
            ))
        }
      </div>
    </>
  );
}
