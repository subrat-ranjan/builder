import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="search1">
        <div className="searchinput">
          <input type="search" name="search" id="search" />
          <img src="images/img_image.svg" alt="img" />
        </div>
        <img src="images/menu-btn.png" alt="" className="menu-btn" onClick={handleMenuClick}></img>

        <div className={`nav-elements  ${isMobileMenuOpen && "active"}`}>
          <Link className="links" to="#">
            Categories
          </Link>
          <Link className="links" to="#">
            Website Builders
          </Link>
          <Link className="links" to="#">
            Today's deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
