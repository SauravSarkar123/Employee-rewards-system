import React, { useState, useEffect } from "react";
import "./CreateModal.css";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateModal = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "name",
  ]);
  const tokenn = jwt_decode(cookies.access_token);

  const API_URL = "http://localhost:8800";

  const employeeId = props.match.params._id;
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
    // setComName(compName);
    // setEmpId(employeeId);

    event.preventDefault();
    

    try {
     
      const response = await axios.post(`${API_URL}/assigntask/${employeeId}/${compName}`,{compName, employeeId, task, taskName,taskDescription,deadline,rewards}, { withCredentials: true })
      
      console.log(response.data);
      console.log(employeeId)
      console.log(compName)
      
    } catch (error) {
      console.log("wrongyyyy")
      console.error(error);
    }
  };


  return (
    <div className="modal-container" >
      <div className="Add-list" style={{ display: 'block' }}  >
        <br />
        <h2 className="heading" style={{ fontFamily: "Axiforma" }}>
          ASSIGN TASK
        </h2>
        <br />
        <form className="modal-form" >
          <label className="modlabel" htmlFor="text">
            Task
          </label>
          <>
          <select className="inputfield" value={task} onChange={handleTasks}>
  <option value="">Select product</option>
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
          />
          <br />
          <label className="modlabel" htmlFor="text">
            Rewards
          </label>
          <>
          <select className="inputfield" value={rewards} onChange={handleRewards}>
              <option value="">Select Rewards</option>
              <option value="10"> 10 </option>
              <option value="20"> 20 </option>
              <option value="30"> 30  </option>
             
            </select>
          </>
          <Link>
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
