import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate, NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const data = JSON.parse(localStorage.getItem('home'));
const index = JSON.parse(sessionStorage.getItem('setIndex'));
console.log("jhjhj", index)

// const indexof=data[index];

// console.log('data',data)
// console.log(index)

function FinalData() {
  const navigate = useNavigate();
  const user = JSON.stringify(sessionStorage.getItem('setData'));
  console.warn(user);
  function logout() {
    sessionStorage.clear();
    navigate('/register/login');
  }
  return (
    <>
      <img style={{ position: 'absolute', zIndex: -1, width: 1263 }} src={require("../images/register.jpg")} />
      <Nav className="me-auto">
        <Button type="primary" style={{ marginLeft: 1000, marginTop: 20, position: "absolute", top: -8 }} htmlType="logout">
          <Link to="/register/login" onClick={logout}>Logout</Link>

        </Button>
      </Nav>
      <div>
        <h3 style={{ marginLeft: 430, marginTop: 40, fontWeight: 700 }}>YOUR DETAILS </h3>

        {/* <p style={{marginTop:20,marginLeft:100}}><b>Your email-id:</b>{indexof.email}</p>  */}
        {/* <p><b>Password:</b>{indexof.password}</p> */}
      </div>
    </>
  );
}

export default FinalData;