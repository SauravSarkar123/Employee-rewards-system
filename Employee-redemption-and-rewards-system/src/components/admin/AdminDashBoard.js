import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

function AdminDashBoard() {
  const [search, setSearch] = useState(''); // state for search input

  const employees = [ // dummy employee data
    { id: 12345, name: 'John Doe' },
    { id: 67890, name: 'Jane Smith' },
    { id: 13579, name: 'Bob Johnson' },
    { id: 24680, name: 'Sara Lee' },
  ];

  const filteredEmployees = employees.filter(employee => { // filter employees by search input
    return employee.name.toLowerCase().includes(search.toLowerCase()) || employee.id.toString().includes(search);
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
                <div className="font-weight-bold">Employee ID: 12345</div>
                <div className="font-weight-bold">admin Name: John Doe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
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
                {filteredEmployees.map(employee => (
                  <a href="#" className="list-group-item list-group-item-action" key={employee.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>{employee.name}</div>
                      <div>{employee.id}</div>
                    </div>
                  </a>
                ))}
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
