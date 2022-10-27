import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './component/Home.js';

import Profile from './component/Profile.js';

import Ragib from './Ragib.js';
function App() {
  return (
    <>


   <BrowserRouter>

    <Routes>

   <Route path="/" element={<Home/>} exact/>
   <Route path="/profile" element={<Profile/>} exact/>

    </Routes>


   </BrowserRouter>






      
   
    </>
  );
}

export default App;
