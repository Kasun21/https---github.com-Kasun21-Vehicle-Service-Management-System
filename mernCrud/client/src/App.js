import './App.css';
import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Resgistration';
import Add_customer from './components/Add_customer';
import Inquiries from './components/Inquiries';
import Fault from './components/Fault';
import Report from './components/Report';

function App(){
    return ( 
      <BrowserRouter> 
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<CreatePost/>} />
        <Route path="/edit/:id" element={<EditPost/>} />
         <Route path="/register" element={<Registration/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/add_customer" element={<Add_customer/>} />
         <Route path="/fault" element={<Fault/>} />
         <Route path="/inquiries" element={<Inquiries/>}/>
         <Route path="/report" element={<Report/>} />
      </Routes> 
      </BrowserRouter>
    );
  }


export default App;