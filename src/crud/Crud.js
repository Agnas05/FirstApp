import Forms from './Forms';
import { ContextProvider } from './contextfile';
import Datable from './Datable';
import React from "react";
import Nav from 'react-bootstrap/Nav';
// import Datable from './Datable';
import { Button, Checkbox, Form, Input } from 'antd';

function Crud() {
  return (
    <>
      <img style={{ position: 'absolute', zIndex: -1, width: 1280 }} src={require("../images/wse.jpg")} />
      {/* <Nav className="me-auto" style={{position: "absolute", top: 12, marginLeft: 1140}}>
            <Button type="primary" >
        <Nav.Link style={{padding:0}}href="/works">Back</Nav.Link>
            </Button>
        </Nav> */}
      <div className="App">
        <ContextProvider>
          <Forms />
          <Datable />
        </ContextProvider>
      </div>
    </>
  );
}

export default Crud;