import React, { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
const ProfilePage = (props) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token", "name"]);
  const [boxVisible, setBoxVisible] = useState(false);
  const [employee, setEmployee] = useState([]);
  const API_URL = "http://localhost:8800";
  const employeeId = props.match.params._id;
  const employeeName = employee.name;
  const employeeAddress = employee.address;
  const employeeMobile = employee.mobile;
  const employeeEmail = employee.email;
  const employeeWallet = employee.wallet;
  
  const tokenn = jwt_decode(cookies.access_token);
  const comName = tokenn.name;
  const comId = tokenn.name.substr(0,3).toUpperCase();
  
  const handlePursuingClick = () => {
    if (progressWidth < 100) {
      setProgressWidth(progressWidth + 10);
    }
  };
  // const handleLogout = () => {
  //   removeCookie("access_token");
  // };


  const addEmployee = async() =>{
    const response = await axios.post(
      `${API_URL}/addemployee/${employeeId}/${employeeName}/${employeeAddress}/${employeeMobile}/${employeeEmail}/${employeeWallet}`,
      {
        comName,
        comId
      },
      { withCredentials: true }
    );
    // const uid = async(comName, employeeMobile) => {
    //   const companyCode = comName.substr(0, 3).toUpperCase();
    //   const mobileNum = employeeMobile.toString();
    //   const lastFourDigits = mobileNum.substr(mobileNum.length - 4);
    //   return `${companyCode}-${lastFourDigits}`;
    // }
    // const comId = uid(comName, employeeMobile);
    console.log("comName:",comName);
    console.log("comId:",comId);
    console.log("employee id:", employeeId);
    console.log("name: " , employeeName);
    console.log("address: " , employeeAddress);
    console.log("email: " , employeeEmail);
    console.log("mobile: " , employeeMobile);
    console.log("wallet: " , employeeWallet);
    console.log(response.data);

    

  
  }
  // const handleLogout = () => {
  //   removeCookie('access_token');
  // };

  useEffect(() => {
    axios
      .get(`${API_URL}/empprofile/${employeeId}`, { withCredentials: true })

      // make a GET request to the server
      .then((response) => {
        //console.log(response.data.user);
        setEmployee(response.data.user);
        console.log(employee);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeId]);
  return (
    <div style={{ height: "auto" }}>
      <header style={{ 
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center'
    }}>  <div style={{display:"flex",position:"relative",bottom:"10px"}}> <SidebarMenu12/></div>
      
      <h1 style={{ 
        margin: '0',
        fontSize: '35px',
        fontWeight: 'bold',
        color: '#0F6292',
        flex: 4,
        textAlign:"center",
        position:"relative",
        left:"30px"
        

      }}>
        Employee Profile</h1>
        
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCD2IRkg5xxZTdaHZrj4MXtcwuvo2xSPOACVOPvQ&s" alt="User Avatar" style={{ 
        borderRadius: '50%',
        marginRight: '20px',
        width:"50px",
        height:"50px"

      }} />
      <p style={{ 
        margin: '0',
        fontSize: '16px',
        color: '#777'
      }}>John Doe</p>
    </header>
    <div
        className="card"
        style={{
          width: "900px",
          height: "140px",
          flexDirection: "row",
          background: "#FFFFFF",
          margintop: "100px",
          position: "relative",
          top: "30px",
          left: "240px",
        }}
      >
        <img
          src="https://img.freepik.com/free-icon/user_318-159711.jpg"
          alt="Avatar"
          style={{
            border: "3px solid #ccc",
            boxShadow: "0px 0px 10px #ccc",
            borderRadius: "50%",
            marginLeft: "5%",
            width: "120px",
            height: "120px",
            position: "relative",
            top: "10px",
          }}
        />

        <div
          classname="red"
          style={{
            flexDirection: "column",
            position: "relative",
            top: "35px",
            left: "30px",
            flexDirection: "column",
          }}
        >
          <p style={{ display: "inline-block" }}>
            <b style={{ color: "#537FE7", display: "inline" }}>Name : </b> John
            Doe
          </p>

          <p>
            {" "}
            <b style={{ color: "#537FE7" }}> Wallet Address: </b> dd0n02h20i
          </p>
        </div>
        <div>
          <div
            onClick={handleBoxClick}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "-10px",
              height: "20%",
              width: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              ":hover": {
                transform: "scale(1.2)",
                background: "#FFFFFF",
              },
            }}
          >
            Acheivements{" "}
            <IoIosArrowDropdownCircle style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
      <div
        className="card1"
        style={{
          marginLeft: "238px",
          position: "relative",
          top: "50px",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h6>
            <b style={{ fontSize: "1.4rem", color: "#537FE7" }}>INFORMATION</b>
          </h6>{" "}
        </div>
        <hr className="mt-0 mb-4" />
        <div className="row pt-1">
          <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}} >
            <h6 style={{ color: "#537FE7", marginRight: "20px" }}>Name:</h6>
            <p className="text-muted  mb-6">John Doe</p>
          </div>
          <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
            <h6 style={{ color: "#537FE7", marginRight: "20px"  }}>Email:</h6>
            <p className="text-muted mb-6">info@example.com</p>
          </div>
          <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
            <h6 style={{ color: "#537FE7", marginRight: "20px"  }}>Phone:</h6>
            <p className="text-muted  mb-6">123 456 789</p>
          </div>

          <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
            <h6 style={{ color: "#537FE7", marginRight: "20px"  }}>Address:</h6>
            <p className="text-muted mb-0">123 Main Street, Anytown, USA</p>
          </div>
          <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
            <h6 style={{ color: "#537FE7", marginRight: "20px"  }}>Wallet Address:</h6>
            <p className="text-muted  mb-6">id822820d1h2d0d</p>
          </div>
          <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
            <h6 style={{ color: "#537FE7", marginRight: "20px"  }}>ID:</h6>
            <p className="text-muted  mb-6">0987</p>
          </div>
        </div>
        <div style={{ marginTop: "80px" }}>
          <div style={{ textAlign: "center" }}>
            <h6>
              <b
                style={{
                  fontSize: "1.4rem",
                  color: "#537FE7",
                  textAlign: "center",
                }}
              >
                COMPANY
              </b>
            </h6>
          </div>
          <hr className="mt-0 mb-4" />
          <div className="row pt-1">
            <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
              <h6 style={{ color: "#537FE7",marginRight: "20px" }}>Company Name:</h6>
              <p className="text-muted mb-0">SecureKloud</p>
            </div>
            <div className="col-6 mb-3 d-flex align-items-left" style={{position:"relative",left:"50px"}}>
              <h6 style={{ color: "#537FE7",marginRight: "20px" }}>EmployeeId:</h6>
              <p className="text-muted mb-0">SK22125</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      {/* <Footercr/> */}
    </div>
  )
              }

export default ProfilePage;

      