import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;
import { UserContext } from '../../UserContext';
const Loginin = () => {
  const [name , setName] =useState(' ')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser}= useContext(UserContext)
    const navigate = useNavigate();
 
   const loginfunc=async(e)=>{
     e.preventDefault();
    try{
      const res = await axios.post(`${apiUrl}/auth/login`, { name, email, password }, { headers: { 'Content-Type': 'application/json' }  ,withCredentials: true });
       
 setUser (res.data.user)
      console.log(res.data.user)
      navigate('/mainpage')
   
    }catch(err){

       
    }
   }


  return (
    <div className='flex items-center justify-center h-screen text-indigo-100 bg-black'>
      <div className='w-full h-115 max-w-sm p-6 max-md:m-6 bg-white/10 border border-white/20 shadow-xl shadow-white/20 rounded-2xl backdrop-blur-sm'>
        <h1 className='text-3xl font-bold text-indigo-300 text-center'>Login</h1>
        <form onSubmit={loginfunc}>
          <div className='flex flex-col'>
              <label className='py-2'>Username</label>
            <input
              type='string'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your Username'
              required='true'
              className='mt-2 border px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <label className='py-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email ID'
              required='true'
              className='mt-2 border px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <label className='py-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
              required='true'
              className='mt-2 border px-3 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <div className='my-4 flex flex-col items-center'>
              <button 
                type='submit'
                className='w-40 py-2 mt-2 border px-3 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Submit
              </button>
             <div className='flex'>
              <p>Dont have an account ?</p>
              <button onClick={()=>navigate('/signup')}>Sign Up</button>
             </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginin;
