import Forms from './Forms';
import { ContextProvider } from './contextfile';
import Datable from './Datable';
import React from "react";
import Nav from 'react-bootstrap/Nav';
// import Datable from './Datable';
import { Button, Checkbox, Form, Input } from 'antd';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, NavLink, Link } from 'react-router-dom';

function Crud() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{marginRight:20}} to="/">Home</Link>
            </nav>
            </Container>
            </Navbar>
      {/* <img style={{ position: 'absolute', zIndex: -1, width: 1350 }} src={require("../images/wse.jpg")} /> */}
      {/* <Nav className="me-auto" style={{position: "absolute", top: 12, marginLeft: 1140}}>
            <Button type="primary" >
        <Nav.Link style={{padding:0}}href="/works">Back</Nav.Link>
            </Button>
        </Nav> */}
      <div className="App"  style={{background:"#254497",height:1000}}>
        <ContextProvider>
          <Forms />
          <Datable />
        </ContextProvider>
      </div>
    </>
  );
}

export default Crud;