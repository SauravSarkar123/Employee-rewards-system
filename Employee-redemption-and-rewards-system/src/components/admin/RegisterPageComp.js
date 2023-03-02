import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CompanyHeader from '../header/companyheader';
import Footer from '../footer/Footer'
import { useHistory } from "react-router-dom";

import '../../App.css'

export default function RegisterComp(){ 
    const API_URL = "http://localhost:8800";
    const [comName, setUsercomName] = useState("");
    const [password, setPassword] = useState("");
    const [comEmail, setcomEmail] = useState(" ");
    const [mobile, setMobile] = useState("");
    const [comAddress, setcomAddress] = useState(" ");
    const [checkbox, setCheckbox] = useState(false)
    const history = useHistory();
    const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '100%', width: '100%',};


  
    const handleRegister = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post(`${API_URL}/logincomp`, {
         comName,comAddress, comEmail, password, mobile
        });
        
        console.log(response.data);
        history.push("/admindash",{
          // comName: comName,
          // comEmail: comEmail,
          // mobile: mobile,
          // comAddress: comAddress,
          // doj: DOJ
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div style={backgroundGradient}>
        <CompanyHeader />
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
                      <label>Company Name</label>
                      <input type="text" className="form-control" value={comName} title="UsercomName" onChange={e => setUsercomName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Company Email </label>
                      <input type="comEmail" className="form-control" value={comEmail} title="comEmail" onChange={e => setcomEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" value={password} title="Password" onChange={e => setPassword(e.target.value)} required />
                      {/* <div className="form-group">
<label>Date of Birth</label>
<input type="date" className="form-control" value={DOJ} title="DOB" onChange={e => setDOJ(e.target.value)} required />
</div> */}
</div>
<div className="form-group">
<label>Mobile</label>
<input type="text" className="form-control" value={mobile} title="Mobile" onChange={e => setMobile(e.target.value)} required />
</div>
<div className="form-group">
<label>Company Address</label>
<input type="text" className="form-control" value={comAddress} title="comAddress" onChange={e => setcomAddress(e.target.value)} required />
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
