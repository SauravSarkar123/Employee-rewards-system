import React, { useEffect, useState } from 'react';
import styles from './openpage.module.css';
import companyImage from '../../image/company.jpg';
import employeeImage from '../../image/employee.jpg';
import Onavbar from './Onavbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Slideshow from './carousel/car';
import "./openpage.module.css"

const Openpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const image = document.querySelector('.image');
  //   const imageTop = image.getBoundingClientRect().top;
  //   const imageBottom = image.getBoundingClientRect().bottom;
  //   const windowHeight = window.innerHeight;

  //   if (imageTop < windowHeight && imageBottom >= 0) {
    //   setTimeout(() => {
    //   setIsVisible(true);
    // },10);
  //  } else {
  //     setIsVisible(true);
  //   }
  // };

  return (
    <><div>
      <Onavbar />
    </div>
    <div>
    <div className={styles.open}>
        <span className={styles.span}>EMPLOYEE REWARD SYSTEM</span>
        <h1 className='home-title'>
          <p className={styles.open1} style={{ fontFamily: "Roboto Condensed" }}>
            Recognizing and Rewarding Employees <br /> with Excellence
          </p>
        </h1>

        <div className={styles.btn}>
          <div className={styles.btn_grp}>
            <button className={styles.button} style={{ color: '#000', border: '2px', slant: '.5em', marginRight: '10px' }}
              onClick={() => document
                .querySelector("#empp")
                .scrollIntoView({ behavior: "smooth" })}>Employee</button>
            <button className={styles.button} style={{ color: '#000', slant: '40px', border: '8px', marginLeft: '350px' }} onClick={() => document
              .querySelector(".compp")
              .scrollIntoView({ behavior: "smooth" })}>Company</button>
          </div>
        </div>

        <div className={styles.about}>
          <h2>What is the problem we solve</h2>
          <br />
          <p className={styles.p}>
            The Employee Reward System addresses the issue of employees losing proof of their notable achievements or
            certifications when leaving a company. Through the system, employees can be rewarded with tokens for their
            completed tasks or achievements, which are stored on a blockchain. These tokens can then be redeemed for
            gift vouchers. The system provides a reliable and verifiable record of an employee's accomplishments,
            making it easier for recruiters to evaluate their qualifications.
          </p>

          <Link to="/about"><button className={styles.button} style={{ color: '#000', border: '2px', slant: '.5em', marginTop: "10px" }}>Learn More</button></Link>
        </div>

        {/* <div className={`image ${isVisible ? 'visible' : ''}`}> */}

        <div className={styles.image_container} id="empp">
          <img src={employeeImage} style={{ width: '600px', height: '400px' }} alt='Employee' />
          <div className={styles.text_container}>
            <h3>Employee</h3>
            <p className={styles.p}>Register as a Employee to get your personal ID</p>
            <Link to="/register"><button className={styles.button} style={{ marginTop: "50px", color: '#000', border: '2px', slant: '.5em' }}>Register</button></Link>
          </div>
        </div>

        <div className={styles.image_container}>
          <div className="compp">
            <div className={styles.text_container}><h3>COMPANY</h3>

              <p className={styles.p}>Register as a Company and get your Unique ID <br /></p>
              <Link to="/registercompany"><button className={styles.button} style={{ marginTop: "50px", color: '#000', border: '2px', slant: '.5em' }}>Register</button></Link></div></div>

          <img src={companyImage} style={{ width: '600px', height: '400px' }} alt='Company' />

        </div>
        {/* </div> */}
        {/* </div> */}
        <div className='int'><div className={styles.open}><h3>Stacks Used</h3><Slideshow /></div></div>
        <Footer />
      </div>
      </div> </>
  );
};

export default Openpage;


