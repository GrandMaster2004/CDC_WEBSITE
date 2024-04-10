import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"; // Import your CSS file
function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="img/navlogo.png" alt="" />
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>

      <ul>
        <li>
          <NavLink to={"/"} className="">
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/about"}>About</NavLink>
        </li> */}
        <li>
          <NavLink to={"/team"}>Team</NavLink>
        </li>
        {/* <li>
          <NavLink to={"/event"}>Event</NavLink>
        </li> */}
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/contest"}>Contests</NavLink>
        </li>
        <li>
          <NavLink to={"/query"}>Query</NavLink>
        </li>
        <li>
          <NavLink to={"/verify"}>Verify</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
