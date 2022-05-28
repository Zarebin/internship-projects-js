
import React from 'react'
import './App.scss'
import Profile from './components/Profile'
import Age from './components/Age'
import Gender from './components/Gender'
import Back from './components/Back'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

  const getGender = (data)=>{
    console.log("gender is",data);
    return data;
  };
  let [gender,setGender]=useState(getGender());
  console.log("can you see me?")
  
    return(
      <BrowserRouter>
        <Routes path="/" element={<Profile/>}>
          <Route index element={<Profile/>} />
          <Route path="Age" element={<Age />} />
          <Route path="Gender" element={<Gender func={getGender}/>} />
          <Route path="Back" element={<Back />} />
        </Routes>
      </BrowserRouter>
     
    )
  
}
export default App























