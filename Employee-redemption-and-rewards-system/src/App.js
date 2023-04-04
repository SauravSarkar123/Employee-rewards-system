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
import RealDash from "./components/admin/RealDash.js"
import AddTask from './components/admin/AddTask'
import EmpProfile from "./components/admin/EmpProfile"
import CalendarView from './components/employee/EmployeeTaskView'
import RewardTasks from './components/admin/RewardTasks'
import AssignTask from "./components/admin/CreateModal"
import ViewTask from './components/admin/ViewTask'
import PlatformAdmin from './components/Platform admin/Tokens reward'







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
                    <Route path="/employeetokens" component={EmployeeDashboard} />
                    <Route path="/userprofile" component={ProfilePage} />
                    {/* <Route path="/addemployee" component={AddEmployee}/> */}
                    <Route path="/logincomp" component={LoginComp}/>
                    <Route path="/admindash" component={AdminDashBoard}/>
                    {/* <Route path="/viewtask" component={ViewTask}/> */}
                    <Route exact path="/employeehome" component={EmployeeDashboard}/>
                    {/* <Route path="/approvetask" component={ApproveTask}/> */}
                    <Route path="/empprofile/:_id" component={EmpProfile}/>
                    <Route path="/real" component={RealDash}/>
                    <Route path="/adde/:_id/:name/:address/:mobile/:email/:wallet" component={AddEmployee}/>
                    <Route path="/emptask" component={CalendarView}/>
                    <Route path="/reward" component={RewardTasks}/>
                    <Route path="/assigntask/:Name" component={AssignTask}/>
                    <Route path="/viewtask/:id" component={ViewTask}/>
                    <Route path="/admin" component={PlatformAdmin}/>
                </Switch>
            </div>
        </Router>
    )
}

