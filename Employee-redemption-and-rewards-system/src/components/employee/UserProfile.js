import React, { useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import AvatarWithRipple from "./icon"
import "../../App.css"
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';
import UserPic from "../../assets/images/user4.png"

export default function ProfilePage() {
    const [progressWidth, setProgressWidth] = useState(0);
    // const { name, email, mobile, address, dob } = props.location.state;

    const handlePurusuingClick =() =>{
        if(progressWidth < 100){
            setProgressWidth(progressWidth + 10);
        }
    }

   
  return (
    <div>
    <Navbar/>
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
       
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
                <div className='empd'><b>Employee Details:</b></div>
                <img src={UserPic} width="60%"/>
            {/* <AvatarWithRipple/> */}
              <MDBCardBody className="text-center">
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <Link to='/addemployee'>
  <button type="button" className="btn btn-primary mt-2">
    Add Employee
  </button>
</Link>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>LinkedIn : <a href="https://www.linkedin.com">LinkedIn</a></MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>Github : <a href="https://www.linkedin.com">Github</a></MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>Office : <a href="https://www.office365.com">Office</a></MDBCardText>
                   </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Username</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">yt</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">vwn</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Employee ID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">SK2345678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date of Birth</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">123</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">123123</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">aaa</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    
                    
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Completed Tasks</span></MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100}  />
                      </MDBProgress> */}

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress> */}

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress> */}

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress> */}

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    {/* <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>          
            </MDBRow>
          </MDBCol> 
        </MDBRow>
      </MDBContainer>
    </section>
    <Footer/>
    </div>
  );
}
// import React from 'react';

// export default function UserProfile(props) {
//   const { name, email, mobile, address, doj } = props.location.state;

//   return (
//     <div>
//       <h2>Welcome, {name}!</h2>
//       <p>Email: {email}</p>
//       <p>Mobile: {mobile}</p>
//       <p>Address: {address}</p>
//       <p>Date of Joining: {doj}</p>
//     </div>
//   );
// }
