/* 
  authorName : Dhruv Oza 
  email : dhruv.oza@dal.ca
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button, Container } from "react-bootstrap";

const ViewApplicationStatus = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useState([]);

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

  const deleteApplication = (app) => {
    axios
      .post("http://localhost:8080/applicationdashboardRoute/deleteApplication", { app })
      .then((res) => {
        alert(" Deleted successfully");
        loadApplications();
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
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {application.map((app, index) => {
                    return (
                      <tr key={index}>
                        <td>{app.applicationID}</td>
                        <td>{app.fullName}</td>
                        <td>{convertDate(app.applieddate)}</td>
                        <td>{app.status}</td>
                        <td>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => deleteApplication(app)}
                            className="btn btn-secondary btn-block btn-round"
                          >
                            Delete
                          </Button>
                        </td>
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

export default ViewApplicationStatus;
