import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import 'quill/dist/quill.snow.css';
import Allpost from './components/allpost';
import Signup from './inside_components/Login_inside/Signup';
 import axios from 'axios';
import { UserProvider } from './UserContext';
import Newpost from './components/login/Newpost';
import Yourpost from './components/login/Yourpost';
import YourActivity from './components/login/YourActivity';
import Loginin from './inside_components/Login_inside/Loginin';
import InsidePostdetails from './components/login/InsidePostdetails';
import ContestTable from './inside_components/upcoming_contests/ContestTable';
import Postsdetails from './components/Postsdetails';
function App() {
  return (
    <UserProvider>
    <div className='bg-black'>
    


      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Loginin/>}/>
           <Route path="/Signup" element={<Signup/>}/> 
  <Route path="/login/Newpost" element={<Newpost />} />   
  <Route path="/login/Yourpost" element={<Yourpost />} /> 
  <Route path ="/login/youractivity" element ={<YourActivity/>}/>
<Route path="/contestss" element={<ContestTable/>}/>
<Route path="/postdetails" element={<Postsdetails/>}/>
<Route path="/mainpage"  element={<Allpost />} />
<Route path="/getpost/:id" element={<InsidePostdetails />} />
        <Route path="/getallpost" element={<Allpost />} />
        <Route path="/getallpost/:id" element={<Postsdetails />} />
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;

