import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./Forum.module.css";
import axios from "axios";

const Forum = () => {
  let navigate = useNavigate();
  const apiUrl = "http://localhost:8080/getthread";

  const [threadInfo, setThreadInfo] = useState([]);

  const onClickHandler = () => {
    console.log("clicked");
    navigate("/thread");
    // return <NewThread />;
  };

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setThreadInfo(res.data);
    });
  }, []);

  return (
    <>
      <div className="container my-3">
        <div className={classes.button}>
          <Button className="btn btn-lg btn-primary" onClick={onClickHandler}>
            New Thread
          </Button>
        </div>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th scope="col" className="topic-col">
                Topics
              </th>
              <th scope="col" className="topic-col">
                Created On
              </th>
            </tr>
          </thead>

          {threadInfo.map((thread, index) => {
            const newDate = new Date(thread.date);

            return (
              <tbody>
                <tr>
                  <td>{thread.title}</td>
                  <td>
                    <div>by {thread.name}</div>
                    <div>{newDate.toDateString()}</div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
};

export default Forum;
