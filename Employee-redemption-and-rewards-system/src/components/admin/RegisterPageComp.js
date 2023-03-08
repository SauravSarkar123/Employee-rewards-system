// import React, { useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Loginheader12 from '../header/compReg';
// import Footer from '../footer/Footer'
// import { useHistory } from "react-router-dom";
// import comp from "../../image/compreg.jpg"

// import '../../App.css'

// export default function RegisterComp(){ 
//     const API_URL = "http://localhost:8800";
//     const [comName, setUsercomName] = useState("");
//     const [password, setPassword] = useState("");
//     const [comEmail, setcomEmail] = useState(" ");
//     const [mobile, setMobile] = useState("");
//     const [comAddress, setcomAddress] = useState(" ");
//     const [checkbox, setCheckbox] = useState(false)
//     const history = useHistory();
//     const isAdmin = false;
//     const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '100%', width: '100%',};


  
//     const handleRegister = async (event) => {
//       event.preventDefault();
  
//       try {
//         const response = await axios.post(`${API_URL}/registercompany`, {
//          comName,comAddress, comEmail, password, mobile, isAdmin
//         });
        
//         console.log(response.data);
//         history.push("/logincomp",{
//           // comName: comName,
//           // comEmail: comEmail,
//           // mobile: mobile,
//           // comAddress: comAddress,
//           // doj: DOJ
//         });
//       } catch (error) {
//         console.error(error);
//         alert(error)
//       }
//     };
  
//     return (
//       <div style={backgroundGradient}>
//         <Loginheader12 />
//         <header style={ HeaderStyle }>
//           <img src={comp}/>
//           <div className="container-fluid h-100" >
//             <div className="row h-100">
//               <div className="col-md-6 mx-auto my-auto text-center">
//                 <div style={{color:"black", paddingTop:"50px"}}>
//                   <h2>Join us</h2>
//                   <h5>Create your personal account</h5>
//                 </div>
//                 <form onSubmit={handleRegister}>
//                   <div style={{color:"black"}}>
//                     <div className="form-group">
//                       <label>Company Name</label>
//                       <input type="text" className="form-control" value={comName} title="UsercomName" onChange={e => setUsercomName(e.target.value)} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Company Email </label>
//                       <input type="comEmail" className="form-control" value={comEmail} title="comEmail" onChange={e => setcomEmail(e.target.value)} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Password</label>
//                       <input type="password" className="form-control" value={password} title="Password" onChange={e => setPassword(e.target.value)} required />
//                       {/* <div className="form-group">
// <label>Date of Birth</label>
// <input type="date" className="form-control" value={DOJ} title="DOB" onChange={e => setDOJ(e.target.value)} required />
// </div> */}
// </div>
// <div className="form-group">
// <label>Mobile</label>
// <input type="text" className="form-control" value={mobile} title="Mobile" onChange={e => setMobile(e.target.value)} required />
// </div>
// <div className="form-group">
// <label>Company Address</label>
// <input type="text" className="form-control" value={comAddress} title="comAddress" onChange={e => setcomAddress(e.target.value)} required />
// </div>

// {/* <div className="form-group form-check">
// <input type="checkbox" className="form-check-input" checked={checkbox} title="Is Admin" onChange={e => setIsAdmin(e.target.checked)} />
// <label className="form-check-label">Is Admin</label>
// </div> */}
// <button type="submit" className="btn btn-primary">Submit</button>
// <Link to="/" className="btn btn-link">Cancel</Link>
// </div>
// </form>
// </div>
// </div>
// </div>
// </header>
// <Footer />
// </div>
// )
// }




// const HeaderStyle = {

// backgroundSize: 'cover',
// height: '100%',
// width:"100%"
// }


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loginheader12 from '../header/compReg';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';
import comp from '../../image/compreg.jpg';
import '../../App.css';
import styles from '../openPage/openpage.module.css';


export default function RegisterComp() {
  const API_URL = 'http://localhost:8800';
  const [comName, setUsercomName] = useState('');
  const [password, setPassword] = useState('');
  const [comEmail, setcomEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [comAddress, setcomAddress] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const history = useHistory();
  const isAdmin = false;

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/registercompany`, {
        comName,
        comAddress,
        comEmail,
        password,
        mobile,
        isAdmin,
      });

      console.log(response.data);
      history.push('/logincomp', {
        // comName: comName,
        // comEmail: comEmail,
        // mobile: mobile,
        // comAddress: comAddress,
        // doj: DOJ
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <div>
      <Loginheader12 />
      <div className={styles.image_container} id="empp" style={{marginRight:"300px"}}>

            <div
              className='col-md-8 mx-auto my-auto text-left'
              style={{
                
                width: '100%',
              
              }}>
          <form onSubmit={handleRegister} style={{marginLeft:"100px"}} >
            <div style={{ color: 'black' }}>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={comName}
                  title="UsercomName"
                  onChange={(e) => setUsercomName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company Email </label>
                <input
                  type="email"
                  className="form-control"
                  value={comEmail}
                  title="comEmail"
                  onChange={(e) => setcomEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  title="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile Number </label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  title="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address </label>
                <textarea
                  type="text"
                  className="form-control"
                  value={comAddress}
                  title="comAddress"
                  onChange={(e) => setcomAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  title="checkbox"
                  checked={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                  required
                />
                <label style={{ marginLeft: '10px' }}>
                  I accept the{' '}
                  <Link to="/" style={{ textDecoration: 'underline' }}>
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </div>
            
          </form>
          
          </div>
          <img src={comp} style={{ width: '600px', height: '500px', marginBottom:'15%'}} alt='Employee' /> 
        </div>
      </div>
      
     
      
  )};    