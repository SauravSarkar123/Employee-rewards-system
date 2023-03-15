// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../header/Navbar";
// import Footer from "../footer/Footer";
// import { useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import axios from "axios";
// import "./dash.module.css"
// import styles from "./dash.module.css"

// function AdminDashBoard() {
//   const [search, setSearch] = useState(""); // state for search input
//   const [employees, setEmployees] = useState([]);
//   const [cookies, setCookie, removeCookie] = useCookies([
//     "access_token",
//     "name",
//   ]);
//   const tokenn = jwt_decode(cookies.access_token);
//   const API_URL = "http://localhost:8800";

//   const handleLogout = () => {
//     removeCookie("access_token");
//   };

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/empdetails`, { withCredentials: true })
//       .then((response) => {
//         setEmployees(response.data.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filteredEmployees = employees.filter((employee) => {
//     // filter employees by search input
//     return (
//       employee.name.toLowerCase().includes(search.toLowerCase()) ||
//       (employee.id && employee.id.toString().includes(search))
//     );
//   });

//   return (
//     <>
//     <div className={styles.span}>Welcome {tokenn.name}'s Admin</div>
//     <div className="container-fluid" style={{marginTop:"100px"}}>
//       {" "}
//       <div>
//         {/* <Navbar /> */}
//       </div>
//       <div className="row mt-7">
//         <div className="col-md-3">
//           <div className="card">
//             <h5 className="card-header font-weight-bold">Profile</h5>
//             <div className="card-body d-flex flex-column align-items-center">
//               <img
//                 src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
//                 alt=""
//                 style={{ height: "100px", width: "100px" }}
//               />
//               <div className="my-8">
//                 <div className="font-weight-bold">Company: {tokenn.name}</div>
//                 <Link to="/logincomp">
//                   <button
//                     onClick={handleLogout}
//                     className="btn btn-primary"
//                     style={{ margin: "1rem" }}
//                   >
//                     <FaSignOutAlt /> Log Out
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="card">
//             <h5 className="card-header font-weight-bold">
//               Employee Onboarding
//             </h5>
//             <div className="card-body">
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search by name or ID"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <div className="input-group-append">
//                   <button className="btn btn-primary" type="button">
//                     Search
//                   </button>
//                 </div>
//               </div>
//               <div
//                 className="list-group"
//                 style={{ maxHeight: "250px", overflowY: "auto" }}
//               >
//                 {filteredEmployees.map((employee) => (
//                   <div key={employee._id} className="list-group-item">
//                     <div className="d-flex justify-content"></div>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div>
//                         <h6 className="font-weight-bold mb-0">
//                           {employee.name}
//                         </h6>
//                         <small>{employee._id}</small>
//                       </div>
//                       <Link to={`/empprofile/${employee._id}`}>
//                         <button className="btn btn-primary">
//                           View Profile
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     </>
//   );
// }

// export default AdminDashBoard;

// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import { useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import axios from "axios";
// import "./dash.module.css";

// function AdminDashBoard() {
//   const [search, setSearch] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [cookies, setCookie, removeCookie] = useCookies([
//     "access_token",
//     "name",
//   ]);
//   const tokenn = jwt_decode(cookies.access_token);
//   const API_URL = "http://localhost:8800";

//   const handleLogout = () => {
//     removeCookie("access_token");
//   };

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/empdetails`, { withCredentials: true })
//       .then((response) => {
//         setEmployees(response.data.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filteredEmployees = employees.filter((employee) => {
//     return (
//       employee.name.toLowerCase().includes(search.toLowerCase()) ||
//       (employee.id && employee.id.toString().includes(search))
//     );
//   });

//   return (
//     <>
//       <div className="header">
//         <div className="welcome">Welcome {tokenn.name}'s Admin</div>
//         <div className="logout">
//           <Link to="/logincomp">
//             <button onClick={handleLogout} className="btn btn-primary">
//               <FaSignOutAlt /> Log Out
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row mt-7">
//           <div className="col-md-3">
//             <div className="card">
//               <h5 className="card-header font-weight-bold">Profile</h5>
//               <div className="card-body d-flex flex-column align-items-center">
//                 <img
//                   src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
//                   alt=""
//                   className="profile-img"
//                 />
//                 <div className="my-8">
//                   <div className="font-weight-bold">
//                     Company: {tokenn.name}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card">
//               <h5 className="card-header font-weight-bold">
//                 Employee Onboarding
//               </h5>
//               <div className="card-body">
//                 <div className="input-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Search by name or ID"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <div className="input-group-append">
//                     <button className="btn btn-primary" type="button">
//                       Search
//                     </button>
//                   </div>
//                 </div>
//                 <div className="list-group" id="employee-list">
//                   {filteredEmployees.map((employee) => (
//                     <div key={employee._id} className="list-item">
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <h6 className="font-weight-bold mb-0">
//                             {employee.name}
//                           </h6>
//                           <small>{employee._id}</small>
//                         </div>
//                         <Link to={`/empprofile/${employee._id
// }`}>
// <button className="btn btn-primary">View Profile</button>
// </Link>
// </div>
// </div>
// ))}
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </>
// );
// }

