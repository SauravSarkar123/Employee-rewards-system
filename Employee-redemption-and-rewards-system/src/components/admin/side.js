import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaThumbsUp, FaHome } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { BiTask } from 'react-icons/bi';
import { FiGift } from 'react-icons/fi';
import './SidebarMenu.css';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // set isOpen to true by default
  const menuRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef}>
      <button className="btn btn-primary" onClick={toggleSidebar}>
        {isOpen ? <AiOutlineClose /> : <FaBars />}
      </button>
      <nav className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled">
        <li><a href="/real"><FaHome className="icon" /> Home</a></li>
          <li><a href="/admindash"><IoMdAddCircle className="icon" /> Onboard Employees</a></li>
          <li><a href="/about"><BiTask className="icon" /> Assign Tasks</a></li>
          <li><a href="/contact"><FaThumbsUp className="icon" /> Approve Tasks</a></li>
          <li><a href="/contact"><FiGift className="icon" /> Reward Tasks</a></li>
        </ul>
        <div className="sidebar-footer">
          <button className="close-btn" onClick={toggleSidebar}><AiOutlineClose /></button>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;
