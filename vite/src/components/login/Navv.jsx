

import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Profile from '../Profile';
import Additional from '../Additional';

const Navv = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [additional, setAdditional] = useState(false);

  const toggleProfile = () => setProfile(prev => !prev);
  const toggleAdditional = () => setAdditional(prev => !prev);

  return (
    <div className='bg-black relative w-full'>
      <div className='px-4 py-3 flex flex-wrap items-center justify-between text-purple-300'>

        <div className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='w-20 h-10 sm:w-24 sm:h-12' />
          <NavLink
            to='/login/Newpost'
            className='hidden sm:block text-xl sm:text-2xl px-4 sm:px-10 hover:text-purple-400'
          >
            Add Post
          </NavLink>
        </div>

  
        <div className='w-full mt-3 sm:mt-0 sm:w-auto flex-1 flex justify-center'>
          <form
            className='w-full max-w-md px-2 sm:px-0'
            onSubmit={e => {
              e.preventDefault();
              navigate(`?search=${prompt}`);
            }}
          >
            <div className='flex items-center'>
              <input
                className='text-blue-100 w-full border-2 px-4 py-2 rounded-xl bg-transparent placeholder:text-blue-300'
                type='text'
                placeholder='Search For Content'
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
              />
              <button
                type="submit"
                className='ml-2 py-2 px-4 bg-purple-500 rounded-xl hover:bg-purple-800 text-black'
              >
                Search
              </button>
            </div>
          </form>
        </div>

      
        <div className='flex items-center gap-3 mt-3 sm:mt-0'>

       
          <div className='relative'>
            <div
              className='flex cursor-pointer items-center gap-2 text-sm sm:text-lg'
              onClick={toggleAdditional}
            >
              <img
                src='https://img.icons8.com/?size=100&id=WFiDv0x0vYug&format=png&color=000000'
                alt='Additional'
                className='h-8 sm:h-10'
              />
              <p className='hidden sm:block py-1'>Additional</p>
            </div>
            {additional && (
              <div className='absolute right-0 mt-2 z-50'>
                <Additional />
              </div>
            )}
          </div>

  
          <div className='relative'>
            <div
              className='flex cursor-pointer items-center gap-2 text-sm sm:text-lg'
              onClick={toggleProfile}
            >
              <img
                src='https://img.icons8.com/?size=100&id=WFiDv0x0vYug&format=png&color=000000'
                alt='Profile'
                className='h-8 sm:h-10'
              />
              <p className='hidden sm:block py-1'>Home</p>
            </div>
            {profile && (
              <div className='absolute right-0 mt-2 z-50'>
                <Profile />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navv;