// export default AdminDashBoard;

// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt } from "react-icons/fa";
// import { useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import axios from "axios";
// import styles from "./dash.module.css";
// import { FaBars,FaUserPlus, FaTasks, FaGift } from "react-icons/fa";


// function AdminDashBoard() {
//   const [search, setSearch] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [cookies, setCookie, removeCookie] = useCookies([
//     "access_token",
//     "name",
//   ]);
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
  
//   const tokenn = jwt_decode(cookies.access_token);
//   const API_URL = "http://localhost:8800";

//   const handleLogout = () => {
//     removeCookie("access_token");
//   };

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/empdetails`, { withCredentials: true })
//       .then((response) => {
//         setEmployees(response.data.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const filteredEmployees = employees.filter((employee) => {
//     return (
//       employee.name.toLowerCase().includes(search.toLowerCase()) ||
//       (employee.id && employee.id.toString().includes(search))
//     );
//   });

//   return (
//     <>
//       <div className={`${styles.header} shadow-lg`}>
//         <div className={`${styles.welcome} font-weight-bold`}>
//           Welcome {tokenn.name}'s Admin
//         </div>
//         <div className={`${styles.logout} font-weight-bold`}>
//           <Link to="/logincomp">
//             <button
//               onClick={handleLogout}
//               className={`${styles.btn} btn-primary shadow-sm`}
//             >
//               <FaSignOutAlt /> Log Out
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="container" style={{marginTop:"100px",marginLeft:"400px"}}>
//         <div className={`${styles.row} mt-7`}>
//           <div className="col-md-6">
//             <div className={`${styles.card} shadow`}>
//               <h5 className={`${styles.cardHeader} font-weight-bold`}>
//                 Employee Onboarding
//               </h5>
//               <div className={`${styles.cardBody}`}>
//                 <div className={`${styles.inputGroup} mb-3`}>
//                   <input
//                     type="text"
//                     className={`${styles.formControl} form-control`}
//                     placeholder="Search by name or ID"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <div
//                     className={`${styles.inputGroupAppend} input-group-append`}
//                   >
//                     <button
//                       className={`${styles.btn} btn-primary`}
//                       type="button"
//                     >
//                       Search
//                     </button>
//                   </div>
//                 </div>
//                 <div
//                   className={`${styles.listGroup} list-group`}
//                   id="employee-list"
//                 >
//                   <div
//                 className="list-group"
//                 style={{ maxHeight: "250px", overflowY: "auto" }}
//               >
//                   {filteredEmployees.map((employee) => (
//                     <div key={employee._id} className="list-group-item">
//                       <div className="d-flex justify-content"></div>
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <h6 className="font-weight-bold mb-0">
//                             {employee.name}
//                           </h6>
//                           <small>{employee._id}</small>
//                         </div>
//                         <Link to={`/empprofile/${employee._id}`}>
//                           <button className="btn btn-primary">
//                             View Profile
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminDashBoard;


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
      .get(`${API_URL}/empdetails`, { withCredentials: true })
      .then((response) => {
        setEmployees(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      (employee.id && employee.id.toString().includes(search))
    );
  });

  return (
    <div className="container-fluid" style={{height:"3000px"}}>
      {" "}
      <div>
        <Navbar />
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <h5 className="card-header font-weight-bold">User Profile</h5>
            <div className="card-body d-flex flex-column align-items-center">
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div className="my-3">
                <div className="font-weight-bold">Admin: {tokenn.name}</div>
                <Link to="/logincomp">
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary"
                    style={{ margin: "1rem" }}
                  >
                    <FaSignOutAlt /> Log Out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header font-weight-bold">
              Employee Onboarding
            </h5>
            <div className={`${styles.cardBody}`}>
              <div className={`${styles.inputGroup} mb-3`}>
                <input
                  type="text"
                  className={`${styles.formControl} form-control`}
                  placeholder="Search by name or ID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div
                  className={`${styles.inputGroupAppend} input-group-append`}
                >
                  <button
                    className={`${styles.btn} btn-primary`}
                    type="button"
                  >
                    Search
                  </button>
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
                    <div key={employee._id} className="list-group-item">
                      <div className="d-flex justify-content"></div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="font-weight-bold mb-0">
                            {employee.name}
                          </h6>
                          <small>{employee._id}</small>
                        </div>
                        <Link to={`/empprofile/${employee._id}`}>
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
     
  );
 }
 export default AdminDashBoard;
