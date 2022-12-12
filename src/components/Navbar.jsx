import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  activeStyle,
  anchorStyle,
  logoStyle,
  activeButton,
  modalStyle,
} from "../constantStyles";
import { AuthContext } from "../context/AuthContext";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Navbar = () => {
  const { token, Logout, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        {user === null ? (
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
            >
              Login/Signup
            </NavLink>
          </li>
        ) : null}
        {user !== null ? (
          <li>
            <NavLink
              to="/profile"
              style={({ isActive }) => (isActive ? activeStyle : anchorStyle)}
            >
              Profile
            </NavLink>
          </li>
        ) : null}
      </ul>
      <NavLink
        to={user !== null ? "/add" : null}
        style={({ isActive }) => (isActive ? activeButton : anchorStyle)}
      >
        <button onClick={!user && handleOpen}>+</button>
      </NavLink>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please login to continue
          </Typography>
          <NavLink to="/login" style={activeButton}>
            <Button variant="contained" onClick={handleClose}>
              Login
            </Button>
          </NavLink>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
