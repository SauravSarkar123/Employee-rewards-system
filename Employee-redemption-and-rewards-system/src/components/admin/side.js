// import React, { useState, useEffect, useRef } from 'react';
// import { FaBars, FaThumbsUp, FaHome } from 'react-icons/fa';
// import { AiOutlineClose } from 'react-icons/ai';
// import { IoMdAddCircle } from 'react-icons/io';
// import { BiTask } from 'react-icons/bi';
// import { FiGift } from 'react-icons/fi';
// import './SidebarMenu.css';

// const SidebarMenu = () => {
//   const [isOpen, setIsOpen] = useState(true); // set isOpen to true by default
//   const menuRef = useRef(null);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (
//       menuRef.current &&
//       !menuRef.current.contains(event.target) &&
//       event.target.id !== 'menu-toggle'
//     ) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.sidebar-menu ul')) {
//         setIsOpen(false);
//       }
//     };
  
//     document.addEventListener('click', handleClickOutside);
  
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [menuRef]);
  

//   return (
//     <div ref={menuRef}>
//       <button className="btn btn-primary" id="menu-toggle" onClick={toggleSidebar}>
//         {isOpen ? <AiOutlineClose /> : <FaBars />}
//       </button>
//       <nav className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
//         <div className="sidebar-header"></div>
//         <ul className="list-unstyled">
//           <li>
//             <a href="/real">
//               <FaHome className="fonnn" id="fonnn" /> Home
//             </a>
//           </li>
//           <li>
//             <a href="/admindash">
//               <IoMdAddCircle className="icon" id="fonnn" /> Onboard Employees
//             </a>
//           </li>
//           <li>
//             <a href="/about">
//               <BiTask className="icon" id="fonnn" /> Assign Tasks
//             </a>
//           </li>
//           <li>
//             <a href="/approvetask">
//               <FaThumbsUp className="icon" id="fonnn" /> Approve Tasks
//             </a>
//           </li>
//           <li>
//             <a href="/contact">
//               <FiGift className="icon" id="fonnn" /> Reward Tasks
//             </a>
//           </li>
//         </ul>
//         <div className="sidebar-footer">
//           <button className="close-btn" onClick={toggleSidebar}>
//             <AiOutlineClose />
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default SidebarMenu;
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaThumbsUp, FaHome , FaPowerOff} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { BiTask } from 'react-icons/bi';
import { FiGift } from 'react-icons/fi';
import './SidebarMenu.css';

const SidebarMenu = () => {
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
        {isOpen ? <AiOutlineClose /> : <FaPowerOff style={{width:"100px"}} />}
      </button>
      <nav className={`sidebar-menu ${isOpen ? 'open' : ''}`} onMouseLeave={handleMouseLeave}>
        <div className="sidebar-header"></div>
        <ul className="list-unstyled">
          <li id="fonnn">
            <a href="/real" >
              <FaHome className="fonnn"  /> Home
            </a>
          </li>
          <li id="fonnn">
            <a href="/admindash">
              <IoMdAddCircle className="icon" id="fonnn" /> Onboard Employees
            </a>
          </li>
          <li id="fonnn">
            <a href="/about">
              <BiTask className="icon" id="fonnn" /> Assign Tasks
            </a>
          </li>
          <li id="fonnn">
            <a href="/approvetask">
              <FaThumbsUp className="icon" id="fonnn" /> Approve Tasks
            </a>
          </li>
          <li id="fonnn">
            <a href="/contact">
              <FiGift className="icon" id="fonnn" /> Reward Tasks
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

export default SidebarMenu;
