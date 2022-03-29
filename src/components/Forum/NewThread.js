import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const NewThread = () => {
  const navigate = useNavigate();
  const apiUrl = "http://localhost:8080/addthread";

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  //   const handleCancel = (e) => {
  //     e.preventDefault();
  //     // navigate("/");
  //     alert("Cancelled all values!!")
  //   };

  // const intialValues = {
  //   fullname: "",
  //   email: "",
  //   currentaddress: "",
  //   contactnumber: "",
  //   postalcode: "",
  //   noofpeople: "",
  //   date: "",
  // };
  // const [formValues, setFormValues] = useState(intialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [threadInfo, setThreadInfo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const newData = { ...threadInfo };
    newData[e.target.name] = e.target.value;
    setThreadInfo(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    axios
      .post(apiUrl, {
        title: threadInfo.title,
        description: threadInfo.description,
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        console.log("Submitted", res.data);
        window.alert("Thread Successfully Created");
        navigate(-1);
      });
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //     //   navigate("/ProfilePage");
  //     alert("All values submit successfully!! ");
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[a-zA-Z ]+$/i;
  //   const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   const regex3 = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
  //   const regex4 =
  //     /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z] [0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;
  //   const regex5 = /^[0-9\b]+$/;
  //   const regex6 = /^\d{2}[./-]\d{2}[./-]\d{4}$/;

  //   if (!values.fullname) {
  //     errors.fullname = "Full Name is required!";
  //   } else if (!regex.test(values.fullname)) {
  //     errors.fullname = "Accepting only letters!";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex2.test(values.email)) {
  //     errors.email = "Not valid Email !";
  //   }

  //   if (!values.currentaddress) {
  //     errors.currentaddress = "Current Address is required!";
  //   }

  //   if (!values.contactnumber) {
  //     errors.contactnumber = "Contact Number is required!";
  //   } else if (values.contactnumber.length < 10) {
  //     errors.contactnumber = "Contact Number must be equal to 10 Digits!";
  //   } else if (!regex3.test(values.contactnumber)) {
  //     errors.contactnumber = "Contact Number must Valid one!!";
  //   }

  //   if (!values.postalcode) {
  //     errors.postalcode = "Postal Code is required!";
  //   } else if (!regex4.test(values.postalcode)) {
  //     errors.postalcode = "Postal Code should be valid one!";
  //   }

  //   if (!values.noofpeople) {
  //     errors.noofpeople = "Number of People field is required!";
  //   } else if (!regex5.test(values.noofpeople)) {
  //     errors.noofpeople = "Number of People field should be valid one!";
  //   }

  //   if (!values.date) {
  //     errors.date = "Date field is required!";
  //   } else if (!regex6.test(values.date)) {
  //     errors.date = "Date field should be valid one!";
  //   }

  //   return errors;
  // };

  return (
    <div className="container table-div">
      <div className="card text-center">
        <div className="card-body">
          <h5 style={{ color: "#FFF", background: "#8bbabb", padding: "10px" }}>
            Thread Information
          </h5>
        </div>
        {/* <div className="card-body">
            <Button onClick={handleClick} className="btn mb-2 mb-md-0 btn-secondary btn-block btn-round">Go Back to Application Dashboard</Button>
        </div> */}
        <div className="card-body">
          <Form>
            {/* <div className="mb-3"> */}
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={threadInfo.title}
              onChange={handleChange}
            />
            {/* <p style={{ color: "red" }}>{formErrors.fullname}</p> */}
            {/* </div> */}
            <div className="mb-3">
              {/* <input
                type="text"
                name="date"
                placeholder="date"
                value={threadInfo.date}
                onChange={handleChange}
              /> */}
              {/* <p style={{ color: "red" }}>{formErrors.email}</p> */}
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                value={threadInfo.description}
                onChange={handleChange}
              />
              {/* <p style={{ color: "red" }}>{formErrors.currentaddress}</p> */}
            </div>
            <div className="mb-3">
              {/* <input
                type="text"
                name="status"
                placeholder="Status"
                value={threadInfo.status}
                onChange={handleChange}
              /> */}
              {/* <p style={{ color: "red" }}>{formErrors.contactnumber}</p> */}
              {/* <input
                type="text"
                name="user"
                placeholder="User"
                value={threadInfo.user}
                onChange={handleChange}
              /> */}
              {/* <p style={{ color: "red" }}>{formErrors.postalcode}</p> */}
            </div>
            {/* <div className="mb-3">
              <input
                type="text"
                name="noofpeople"
                placeholder="Number of People to move in"
                value={formValues.noofpeople}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.noofpeople}</p>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="date"
                placeholder="When do you want to move?"
                value={formValues.date}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.date}</p>
            </div> */}
            <div className="mb-3">
              <Button
                onClick={handleBack}
                className="btn mb-2 mb-md-0 btn-secondary btn-block btn-round"
              >
                Back
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={handleSubmit}
                className="btn mb-2 mb-md-0 btn-secondary btn-block btn-round"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewThread;
