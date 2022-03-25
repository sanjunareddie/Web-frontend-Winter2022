import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../Resources/housify-logo.png";

function SignIn() {
  return (
    <Form>
      <div className="outer">
        <div className="inner">
          <div className="button-center">
            <img src={Logo} height={100} width={100} alt="Housify Logo" />
          </div>
          <h3>Sign In</h3>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control inside-textbox"
              placeholder="Enter email"
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control inside-textbox"
              placeholder="Enter password"
            />
          </div>
          <br />
          <div className="button-center">
            <Button variant="primary">Sign In</Button>
          </div>
          <div>
            <hr className="simple-line" />
          </div>
          <div className="button-center forgot-password text-right">
            <p className="forgot-password text-right">
              Not registered ? <NavLink to="/sign-up">Register here</NavLink>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SignIn;
