import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';
import './company profile.css';

function CompanyProfile() {
  const [employees, setEmployees] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleAddEmployee = () => {
    if (newEmployeeName.trim() !== '') {
      setEmployees([...employees, newEmployeeName.trim()]);
      setNewEmployeeName('');
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectEmployee = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const filteredEmployees = employees.filter(
    (employeeName) =>
      employeeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="company-profile-container">
        <Navbar/>
      <div className="company-header-container">
        <div className="company-info-container">
          <h1>Company Profile</h1>
          <img src="company-logo.png" alt="Company Logo" />
          <div className="company-details">
            <p className="company-name">ABC Company</p>
            <p className="company-id">ID: 123456</p>
          </div>
        </div>
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
      </div>
      <div className="search-employees-container">
        <h2>Search Employees</h2>
        <input
          type="text"
          placeholder="Enter employee name to search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="select-employee-container">
        <h2>Select Employee</h2>
        <select value={selectedEmployee} onChange={handleSelectEmployee}>
          <option value="">Select an employee</option>
          {filteredEmployees.map((employeeName) => (
            <option key={employeeName} value={employeeName}>
              {employeeName}
            </option>
          ))}
        </select>
      </div>
      <Footer/>
    </div>
  );
}

export default CompanyProfile;
