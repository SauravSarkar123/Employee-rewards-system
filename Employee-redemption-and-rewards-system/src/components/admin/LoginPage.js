import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Footer from '../footer/Footer'
import { useHistory } from "react-router-dom";


import '../../App.css'

import LoginHeader from '../header/loginheader';



const API_URL = "http://localhost:8800"; 

export default function SignInPage() {
 const [comName, setname] = useState("");
 const [password, setPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const [message, setMessage] = useState('')
 const history = useHistory();
const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '110vh', width: '100%',};


 const handleLogin = async (event) => {
   event.preventDefault();

   try {
     const response = await axios.post(`${API_URL}/logincomp`, {
       comName,
       password,
     });
     setMessage(response.data.message)

     console.log(response.data);

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
     <div style={backgroundGradient}>
     <header style={ HeaderStyle }>
         <LoginHeader/>
         
     <div className="text-center m-5-auto">
         <h2>Sign in to us</h2>
         <form onSubmit={handleLogin}>
             <p>
                 <label>Username</label><br/>
                 <input type="text" title='name' value={comName} onChange={e => setname(e.target.value)} required />
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
         </form>
         {message && <p>{message}</p>}
         <footer>
             <p><Link to="/register"> First time? Create an account</Link>.</p>
             <p><Link to="/">Back to Homepage</Link>.</p>
         </footer>   
     </div>
     </header><Footer/>
     </div>
 )}
 const HeaderStyle = {
 width: "100%",
 height: "150vh",
 
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 backgroundSize: "cover"
}


