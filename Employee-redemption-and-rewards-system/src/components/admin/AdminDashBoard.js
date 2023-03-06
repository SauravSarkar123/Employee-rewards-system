import React, { useState, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

function AdminDashBoard() {
  const [search, setSearch] = useState(''); // state for search input
  const [employees, setEmployees] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'name']);
  const tokenn = jwt_decode(cookies.access_token);
  const API_URL = "http://localhost:8800";

  const handleLogout = () => {
    removeCookie('access_token');
  };

  useEffect(() => {
       axios.get(`${API_URL}/empdetails`,{withCredentials:true})
        // make a GET request to the server
          .then(response => {
            console.log(response.data.user);
            setEmployees(response.data.user); 
            console.log(employees)// set the employees state with the retrieved data
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      const filteredEmployees = employees.filter(employee => { // filter employees by search input
        return employee.name.toLowerCase().includes(search.toLowerCase()) || (employee.id && employee.id.toString().includes(search));
      });

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <h5 className="card-header font-weight-bold">User Profile</h5>
            <div className="card-body d-flex flex-column align-items-center">
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
                alt=""
                style={{ height: '100px', width: '100px' }}
              />
              <div className="my-3">
                {/* <div className="font-weight-bold">Employee ID: 12345</div> */}
                <div className="font-weight-bold">Admin: {tokenn.name}</div>
                <Link to="/logincomp">
                  <button onClick={handleLogout} className="btn btn-primary" style={{ margin: "1rem" }}>
                    <FaSignOutAlt /> Log Out
                  </button>
                </Link>
                <Link to="/addemployee">
                  <button className="btn btn-primary" style={{ margin: "1rem" }}>
                    Add Employee
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header font-weight-bold">Employee Search</h5>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or ID"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">Search</button>
                </div>
              </div>
              <div className="list-group">
                {filteredEmployees.map(employee =>
                  <div key={employee.id} className="list-group-item">
                    <div className="d-flex justify-content"></div>
                <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h6 className="font-weight-bold mb-0">{employee.name}</h6>
                    <small>{employee.id}</small>
                  </div>
                  <Link to={`/employee/${employee.id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
);
}

export default AdminDashBoard;
