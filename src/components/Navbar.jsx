import React from "react";
import { NavLink } from "react-router-dom";
import { activeStyle, anchorStyle, logoStyle } from "../constantStyles";

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
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
          >
            Search
          </NavLink>
        </li>
      </ul>
      <button>+</button>
    </div>
  );
};

export default Navbar;
