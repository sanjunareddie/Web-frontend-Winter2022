import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../Resources/housify-logo-white.png";

function NavBarAfterLogin() {
  return (
    <>
      <Navbar fixed="top" className="navbar-color navbar navbar-dark">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink to="/dashboard">
              <img
                src={Logo}
                width="60"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-text-color me-auto">
              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/sign-in" className="nav-text-color">
                    Sign-in
                  </NavLink>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link>
                  <NavLink to="/dashboard" className="nav-text-color">
                    Dashboard
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav>
              <Nav.Item className="ms-auto">
                <Nav.Link>
                  <NavLink to="/profile" className="nav-text-color">
                    Profile
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarAfterLogin;
