import React, { Component } from 'react';

export class MiddleSec extends Component {
  render() {
    return (
  //     <div className='my-6 text-center items-center text-purple-300 bg-neutral-950'>
  //       <h1 className='text-5xl sm:text-6xl font-semibold !important'>Where Curiosity Meets Code</h1>
       
  //       <p className='max-w-2xl text-purple-100 py-10 text-2xl  flex text-center px-7 mx-120'>  ""Where clean code meets clean design — explore daily problems, development guides, and tech tutorials tailored for developers who never stop building."</p>
  //       <div className='flex justify-center '>
  //       <div className='flex gap-1 items-center justify-center'>
  // <form ><input className='text-blue-100 border-2 w-150 mx-4 rounded-2xl h-12 ' type='text' placeholder='     Search For Content'/> </form>
  //    <button className='px-4 border-2 rounded-2xl h-12'> Search</button>
  //     </div>
  //     </div>
    
  //     </div>
  <div className='my-6 px-4 sm:px-8 text-center items-center text-purple-300 bg-neutral-950'>
  {/* Heading */}
  <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold'>
    Where Curiosity Meets Code
  </h1>

  
  <p className='max-w-3xl mx-auto text-purple-100 py-6 sm:py-10 text-lg sm:text-2xl px-2'>
    "Where clean code meets clean design — explore daily problems, development guides, and tech tutorials tailored for developers who never stop building."
  </p>

 
  <div className='flex justify-center'>
    <form className='w-full max-w-xl px-2'>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-2 items-center justify-center'>
        <input
          type='text'
          placeholder='Search For Content'
          className='text-blue-100 w-full sm:w-auto flex-1 border-2 border-purple-300 px-4 py-2 rounded-2xl bg-transparent placeholder:text-blue-300'
        />
        <button
          type='submit'
          className='px-6 py-2 h-12 text-white bg-indigo-500 hover:bg-purple-500 rounded-2xl transition-all duration-300'
        >
          Search
        </button>
      </div>
    </form>
  </div>
</div>

    );
  }
}

export default MiddleSec;
