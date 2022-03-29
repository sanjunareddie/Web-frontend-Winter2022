import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (token == null) {
    navigate("/sign-in");
  }

  return (
    <h3>
      Hey there :)
      <br />
      <br />
      This is Dashboard
    </h3>
  );
}

export default Dashboard;
