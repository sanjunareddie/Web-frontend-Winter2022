import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../Resources/housify-logo.png";

function SignUp() {
  return (
    <Form>
      <div className="button-center">
        <img src={Logo} height={100} width={100} alt="Housify Logo" />
      </div>
      <h3>Register</h3>
      <br />
      <div className="form-group">
        <input
          type="text"
          className="form-control inside-textbox"
          placeholder="First name"
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          className="form-control inside-textbox"
          placeholder="Last name"
        />
      </div>
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
        <Button variant="primary">Register</Button>
      </div>
      <div>
        <hr className="simple-line" />
      </div>
      <div className="button-center forgot-password text-right">
        <p className="forgot-password text-right">
          Already registered ? <a href="#">log in</a>
        </p>
      </div>
    </Form>
  );
}

export default SignUp;
