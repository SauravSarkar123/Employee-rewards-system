import React, { useState } from "react";
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
import {
  AccountCircle,
  GitHub,
  Language,
  Twitter,
} from "@material-ui/icons";

import { useCookies } from 'react-cookie';


import Footercr from "../footer/footercr";
import LogoutHeader from '../header/logoutheader';
const ProfilePage = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const handlePursuingClick = () => {
    if (progressWidth < 100) {
      setProgressWidth(progressWidth + 10);
    }
  };
  const handleLogout = () => {
    removeCookie('access_token');
  };

  return (
    <div>
      <nav>
      <LogoutHeader/>
      </nav>

      <section style={{ backgroundColor: "#eee", padding: "1rem 0" }}>
        <Grid container spacing={3}>
          <Grid item md={4}>
          <Card variant="outlined" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
  <CardContent style={{ textAlign: "center" }}>
  <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Employee Details
        </Typography>
    <AccountCircle style={{ fontSize: "5rem", margin: "1rem" }} />
    <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: "0.5rem" }}>
      Full Stack Developer
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: "2rem" }}>
      Bay Area, San Francisco, CA
    </Typography>
  </CardContent>
  {/* <CardActions>
    <Button variant="contained" color="primary" href="/addemployee" style={{ margin: "1rem" }}>
      Add Employee
    </Button>
  </CardActions> */}
  <CardActions>
    <Button onClick={handleLogout} variant="contained" color="primary" href="/login" style={{ margin: "1rem" }}>
      Log Out
    </Button>
  </CardActions>
</Card>

            <Card variant="outlined" style={{ marginTop: "1rem" }}>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Contact Information
        </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Language />
                    </ListItemIcon>
                    <ListItemText>
                      LinkedIn :{" "}
                      <a href="https://www.linkedin.com">LinkedIn</a>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <GitHub />
                    </ListItemIcon>
                    <ListItemText>
                      Github :{" "}
                      <a href="https://www.github.com">Github</a>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Twitter />
                    </ListItemIcon>
                    <ListItemText>
                      Office :{" "}
                      <a href="https://www.office.com">Office</a>
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4}>
          <Card variant="outlined" className="personal-info-card" style={{ width: '100%', borderRadius: '20px', backgroundColor: '#f5f5f5', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Personal Information:
        </Typography>
        <List>
          <ListItem style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <ListItemText primary="Username" style={{ fontWeight: 'bold' }} />
            <ListItemText secondary="yt" style={{ color: '#666' }} />
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <ListItemText primary="Email" style={{ fontWeight: 'bold' }} />
            <ListItemText secondary="vwn" style={{ color: '#666' }} />
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <ListItemText primary="Employee ID" style={{ fontWeight: 'bold' }} />
            <ListItemText secondary="SK2345678" style={{ color: '#666' }} />
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <ListItemText primary="Date of Birth" style={{ fontWeight: 'bold' }} />
            <ListItemText secondary="123" style={{ color: '#666' }} />
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <ListItemText primary="Mobile" style={{ fontWeight: 'bold' }} />
            <ListItemText secondary="123123" style={{ color: '#666' }} />
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
            <ListItemText primary="Address" style={{ fontWeight: 'bold' }} />
            <ListItemText secondary="123 Main St, San Francisco, CA" style={{ color: '#666' }} />
          </ListItem>
        </List>
      </CardContent>
    </Card>

      </Grid>
    </Grid>
  </section>

  <footer>
    <Footercr/>
  </footer>
</div>
);
};

export default ProfilePage;
