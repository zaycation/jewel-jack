import React from "react";
import { FaGem } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const HomeNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav-bg">
        <Navbar.Brand href="/">
          <FaGem className="mr-3" />
          Jewel-Jack
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link active>
            <HashLink to="/" className="nav-item">
              Home
            </HashLink>
          </Nav.Link>

          <Nav.Link>
            <HashLink to="/app" className="nav-item">
              App
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink to="/donate" className="nav-item">
              Donate
            </HashLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default HomeNav;
