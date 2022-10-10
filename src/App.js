import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Home from './Navbar/Home';
import Register from './Navbar/Register';
import Login from './login/Login';
import { Routes, Route, HashRouter, BrowserRouter, Router, Link, Outlet, NavLink } from "react-router-dom";
import ErrorPg from './Navbar/ErrorPg';
import Weather from './Works/Weather';
import Chart from './Works/Chart';
import Todomain from './Works/Todomain';
import Crud from './crud/Crud';
import FinalData from './login/FinalData';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Works from './Navbar/Works';
import { Pagination } from 'antd';
import Paginate from './Pagination/Paginate';
import Calculator from './Calculator/Calculator';


function App() {
  return (
    <>



      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/login' element={<Login />} />
          <Route path='/register/login/data' element={<FinalData />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/crud' element={<Crud />} />
          <Route path="/works/weather" element={<Weather />} />
          <Route path="/works/todo" element={<Todomain />} />
          <Route path="/works/chart" element={<Chart />} />
          <Route path="/works/paginate" element={<Paginate />} />
          <Route path="/works/calculator" element={<Calculator />} />


          <Route path='*' element={<ErrorPg />} />
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
