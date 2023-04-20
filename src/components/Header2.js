import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Header2.css";

import Drawer from "react-modern-drawer";

//import styles ?
import "react-modern-drawer/dist/index.css";
import LinkBtn from "./linkbtns";

function Header2() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [majorChordsList, setmajorChordsList] = useState(true);
  const [minorChordsList, setminorChordsList] = useState(true);
  const majorChords = ["A", "B", "C", "D", "E", "F", "G"];
  const minorChords = [ "Cm", "Dm", "Em", "Fm", "Gm"];

  const handleListClick = () => {
    setmajorChordsList(!majorChordsList);
  };

  const handleListClick2 = () => {
    setminorChordsList(!minorChordsList);
  };

  return (
    <header className="header">
      <div className="drawer-icon" onClick={toggleDrawer}>
        <FaBars />
      </div>
      <div className="title">Scale Book</div>
      

      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" overlayColor="gray">
       
    
        <div onClick={handleListClick} style={{ color: "#260134" }}>
          <h2>Major Scales</h2>
        </div>
        {majorChordsList && (
          <div>

            {majorChords.map((item) => (
              <div key={item}>
                <Link to={`/${[item]}`}>
                  <p className="links">{item}</p>
                </Link>
              </div>
              ))}
          
        </div>
        )}

<div onClick={handleListClick2} style={{ color: "#260134" }} className="minorChords">
          <h2>Minor Scales</h2>
        </div>
        {minorChordsList && (
          <div>

            {minorChords.map((item) => (
              <div key={item}>
                <Link to={`/${[item]}`}>
                  <p className="links">{item}</p>
                </Link>
              </div>
              ))}
          
        </div>
        )}

        {/* <LinkBtn/> */}
      </Drawer>
    </header>
  );
}

export default Header2;
