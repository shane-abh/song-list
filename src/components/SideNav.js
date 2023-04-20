import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={toggleSideNavBar} />
        </Link>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={toggleSideNavBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaTimes />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/A">A Scale</Link>
          </li>
          <li className="nav-text">
            <Link to="/B">B Scale</Link>
          </li>
          <li className="nav-text">
            <Link to="/C">C Scale</Link>
          </li>
          <li className="nav-text">
            <Link to="/D">D Scale</Link>
          </li>
          <li className="nav-text">
            <Link to="/E">E Scale</Link>
          </li>
          <li className="nav-text">
            <Link to="/F">F Scale</Link>
          </li>
          <li className="nav-text">
            <Link to="/G">G Scale</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;