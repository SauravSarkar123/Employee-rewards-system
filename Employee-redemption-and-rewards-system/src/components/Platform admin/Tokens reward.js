import React, { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const PlatformAdmin = () => {
  //   const handleRemove = (index) => {
  //     setData((prevData) => prevData.filter((_, i) => i !== index));
  //   };

  const API_URL = "http://localhost:8800";
  const [companies, setCompanies] = useState([]);
  const [updatecompanies, setupdatecompanies] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/admin`, { withCredentials: true })
      .then((response) => {
        setCompanies(response.data.comp12);
        console.log(response.data.comp12);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const admin = companies && companies[0] && companies[0].isAdmin;
console.log("admin", admin)
  const Verify = (comp) => {
    const confirmed = window.confirm(
      "Clicking on mark as completed notifies the admin. Are you sure you want to continue?"
    );
    if (confirmed) {
      axios
        .put(
          `${API_URL}/verifycom/${comp._id}`,
          { isAdmin: true },
          { withCredentials: true }
        )
        .then((response) => {
          const compp = response.data.savedUser;
          // window.location.reload();
          console.log("red", response.data.savedUser);
          // update tasks state
          setupdatecompanies(
            Array.isArray(compp)
              ? compp.map((t) => {
                  if (t._id === comp._id) {
                    window.location.reload();
                    console.log("m")
                    return compp;
                  } else {
                    window.location.reload();
                    console.log("m")
                    return t;
                    
                  }
                })
              : []
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  

  return (
    <div style={{ textAlign: "center", overflowX: "auto" }}>
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Platform Admin
      </h1>
      <div
        style={{
          margin: "0 auto",
          width: "1000px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          overflow: "hidden",
          height: "auto",
        }}
      >
        <table style={{ minWidth: "100%", height: "auto" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ padding: "1rem" }}>Company Name</th>
              <th style={{ padding: "1rem" }}>Wallet Address</th>
              <th style={{ padding: "1rem" }}>Reward</th>
              <th style={{ padding: "1rem" }}>Verify</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "1rem" }}>{company.comName}</td>
                <td style={{ padding: "1rem" }}>{company.walletAddress}</td>
                <td style={{ padding: "1rem" }}>
                  
                  <button
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "0.5rem 1rem",
                      fontSize:"1rem"
                    }}
                  >
                    Give Tokens
                  </button>
                </td>
                <td style={{ padding: "1rem" }}>
                  {admin ? <p style={{color:"#00FF00"}}><b> VERIFIED </b> </p> : (
                  <button
                    onClick={() => Verify(company)}
                    style={{
                      backgroundColor: "#00FFFF",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    Verify
                  </button>
                )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlatformAdmin;
