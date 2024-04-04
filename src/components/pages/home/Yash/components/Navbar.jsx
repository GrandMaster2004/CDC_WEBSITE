import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Brand</div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Contests</a>
        </li>
        <li>
          <a href="#">Query</a>
        </li>
        <li>
          <a href="#">Vefify</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
