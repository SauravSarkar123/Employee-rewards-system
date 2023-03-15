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
      {/* <nav>
      <LogoutHeader/>
      </nav> */}

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
  <CardActions>
    <Button onClick={handleLogout} variant="contained" color="secondary" href="/login" style={{ margin: "1rem", background:"#FF0000", borderRadius: "5px" }}>
      Log Out
    </Button>
  </CardActions>
  {/* <Typography gutterBottom variant="h5" component="h2" style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem' , 
        color:"#333333"
      }}>
        Contact Information
      </Typography> */}
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
            John Doe
          </Typography>
        </div>
        <div style={{ marginRight: '2rem', flex: 1 }}>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold' , color:"#45b6fe"}}>
            Employee ID:
          </Typography>
          <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
            SK2345678
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="subtitle1" style={{ fontWeight: 'bold', color:"#45b6fe" }}>
            Date of Birth:
          </Typography>
          <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
            01/01/1990
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
              john.doe@example.com
            </Typography>
          </div>
          <div style={{ marginRight: '2rem', flex: 1 }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' , color:"#45b6fe"}}>
              Mobile:
            </Typography>
            <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
              123123
            </Typography>
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold', color:"#45b6fe" }}>
              Address:
            </Typography>
            <Typography variant="body1" style={{ color: '#666', fontSize: '1.5rem' }}>
              123 Main St, San Francisco, CA
            </Typography>
          </div>
        </div>
        </div>
     

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