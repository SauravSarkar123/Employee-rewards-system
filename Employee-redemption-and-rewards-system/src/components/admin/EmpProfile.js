import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { AccountCircle, GitHub, Language, Twitter } from "@material-ui/icons";

import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

import Footercr from "../footer/footercr";
import LogoutHeader from "../header/logoutheader";
const ProfilePage = (props) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [employee, setEmployee] = useState([]);
  const API_URL = "http://localhost:8800";
  const employeeId = props.match.params._id;
  console.log("employee id:", employeeId);

  const handlePursuingClick = () => {
    if (progressWidth < 100) {
      setProgressWidth(progressWidth + 10);
    }
  };
  // const handleLogout = () => {
  //   removeCookie('access_token');
  // };

  useEffect(() => {
    axios
      .get(`${API_URL}/empprofile/${employeeId}`, { withCredentials: true })

      // make a GET request to the server
      .then((response) => {
        //console.log(response.data.user);
        setEmployee(response.data.user);
        console.log(employee);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeId]);
  return (
    <div>
      <nav>
        <LogoutHeader />
      </nav>

      <section style={{ backgroundColor: "#eee", padding: "1rem 0" }}>
        <Grid container spacing={3}>
          <Grid item md={4}>
          <Card variant="outlined" style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  background:"#FFFFFF",
  color:"#1F1F1F",
  border: "1px solid #D8D8D8",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  marginLeft:"20px"
}}>
  <CardContent style={{ textAlign: "center" }}>
    <Typography gutterBottom variant="h5" component="h2" style={{
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem' ,
      color:"#1F1F1F"
    }}>
      EMPLOYEE DETAILS
    </Typography>
    <AccountCircle style={{ fontSize: "7rem", margin: "1rem", color:"#1F1F1F" }} />
    <Typography variant="body2" color="textSecondary" component="p" style={{
      marginBottom: "0.5rem" 
      , color:"#1c4966" ,
      fontSize:"2rem"
    }}>
      Full Stack Developer
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p" style={{
      marginBottom: "2rem" ,
      color:"#1F1F1F"
    }}>
      Bay Area, San Francisco, CA
    </Typography>
  </CardContent>
  {/* <CardActions>
    <Button onClick={handleLogout} variant="contained" color="secondary" href="/login" style={{ margin: "1rem", background:"#FF0000", borderRadius: "5px" }}>
      Log Out
    </Button>
  </CardActions>   */}
        <CardActions>
                <Link
                  to={`/addemployee/${employee._id}/${employee.name}/${employee.address}/${employee.mobile}/${employee.email}/${employee.wallet}`}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "1rem" }}
                  >
                    Add Employee
                  </Button>
                </Link>
              </CardActions>
              {/* <CardActions>
    <Button onClick={handleLogout} variant="contained" color="primary" href="/login" style={{ margin: "1rem" }}>
      Log Out
    </Button>
  </CardActions> */}
            <List style={{ color:"#333333", border: "1px solid #D8D8D8", borderRadius: "5px", padding: "1rem", marginTop: "2rem"}}>
    <ListItem>
      <ListItemIcon>
        <Language style={{ color:"#333333" }}/>
      </ListItemIcon>
      <ListItemText>
        LinkedIn :{" "}
        <a href="https://www.linkedin.com" style={{ color:"#333333", textDecoration: "none" }}>LinkedIn</a>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <GitHub style={{ color:"#333333" }}/>
      </ListItemIcon>
      <ListItemText>
        Github :{" "}
        <a href="https://www.github.com" style={{ color:"#333333", textDecoration: "none" }}>Github</a>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Twitter style={{ color:"#333333" }}/>
      </ListItemIcon>
      <ListItemText>
        Office :{" "}
        <a href="https://www.office.com" style={{ color:"#333333", textDecoration: "none" }}>Office</a>
      </ListItemText>
    </ListItem>
  </List>
</Card>



          
          </Grid>
          <Grid item md={4}>
            <Card
              variant="outlined"
              className="personal-info-card"
              style={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "#f5f5f5",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                padding: "2rem",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    marginBottom: "2rem",
                  }}
                >
                  Personal Information:
                </Typography>
                <List>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <ListItemText
                      primary="Username"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee.name}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <ListItemText
                      primary="Email"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee.email}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <ListItemText
                      primary="Employee ID"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee._id}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <ListItemText
                      primary="Date of Join"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee.DOJ}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <ListItemText
                      primary="Mobile"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee.mobile}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0",
                    }}
                  >
                    <ListItemText
                      primary="Address"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee.address}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                  <ListItem
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0",
                    }}
                  >
                    <ListItemText
                      primary="Wallet Address"
                      style={{ fontWeight: "bold" }}
                    />
                    <ListItemText
                      secondary={employee.wallet}
                      style={{ color: "#666" }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
          <Card variant="outlined" className="personal-info-card" style={{ width: '200%', borderRadius: '20px', backgroundColor: '#fff', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', padding: '2rem', marginLeft: '0px', height: '100%' }}>
  <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
      PERSONAL INFORMATION
    </Typography>
    <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #e0e0e0', paddingTop: '2rem', width: '100%' }}>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <div style={{ marginRight: '2rem', flex: 1 }}>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold', color:"#45b6fe" }}>
            Name:
          </Typography>
          <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
            {employee.name}
          </Typography>
        </div>
        <div style={{ marginRight: '2rem', flex: 1 }}>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' , color:"#45b6fe"}}>
            Employee ID:
          </Typography>
          <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
            {employee._id}
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold', color:"#45b6fe" }}>
            Date of Birth:
          </Typography>
          <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
          {employee.DOJ}
          </Typography>
        </div>
      </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #e0e0e0', paddingTop: '2rem', width: '100%' }}>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div style={{ marginRight: '2rem', flex: 1 }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold', color:"#45b6fe"}}>
              Email:
            </Typography>
            <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
              {employee.email}
            </Typography>
          </div>
          <div style={{ marginRight: '2rem', flex: 1 }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' , color:"#45b6fe"}}>
              Mobile:
            </Typography>
            <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
            {employee.mobile}
            </Typography>
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold', color:"#45b6fe" }}>
              Address:
            </Typography>
            <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
            {employee.address}
            </Typography>
          </div>
        </div>
        </div>
     
 {/* a81f66d224b18a4251f2b79a1a922f334fa56684 */}

</CardContent>



    </Card>
    </div>
  
      
  );
};

export default ProfilePage;




// <CardActions>
//                 <Link
//                   to={`/adde/${employee._id}/${employee.name}/${employee.address}/${employee.mobile}/${employee.email}`}
//                 >
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     style={{ margin: "1rem" }}
//                   >
//                     Add Employee
//                   </Button>
//                 </Link>
//               </CardActions>