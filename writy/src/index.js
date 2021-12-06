import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/style.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Hero from './Components/Hero';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import Error from './Components/Error';

ReactDOM.render(

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Hero" element={<Hero />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="*" element={<Error/>}></Route>


    </Routes>

  </BrowserRouter>,

  document.getElementById('root')
);


