import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import axios from "axios"
const AddEmployee = (props) => {
  const API_URL = "http://localhost:8800";
    const [comName, setcomName] = useState("");
    const [comId, setcomId] = useState("");
    const employeeId = props.match.params._id;
    const employeeName = props.match.params.name;
    const employeeAddress = props.match.params.address;
    const employeeMobile = parseInt(props.match.params.mobile);

    const employeeEmail = props.match.params.email;
    console.log(employeeId,employeeAddress,employeeEmail,employeeMobile,employeeName)
const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '100%', width: '100%',};

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post(`${API_URL}/adde/${employeeId}/${employeeName}/${employeeAddress}/${employeeMobile}/${employeeEmail}`,{
        comName, comId
      }, { withCredentials: true });

      console.log(response.data);
      history.push("/userprofile")
    }
    
   catch(error){
    console.error(error);
    alert(error)

  }
}

  return (
    <div style={backgroundGradient}>
    <div>
      <Navbar />

      <div className='addemp'>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header bg-primary text-white'>
                <h4>Add employee</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    
                    <label><b>Company Name</b></label>
                    <input type="text" className='form-control' placeholder='Company Name' value={comName} onChange={(e) => setcomName(e.target.value)} required/>
                  </div>
                  <div className='form-group'>
                    <label><b>Company ID Number</b></label>
                    <input className='form-control' placeholder='RegNum' value={comId} onChange={(e) => setcomId(e.target.value)}></input>
                  </div>
                  {/* <div className='form-group'>
                    <label><b>Email</b></label>
                    <input className='form-control' placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                  </div>
                  <div className='form-group'>
                    <label><b>Number</b> </label>
                    <input className='form-control' placeholder='Phone Number' value={Mobile} onChange={(e) => setMobile(e.target.value)}></input>
                  </div> */}
                  {/* <div className='form-group'>
                    <label><b>Aadhaar Num</b> </label>
                    <input className='form-control' placeholder='Aadhaar' value={employee.aadhaarNumber} onChange={(e) => setEmployee({...employee, aadhaarNumber: e.target.value})}></input>
                  </div> */}
                  {/* <div className='form-group'>
                    <label><b>Address</b></label>
                    <input className='form-control' placeholder='Address' value={Address} onChange={(e) => setAddress(e.target.value)}></input>
                  </div> */}
                  {/* <div className='form-group'>
                    
                    <label><b>Upload Photo</b></label>
                    <input type='file' className='form-control-file' value={employee.photo} onChange={(e) => setEmployee({...employee, photo: e.target.value})}></input>
                  </div> */}
                  <button className='btn btn-primary' type='submit'>Submit</button    >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
);
};

export default AddEmployee;
