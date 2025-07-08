import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
const Navbar = () => {
  const navigate = useNavigate();
const {user} = useContext(UserContext);
const {setUser} = useContext(UserContext);
  return (
   
    <div className='bg-neutral-950 text-purple-300 px-4 py-4 sm:px-8 xl:px-16 flex flex-wrap justify-between items-center'>

  <img src={logo} alt="Logo" className='w-20 sm:w-24 h-10 sm:h-12' />

  <h1 className='text-3xl sm:text-4xl lg:text-6xl text-indigo-400 font-bold text-center flex-1'>
    Code Daily
  </h1>


  <button
    onClick={() => navigate('/login')}
    className='mt-3 sm:mt-0 text-lg sm:text-2xl px-4 py-1 border-2 border-cyan-900 rounded-2xl hover:bg-cyan-900 hover:text-white transition-all duration-300'
  >
    Login
  </button>
</div>

  );
};

export default Navbar;

