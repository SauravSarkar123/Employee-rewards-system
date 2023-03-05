import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RegisterHeader from '../header/registerheader';
import Footer from '../footer/Footer'
import { useHistory } from "react-router-dom";

import '../../App.css'

export default function Register(){ 
    const API_URL = "http://localhost:8800";
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(" ");
    const [isAdmin, setIsAdmin] = useState(false);
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState(" ");
    const [DOJ, setDOJ] = useState(0);
    const [checkbox, setCheckbox] = useState(false)
    const history = useHistory();
    const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '100%', width: '100%',};


  
    const handleRegister = async (event) => {
      event.preventDefault();
  
      try {
        
        const response = await axios.post(`${API_URL}/register`, {
          name,mobile,address,DOJ,
          password,
          email
        });
        
        console.log(response.data);
        history.push("/userprofile");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div style={backgroundGradient}>
        <RegisterHeader/>
        <header style={ HeaderStyle }>
          <div className="container-fluid h-100" >
            <div className="row h-100">
              <div className="col-md-6 mx-auto my-auto text-center">
                <div style={{color:"black", paddingTop:"50px"}}>
                  <h2>Join us</h2>
                  <h5>Create your personal account</h5>
                </div>
                <form onSubmit={handleRegister}>
                  <div style={{color:"black"}}>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" value={name} title="Username" onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" value={email} title="Email" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" value={password} title="Password" onChange={e => setPassword(e.target.value)} required />
                      <div className="form-group">
<label>Date of Birth</label>
<input type="date" className="form-control" value={DOJ} title="DOB" onChange={e => setDOJ(e.target.value)} required />
</div>
</div>
<div className="form-group">
<label>Mobile</label>
<input type="text" className="form-control" value={mobile} title="Mobile" onChange={e => setMobile(e.target.value)} required />
</div>
<div className="form-group">
<label>Address</label>
<input type="text" className="form-control" value={address} title="Address" onChange={e => setAddress(e.target.value)} required />
</div>

{/* <div className="form-group form-check">
<input type="checkbox" className="form-check-input" checked={checkbox} title="Is Admin" onChange={e => setIsAdmin(e.target.checked)} />
<label className="form-check-label">Is Admin</label>
</div> */}
<button type="submit" className="btn btn-primary">Submit</button>
<Link to="/" className="btn btn-link">Cancel</Link>
</div>
</form>
</div>
</div>
</div>
</header>
<Footer />
</div>
)
}




const HeaderStyle = {

backgroundSize: 'cover',
height: '100%',
width:"100%"
}
// import React, { useState } from 'react';
// import styles from './reg.module.css';

// function App() {
//   const [isSignUpActive, setIsSignUpActive] = useState(false);

//   const handleSignUpClick = () => {
//     setIsSignUpActive(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpActive(false);
//   };

//   return (
//     <div className={styles.body}>
//     <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
//       <div className="form-container sign-up-container">
//         <form className={styles.form} action="#">
//           <h1 className={styles.h1}>Create Account</h1>
//           <div className="social-container">
//             <a href="#" id='a' className="social"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" id='a' className="social"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" id='a' className="social"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className={styles.span}>or use your email for registration</span>
//           <input className={styles.input} type="text" placeholder="Name" />
//           <input  className={styles.input} type="email" placeholder="Email" />
//           <input className={styles.input} type="password" placeholder="Password" />
//           <button className={styles.button}>Sign Up</button>
//         </form>
//       </div>
//       <div className="form-container sign-in-container">
//         <form action="#">
//           <h1 className={styles.h1}>Sign in</h1>
//           <div className="social-container">
//             <a href="#" id='a' className="social"><i className="fab fa-facebook-f"></i></a>
//             <a href="#" id='a' className="social"><i className="fab fa-google-plus-g"></i></a>
//             <a href="#" id='a' className="social"><i className="fab fa-linkedin-in"></i></a>
//           </div>
//           <span className={styles.span}>or use your account</span>
//           <input className={styles.input} type="email" placeholder="Email" />
//           <input className={styles.input} type="password" placeholder="Password" />
//           <a id='a' href="#">Forgot your password?</a>
//           <button className='buttonss'>Sign In</button>
//         </form>
//       </div>
//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h2 className={styles.h2}>Welcome Back!</h2>
//             <p className={styles.p}>To keep connected with us please login with your personal info</p>
//             <button id='button' className="ghost" onClick={handleSignInClick}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h2 className={styles.h2}>Hello, Friend!</h2>
//             <p className={styles.p}>Enter your personal details and start journey with us</p>
//             <button id='buttonss' className="ghost" onClick={handleSignUpClick}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
