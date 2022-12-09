import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import {
  Tab,
  Tabs,
  Typography,
  TextField,
  Box,
  AppBar,
  Container,
  Button,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { AuthContext } from "../context/AuthContext";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const LoginSignup = () => {
  const { Login, loading, user, error, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    Login(email, password);
    if (error) {
      console.log(error);
    }
    if (user !== null) {
      <Navigate to="/" />;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    signUp(name, email, password);
    if (error) {
      console.log(error);
    }
    if (user !== null) {
      <Navigate to="/" />;
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.white",
          width: 500,
          mt: 5,
          ml: 50,
          borderColor: "black",
          border: 1,
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ bgcolor: "", pl: 5, pr: 5 }}
          >
            <Tab label="Login" {...a11yProps(0)} sx={{ color: "white" }} />
            <Tab label="Signup" {...a11yProps(1)} sx={{ color: "white" }} />
          </Tabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <Box value={value} index={0} style={Object.assign({})}>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h4">Login</Typography>
              </Box>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" onClick={handleLogin}>
                  Login
                </Button>
              </Box>
            </Container>
          </Box>
          <Box value={value} index={1} style={Object.assign({})}>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Box sx={{ mb: 1 }}>
                <Typography variant="h4">Signup</Typography>
              </Box>
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Enter your name"
                type="text"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ width: "100%", mb: 2 }}
                placeholder="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" onClick={handleSignUp}>
                  Signup
                </Button>
              </Box>
            </Container>
          </Box>
        </SwipeableViews>
      </Box>
    </div>
  );
};

export default LoginSignup;
