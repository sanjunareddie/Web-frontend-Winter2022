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
          <NavLink to="/dashboard">
            <img
              src={Logo}
              width="60"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-text-color me-auto">
              <Nav.Item>
                <NavLink to="/sign-in" className="nav-text-color">
                  Sign-in
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink to="/dashboard" className="nav-text-color">
                  Dashboard
                </NavLink>
              </Nav.Item>
            </Nav>

            <Nav>
              <Nav.Item className="ms-auto">
                <NavLink to="/profile" className="nav-text-color">
                  Profile
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarAfterLogin;
