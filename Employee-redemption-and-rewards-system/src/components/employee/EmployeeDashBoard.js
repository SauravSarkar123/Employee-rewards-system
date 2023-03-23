import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
// import { FaBars, FaUserPlus, FaTasks, FaGift } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileText } from '@fortawesome/free-solid-svg-icons'


const Header = ({ employeeName }) => {
    return (
      <header style={{ backgroundColor: 'navy', padding: '30px', display: 'flex', justifyContent: 'space-between',textAlign: 'center' }}>
        <h1 style={{  color: 'white', marginLeft: '450px' }}>Employee Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <FaUser style={{ color: 'orange' }} />
            <span style={{ color: 'white', marginLeft: '5px' }}>{employeeName}</span>
          </div>
          <FaBell style={{ color: 'white' }} />
        </div>
      </header>
    );
  }
  

// const Sidebar = () => {
//   return (
//     <aside style={{ backgroundColor: 'bluegrey' }}>
//       <div style={{ backgroundColor: 'bluegrey', color: 'black' }}>Employee Profile</div>
//       {/* <h2 style={{ textAlign: 'center', color: 'black' }}>Dashboard</h2> */}
//       {/* <div style={{ backgroundImage: 'url("path/to/image")' }}>Task</div> */}
//     </aside>
//   );
// }

const Card = (props) => {
  return (
    <div style={{ 
      backgroundColor: props.style.backgroundColor, 
      color: 'white', 
      padding: '40px', 
      fontSize: '20px', 
      display: 'flex', 
      flexDirection: 'row-reverse', // change flexDirection to row-reverse
      justifyContent: 'space-between', // add justifyContent
      alignItems: 'center',
      borderRadius: '10px', 
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 5.0)', 
      margin: '20px', 
      width: '500px'
    }}>
      <FontAwesomeIcon icon={faFileText} size="4x" style={{ marginBottom: '20px', marginLeft: '20px', opacity: '0.75' }} />
      <div>
        <h3 style={{ marginBottom: '10px', fontSize:'60px' }}>{props.count}</h3>
        <p>{props.title}</p>
      </div>
    </div>
  );
}



  
  const MainBody = () => {
    return (
      <main style={{ display: 'flex', justifyContent: 'center', padding: '30px', alignItems: 'center', fontStyle: 'kanit' }}>
        <Card style={{ 
  backgroundColor: '#17A2B8', 
  color: '#fff', 
  fontWeight: 'bold', 
  textAlign: 'center',
  borderRadius: '5px',
  padding: '20px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: 'pointer'
}} 
onMouseEnter={(e) => {e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}}
onMouseLeave={(e) => {e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)'}}
title="New Task" 
count="10" />

<Card style={{ 
  backgroundColor: '#32CD32', 
  color: '#fff', 
  fontWeight: 'bold', 
  textAlign: 'center',
  borderRadius: '5px',
  padding: '20px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: 'pointer'
}} 
onMouseEnter={(e) => {e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}}
onMouseLeave={(e) => {e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)'}}
title="In Progress" 
count="10" />

<Card style={{ 
  backgroundColor: 'orange', 
  color: '#fff', 
  fontWeight: 'bold', 
  textAlign: 'center',
  borderRadius: '5px',
  padding: '20px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: 'pointer'
}} 
onMouseEnter={(e) => {e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}}
onMouseLeave={(e) => {e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)'}}
title="Completed" 
count="20" />

<Card style={{ 
  backgroundColor: '#d21f3c', 
  color: '#fff', 
  fontWeight: 'bold', 
  textAlign: 'center',
  borderRadius: '5px',
  padding: '20px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.3s ease-in-out',
  cursor: 'pointer'
}} 
onMouseEnter={(e) => {e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'}}
onMouseLeave={(e) => {e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)'}}
title="All Tasks" 
count="30" />

      </main>
    );
  }
  
  

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <MainBody />
    </div>
  );
}

export default EmployeeDashboard;
