import React, { useState, useEffect } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import styles from "../admin/dash.module.css";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
import SidebarMenu12 from "./side1";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.style.backgroundColor,
        color: "white",
        padding: "40px",
        fontSize: "20px",
        display: "flex",
        flexDirection: "row-reverse", // change flexDirection to row-reverse
        justifyContent: "space-between", // add justifyContent
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 5.0)",
        margin: "20px",
        width: "500px",
      }}
    >
      <FontAwesomeIcon
        icon={faFileText}
        size="4x"
        style={{ marginBottom: "20px", marginLeft: "20px", opacity: "0.75" }}
      />
      <div>
        <h3 style={{ marginBottom: "10px", fontSize: "60px" }}>
          {props.count}
        </h3>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

const EmployeeDashboard = (props) => {

  const [open, setOpen] = useState(false);
  const togglePopup = () => {
    setOpen(true);
  };
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedTask, setSelectedTask] = useState(tasks);

  const [cookies, setCookie, removeCookie] = useCookies([
    "employee_token","name"
   
  ]);

 

  console.log(cookies.employee_token);
  const tokenn = jwt_decode(cookies.employee_token);

  console.log("token :", tokenn)

  const API_URL = "http://localhost:8800";
  useEffect(() => {
    axios
      .get(`${API_URL}/viewtask`, { withCredentials: true })
      .then((response) => {
        setTasks(response.data.tasks);
        console.log(response.data.tasks);
        console.log("666666666666666666")
      })
      .catch((error) => {
        console.log("TTTTTTTTTTTTTT")
        console.log(error);
      });
  }, []);
  console.log(tasks);

  return (
    <div>
      <header
        style={{
          backgroundColor: "navy",
          padding: "30px",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", bottom: "10px" }}>
          {/* <SidebarMenu12 />{" "} */}
        </div>
        <h1 style={{ color: "white" }}>Employee Dashboard</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <span style={{ color: "white", marginRight: "20px" }}>
              {tokenn.name.toUpperCase()}
            </span>
            <a href="/userprofile">
              <FaUser style={{ color: "orange", marginRight: "20px" }} />{" "}
            </a>
          </div>
          <FaBell style={{ color: "white" }} />
        </div>
      </header>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
          alignItems: "center",
          fontStyle: "kanit",
        }}
      >
        <Card
          style={{
            backgroundColor: "#17A2B8",
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
          }}
          title="New Task"
          count="10"
        />

        <Card
          style={{
            backgroundColor: "#32CD32",
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
          }}
          title="In Progress"
          count="10"
        />

        <Card
          style={{
            backgroundColor: "orange",
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
          }}
          title="Completed"
          count="20"
        />

        <Card
          style={{
            backgroundColor: "#d21f3c",
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
          }}
          title="All Tasks"
          count="30"
        />
      </main>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <div
          style={{
            padding: "20px",
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          >
            <span onClick={() => setOpen(false)}> X </span>
          </div>
          {tasks.map((task) => (
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {task.task}
              </div>
              <div style={{ fontSize: "16px", marginBottom: "20px" }}>
                {task.taskDescription}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "14px", marginRight: "10px" }}>
                  Deadline:
                </div>
                <div style={{ fontSize: "14px" }}>{task.deadline}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#f44336",
                        color: "#fff",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Reward
                    </button> */}
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    // marginLeft:"150px"
                  }}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          ))}
        </div>
      </Dialog>

      <div
        className="card"
        style={{
          boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.3)",
          marginBottom: "40px",
          width: "845px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h5
          className="card-header font-weight-bold"
          style={{
            textAlign: "center",
            fontFamily: "Montserrat",
            padding: "20px",
            color: "black",
          }}
        >
          Pending Tasks
        </h5>
        <div className={`${styles.cardBody}`}>
          <div className={`${styles.listGroup} list-group`} id="employee-list">
            <div
              className="list-group"
              style={{ maxHeight: "1350px", overflowY: "auto" }}
            >
              {tasks.map((task) => (
                <div
                  key={task.task}
                  className="list-group-item"
                  style={{
                    border: "0.1px solid black",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6
                        className="font-weight-bold mb-0"
                        style={{
                          fontFamily: "Montserrat",
                          marginTop: "20px",
                        }}
                      >
                        {task.task}
                      </h6>
                      <small>{task.deadline}</small>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p
                        style={{ display: "inline-block", marginRight: "10px" }}
                      >
                        Status:
                      </p>
                      <p style={{ display: "inline-block", color: "#ff0000" }}>
                        <b>{task.status}</b>
                      </p>
                    </div>
                    <button
                      onClick={togglePopup}
                      className="btn btn-primary"
                      style={{
                        fontFamily: "Montserrat",
                        marginTop: "20px",
                      }}
                    >
                      View Tasks
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
