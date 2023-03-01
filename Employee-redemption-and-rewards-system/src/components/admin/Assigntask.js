import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

function CompanyProfile() {
    
  const [employees, setEmployees] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddEmployee = () => {
    if (newEmployeeName.trim() !== '') {
      setEmployees([...employees, newEmployeeName.trim()]);
      setNewEmployeeName('');
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter(
    (employeeName) =>
      employeeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="company-profile-container">
      <h1>Company Profile</h1>
      <div className="add-employee-container">
        <h2>Add Employee</h2>
        <input
          type="text"
          placeholder="Enter new employee name"
          value={newEmployeeName}
          onChange={(event) => setNewEmployeeName(event.target.value)}
        />
        <button onClick={handleAddEmployee}>Add</button>
      </div>
      <div className="search-box-container">
        <h2>Search Employees</h2>
        <input
          type="text"
          placeholder="Enter employee name to search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="employee-list-container">
        <h2>Employee List</h2>
        <ul>
          {filteredEmployees.map((employeeName) => (
            <li key={employeeName}>{employeeName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanyProfile;
