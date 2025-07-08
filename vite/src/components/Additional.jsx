
import { NavLink } from 'react-router-dom';
import React from 'react';

function Additional() {
  return (
    <div className="bg-blue-950 w-64 h-170 border border-white text-white p-6 rounded-2xl shadow-2xl flex flex-col ">
      <p className="text-2xl font-bold mb-6 tracking-wide">👤 Your Profile</p>

      <div className="flex flex-col gap-4 mb-6">
        <NavLink
          to="/contestss"
          className="text-xl hover:text-purple-400 transition duration-200"
        >
          Upcoming Contests
        </NavLink>
        <NavLink
          to="/login/Newpost"
          className="text-xl hover:text-purple-400 transition duration-200"
        >
          💬 Comments
        </NavLink>
        <NavLink
          to="/login/Newpost"
          className="text-xl hover:text-purple-400 transition duration-200"
        >
          ➕ Add Post
        </NavLink>
      </div>

      <div className="flex flex-col gap-3">
        <button className="w-full bg-purple-700 py-2 rounded-lg hover:bg-purple-800 transition duration-200 font-semibold">
          View Profile
        </button>
        <button className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 transition duration-200 font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Additional;
