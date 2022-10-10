import "./Paginate.css";
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import Nav from 'react-bootstrap/Nav';
import { Button } from 'antd';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function Paginate() {
  const [users, setUsers] = useState(JsonData.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>Name:{user.firstName}</h3>
          {/* <h3>{user.lastName}</h3> */}
          <h3>Email:{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{marginRight:20}} to="/">Home</Link>
            </nav>
            </Container>
            </Navbar>
      {/* <Nav className="me-auto" style={{position: "absolute", top: 10,marginLeft:1078}}>
        <Button type="primary" >
          <Nav.Link style={{ padding: 0 }} href="/works">Back</Nav.Link>
        </Button>
      </Nav> */}
      <div className="App5">
        {displayUsers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />

      </div>
    </>
  );
}

export default Paginate;