


import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import styles from "./dash.module.css";
import { FaBars,FaUserPlus, FaTasks, FaGift } from "react-icons/fa";
import SidebarMenu from "./side.js";




function AdminDashBoard() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "name",
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLinkClick = () => {
    setShowMenu(false);
    toggleMenu();
    console.log(showMenu)
  };
  
  const tokenn = jwt_decode(cookies.access_token);
  const API_URL = "http://localhost:8800";

  const handleLogout = () => {
    removeCookie("access_token");
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/comemps`, { withCredentials: true })
      .then((response) => {
        setEmployees(response.data.details);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee._id.toLowerCase().includes(search.toLowerCase()) ||
      (employee._id && employee.comId.toString().includes(search))
    );
  });

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div style={{ marginTop: "20px" }}>
            <SidebarMenu />
          </div>
        </div>
        <div className="col-md-9">
          <div
            className={styles.span}
            // style={{
            //   fontSize: "2.9em",
            //   fontFamily: "Roboto Condensed",
            //   marginLeft: "70px",
            // }}
          >
            Welcome {tokenn.name}'s Admin
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
          <div className="row" style={{marginTop:"40px", marginLeft:"80px"}}>
            <div className="col-md-3" >
              <div
                className="card"
                style={{ color:"white",height: "150px", marginBottom: "20px", boxShadow: "20px 40px 10px rgba(10,100,0,0.3)", border:"0px", backgroundColor:"#173D6B"}}
              >
                <div className={styles.txt} >
                  <h3>
                    <b style={{marginLeft:"90px", marginBottom:"100px", fontSize:"70px"}}>40</b>
                  </h3>
                  <br/>
                  Employee Registrations
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{marginLeft:"80px"}}>
              <div
                className="card"
                style={{ color:"white",border:"0px", backgroundColor:"#173D6B",height: "150px", marginBottom: "20px" , boxShadow: "20px 40px 10px rgba(10,100,0,0.3)"}}
              >
                <div className={styles.txt}>
                  <h3>
                    <b style={{marginLeft:"90px", marginBottom:"100px", fontSize:"70px"}}>20</b>
                  </h3>
                  <br />
                  Onboarded
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-">
            <div className="col-md-11 " style={{ marginTop: "50px" }}>
              <div className="card">
                <h5 className="card-header font-weight-bold" style={{textAlign:"center"}}>
                  Employees
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
                    >
                      
                    </div>
                  </div>
                  <div
                    className={`${styles.listGroup} list-group`}
                    id="employee-list"
                  >
                    <div
                      className="list-group"
                      style={{ maxHeight: "250px", overflowY: "auto" }}
                    >
                      {filteredEmployees.map((employee) => (
                        <div key={employee.comId} className="list-group-item">
                          <div className="d-flex justify-content"></div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="font-weight-bold mb-0">
                                {employee.Name}
                              </h6>
                              <small>{employee.comId}</small>
                            </div>
                            <Link to={`/empprofile/${employee.user}`}>
                              <button className="btn btn-primary">
                                View Profile
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