// import React, { useState } from 'react';
// import { FaSignOutAlt } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../App.css"
// import AvatarWithRipple from "./icon"
// import ENavbar from './ENavbar';
// import Footer from '../footer/Footer'

// function EmployeeDashBoard() {

//   const [toDoList, setToDoList] = useState([
//     { task: "Task 1", priority: "High", completed: false },
//     { task: "Task 2", priority: "Medium", completed: true },
//     { task: "Task 3", priority: "Low", completed: false },
//   ]);

//   const handleTaskChange = (event, index) => {
//     const { name, value, type, checked } = event.target;
//     setToDoList((prevList) => {
//       const newList = [...prevList];
//       if (type === "checkbox") {
//         newList[index].completed = checked;
//       } else {
//         newList[index][name] = value;
//       }
//       return newList;
//     });
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//     if (allowedTypes.includes(file.type)) {
//       // code to handle file upload
//     } else {
//       alert("Only JPG, PNG, and PDF files are allowed.");
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <ENavbar/>
//       {/* <div className="table">
//         <div className="row mt-3">
//           <div className="col-md-8">
//             <div className="card">
//               <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
//                 <span>Certifications & Courses</span>
                
//               </div>
//               <div className="card-body">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th scope="col">Task</th>
//                       <th scope="col">Priority</th>
//                       <th scope="col">Completed</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {toDoList.map((task, index) => (
//                       <tr key={index}>
//                         <td>
//                           <input
//                             type="text"
//                             name="task"
//                             value={task.task}
//                             onChange={(event) => handleTaskChange(event, index)}
//                           />
//                         </td>
//                         <td>
//                           <select
//                             name="priority"
//                             value={task.priority}
//                             onChange={(event) => handleTaskChange(event, index)}
//                           >
//                             <option value="High">High</option>
//                             </select>
//                         </td>
//                         <td>
//                           <input
//                             type="checkbox"
//                             name="completed"
//                             checked={task.completed}
//                             onChange={(event) => handleTaskChange(event, index)}
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <div className="card-header font-weight-bold">Upload Files</div>
//               <div className="card-body">
//                 <form>
//                   <div className="form-group">
//                     <input
//                       type="file"
//                       className="form-control-file"
//                       id="fileUpload"
//                       accept=".jpg,.png,.pdf"
//                       onChange={handleFileUpload}
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <Footer/>
//     </div>
//   );
// }
// export default EmployeeDashBoard;

import React, { useState } from 'react';
import { Table, Button, Card, Row, Col, Nav } from 'react-bootstrap';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const EmployeeDashboard = () => {
const [showTokenTable, setShowTokenTable] = useState(false);
const [showRewardsTable, setShowRewardsTable] = useState(false);

const toggleTokenTable = () => setShowTokenTable(!showTokenTable);
const toggleRewardsTable = () => setShowRewardsTable(!showRewardsTable);

const tokenData = [
{ companyName: "SecureKloud", rewardDesc: "Vue Certification", date: "02/04/20", rating: "Excellent", tokensEarned: 40 },
{ companyName: "Zoho", rewardDesc: "React Certification", date: "02/02/22", rating: "Good", tokensEarned: 20 },
    { companyName: "Prodapt", rewardDesc: "Java Certification", date: "12/9/2022", rating: "Excellent", tokensEarned: 40 },
{companyName: "Deloitte", rewardDesc: "Python Certification", date: "23/02/2023", rating: "Average", tokensEarned: 10}
];

const totalTokens = tokenData.reduce((total, token) => total + token.tokensEarned, 0);

return (
    <><div> <Navbar /> </div><div className="container my-5">
        <Row>
            <Col md={3}>
                <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmqSWdlFU8Z2oiMcidHb4ZkdSRm2nnaw32w&usqp=CAU" />
                    <Card.Body>
                        <Card.Title><strong>Name:</strong> John </Card.Title>
                        <Card.Text><strong>Phone:</strong> +1 123-456-7890</Card.Text>
                        <Card.Text><strong>Email:</strong> john.doe@example.com</Card.Text>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ABC Corporation</td>
                                    <td>01/01/21</td>
                                </tr>
                                <tr>
                                    <td>XYZ Inc.</td>
                                    <td>02/02/22</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={9}>
                <h3  style={{ backgroundColor: "#2471A3", color: "white", fontSize: "50px" }}>Tokens Earned: {totalTokens}</h3>
                

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Reward Description</th>
                                <th>Date</th>
                                <th>Rating</th>
                                <th>Tokens Earned</th>
                                <th>View Certificates</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokenData.map((token, index) => (
                                <tr key={index}>
                                    <td>{token.companyName}</td>
                                    <td>{token.rewardDesc}</td>
                                    <td>{token.date}</td>
                                    <td>{token.rating}</td>
                                    <td>{token.tokensEarned}</td>
                                    <td><Button>View</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                
            </Col>
        </Row>
        
    </div> <div> <Footer/> </div></>
);
};
export default EmployeeDashboard;
