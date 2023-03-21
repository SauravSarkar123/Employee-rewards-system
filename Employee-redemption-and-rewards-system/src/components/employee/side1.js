import React, { useState, useEffect, useRef } from 'react';
import { FaHome , FaTasks} from 'react-icons/fa';
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { BiTask } from 'react-icons/bi';
import { FiGift } from 'react-icons/fi';
import './sidemenu1.css';

const SidebarMenu12 = () => {
  const [isOpen, setIsOpen] = useState(false); // set isOpen to false by default
  const menuRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target.id !== 'menu-toggle'
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.sidebar-menu ul')) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} style={{marginTop:"20px"}}>
      <button className="btn btn-primary" id="menu-toggle" onMouseEnter={toggleSidebar}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu style={{width:"100px"}} />}
      </button>
      <nav className={`sidebar-menu ${isOpen ? 'open' : ''}`} onMouseLeave={handleMouseLeave}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled">
          <li>
            <a href="/userprofile">
              <FaHome className="fonnn" id="fonnn" /> Home
            </a>
          </li>
          <li>
            <a href="/emptask">
              <FaTasks className="icon" id="fonnn" /> Assigned Tasks
            </a>
          </li>
          
        </ul>
        <div className="sidebar-footer">
          <button className="close-btn" onClick={toggleSidebar}>
            {/* <AiOutlineClose /> */}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu12;
