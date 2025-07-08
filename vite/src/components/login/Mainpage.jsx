import React from 'react'

function Mainpage({post}) {
  return (
    <>
     <div className='text-amber-100 w-full flex mt-8 space-x-4  '>
     
               <div className="w-full flex flex-col md:flex-row mt-8 space-x-0 md:space-x-6 text-amber-100 px-4">

  <div className="w-35 flex h-35 mx-10 my-10 ">
    <img
      src={post.image}
      alt="Technology"
      className="rounded-lg shadow-md w-full h-auto object-cover"
    />
  </div>


  <div className="md:w-2/3 w-full flex flex-col space-y-4">
    <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
    <h2 className="text-xl md:text-xl font-bold">{post.category}</h2>
    <div className="flex justify-between items-center text-sm font-semibold text-indigo-200">
      <p>by:{post.postby}</p>
      <div className="flex space-x-2">
        <p>16/4/4/44</p>
        <p>12:12:12</p>
      </div>
    </div>

    <p className="text-sm md:text-lg leading-relaxed text-indigo-100">
     {post.description.slice(0, 500)}...<button className="text-blue-400 hover:underline">Read more</button>
    </p>
  </div>
</div>

           </div>
           
         
   

    </>
  )
}

export default Mainpage