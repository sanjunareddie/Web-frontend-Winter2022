import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const RentalForm = () => {
  const navigate = useNavigate();

  const intialValues = {
    fullName: "",
    email: "",
    currentaddress: "",
    contactnumber: "",
    postalcode: "",
    noofpeople: "",
    date: "",
  };
  const [formValues, setFormValues] = useState(intialValues);

  const {
    fullName,
    email,
    currentaddress,
    contactnumber,
    postalcode,
    noofpeople,
    date,
  } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const regex = /^[a-zA-Z ]+$/i;
    const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex3 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex4 =
      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i;
    const regex5 = /^[0-9\b]+$/;
    const regex6 = /^\d{2}[./-]\d{2}[./-]\d{4}$/;

    if (!fullName) {
      return alert("Full Name is required!");
    } else if (!regex.test(fullName)) {
      return alert("Accepting only letters!");
    }

    if (!email) {
      return alert("Email is required!");
    } else if (!regex2.test(email)) {
      return alert("Not valid Email !");
    }

    if (!currentaddress) {
      return alert("Current Address is required!");
    }

    if (!contactnumber) {
      return alert("Contact Number is required!");
    } else if (contactnumber.length < 10) {
      return alert("Contact Number must be equal to 10 Digits!");
    } else if (!regex3.test(contactnumber)) {
      return alert("Contact Number must Valid one!!");
    }

    if (!postalcode) {
      return alert("Postal Code is required!");
    } 
    // else if (!regex4.test(postalcode)) {
    //   return alert("Postal Code must Valid one!!");
    // }

    if (!noofpeople) {
      return alert("Number of People field is required!");
    } else if (!regex5.test(noofpeople)) {
      return alert("Number of People field should be valid one!");
    }

    if (!date) {
      return alert("Date field is required!");
    } else if (!regex6.test(date)) {
      return alert("Date field should be valid one!");
    }

    axios
      .post("http://localhost:2000/applicationdashboardRoute/addapplications", { formValues })
      .then((res) => {
        console.log(res.data.msg);
        alert("All values submit successfully!! ");

        //navigate("/ProfileListing");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Values entered wrong!!");
      });
  };

  return (
    <>
      <div
        style={{
          background: "#4267b2",
          height: "50px",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>Nav bar</p>
      </div>
      <h4
        style={{
          color: "#4267b2",
          padding: "10px",
          margin: "25px 10px -20px 10px",
        }}
      >
        Rental Application Form
      </h4>

      <Container fluid style={{ padding: "20px" }}>
        <Form>
          <Row>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/ios/20/4267b2/name--v1.png" />
                &nbsp;Full Name
              </Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/20/4267b2/external-email-communication-nawicon-detailed-outline-nawicon-2.png" />
                &nbsp;Email address
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/material-outlined/20/4267b2/address.png" />
                &nbsp;Address
              </Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="currentaddress"
                value={currentaddress}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/material-outlined/20/4267b2/postcode.png" />
                &nbsp;Postal Code
              </Form.Label>
              <Form.Control
                type="text"
                name="postalcode"
                value={postalcode}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/ios/20/4267b2/apple-phone.png" />
                &nbsp;Contact Number
              </Form.Label>
              <Form.Control
                type="text"
                name="contactnumber"
                value={contactnumber}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/external-victoruler-solid-victoruler/20/4267b2/external-person-logistics-victoruler-solid-victoruler.png" />
                &nbsp;Number of People to move in
              </Form.Label>
              <Form.Control
                type="text"
                name="noofpeople"
                value={noofpeople}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
            <Col>
              <br></br>
              <Form.Label>
                <img src="https://img.icons8.com/material-outlined/20/4267b2/planner.png" />
                &nbsp;When do you want to move?
              </Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={date}
                onChange={handleChange}
                autoComplete="none"
              />
            </Col>
          </Row>

          <Row>
            <Col align="center">
              <br></br>
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                className="btn btn-secondary btn-block btn-round"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default RentalForm;
