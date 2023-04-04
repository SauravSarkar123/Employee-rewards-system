import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import SidebarMenu from "./side";

const CreateModal = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "name",
  ]);
  const tokenn = jwt_decode(cookies.access_token);

  const API_URL = "http://localhost:8800";
  const empName = props.match.params.empName;
  const taskk = props.match.params.id;
  console.log(empName);

  const compName = tokenn.name;
  const [task, setTask] = useState(" ");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [rewards, setRewards] = useState(0);
  const reward = async() =>{
    const response = await axios.post(
      `${API_URL}/reward/${empName}/${task.task}/${task.deadline}/${task.rewards}`,{},{ withCredentials: true }
    );

    console.log(response.data)
    alert("You have approved the task. Now you can reward the employee")
  }
  const status = task.status;
  const Approval = (taskk) => {
    const confirmed = window.confirm(
      "Do you want to approve this task"
    );
    if (confirmed) {
      axios
        .put(
          `${API_URL}/updatetask/${taskk._id}`,
          { status: "Approved" },
          { withCredentials: true }
        )
        .then((response) => {
          const updatedTask = response.data.updatedTask;
          console.log(response.data.updatedTask);
          // update tasks state
          setTask(
            task.map((t) => {
              if (t._id === updatedTask._id) {
                return updatedTask;
              } else {
                return t;
              }
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
 
  useEffect(() => {
    axios
      .get(`${API_URL}/gettask/${taskk}`, { withCredentials: true })
      // make a GET request to the server
      .then((response) => {
        //console.log(response.data.user);
        setTask(response.data.task);
        console.log("mm",task);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [empName]);

  return (
    <div className="modal-container">
  <header
    style={{
      backgroundColor: "#333333",
      padding: "1.5rem 0",
      height: "100px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      color: "#F2F2F2",
    }}
  >
    <div style={{ position: "relative", bottom: "20px", left: "20px" }}>
      <SidebarMenu />
    </div>
    <h2
      className="heading"
      style={{
        fontFamily: "Axiforma",
        fontSize: "2.5rem",
        marginBottom: "1.5rem",
        color: "#F2F2F2",
        textAlign: "center",
        textTransform: "uppercase",
        position: "relative",
        bottom: "60px",
      }}
    >
      VIEW TASK
    </h2>
  </header>
  <div
    className="Add-list"
    style={{
      backgroundColor: "#FFFFFF",
      color: "#333333",
      margin: "0 auto",
      width: "1000px",
      textAlign: "center",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      borderRadius: "12px",
      padding: "2rem",
      marginLeft: "250px",
    }}
  >
    <form className="modal-form" style={{ height: "500px" }}>
      <h3>Employee Name: {task.empName}</h3>
      <p>Task: {task.task}</p>
      <p>Name: {task.taskName}</p>
      <p>Description: {task.taskDescription}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Completion Date: {task.completion}</p>
      <p>Rewards: {task.rewards}</p>
      <p>Status: {task.status}</p>
      {status === "Waiting For Approval" ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link to={`/real`}>
            <button
              className="btttn"
              style={{
                backgroundColor: "#38A169",
                color: "#F2F2F2",
                borderRadius: "5px",
                padding: "0.5rem 1rem",
                marginRight: "1rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
              onClick={() => {
                reward();
                Approval(task);
              }}
            >
              Approve
            </button>
          </Link>
          <button
            className="btttn2"
            style={{
              backgroundColor: "#E53E3E",
              color: "#F2F2F2",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            Reject
          </button>
        </div>
      ) : null}
    </form>
  </div>
  <br />
  <br />
</div>

  );
};

export default CreateModal;