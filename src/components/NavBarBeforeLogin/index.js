import React from "react";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../Resources/housify-logo-white.png";

function NavBarBeforeLogin() {
  return (
    <>
      <Navbar className="navbar-color navbar navbar-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="70"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-text-color me-auto">
              <Nav.Link href="#home" className="nav-text-color">
                Sign-in
              </Nav.Link>
              <Nav.Link href="#link" className="nav-text-color">
                Sign-up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarBeforeLogin;
