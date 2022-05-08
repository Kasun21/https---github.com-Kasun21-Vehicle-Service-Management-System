import React, {Component} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import MainServices from './components/MainServices';


function App(){
  return ( 
    <BrowserRouter> 
     <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/add" element={<CreatePost/>} />
      <Route path="/edit/:id" element={<EditPost/>} />
      <Route path="/post/:id" element={<PostDetails/>} />
      <Route path="/services" element={<MainServices/>} />
      
    </Routes> 
    </BrowserRouter>
   
  );
}

export default App;