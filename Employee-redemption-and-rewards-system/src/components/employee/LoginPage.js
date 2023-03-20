 import React, {useState} from 'react'
 import { Link } from 'react-router-dom'
 import axios from 'axios'
 import Loginheader12 from '../header/loginheader';
 import Footer from '../footer/Footer'
 import { useHistory } from "react-router-dom";
 import styles from '../openPage/openpage.module.css';
 import reg from "../../components/openPage/r5.svg"
 import employeeImage from "../openPage/employees.png"
 import g from "../admin/g.svg"


import '../../App.css'




const API_URL = "http://localhost:8800"; 


export default function SignInPage() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState('')
  const history = useHistory();
  const backgroundGradient = { background: '#FFFFFF)', height: '10%', width: '100%',};






  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      
      const response = await axios.post(`${API_URL}/login`, {
        name,
        password,
      } , { withCredentials: true });

      
      history.push("/userprofile");
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
    <div style={{ backgroundImage: `url(${g})` }}>
      <div style={backgroundGradient}>
      
          {/* <Loginheader12/> */}
          <div style={{display:"flex", flexDirection:"row"}}>
                    <img src={employeeImage} style={{width:"400px", height:"450px",marginTop:"70px", marginLeft:"150px"}}/>
          <div className={styles.image_container} id="empp">

    
                   
          <form style={{margin:'auto',borderRadius:"20px",marginLeft: '250px',marginBottom:"100px", boxShadow: '00px 100px 60px 0px rgba(0,0,0,0.5)', backgroundColor:"transparent"}}onSubmit={handleLogin}>
          <h2 className={styles.txt}style={{marginTop:"20px",marginLeft:"60px",textAlign:'center'}}>Login</h2>
              <p>
                  <label style={{marginLeft:"6px"}}>Username</label><br/>
                  <input type="text" title='name' value={name} onChange={e => setname(e.target.value)} required />
              </p>
              <p>
                  <label>Password</label>
                  <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                  <br/>
                  <input type="password"  title='Password' value={password} onChange={e => setPassword(e.target.value)} required />
              </p>
              <p>
                  <button id="sub_btn" type="submit">Login</button>
              </p>
          
          {message && <p>{message}</p>}
          <footer>
              <p style={{textAlign:'center'}}><Link to="/register"> First time? Create an account</Link>.</p>
              <p style={{textAlign:'center'}}><Link to="/">Back to Homepage</Link>.</p>
          </footer>  
           
          </form>

          
     
      </div>
      </div>
      <div>
      <Footer/>
      </div> </div>
      </div>
  )}
  const HeaderStyle = {
  width: "100%",
  height: "150vh",
  
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
