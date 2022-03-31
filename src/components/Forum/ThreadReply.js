import React, { useEffect } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../UI/Card";

const ThreadReply = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [thread, setThread] = React.useState({
    title: "",
    description: "",
    replies: [
      {
        _id: "",
        __v: "",
        replyDate: "",
        replyDesc: "",
        replyStatus: true,
        threadId: "",
        userName: "",
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const r = document.getElementById("reply").value.trim();
    if (r != "") {
      axios
        .post("http://localhost:8080/thread/addThreadReply", {
          replyDesc: r,
          threadId: id,
          email: localStorage.getItem("email"),
        })
        .then((res) => {
          window.alert("Reply Successfully Added");
          getThread();
        });
    } else {
      alert("Please enter a reply");
    }
    console.log("Submitted");
  };

  const getThread = () => {
    fetch(`http://localhost:8080/thread/getThreadData?threadId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setThread(data);
        console.log(data);
      })
      .catch((err) => {
        navigate("/forum");
      });
  };
  useEffect(() => {
    getThread();
  }, []);
  return (
    <>
      <Card>
        <div className="card-body">
          <h5 className="card-title">{thread.title}</h5>
          <p className="card-text">{thread.description}</p>
          <hr />
          <ul>
            {thread.replies.map((r, i) => {
              return (
                <li key={i}>
                  <p>{r.replyDesc}</p>
                  <p>{r.userName}</p>
                  <p>{r.replyDate}</p>
                </li>
              );
            })}
          </ul>
          <Form>
            <Card>
              <div className="card-body">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Reply</Form.Label> */}
                  <Form.Control
                    id="reply"
                    as="textarea"
                    rows={3}
                    placeholder="Write your reply here"
                  />
                </Form.Group>
                <Button onClick={handleSubmit}>Reply</Button>
              </div>
            </Card>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default ThreadReply;
