

import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { Link,  useHistory  } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import styles from "./dash.module.css";
import {
  FaBars,
  FaUserPlus,
  FaTasks,
  FaGift,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import SidebarMenu from "./side.js";

function AdminDashBoard() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [Alltasks, setAllTasks] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "name",
  ]);
    const history = useHistory();
  // const [open, setOpen] = useState(false);
  const tokenn = jwt_decode(cookies.access_token);
  console.log(tokenn)
  const API_URL = "http://localhost:8800";
  // const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const togglePopup = () => {
    setOpen(true);
  };
  const [task, setTask] = useState([]);
 

  useEffect(() => {
    const token = cookies.access_token;
    
    if (token) {
      const decoded = jwt_decode(token);
      if (!decoded.isAdmin) {
        alert("Your account will be verified soon.");
        window.location.replace("/logincomp");
        return;
      }
    } else {
      // Handle case where token is not present
    }
    

    axios
      .get(`${API_URL}/comemps`, { withCredentials: true })
      .then((response) => {
        setEmployees(response.data.details);
        console.log(response.data.details);
      })
      .catch((error) => {
        console.log(error);
      });
    // }, []);

    axios
      .get(`${API_URL}/gettasks`, { withCredentials: true })
      .then((response) => {
        setAllTasks(response.data.tasks)
        setTasks(response.data.tasks.filter((tasks) => tasks.status === "Pending" || tasks.status === "Waiting For Approval" ));
        console.log(response.data.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(employees);
  if (cookies.access_token && jwt_decode(cookies.access_token).isAdmin) {

  const filteredEmployees = employees.filter((employee) => {
    console.log(employee.isOnboarded);
    
    return (
      employee.comName === tokenn.name &&
      employee.Onboard === false && // Check if employee's company name matches tokenn's company name
      (employee.Name.toLowerCase().includes(search.toLowerCase()) || // Check if employee's name includes the search term
        employee.comId.toString().includes(search)) // Check if employee's company name includes the search term
    );
  });
  

  const OnboardedEmployees = filteredEmployees.length;
  console.log(OnboardedEmployees)
  const PendingApprovals = tasks.filter((task) => task.status === "Waiting For Approval").length;
  const TaskIncentive = Alltasks.filter((task) => task.status === "Approved").length;
  const Assignedtasks = tasks.filter((task) => task.status === "Pending" ).length;





  const filteredTasks = tasks.filter((task) => {
    return (
      (task.companyName === tokenn.name && task.isPending === true) &&
      // Check if employee's company name matches tokenn's company name
      (task.task.toLowerCase().includes(search.toLowerCase()) || // Check if employee's name includes the search term
        task.empName.toString().includes(search)) // Check if employee's company name includes the search term
    );
  });
 

  return (
    <div>
      <div className="row">
        {/* <div
          style={{
            borderRadius: "20px",
            boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.3)",
          }}
        > */}

        <div className="col-md-3">
          <div style={{ marginTop: "40px", marginLeft: "20px" }}>
            <SidebarMenu />
          </div>
        </div>
        <div className="col-md-9">
          <div className={styles.span}>
            WELCOME {tokenn.name.toUpperCase()}'s ADMIN
            
          </div>
          <div
            className="row"
            style={{ marginTop: "40px", marginLeft: "-300px" }}
          >
            <div className="col-md-3">
              <div
                className="card"
                style={{
                  color: "white",
                  height: "150px",
                  marginBottom: "20px",
                  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.3)",
                  border: "0px",
                  backgroundColor: "#17A2B8",
                }}
              >
                <div className={styles.txt} style={{ marginTop: "20px" }}>
                  <h3>
                    <b
                      style={{
                        marginLeft: "90px",
                        marginTop: "680px",
                        fontSize: "70px",
                        marginLeft: "",
                      }}
                    >
                      {OnboardedEmployees}
                    </b>
                  </h3>
                  <FaUser
                    style={{
                      marginLeft: "200px",
                      marginTop: "-120px",
                      height: "70px",
                      width: "80px",
                      opacity: "0.5",
                    }}
                  />
                  <br />
                  <div style={{ marginTop: "-20px", marginLeft: "10px" }}>
                    Total Onboarded Employees
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card"
                style={{
                  color: "white",
                  height: "150px",
                  marginBottom: "20px",
                  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.3)",
                  border: "0px",
                  backgroundColor: "#28A745",
                }}
              >
                <div className={styles.txt} style={{ marginTop: "20px" }}>
                  <h3>
                    <b
                      style={{
                        marginLeft: "90px",
                        marginBottom: "100px",
                        marginLeft: "",
                        fontSize: "70px",
                      }}
                    >
                      {Assignedtasks}
                    </b>
                  </h3>
                  <FaHome
                    style={{
                      marginLeft: "200px",
                      marginTop: "-120px",
                      height: "70px",
                      width: "80px",
                      opacity: "0.5",
                    }}
                  />
                  <br />
                  <div style={{ marginTop: "-20px", marginLeft: "10px" }}>
                    Total Assigned Tasks
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card"
                style={{
                  color: "white",
                  height: "150px",
                  marginBottom: "20px",
                  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.3)",
                  border: "0px",
                  backgroundColor: "#FFC107",
                }}
              >
                <div className={styles.txt} style={{ marginTop: "20px" }}>
                  <h3>
                    <b
                      style={{
                        marginLeft: "90px",
                        marginBottom: "100px",
                        marginLeft: "-0px",
                        fontSize: "70px",
                      }}
                    >
                      {PendingApprovals}
                    </b>
                  </h3>
                  <FaHome
                    style={{
                      marginLeft: "200px",
                      marginTop: "-120px",
                      height: "70px",
                      width: "80px",
                      opacity: "0.5",
                    }}
                  />
                  <br />
                  <div style={{ marginTop: "-20px", marginLeft: "10px" }}>
                    Pending for Approval
                  </div>
                </div>
              </div>
            </div>

           
            <div className="col-md-3">
            <a style={{textDecoration:"none"}}href="/reward">
              <div
                className="card"
                style={{
                  color: "white",
                  border: "0px",
                  backgroundColor: "#DC3545",
                  height: "150px",
                  marginLeft: "",
                  marginBottom: "20px",
                  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.3)",
                }}
              >
                <div className={styles.txt} style={{ marginTop: "20px" }}>
                  <h3>
                    <b
                      style={{
                        marginLeft: "0px",
                        marginTop: "30px",
                        marginBottom: "-100px",
                        fontSize: "70px",
                      }}
                    >
                      {TaskIncentive}
                    </b>
                  </h3>
                  <FaHome
                    style={{
                      marginLeft: "200px",
                      marginTop: "-120px",
                      height: "70px",
                      width: "80px",
                      opacity: "0.5",
                    }}
                  />
                  <br />
                  <div style={{ marginTop: "-20px", marginLeft: "10px" }}>
                    Pending For Task Incentive
                  </div>
                  
                </div>
                
              </div>
              </a>
            </div>
            
          </div>
          <div className="row mt-">
            <div
              className="col-md-10 "
              style={{ marginTop: "50px", marginLeft: "-290px" }}
            >
              <div
                className="card"
                style={{
                  boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.3)",
                  // backgroundColor: "#CAFFF5",
                  marginBottom: "40px",
                }}
              >
                <h5
                  className="card-header font-weight-bold"
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    padding: "20px",
                    // backgroundColor: "#CAFFF5",
                    color: "black",
                  }}
                >
                  Employees
                </h5>
                <div className={`${styles.cardBody}`}>
                  <div className={`${styles.inputGroup} mb-3`}>
                    <input
                      type="text"
                      className={`${styles.formControl} form-control`}
                      placeholder="Search by Name or Company ID"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div
                      className={`${styles.inputGroupAppend} input-group-append`}
                    ></div>
                  </div>
                  <div
                    className={`${styles.listGroup} list-group`}
                    id="employee-list"
                  >
                    <div
                      className="list-group"
                      style={{ maxHeight: "1350px", overflowY: "auto" }}
                    >
                      {filteredEmployees.map((employee) => (
                        <div
                          key={employee.comId}
                          className="list-group-item"
                          style={{
                            backgroundColor: "#0000",
                            border: "0.1px solid black",
                          }}
                        >
                          <div className="d-flex justify-content"></div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6
                                className="font-weight-bold mb-0"
                                style={{
                                  fontFamily: "Montserrat",
                                  marginTop: "20px",
                                }}
                              >
                                {employee.Name}
                              </h6>
                              <small>{employee.comId}</small>
                            </div>
                            <Link
                              to={`/assigntask/${employee.Name}/${tokenn.name}`}
                            >
                              <button
                                className="btn btn-primary"
                                onClick={togglePopup}
                                style={{
                                  fontFamily: "Montserrat",
                                  marginTop: "7px",
                                }}
                              >
                                Assign Tasks
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-8"
              style={{
                marginTop: "50px",
                marginLeft: "-300px",
                width: "1290px",
                height: "629px",
              }}
            >
              <div
                className="card"
                style={{
                  boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.3)",
                  // backgroundColor: "#17A2B8",
                  marginBottom: "40px",
                  width: "845px",
                }}
              >
                <h5
                  className="card-header font-weight-bold"
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    padding: "20px",
                    // backgroundColor: "#17A2B8",
                    color: "black",
                  }}
                >
                  Pending Tasks
                </h5>
                <div className={`${styles.cardBody}`}>
                  <div className={`${styles.inputGroup} mb-3`}>
                    <input
                      type="text"
                      className={`${styles.formControl} form-control`}
                      placeholder="Search by Name"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div
                      className={`${styles.inputGroupAppend} input-group-append`}
                    ></div>
                  </div>
                  <div
                    className={`${styles.listGroup} list-group`}
                    id="employee-list"
                  >
                    <div
                      className="list-group"
                      style={{ maxHeight: "1350px", overflowY: "auto" }}
                    >
                      {filteredTasks.map((task) => (
                        <div
                          key={task.task}
                          className="list-group-item"
                          style={{
                            // backgroundColor: "#DDDDD2",
                            border: "0.1px solid black",
                          }}
                        >
                          <div className="d-flex justify-content"></div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6
                                className="font-weight-bold mb-0"
                                style={{
                                  fontFamily: "Montserrat",
                                  marginTop: "20px",
                                }}
                              >
                                {task.empName}
                              </h6>
                              <small>{task.task}</small>
                            </div>
                            <div style={{ textAlign: "center" }}>
                      <p
                        style={{ display: "inline-block", marginRight: "10px" }}
                      >
                        Status:
                      </p>
                      <p style={{ display: "inline-block", color: "#ff0000" }}>
                        <b>{task.status}</b> </p>
                        </div>
                            <Link to={`/viewtask/${task.empName}/${task.task}`}>                              <button
                                className="btn btn-primary"
                                style={{
                                  fontFamily: "Montserrat",
                                  marginTop: "20px",
                                }}
                                
                              >
                                View Tasks
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else{
  return null;
}}
export default AdminDashBoard;
