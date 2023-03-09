import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginPage from './components/employee/LoginPage'
import RegisterPage from './components/employee/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import EmployeeDashboard from './components/employee/EmployeeDashBoard'
import ProfilePage from './components/employee/UserProfile'
import AddEmployee from './components/admin/AddEmployee'
import AboutPage from './components/openPage/AboutPage'
import OpenPage from './components/openPage/Openpage'
import RegisterCompany from "./components/admin/RegisterPageComp";
import LoginComp from "./components/admin/LoginPage";
import AdminDashBoard from "./components/admin/AdminDashBoard"
import AddTask from './components/admin/AddTask'
import EmployeeHomepage from './components/employee/EmployeeHomepage'
import EmpProfile from "./components/admin/EmpProfile"
import CompanyProfile from './components/admin/Assigntask'





export default function App() {
    return (
        <Router>
            <div>
           
                <Switch>
                    <Route exact path="/" component={OpenPage}/>
                    <Route exact path="/about" component={ AboutPage } />
                    {/* <Route exact path="/logsign" component={ LandingPage } /> */}
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/registercompany" component={ RegisterCompany } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/employee" component={EmployeeDashboard} />
                    <Route path="/userprofile" component={ProfilePage} />
                    <Route path="/addemployee" component={AddEmployee}/>
                    <Route path="/logincomp" component={LoginComp}/>
                    <Route path="/admindash" component={AdminDashBoard}/>
                    <Route path="/addtask" component={AddTask}/>
                    <Route exact path="/employeehome" component={EmployeeHomepage}/>
                    {/* <Route path="/companyhome" component={CompanyHome}/> */}
                    <Route path="/assigntask" component={CompanyProfile}/>
                    <Route path="/empprofile/:_id" component={EmpProfile}/>
                </Switch>
            </div>
        </Router>
    )
}

