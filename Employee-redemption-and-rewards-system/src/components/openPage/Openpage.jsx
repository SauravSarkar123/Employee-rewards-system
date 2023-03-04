import React, { useEffect, useState } from 'react';
import './openpage.css';
import companyImage from '../../image/company.jpg';
import employeeImage from '../../image/employee.jpg';
import Onavbar from './Onavbar';

const Openpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const image = document.querySelector('.image');
    const imageTop = image.getBoundingClientRect().top;
    const imageBottom = image.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (imageTop < windowHeight && imageBottom >= 0) {
      setTimeout(() => {
      setIsVisible(true);
    },100);
   } else {
      setIsVisible(false);
    }
  };

  return (
    <div>
      <Onavbar/>
      <div className='open'>
        <span>EMPLOYEE REWARD SYSTEM</span>
        <h1 class='home-title'>
          <p className='small rise'>
            Recognizing and Rewarding Employees <br /> with Excellence
          </p>
        </h1>

        <div className='btn'>
          <div className='btn_grp'>
            <button style={{ color: '#000', border: '2px', slant: '.5em', marginRight: '10px' }} onClick={() => console.log('Employee button clicked')}>Employee</button>
            <button style={{ color: '#000', slant: '40px', border: '8px', marginLeft: '350px' }} onClick={() => console.log('Company button clicked')}>Company</button>
          </div>
        </div>

        <div className='about'>
          <h2>What is the problem we solve</h2>
          <br />
          <p>
            The Employee Reward System addresses the issue of employees losing proof of their notable achievements or
            certifications when leaving a company. Through the system, employees can be rewarded with tokens for their
            completed tasks or achievements, which are stored on a blockchain. These tokens can then be redeemed for
            gift vouchers. The system provides a reliable and verifiable record of an employee's accomplishments,
            making it easier for recruiters to evaluate their qualifications.
          </p>
          <button style={{ color: '#000', border: '2px', slant: '.5em' }}>Learn More</button>
        </div>

        <div className={`image ${isVisible ? 'visible' : ''}`}>
          
        <div className="image-container">
 <img src={employeeImage} style={{ width: '600px', height: '400px'}} alt='Employee' />
          <div className="text-container">
      <h3>Employee</h3>
      <p>Register as a Employee to get your personal ID</p>
      <button style={{ color: '#000', border: '2px', slant: '.5em' }}>Register</button>
    </div>
    </div>
          <div className="image-container">
  <div className="text-container"><h3>COMPANY</h3>
  <p>Register as a Company and get your Unique ID <br/></p>
  <button style={{ color: '#000', border: '2px', slant: '.5em' }}>Register</button></div>
  
          <img src={companyImage} style={{ width: '600px', height: '400px' }} alt='Company' /> 
          
      </div>
        </div>
      </div>
    </div>
  );
};

export default Openpage;

