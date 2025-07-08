import React, { useState ,useContext}  from 'react';
import axios from 'axios'
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

function Signup() {
  const [name , setName]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const {setUser}= useContext(UserContext)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/auth/signup`, { name, email, password }, { headers: { 'Content-Type': 'application/json' } });
      navigate('/login');
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen text-indigo-100 bg-black'>
      <div className='w-full h-95 max-w-sm p-6 max-md:m-6 bg-white/10 border border-white/20 shadow-xl shadow-white/20 rounded-2xl backdrop-blur-sm'>
        <h1 className='text-3xl font-bold text-indigo-300 text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'><label className='py-2'>Username</label>
            <input
              type='string'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your Username'
              required
              className='mt-2 border px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <label className='py-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email ID'
              required
              className='mt-2 border px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <label className='py-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
              required
              className='mt-2 border px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <div className='my-4 flex flex-col items-center'>
              <button 
                type='submit'
                className='w-40 py-2 mt-2 border px-3 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
