import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Routes, Route, HashRouter, BrowserRouter, Router, Link, Outlet ,NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import Header from '../header';
import Image1 from './Image1';


function Home() {
  return (
    <>
      
            <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{marginRight:20}} to="/">Home</Link>
            <Link style={{marginRight:20}} to="/register">Register</Link>
            <Link style={{marginRight:20}} to="/works">Works</Link>
            {/* <Link to="/" */}
          </nav>
        </Container>

      </Navbar>
     <Image1/>
     
    </>

  );
}

export default Home;