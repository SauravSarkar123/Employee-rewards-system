import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RegisterHeader from '../header/registerheader';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import employeeImage from '../../image/employee.jpg';
import styles from '../openPage/openpage.module.css';

export default function Register() {
  const API_URL = 'http://localhost:8800';
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(' ');
  const [isAdmin, setIsAdmin] = useState(false);
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
    <div>
      <RegisterHeader />
      <div className={styles.image_container} id="empp">
 <img src='https://img.freepik.com/premium-vector/business-meeting-office-conference-table-with-talking-businessmen-businesswomen_53562-4385.jpg' style={{ width: '600px', height: '500px',marginLeft:"150px", marginBottom:'15%'}} alt='Employee' /> 
            <div
              className='col-md-6 mx-auto my-auto text-right'
              style={{
                paddingRight: '150px',
                width: '200%',
                margin: 'auto'
              }}
            >
              <form style={{margin:'auto',background: "#ADD8E6",borderRadius:"20px"}}onSubmit={handleRegister}>
                <div className='register-form-wrapper' style={{margin:'auto', width:"500px",background: "#ADD8E6"}}>
                  <div style={{textAlign:'center',margin:'auto'}}> 
                  <h2>Join us</h2>
                  <h5>Create your personal account</h5>
                  </div>
                  <div className='form-group' style={{marginRight:'30%'}}>
                    <label>Username</label>
                    <input
                      type='text'
                      className='form-control'
                      style={{marginRight:'30%',background: "#ADD8E6"}}
                      value={name}
                      title='name'             onChange={(e) => setUsername(e.target.value)}
                      placeholder='Enter your username'
                      required/>
                  </div>
    
                  <div className='form-group'>
                    <label>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      value={password}
                      style={{marginRight:'30%',background: "#ADD8E6"}}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter your password'
                      required
                    />
                  </div>
    
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      value={email}
                      style={{marginRight:'30%',background: "#ADD8E6"}}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter your email'
                      required
                    />
                  </div>
    
                  <div className='form-group'>
                    <label>Mobile</label>
                    <input
                      type='text'
                      className='form-control'
                      value={mobile}
                      style={{marginRight:'30%',background: "#ADD8E6"}}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder='Enter your mobile number'
                      required
                    />
                  </div>
    
                  <div className='form-group'>
                    <label>Address</label>
                    <textarea
                      className='form-control'
                      value={address}
                      style={{marginRight:'30%',background: "#ADD8E6"}}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder='Enter your address'
                      required
                    ></textarea>
                  </div>
    
                  <div className='form-group'>
                    <label>Date of Joining</label>
                    <input
                      type='date'
                      className='form-control'
                      value={DOJ}
                      style={{marginRight:'30%',background: "#ADD8E6"}}
                      onChange={(e) => setDOJ(e.target.value)}
                      placeholder='Enter your date of joining'
                      required
                    />
                  </div>
    
                  <div className='form-group'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        
                        value={checkbox}
                        onChange={(e) => setCheckbox(e.target.checked)}
                        required
                      />
                      <label className='form-check-label'>
                        I accept the terms and conditions
                      </label>
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
        
              
      <Footer />
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



    
