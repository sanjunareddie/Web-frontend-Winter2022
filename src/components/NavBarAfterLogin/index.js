import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../Resources/housify-logo-white.png";

function NavBarAfterLogin() {
  return (
    <Navbar fixed="top" className="navbar-color navbar navbar-dark" expand="lg">
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
            <Nav.Item className="p-2">
              <NavLink to="/sign-in" className="nav-text-color">
                Sign-in
              </NavLink>
            </Nav.Item>

            <Nav.Item className="p-2">
              <NavLink to="/dashboard" className="nav-text-color">
                Dashboard
              </NavLink>
            </Nav.Item>

            <Nav.Item className="p-2">
              <NavLink to="/RentalForm" className="nav-text-color">
                Rental Form
              </NavLink>
            </Nav.Item>

            <Nav.Item className="p-2">
              <NavLink to="/UpdateApplicationStatus" className="nav-text-color">
                Update Application Status
              </NavLink>
            </Nav.Item>

            <Nav.Item className="p-2">
              <NavLink to="/ViewApplicationStatus" className="nav-text-color">
                View Application Status
              </NavLink>
            </Nav.Item>
          </Nav>

          <Nav.Item className="ms-auto p-2">
            <NavLink to="/profile" className="nav-text-color">
              Profile
            </NavLink>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAfterLogin;
