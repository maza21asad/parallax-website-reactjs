import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
// import Parallax1 from "../ParallaxPages/parallax1";
// import Parallax2 from "../ParallaxPages/parallax2";
// import { Route } from "react-router-dom";

function Navber() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link
          activeClass="active"
          smooth
          className="desktopMenuListItem"
          onClick={toggleDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          MORE PARALLAX EFFECTS
        </Link>
        {dropdownVisible && (
          <div
            className="dropdownContent"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="parallax1" className="item">
              Paralax 1
            </Link>
            <Link to="parallax2" className="item">
              Paralax 2
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navber;
