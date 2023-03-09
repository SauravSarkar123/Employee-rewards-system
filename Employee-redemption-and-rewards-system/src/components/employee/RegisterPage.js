import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RegisterHeader from '../header/registerheader';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import employeeImage from '../../image/employee.jpg';
import styles from '../openPage/openpage.module.css';
import reg from "../openPage/r5.svg"
import "./reg.css";

export default function Register() {
  const API_URL = 'http://localhost:8800';
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(' ');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState(' ');
  const [DOJ, setDOJ] = useState(0);
  const [checkbox, setCheckbox] = useState(false);
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        mobile,
        address,
        DOJ,
        password,
        email,
      });

      console.log(response.data);
      history.push('/userprofile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{backgroundImage: `url(${reg})`}}>
      <div><RegisterHeader /></div>
      
      <div className={styles.image_container} id="empp">
            <div
              className='col-md-6 mx-auto my-auto text-right'
              style={{
                paddingRight: '105px',
                width: '200%',
                margin: 'auto'
              }}
            >
              <div >
              <form style={{margin:'auto',borderRadius:"50px",marginBottom:"100px",boxShadow: '00px 100px 60px 0px rgba(0,0,0,0.5)'}}onSubmit={handleRegister}>
                <div className='register-form-wrapper' style={{margin:'auto', width:"500px"}}>
                  <div style={{textAlign:'center',margin:'auto'}}> 
                  <div className='fonty'><h2>JOIN US</h2>
                  <h5>CREATE YOUR PERSONAL ACCOUNT</h5></div>
                  </div>
                  <div className='row'>
  <div className='col-md-6'>
    <div className='form-group'>
      
      <input
        type='text'
        placeholder='Username'
        className='form-control'
        value={name}
        title='name'
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </div>

    <div className='form-group'>
    
      <input
        type='password'
        title='password'
        placeholder='Password'
        className='form-control'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>

    <div className='form-group'>
      
      <input
        type='email'
        title='email'
        placeholder='Email'
        className='form-control'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  </div>

  <div className='col-md-6'>
    <div className='form-group'>
      
      <input
        type='text'
        title='Mobile'
        placeholder='Mobile'
        className='form-control'
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
    </div>

    <div className='form-group'>
      <input
      
      type="text"
      title='address'
      className='form-control'
      placeholder='Password'
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      
      required
      />
    </div>

    <div className='form-group'>
      <input
        type='date'
        title='Date of Joining'
        placeholder='DOJ'
        className='form-control'
        value={DOJ}
        onChange={(e) => setDOJ(e.target.value)}
        required
      />
    </div>
  </div>
</div>

                  
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='btn btn-lg btn-primary'
                      disabled={!checkbox}
                    >
                      Register
                    </button>
                  </div>
                  <div className='text-center mt-3'>
                    Already have an account? <Link to='/login'>Login</Link>
                  </div>
                
                </div>
              </form>
            </div>
            </div>
            
          </div>
        
              
      <div><Footer /></div>
    </div>

);
}

const HeaderStyle = {
backgroundImage: 'url(/assets/images/register-bg.jpg)',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center center',
backgroundSize: 'cover',
height: '100vh',
};



    
