import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import reg from "../../components/openPage/r5.svg"

import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";

import "../../App.css";

import Loginheader12 from "../header/comploginheader";

const API_URL = "http://localhost:8800";

export default function SignInPage() {
  const [comName, setname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const backgroundGradient = {
    background: "#FFFFFF",
    height: "100%",
    width: "100%",
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${API_URL}/logincomp`,
        {
          comName,
          password,
        },
        { withCredentials: true }
      );
      //  setMessage(response.data.message)

      //  console.log(response.data);

      // Redirect to admin page on successful login
      history.push("/admindash");
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 404) {
        // User not found
        setErrorMessage("name not found");
      } else if (error.response && error.response.status === 400) {
        // Incorrect password
        setErrorMessage("Incorrect password");
      } else {
        // Other error
        setErrorMessage("An error occurred");
      }
      const alertMessage = errorMessage || "Invalid Credentials";
      alert(alertMessage);
    }
  };

  return (
    <div style={{backgroundImage: `url(${reg})`}}>
   
      <header style={HeaderStyle}>
        <Loginheader12 />

        <div className="text-center m-5-auto">
          <form onSubmit={handleLogin} style={{marginRight:"100px",marginBottom:"100px",boxShadow: '00px 100px 60px 0px rgba(0,0,0,0.5)',borderRadius:"50px"}}>
            <h2>Sign in to us</h2>
            <p>
              <label>Company Name</label>
              <br />
              <input
                type="text"
                title="name"
                value={comName}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </p>
            <p>
              <label>Password</label>
              <Link to="/forget-password">
                <label className="right-label">Forget password?</label>
              </Link>
              <br />
              <input
                type="password"
                title="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </p>
            <p>
              <button id="sub_btn" type="submit">
                Login
              </button>
            </p>
            <footer>
              <p>
                <Link to="/registercompany">
                  {" "}
                  First time? Create an account
                </Link>
                .
              </p>
              <p>
                <Link to="/">Back to Homepage</Link>.
              </p>
            </footer>
          </form>
          {message && <p>{message}</p>}
        </div>
      </header>
      <Footer />
 
    </div>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "150vh",

  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
