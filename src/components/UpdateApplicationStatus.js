/* 
  authorName : Dhruv Oza 
  email : dhruv.oza@dal.ca
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import axios from "axios";

const UpdateApplicationStatus = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useState([]);

  const handleClick = (app) => {
    navigate("/ApplicantDetails", { state: { app } });
  };

  const convertDate = (date) => {
    return date.substr(0, 10);
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = (e) => {
    axios
      .get("http://localhost:8080/applicationdashboardRoute/applications")
      .then((res) => {
        if (res.data.success) {
          setApplication(res.data.applications);
        }
      })
      .catch((error) => {
        alert("Values entered wrong!!");
      });
  };

  return (
    <>
      <h4
        style={{
          color: "#4267b2",
          padding: "10px",
          margin: "25px 10px -20px 10px",
        }}
      >
        Application Status
      </h4>

      <Container fluid style={{ padding: "20px" }}>
        {application.length !== 0 ? (
          <>
            <div style={{ margin: "20px" }}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Application Number</th>
                    <th>Applicant Name</th>
                    <th>Applied Date</th>
                    <th>Location</th>
                    <th>Rent</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {application.map((app, index) => {
                    return (
                      <tr key={index} onClick={() => handleClick(app)}>
                        <td>{app.applicationID}</td>
                        <td>{app.fullName}</td>
                        <td>{convertDate(app.applieddate)}</td>
                        <td>location</td>
                        <td>rent</td>
                        <td>{app.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <center>
            <h3 color="#000">No application found</h3>
          </center>
        )}
      </Container>
    </>
  );
};

export default UpdateApplicationStatus;
