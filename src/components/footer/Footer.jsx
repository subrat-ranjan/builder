import React from "react";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_cont ">
        <div className="footer">
          <div className="items">
            <p>Categories</p>
            <NavLink className="ftlink" to="#">
              Web Builder
            </NavLink>
            <NavLink className="ftlink" to="#">
              Hoisting
            </NavLink>
            <NavLink className="ftlink" to="#">
              Data Center
            </NavLink>
            <NavLink className="ftlink" to="#">
              Robotic-Automation
            </NavLink>
            <NavLink className="ftlink" to="#"></NavLink>
          </div>
          <div className="contact">
            <p className="categories1 ">Contact</p>
            <NavLink className="ftlink" to="#">
              Contact
            </NavLink>
            <NavLink className="ftlink" to="#">
              Privacy Policy
            </NavLink>
            <NavLink className="ftlink" to="#">
              Terms Of Service
            </NavLink>
            <NavLink className="ftlink" to="#">
              Categories
            </NavLink>
            <NavLink className="ftlink" to="#">
              About
            </NavLink>
          </div>
        </div>
        <div className="dropdown1">
          <select name="selectedFruit">
            <option value="apple">United States</option>
            <option value="banana">India</option>
            <option value="orange">London</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
