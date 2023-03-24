import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import SidebarMenu from "./side";

const CreateModal = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "name",
  ]);
  const tokenn = jwt_decode(cookies.access_token);

  const API_URL = "http://localhost:8800";

  const employeeName = props.match.params.Name;
  const compName = tokenn.name;
  const [task, setTask] = useState(" ");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [rewards, setRewards] = useState(0);
  // const [comName, setComName] = useState(" ");
  // const [empId, setEmpId] = useState(" ");
  
  

  const handleTasks = (e) => {
    setTask(e.target.value);
 
    // setProductId(product.productName);
  };

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDeadline = (e) => {
    setDeadline(e.target.value);
  };

  const handleRewards = (e) => {
    setRewards(e.target.value);
  };

  // const handleAddModel = (e) => {
  //   e.preventDefault();
  //   // console.log(`Selected Product: ${selectedProduct}`);
  //   // console.log(`Model Name: ${modelName}`);
  //   // console.log(`Model Description: ${modelDes}`);
  //   // console.log(`Deadline: ${deadline}`);
  // };
 
  const handleAddModel = async (event) => {

    event.preventDefault();
    

    try {
      console.log(compName, employeeName)
      const response = await axios.post(`${API_URL}/assigntask/${employeeName}/${compName}`, { task, taskName, taskDescription, deadline, rewards }, { withCredentials: true })
      
      console.log(response.data);
      console.log(employeeName)
      console.log(compName)
      
    } catch (error) {
      console.log("wrongyyyy")
      console.error(error);
    }
  };


  return (
    <div className="modal-container" >
      <header style={{ backgroundColor: '#F2F2F2', padding: '1.5rem 0',height:"100px" }}>
      <div style={{position:"relative",bottom:"20px",left:"20px"}}>
      <SidebarMenu /> </div>
  <h2
    className="heading"
    style={{ 
      fontFamily: 'Axiforma', 
      fontSize: '2.5rem', 
      marginBottom: '1.5rem',
      color: '#333333',
      textAlign: 'center',
      textTransform: 'uppercase',
      position:"relative",
      bottom:"60px"

    }}>
    ASSIGN TASK
  </h2>
</header>
<div
    className="Add-list"
    style={{
      backgroundColor: '#f5f5f5',
      color: '#222',
      margin: '0 auto',
      width: '1000px',
      textAlign: 'center',
      boxShadow: '0 24px 500px #26214a1a',
      borderRadius: '12px',
      padding: '2rem',
      marginLeft:"250px"
    }}
  >
        <form className="modal-form" >
          <label className="modlabel" htmlFor="text" >
            Task
          </label>
          <>
          <select className="inputfield" value={task} onChange={handleTasks} style={{
              backgroundColor: '#eee',
              borderRadius: '10px',
              padding: '1rem',
              border: 'none',
              marginBottom: '1rem',
              width: '100%'
            }}>
  <option value="" style={{textDecoration:"line-through", color:"grey"}}>Select Task</option>
  <option value="Frontend development">Frontend development</option>
  <option value="Frontend Design">Frontend Design</option>
  <option value="Backend API Development">Backend API Development</option>
  <option value="Database model">Database model</option>
  <option value="Smart contracts">Smart contracts</option>
  <option value="Blockchain Integration">Blockchain Integration</option>
  <option value="Documentation">Documentation</option>
</select>
          </>
          <label className="modlabel" htmlFor="text">
            Task Name
          </label>
          <input
            className="inputfield"
            id="model_id"
            name="task name"
            placeholder="Name"
            type="text"
            onChange={handleTaskName}
            style={{
              backgroundColor: '#eee',
              borderRadius: '10px',
              padding: '1rem',
              border: 'none',
              marginBottom: '1rem',
              width: '100%'
            }}
          />
          <label className="modlabel" htmlFor="text">
            Task Description
          </label>
          <textarea
            className="inputfield"
            id="description_name"
            name="description_name"
            placeholder="Description"
            type="text"
            onChange={handleTaskDescription}
            style={{
              backgroundColor: '#eee',
              borderRadius: '10px',
              padding: '1rem',
              border: 'none',
              marginBottom: '1rem',
              width: '100%'
            }}
          />
          <label className="modlabel" htmlFor="text">
            Deadline
          </label>
          <input
            className="inputfield"
            id="deadline"
            name="deadline"
            type="date"
            // value={deadline}
            onChange={handleDeadline}
            style={{
              backgroundColor: '#eee',
              borderRadius: '10px',
              padding: '1rem',
              border: 'none',
              marginBottom: '1rem',
              width: '100%'
            }}
          />
          <br />
          <label className="modlabel" htmlFor="text">
            Rewards
          </label>
          <>
          <select className="inputfield" value={rewards} onChange={handleRewards} style={{
              backgroundColor: '#eee',
              borderRadius: '10px',
              padding: '1rem',
              border: 'none',
              marginBottom: '1rem',
              width: '100%'
            }}>
              <option value="">Select Rewards</option>
              <option value="10"> 10 </option>
              <option value="20"> 20 </option>
              <option value="30"> 30  </option>
             
            </select>
          </>
          <Link to="/real">
          <button
            id="singlebutton"
            name="singlebutton"
            className="btM"
            onClick={handleAddModel}
          >
            Submit
          </button>
          </Link>
          <br />
        </form>
     </div>
      <br />
      {/* <div className="head2" style={{ fontFamily: "Axiforma" }}>
        Copyright &copy; 2023 | Asset Warrenty
      </div>
      <br /> */}
    </div>
  
  );
};

export default CreateModal;
