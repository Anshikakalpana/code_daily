import React from 'react';
import Navv from '../components/login/Navv';
import InsidePostdetails from './login/InsidePostdetails';

function Postsdetails() {
  return (
    <>
      <Navv />
      <div className='mx-8'>
        <InsidePostdetails />
      </div>
    </>
  );
}

export default Postsdetails;