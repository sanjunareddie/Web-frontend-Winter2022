import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../Resources/housify-logo.png";

function SignIn(props) {
  const navigate = useNavigate();

  const emailRegex = /^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\.[(0-9a-zA-Z._)]+$/;
  const passwordRegex = /^.{8,}$/;

  const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(data.email)) {
      setErrorMessage("Please provide valid email address");
    } else if (!passwordRegex.test(data.password)) {
      setErrorMessage(
        "Instructions for password: Minimum 8 Characters + One special Character + One Capital"
      );
    } else {
      setErrorMessage("");
      navigate("/dashboard");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
              className="form-control inside-textbox form-field-color"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control inside-textbox form-field-color"
              placeholder="Enter password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <br />
          {errorMessage.length > 0 ? (
            <p className="button-center" style={{ color: "red" }}>
              {errorMessage}
            </p>
          ) : null}
          <div className="button-center">
            <Button variant="primary" type="submit">
              Sign In
            </Button>
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
