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
  const taskk = props.match.params.task;
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

 
  useEffect(() => {
    axios
      .get(`${API_URL}/gettask/${empName}/${taskk}`, { withCredentials: true })
      // make a GET request to the server
      .then((response) => {
        //console.log(response.data.user);
        setTask(response.data.task);
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [empName]);

  return (
    <div className="modal-container">
      <header
        style={{
          backgroundColor: "#F2F2F2",
          padding: "1.5rem 0",
          height: "100px",
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
            color: "#333333",
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
          backgroundColor: "#f5f5f5",
          color: "#222",
          margin: "0 auto",
          width: "1000px",
          textAlign: "center",
          boxShadow: "0 24px 500px #26214a1a",
          borderRadius: "12px",
          padding: "2rem",
          marginLeft: "250px",
          height:"20px"
        }}
      >
        <form className="modal-form" style={{height:"500px"}} >
        <h3>Employee Name:{task.empName}</h3>
              <p>Task :{task.task}</p>
              <p>Name:{task.taskName}</p>
              <p>Description:{task.taskDescription}</p>
              <p>Deadline: {task.deadline}</p>
              <p>Rewards: {task.rewards}</p>
              <p> Status : </p>
              <div style={{display:"flex", flexDirection:"row"}}>
              <Link to={`/real`}><button className="btttn" onClick={reward} >Approve</button></Link>
              <button className="btttn2" >Reject</button>
              </div></form>
      
      </div>
      <br />
      {/* <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
      <br /> */}
    </div>
  );
};

export default CreateModal;
