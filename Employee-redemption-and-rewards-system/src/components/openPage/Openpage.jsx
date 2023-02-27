import { Container, Row, Col, Button } from 'react-bootstrap';
import Onavbar from './Onavbar';
import Three from './three';
import React from 'react';
import './openpage.css';
import { Link } from 'react-router-dom';

const OpenPage = () => {
  // Define the gradient styles for the headings
  const headingGradient = {
    background: 'linear-gradient(to right, #93FFFF, #F0FD9A)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  };

  return (
    <div>
      <Onavbar />
      <Three />

      <Container>
        <Row>
          <Col>
            <div className='open'>
              <h1 style={{ fontSize: '3rem', textAlign: 'center', ...headingGradient }}>
                Welcome to the
              </h1>
              <h1 style={{ fontSize: '5rem', textAlign: 'center', ...headingGradient }}>
                Employee Rewards Program
              </h1>
              <h2 style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', marginTop: '3rem', color: '#ff8a00' }}>
                Recognizing and rewarding employee excellence
              </h2>
              <div className="d-flex justify-content-between mt-4">
                <Link to="/register"><Button variant="primary">Register as Employee</Button></Link>
                <Link to="/registercompany"><Button variant="success">Register a Company</Button></Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OpenPage;
