import React, { useState, useEffect } from 'react'
import './task.css'
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import SidebarMenu from './side';
const RewardTasks = (props) => {
  const [tasks, setTasks] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies([
      "access_token",
      "name",
    ]);
  


  
  const tokenn = jwt_decode(cookies.access_token);

  const API_URL = "http://localhost:8800";
  // const empName = props.match.params.empName;
  // const taskk = props.match.params.task;
  // console.log(empName);

  const compName = tokenn.name;
  const [task, setTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [rewards, setRewards] = useState(0);
  

  const [projects, setProjects] = useState([
    { name: 'Project 1', deadline: '2023-04-30', status: 'In progress', tasks: 3 },
    { name: 'Project 2', deadline: '2023-05-15', status: 'Not started', tasks: 0 },
    { name: 'Project 3', deadline: '2023-05-31', status: 'Completed', tasks: 5 },
    { name: 'Project 3', deadline: '2023-05-31', status: 'Completed', tasks: 5 }
  ]);

  useEffect(() => {
    axios
      .get(`${API_URL}/gettasks`, { withCredentials: true })
      .then((response) => {
        setTasks(response.data.tasks.filter((tasks) => tasks.status === "Approved"));
        console.log(response.data.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 
  const Rewarded = async (taskk) => {
    const confirmed = window.confirm(
      "Reward this Employee?"
    );
    if (confirmed) {
      axios
        .put(
          `${API_URL}/updatetask/${taskk._id}`,
          { status: "Rewarded" },
          { withCredentials: true }
        )
        .then((response) => {
          const updatedTask = response.data.updatedTask;
          window.location.reload()
          console.log(response.data.updatedTask);
          // update tasks state
          setTask(
            task.map((t) => {
              if (t._id === updatedTask._id) {
                window.location.reload()
                return updatedTask;
              } else {
                window.location.reload()
                return t;
              }
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  const handleApproveTask = async (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], approved: true };
    setTasks(updatedTasks);
    alert('Task has been approved');
console.log(tasks)
    const respo = await axios.get(
      `${API_URL}/status/${tasks.EmpName}`,{withCredentials:true}
     

    )
     console.log(respo.data)

    //  const delete = await axios.get()
  };

  


  return (
    <div className="container">
            <div className="main">
              
        <h1>Task Management</h1>
        <div style={{position:"relative",right:"550px",bottom:"70px"}}> <SidebarMenu/> </div>
        <div className="summary">
        
  <div className="summary-card" style={{ backgroundColor: "#fff", padding: "20px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)", borderRadius: "5px", marginBottom: "20px" }}>
    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Ongoing Projects</h2>
    <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "10px 0 0 0" }}>{projects.filter(p => p.status === 'In progress').length}</p>
  </div>
  <div className="summary-card" style={{ backgroundColor: "#fff", padding: "20px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)", borderRadius: "5px", marginBottom: "20px" }}>
    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Upcoming Deadlines</h2>
    <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "10px 0 0 0" }}>{projects.filter(p => new Date(p.deadline) <= new Date()).length}</p>
  </div>
  <div className="summary-card" style={{ backgroundColor: "#fff", padding: "20px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)", borderRadius: "5px", marginBottom: "20px" }}>
    <h2 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0" }}>Pending Tasks</h2>
    <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "10px 0 0 0" }}>{tasks.filter(t => t.progress < 100).length}</p>
  </div>
</div>

<div className="tasks" style={{ 
  background: 'white', 
  padding: '20px', 
  borderRadius: '8px', 
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)', 
  border: '1px solid #ccc',
  marginBottom: '20px',
  }}>
  <h2>Tasks</h2>
  <div className="task-list">
  <div className="task-list">
    <div className="task-list-header">
      <div className="task-name" style={{ width: '25%' }}>Task Name</div>
      <div className="task-assigned-to" style={{ width: '20%' }}>Assigned To</div>
      <div className="task-due-date" style={{ width: '10%' }}>Due Date</div>
      <div className="task-progress" style={{ width: '10%' }}>Rewards</div>
      
      <div className="task-status" style={{ width: '15%', paddingLeft: "30px" }}>Actions</div>
    </div>
    {tasks.map((task) => (
      <div className="task-list-item"  style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginTop: '10px', 
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px',
      }}>
        <div className="task-name" style={{ width: '25%' }}>{task.task}</div>
        <div className="task-assigned-to" style={{ width: '20%' }}>{task.empName}</div>
        <div className="task-due-date" style={{ width: '10%', marginLeft:"80px" }}>{task.deadline}</div>
        <div className="task-progress" style={{ width: '10%' ,marginLeft:"40px"}}>{task.rewards}
        </div>
        
        <div className="task-status" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginLeft: 'auto',
          width: '15%',
        }}>
          {!task.approved ? (
            <div>
              <button style={{ 
                marginRight: '10px', 
                padding: '8px 16px', 
                background: 'green', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }} onClick={() => Rewarded(task)}>Reward</button> 
            </div>
          ) : (
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Rewarded</div>
          )}
          {/* {!task.rejected ? (
            <div>
              <button style={{ 
                padding: '8px 16px', 
                background: 'red', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }} onClick={() => handleRejectTask(index)}>Reject</button>
            </div>
          ) : (
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Rejected</div>
          )} */}
        </div>
      </div>
    ))}
</div>
      </div>
    </div>
  </div>
</div>
);
};

export default RewardTasks;