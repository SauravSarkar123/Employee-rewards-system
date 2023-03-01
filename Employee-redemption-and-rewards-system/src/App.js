import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/employee/LoginPage'
import RegisterPage from './components/employee/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import EmployeeDashboard from './components/employee/EmployeeDashBoard'
import UserProfile from './components/employee/UserProfile'
import AddEmployee from './components/admin/AddEmployee'
import AboutPage from './components/openPage/AboutPage'
import OpenPage from './components/openPage/Openpage'
import RegisterCompany from "./components/admin/RegisterPageComp";
import LoginComp from "./components/admin/LoginPage";
import AdminDashBoard from "./components/admin/AdminDashBoard"
import AddTask from './components/admin/AddTask'
import LoginHeader12 from './components/header/loginheader'
import RegisterHeader from './components/header/registerheader'
import EmployeeHomepage from './components/openPage/EmployeeHomepage'
import CompanyHome from './components/openPage/companyhome'
import CompanyHeader from './components/header/companyheader'


import './App.css'
import UserProfileHeader from './components/header/userprofile header'





export default function App() {
    return (
        <Router>
            <div>
           
                <Switch>
                    <Route exact path="/" component={OpenPage}/>
                    <Route exact path="/about" component={ AboutPage } />
                    <Route exact path="/logsign" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/registercompany" component={ RegisterCompany } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/employee" component={EmployeeDashboard} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/addemployee" component={AddEmployee}/>
                    <Route path="/logincomp" component={LoginComp}/>
                    <Route path="/admindash" component={AdminDashBoard}/>
                    <Route path="/addtask" component={AddTask}/>
                    <Route path="/loginheader" components={LoginHeader12}/>
                    <Route path="/registerheader" components={RegisterHeader}/>
                    <Route exact path="/employeehome" component={EmployeeHomepage}/>
                    <Route path="/companyhome" component={CompanyHome}/>
                    <Route path="Companyheader" component={CompanyHeader}/>
                    <Route path="/userprofileheader" components={UserProfileHeader}/>
                </Switch>
            </div>
        </Router>
    )
}

