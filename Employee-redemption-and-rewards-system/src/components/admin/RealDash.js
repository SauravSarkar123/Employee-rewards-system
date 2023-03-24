import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
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
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "name",
  ]);

  const tokenn = jwt_decode(cookies.access_token);
  const API_URL = "http://localhost:8800";
  // const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const togglePopup = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    removeCookie("access_token");
  };

  useEffect(() => {
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
        setTasks(response.data.tasks);
        console.log(response.data.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(employees);
  const filteredEmployees = employees.filter((employee) => {
    console.log(employee.isOnboarded);
    return (
      employee.comName === tokenn.name &&
      employee.Onboard === false && // Check if employee's company name matches tokenn's company name
      (employee.Name.toLowerCase().includes(search.toLowerCase()) || // Check if employee's name includes the search term
        employee.comId.toString().includes(search)) // Check if employee's company name includes the search term
    );
  });

  // const viewTask = async () => {
  //   const response = await axios.get(
  //     `${API_URL}/gettasks`,
  //     { withCredentials: true }
  //   )
  //   .then((response) => {
  //     setEmployees(response.data.details);
  //     console.log(response.data.details);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  const filteredTasks = tasks.filter((task) => {
    console.log(task.isOnboarded);
    return (
      task.companyName === tokenn.name &&
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
            <Link to="/logincomp">
              <button
                onClick={handleLogout}
                className="btn btn-primary"
                style={{ margin: "1rem", marginLeft: "300px" }}
              >
                <FaSignOutAlt /> Log Out
              </button>
            </Link>
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
                      40
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
                    Total Users
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
                      40
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
                    Users Onboarded
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
                      40
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
                    Tokens
                  </div>
                </div>
              </div>
            </div>

            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              maxWidth="xs"
              fullWidth
            >
              
              <div style={{ 
    padding: '20px', 
    position: 'relative', 
    backgroundColor: '#fff', 
    borderRadius: '5px'
  }}>
    <div style={{ 
      position: 'absolute', 
      top: '10px', 
      right: '10px', 
      cursor: 'pointer'
    }}>
      <span onClick={() => setOpen(false)}>Close</span>
                
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000000"
                      d="M17.657 6.343c-.293-.293-.768-.293-1.061 0l-3.596 3.596-3.596-3.596c-.293-.293-.768-.293-1.061 0-.293.293-.293.768 0 1.061l3.596 3.596-3.596 3.596c-.293.293-.293.768 0 1.061.146.146.338.22.53.22s.384-.073.53-.22l3.596-3.596 3.596 3.596c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.061l-3.596-3.596 3.596-3.596c.293-.293.293-.768 0-1.061z"
                    /> */}
                  {/* </svg> */}
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Frontend Design
                  </div>
                  <div style={{ fontSize: "16px", marginBottom: "20px" }}>
                    Try to do the register page and login page and also the dashboard 
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
                    <div style={{ fontSize: "14px" }}>March 31, 2023</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <button
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
                    </button>
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>

            <div className="col-md-3">
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
                      20
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
                    Remaining Tokens
                  </div>
                </div>
              </div>
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
                            <Link>
                              <button
                                className="btn btn-primary"
                                style={{
                                  fontFamily: "Montserrat",
                                  marginTop: "20px",
                                }}
                                onClick={togglePopup}
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
}

export default AdminDashBoard;




