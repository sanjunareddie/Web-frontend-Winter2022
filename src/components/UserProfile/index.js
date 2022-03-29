import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import ProfileImage from "../../Resources/user-avatar02.png";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(async () => {
    try {
      const url = "http://localhost:8080/getOneUserDetails";
      const res = await axios.post(url, {
        email: localStorage.getItem("email"),
      });
      console.log(res);
      if (res.status === 200) {
        setFirstName(res.data.users.firstName);
        setLastName(res.data.users.lastName);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/sign-in");
  };

  return (
    <Container>
      <div className="outer">
        <div className="inner">
          <Row>
            <Col>
              <div className="button-center">
                <img
                  src={ProfileImage}
                  height={100}
                  width={100}
                  alt="User Profile Image"
                />
              </div>
              <br />
              <div>
                <h3 className="profile-name-font">
                  {firstName} {lastName}
                </h3>
              </div>
              <br />
              <div className="button-center">
                <h6 className="profile-name-font tag-line-font">
                  Way to your dream house
                </h6>
              </div>
              <br />
              <div className="button-center form-group">
                <input
                  type="text"
                  className="form-control inside-textbox form-field-color"
                  placeholder="Add Contact Number"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inside-textbox form-field-color"
                  placeholder="Your Current City"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inside-textbox form-field-color"
                  placeholder="Add Preffered City"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inside-textbox form-field-color"
                  placeholder="Canada"
                />
              </div>
              <br />
              <br />
              <Row>
                <Col>
                  <div className="button-center">
                    <LinkContainer to="/saved-searches">
                      <Button variant="primary">Saved Searches</Button>
                    </LinkContainer>
                  </div>
                </Col>
                <Col>
                  <div className="button-center">
                    <Button variant="success">Save Changes</Button>
                  </div>
                </Col>
              </Row>
              <br />
              <div>
                <hr className="simple-line" />
              </div>
              <br />
              <Row>
                <Col>
                  <div className="button-center">
                    <Button variant="danger" onClick={handleSignOut}>
                      Sign out
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default UserProfile;
