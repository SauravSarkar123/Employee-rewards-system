import { Container, Row, Col, Button } from 'react-bootstrap';
import Onavbar from '../openPage/Onavbar';
// import Three from './three';
import React from 'react';
import '../openPage/openpage.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer'

const EmployeeHomepage = () => {

  // Define the gradient styles for the headings
  const headingGradient = {
    background: 'linear-gradient(to right, #93FFFF, #F0FD9A)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  };
   const backgroundGradient = { background: 'linear-gradient(to right, #1985FF, #42ECEC)', height: '110vh', width: '100%',};
  return (
    <div>
    <div style={backgroundGradient}>
      <Onavbar />
       {/* <Three />  */}
      

      <Container>
        <Row>
          <Col>
            <div className='open'>
              <h1 style={{ fontSize: '2rem', textAlign: 'center', ...headingGradient }}>
                Welcome to the
              </h1>
              <h1 style={{ fontSize: '3rem', textAlign: 'center', ...headingGradient }}>
                Employee Rewards Program
              </h1>
              
              <h2 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold-italic', marginTop: '3rem', color: '#120B78' }}>
              "An employee reward program is a system to recognize and appreciate the hard work, achievements, and contributions of employees".               </h2>
              <div className="d-flex justify-content-center mt-4">
        
        
        
        {/* <p>Sign up</p> */}
      </div>
              
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
    <Footer />
    </div>
  );
};

export default EmployeeHomepage;
