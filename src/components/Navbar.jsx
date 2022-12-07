import React from "react";
import { NavLink } from "react-router-dom";
import {
  activeStyle,
  anchorStyle,
  logoStyle,
  activeButton,
} from "../constantStyles";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? logoStyle : anchorStyle)}
        >
          Logo
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink
            to="/browse"
            style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
          >
            Browse
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
          >
            Login/Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <button>
        <NavLink
          to="/add"
          style={({ isActive }) => (isActive ? activeButton : anchorStyle)}
        >
          +
        </NavLink>
      </button>
    </div>
  );
};

export default Navbar;
