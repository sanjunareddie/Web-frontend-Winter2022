import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserProfile() {
  return (
    <div className="outer">
      <Container>
        <Row>
          <Col  className="profile">User Profile Part</Col>
          <Col className="profile">Saved Searches Part</Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
