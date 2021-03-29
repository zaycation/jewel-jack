import React from "react";
import Fade from "react-reveal/Fade";
import { FaGem } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const HomeNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav-bg">
        <Fade bottom>
          <Navbar.Brand href="/">
            <FaGem className="mr-3" />
            Jewel-Jack
          </Navbar.Brand>
        </Fade>

        <Nav className="ml-auto">
          <Fade bottom>
            <Nav.Link active>
              <HashLink to="/" className="nav-item">
                Home
              </HashLink>
            </Nav.Link>
          </Fade>

          <Fade bottom>
            <Nav.Link>
              <HashLink to="/app" className="nav-item">
                App
              </HashLink>
            </Nav.Link>
          </Fade>

          <Fade bottom>
            <Nav.Link>
              <HashLink to="/donate" className="nav-item">
                Donate
              </HashLink>
            </Nav.Link>
          </Fade>

          <Fade bottom>
            <Nav.Link href="https://github.com/zaycation/jewel-jack">
              View Src
            </Nav.Link>
          </Fade>
        </Nav>
      </Navbar>
    </>
  );
};

export default HomeNav;
