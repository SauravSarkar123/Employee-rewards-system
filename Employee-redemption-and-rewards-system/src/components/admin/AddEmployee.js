// import React, { useState } from 'react';
// import Navbar from '../header/Navbar';
// import '../../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom';
// // import { background } from '@chakra-ui/react';
// const AddEmployee = () => {
//   const API_URL = "http://localhost:8800";
//     const [Name, setName] = useState("");
//     const [RegisterNum, setRegisterNum] = useState("");
//     const [Email, setEmail] = useState(" ");
//     const [Password, setPassword] = useState("");
//     const [Address, setAddress] = useState(" ");
//     const [Mobile, setMobile] = useState(" ");
// const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '100%', width: '100%',};

//   const history = useHistory();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try{
//       const response = await axios.post(`${API_URL}/addemployee`,{
//         Name, RegisterNum, Email, Password, Address, Mobile
//       });

//       console.log(response.data);
//       history.push("/userprofile")
//     }
    
//    catch(error){
//     console.error(error);

//   }
// }

//   return (
//     <div style={backgroundGradient}>
//     <div>
//       <Navbar />

//       <div className='addemp'>
//       <div className='container mt-4'>
//         <div className='row'>
//           <div className='col-md-8'>
//             <div className='card'>
//               <div className='card-header bg-primary text-white'>
//                 <h4>Add employee</h4>
//               </div>
//               <div className='card-body'>
//                 <form onSubmit={handleSubmit}>
//                   <div className='form-group'>
                    
//                     <label><b>Name</b></label>
//                     <input type="text" className='form-control' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} required/>
//                   </div>
//                   <div className='form-group'>
//                     <label><b>Register Number</b></label>
//                     <input className='form-control' placeholder='DOB' value={employee.dob} onChange={(e) => setEmployee({...employee, dob: e.target.value})}></input>
//                   </div>
//                   <div className='form-group'>
//                     <label><b>Number</b> </label>
//                     <input className='form-control' placeholder='Phone Number' value={employee.phoneNumber} onChange={(e) => setEmployee({...employee, phoneNumber: e.target.value})}></input>
//                   </div>
//                   <div className='form-group'>
//                     <label><b>Aadhaar Num</b> </label>
//                     <input className='form-control' placeholder='Aadhaar' value={employee.aadhaarNumber} onChange={(e) => setEmployee({...employee, aadhaarNumber: e.target.value})}></input>
//                   </div>
//                   <div className='form-group'>
//                     <label><b>Address</b></label>
//                     <input className='form-control' placeholder='Address' value={employee.address} onChange={(e) => setEmployee({...employee, address: e.target.value})}></input>
//                   </div>
//                   <div className='form-group'>
                    
//                     <label><b>Upload Photo</b></label>
//                     <input type='file' className='form-control-file' value={employee.photo} onChange={(e) => setEmployee({...employee, photo: e.target.value})}></input>
//                   </div>
//                   <button className='btn btn-primary' type='submit'>Submit</button    >
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// );
// };

// export default AddEmployee;
