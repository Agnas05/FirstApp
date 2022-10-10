import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate, NavLink, Link } from 'react-router-dom';


function Works() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{ marginRight: 20 }} to="/">Home</Link>
            <Link style={{ marginRight: 20 }} to="/register">Register</Link>
            <Link style={{ marginRight: 20 }} to="/works">Works</Link>
            {/* <Link to="/" */}
          </nav>
        </Container>

      </Navbar>
      <img style={{ position: 'absolute', width: 1263, zIndex: -1 }} src={require("../images/purple.png")} />
      <Nav className="me-auto">

        <b><NavLink style={{ marginTop: 20, marginLeft: 600, position: "absolute", color: "white", top: -10 }} to="/works/crud">Crud</NavLink></b>
        <b><NavLink style={{ marginLeft: 657, marginTop: 20, position: "absolute", color: "white", top: -10 }} to="/works/weather">Weather</NavLink></b>
        <b><NavLink style={{ marginLeft: 746, marginTop: 20, position: "absolute", color: "white", top: -10 }} to="/works/todo">Todo</NavLink> </b>
        <b><NavLink style={{ marginLeft: 820, marginTop: 20, position: "absolute", color: "white", top: -10 }} to="/works/chart">Chart</NavLink> </b>
        <b><NavLink style={{ marginLeft: 900, marginTop: 20, position: "absolute", color: "white", top: -10 }} to="/works/paginate">Pagination</NavLink> </b>
        <b><NavLink style={{ marginLeft: 1010, marginTop: 20, position: "absolute", color: "white", top: -10 }} to="/works/calculator">Calculator</NavLink></b>
      </Nav>

    </>

  );
}

export default Works;
