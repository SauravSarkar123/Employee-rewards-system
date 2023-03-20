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
    <div style={{height:'200%'}}>
      {/* <nav>
      <LogoutHeader/>
      </nav> */}

      <section style={{ backgroundColor: "#eee", padding: "1rem 0" , height:'1300px'}}>
        <Grid container spacing={3}>
          <Grid item md={4}>
          <Card variant="outlined" style={{
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
padding: "2rem",
background: "#FFFFFF",
color: "#1F1F1F",
border: "1px solid #D8D8D8",
borderRadius: "10px",
boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.7)",
marginLeft: "20px",
height: "114%",

}}>

<CardContent style={{ textAlign: "center" }}>
<AccountCircle style={{
fontSize: "10rem",
margin: "1rem",
color:"#1F1F1F",
width: "25rem",
height: "25rem",
borderRadius: "0.5rem",
position:'relative',
bottom:'5rem'
}} />
<Typography variant="h5" style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '2rem' ,
  color:"#1F1F1F"
}}>
  John Doe
</Typography>

<Typography variant="body2" style={{
  marginBottom: "2rem" ,
  color:"#1F1F1F",
  position:'relative',
  bottom:'4rem',
  fontSize:"1.5rem"
}}>
  Bay Area, San Francisco, CA
</Typography>
</CardContent>
<List style={{
color:"#333333",
borderRadius: "5px",
padding: "1rem",
position: "relative",
bottom: '-10rem',
background: "#F9F9F9",
width: "100%",
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>
<ListItem style={{
marginRight: "2rem"
}}>
<ListItemIcon>
<Language style={{ color:"#1c4966",fontSize:"2rem" }}/>
</ListItemIcon>
<ListItemText>
<a href="https://www.linkedin.com" style={{ color:"#1c4966", textDecoration: "none" ,fontSize:"2rem"}}>LinkedIn{" "}</a>
</ListItemText>
</ListItem>
<ListItem style={{
marginRight: "2rem"
}}>
<ListItemIcon>
<GitHub style={{ color:"#1c4966",fontSize:"2rem" }}/>
</ListItemIcon>
<ListItemText>
<a href="https://www.github.com" style={{ color:"#1c4966", textDecoration: "none" ,fontSize:"2rem"}}>Github {" "}</a>
</ListItemText>
</ListItem>
<ListItem>
<ListItemIcon>
<Twitter style={{ color:"#1c4966",fontSize:"2rem" }}/>
</ListItemIcon>
<ListItemText>
<a href="https://www.office.com" style={{ color:"#1c4966", textDecoration: "none",fontSize:"2rem" }}>Office {" "}</a>
</ListItemText>
</ListItem>
</List>
</Card>



          </Grid>

          <Grid item md={4}>
          <div style={{ 
 width: '200%', 
 borderRadius: '20px', 
 backgroundColor: '#FDFDFD', 
 boxShadow: '0px 2px 6px rgba(0, 0, 0, 1.0)', 
 height:"60%", 
 padding: '2rem', 
 margin: '0 auto', 
 display: 'grid', 
 gridTemplateColumns: '30% 70%', 
 gridGap: '1rem', 
 alignItems: 'center' ,
 position: 'relative',
 right: '10px',
 top:'10px',
}}>
  <div style={{ 
     gridColumn: '1 / -1', 
     background: '#2E5984', 
     textAlign: 'center', 
     marginBottom: '2rem', 
     fontWeight: 'bold', 
     fontSize: '2.5rem', 
     color: '#FFFFFF', 
     padding: '1rem',
     borderRadius: '20px'
  }}>
    PERSONAL INFORMATION
  </div>
  <div className="field-container" style={{ 
  gridColumn: '1 / -1', 
  display: 'grid', 
  gridTemplateColumns: '30% 70%', 
  alignItems: 'start'
    
  }}>
    <Typography variant="subtitle1" style={{
fontWeight: 'bold',
color: '#45b6fe',
textAlign: 'left',
fontSize:"2.5rem",
gridColumn: '1 / 2'
}}>
Name:
</Typography>
<Typography variant="body1" style={{
color: '#666',
fontSize: '1.5rem',
textAlign: 'left',
width: '70%',
marginLeft: '1rem' ,
fontSize:"2.5rem",
gridColumn: '2 / -1'
}}>
John Doe
</Typography>
    </div>
<div className="field-container" style={{ 
 gridColumn: '1 / -1', 
 display: 'grid', 
 gridTemplateColumns: '30% 70%', 
 alignItems: 'start'
}}>
  <Typography variant="subtitle1" style={{ 
   fontWeight: 'bold',
   color: '#45b6fe',
   textAlign: 'left',
   fontSize:"2.5rem",
   gridColumn: '1 / 2'
  }}>
    Employee ID:
  </Typography>
  <Typography variant="body1" style={{ 
    color: '#666', 
    fontSize: '1.5rem', 
    textAlign: 'left', 
    width: '70%', 
    marginLeft: '1rem' ,
    fontSize:"2.5rem"
  }}>
    SK2345678
  </Typography>
</div>
<div className="field-container" style={{ 
  gridColumn: '1 / -1', 
  display: 'grid', 
  gridTemplateColumns: '30% 70%', 
  alignItems: 'start'
    
}}>
  <Typography variant="subtitle1" style={{ 
  fontWeight: 'bold',
  color: '#45b6fe',
  textAlign: 'left',
  fontSize:"2.5rem",
  gridColumn: '1 / 2'
  }}>
    Email:
  </Typography>
  <Typography variant="body1" style={{ 
    color: '#666', 
    fontSize: '1.5rem', 
    textAlign: 'left', 
    width: '70%', 
    marginLeft: '1rem' ,
    fontSize:"2.5rem"
    
  }}>
    johndoe@example.com
  </Typography>
</div>
<div className="field-container" style={{ 
  gridColumn: '1 / -1', 
  display: 'grid', 
  gridTemplateColumns: '30% 70%', 
  alignItems: 'start'
}}>
  <Typography variant="subtitle1" style={{ 
    fontWeight: 'bold',
    color: '#45b6fe',
    textAlign: 'left',
    fontSize:"2.5rem",
    gridColumn: '1 / 2'
  }}>
    Phone:
  </Typography>
  <Typography variant="body1" style={{ 
    color: '#666', 
    fontSize: '1.5rem', 
    textAlign: 'left', 
    width: '70%', 
    marginLeft: '1rem' ,
    fontSize:"2.5rem"
  }}>
    +1 (555) 123-4567
  </Typography>
</div>
<div className="field-container" style={{ 
  gridColumn: '1 / -1', 
  display: 'grid', 
  gridTemplateColumns: '30% 70%', 
  alignItems: 'start'
    
    
}}>
  <Typography variant="subtitle1" style={{ 
   fontWeight: 'bold',
   color: '#45b6fe',
   textAlign: 'left',
   fontSize:"2.5rem",
   gridColumn: '1 / 2'
  }}>
    Address:
  </Typography>
  <Typography variant="body1" style={{ 
    color: '#666', 
    fontSize: '1.5rem', 
    textAlign: 'left', 
    width: '70%', 
    marginLeft: '1rem' ,
    fontSize:"2.5rem"
  }}>
    123 Main Street, Anytown, USA
  </Typography>
</div>
<div style={{ 
    width: '347%', 
    borderRadius: '20px', 
    backgroundColor: '#FDFDFD', 
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 1.0)', 
    height:"120%", 
    padding: '2rem', 
    margin: '0 auto', 
    display: 'grid', 
    gridTemplateColumns: '30% 70%', 
    gridGap: '1rem', 
    alignItems: 'center' ,
    position: 'relative',
    right: '30px',
    top:'100px',


}}>
  <div style={{ 
    gridColumn: '1 / -1', 
    background: '#2E5984', 
    textAlign: 'center', 
    marginBottom: '2rem', 
    fontWeight: 'bold', 
    fontSize: '2.5rem', 
    color: '#FFFFFF', 
    padding: '1rem',
    borderRadius: '20px'
  }}>
    COMPANY DETAILS
  </div>
  <div className="field-container" style={{
  display: 'grid', 
    gridTemplateColumns: '30% 70%', 
    alignItems: 'center', 
    gridColumn: '1 / -1'
  }}>
    <Typography variant="subtitle1" style={{ 
fontWeight: 'bold',
color: '#45b6fe',
textAlign: 'left',
fontSize:"2.5rem",
gridColumn: '1 / 2'
    }}>
      EmployeeID:
    </Typography>
    <Typography variant="body1" style={{ 
          color: '#666', 
          fontSize: '1.5rem', 
          textAlign: 'left', 
          width: '70%', 
          marginLeft: '1rem' ,
          fontSize:"2.5rem"

    }}>
      SK2345678
    </Typography>
  </div>
  <div className="field-container" style={{ 
    display: 'grid', 
    gridTemplateColumns: '30% 70%', 
    alignItems: 'center', 
    gridColumn: '1 / -1',
  }}>
    <Typography variant="subtitle1" style={{ 
      fontWeight: 'bold',
      color: '#45b6fe',
      textAlign: 'left',
      fontSize:"2.5rem",
      gridColumn: '1 / 2'
      
    }}>
      Company Name:
    </Typography>
    <Typography variant="body1" style={{ 
          color: '#666', 
          fontSize: '1.5rem', 
          textAlign: 'left', 
          width: '70%', 
          marginLeft: '1rem' ,
          fontSize:"2.5rem"
    }}>
      ACME Corporation
    </Typography>
  </div>
  <div className="field-container" style={{ 
    display: 'grid', 
    gridTemplateColumns: '30% 70%', 
    alignItems: 'center', 
    gridColumn: '1 / -1' 
  }}>
    <Typography variant="subtitle1" style={{ 
      fontWeight: 'bold',
      color: '#45b6fe',
      textAlign: 'left',
      fontSize:"2.5rem",
      gridColumn: '1 / 2'
    }}>
      Designation:
    </Typography>
    <Typography variant="body1" style={{ 
          color: '#666', 
          fontSize: '1.5rem', 
          textAlign: 'left', 
          width: '70%', 
          marginLeft: '1rem' ,
          fontSize:"2.5rem"
          
    }}>
      Software Engineer
    </Typography>
  </div>
</div>

</div>



      </Grid>
    </Grid>
  </section>

<footer> <Footercr/> </footer>
</div>
);
};

export default ProfilePage;