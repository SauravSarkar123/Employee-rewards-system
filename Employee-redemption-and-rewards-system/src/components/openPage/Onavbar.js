import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './onavbar.css';
import logo from '../../image/scroll-header-logo.svg';
import { Link } from 'react-router-dom';

const Onavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar" style={{background:"transparent"}}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {/* <p>
            <a href="#ers">ERS</a>
          </p> */}
          <p>
            <Link to="/"><a>Home</a></Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          {/* <p>
            <a href="#features">Help</a>
          </p> */}
          {/* <p><a href="#blog">Library</a></p> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <div class="gpt3__navbar-sign_container">
        <Link to="/login">
    <button class="gpt3__navbar-menu_button-login">Login</button>
    </Link>
        <Link to="/register">
    <button class="gpt3__navbar-menu_button-signup">Signup</button></Link>
</div>

        {/* <p>Sign up</p> */}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Reward System</a>
              </p>
              <p>
                <Link to="#possibility" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </p>
              <p>
                <a href="#features">Help</a>
              </p>
              {/* <p><a href="#blog">Library</a></p> */}
            </div>
            {/* <div className="gpt3__navbar-menu_container-links-sign">
              <p>Login</p>

              <button type="button">Sign up</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Onavbar;
