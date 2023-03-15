// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Loginheader12 from '../header/compReg';
// import Footer from '../footer/Footer';
// import { useHistory } from 'react-router-dom';
// import comp from '../../image/compreg.jpg';
// import '../../App.css';
// import styles from '../openPage/openpage.module.css';
// import reg from "../../components/openPage/r4.svg"

// export default function RegisterComp() {
//   const API_URL = 'http://localhost:8800';
//   const [comName, setUsercomName] = useState('');
//   const [password, setPassword] = useState('');
//   const [comEmail, setcomEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [comAddress, setcomAddress] = useState('');
//   const [checkbox, setCheckbox] = useState(false);
//   const history = useHistory();
//   const isAdmin = false;

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(`${API_URL}/registercompany`, {
//         comName,
//         comAddress,
//         comEmail,
//         password,
//         mobile,
//         isAdmin,
//       });

//       console.log(response.data);
//       history.push('/logincomp', {
//         // comName: comName,
//         // comEmail: comEmail,
//         // mobile: mobile,
//         // comAddress: comAddress,
//         // doj: DOJ
//       });
//     } catch (error) {
//       console.error(error);
//       alert(error);
//     }
//   };

//   return (
//     <div style={{backgroundImage: `url(${reg})`}}>
//       <Loginheader12 />
//       <div className={styles.image_cont} id="empp" style={{marginRight:"300px"}}>

//             <div
//               className='col-md-8 mx-auto my-auto text-left'
//               style={{

//                 width: '100%',

//               }}>
//           <form onSubmit={handleRegister} style={{marginLeft:"100px", boxShadow: '00px 100px 60px 0px rgba(0,0,0,0.5)'}} >
//             <div style={{ color: 'black' }}>
//               <div className="form-group">

//                 <input
//                   type="text"
//                   placeholder='Company Name'
//                   className="form-control"
//                   value={comName}
//                   title="UsercomName"
//                   onChange={(e) => setUsercomName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">

//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder='Company Email'
//                   value={comEmail}
//                   title="comEmail"
//                   onChange={(e) => setcomEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">

//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder='Password'
//                   value={password}
//                   title="password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">

//                 <input
//                   type="text"
//                   placeholder='Mobile'
//                   className="form-control"
//                   value={mobile}
//                   title="mobile"
//                   onChange={(e) => setMobile(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">

//                 <textarea
//                   type="text"
//                   className="form-control"
//                   placeholder='Company Address'
//                   value={comAddress}
//                   title="comAddress"
//                   onChange={(e) => setcomAddress(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="checkbox"
//                   title="checkbox"
//                   checked={checkbox}
//                   onChange={(e) => setCheckbox(e.target.checked)}
//                   required
//                 />
//                 <label style={{ marginLeft: '10px' }}>
//                   I accept the{' '}
//                   <Link to="/" style={{ textDecoration: 'underline' }}>
//                     Terms and Conditions
//                   </Link>
//                 </label>
//               </div>
//               <button type="submit" className="btn btn-success">
//                 Register
//               </button>
//             </div>

//           </form>

//           </div>
//         </div>
//       </div>

//   )};

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loginheader12 from "../header/compReg";
import Footer from "../footer/Footer";
import { useHistory } from "react-router-dom";
import comp from "../../image/compreg.jpg";
import "../../App.css";
import styles from "../openPage/openpage.module.css";
import reg from "../../components/openPage/r5.svg";

export default function RegisterComp() {
  const API_URL = "http://localhost:8800";
  const [comName, setUsercomName] = useState("");
  const [password, setPassword] = useState("");
  const [comEmail, setcomEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [comAddress, setcomAddress] = useState("");
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
      history.push("/logincomp", {
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
    <div style={{ backgroundImage: `url(${reg})` }}>
      <Loginheader12 />
      <div
        className={styles.image_cont}
        id="empp"
        style={{ marginRight: "300px" }}
      >
        <div
          className="col-md-8 mx-auto my-auto text-left"
          style={{
            width: "100%",
          }}
        >
          <form
            onSubmit={handleRegister}
            style={{
              marginLeft: "200px",
              borderRadius: "50px",
              marginBottom: "100px",
              boxShadow: "10px 90px 40px 10px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ textAlign: "center", margin: "auto" }}>
              <div className="fonty">
                <h2>JOIN US</h2>
                <h5>CREATE YOUR COMPANY ACCOUNT</h5>
              </div>
            </div>
            <div style={{ color: "black" }}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                    value={comName}
                    title="UsercomName"
                    onChange={(e) => setUsercomName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Company Email"
                    value={comEmail}
                    title="comEmail"
                    onChange={(e) => setcomEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="form-control"
                    value={mobile}
                    title="mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6 form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    title="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    placeholder="Company Address"
                    className="form-control"
                    value={comAddress}
                    title="comAddress"
                    onChange={(e) => setcomAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <div style={{ marginLeft: "110px" }}>
                    <label
                      className="form-check-label"
                      style={{ color: "black" }}
                    >
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={checkbox}
                        onChange={(e) => setCheckbox(e.target.checked)}
                        required
                      />
                      &nbsp;I_agree_to_the_terms_and_conditions
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginLeft: "160px" }}
              >
                Register
              </button>
              <div style={{ marginTop: "30px", marginRight: "130px" }}>
                <p className="forgot-password text-right">
                  Already registered <Link to="/logincomp">log in?</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
