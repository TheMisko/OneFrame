import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar fixed="top" className="nav-color">
      <Navbar.Brand>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>OneFrame</h1>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
