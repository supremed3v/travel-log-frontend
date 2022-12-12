import React, { useState, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
import ListView from "../components/ListView";

const Profile = () => {
  const { user, Logout } = useContext(AuthContext);
  const { userPosts } = useContext(PostContext);
  const navigate = useNavigate();
  const onLogout = () => {
    Logout();
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Profile</h1>
        <Box>
          <Typography variant="h4">Name: {user.name}</Typography>
          <Typography variant="h4">Email: {user.email}</Typography>
        </Box>
      </div>
      <Typography variant="h4">My Posts: ({userPosts.length})</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
        columns={{ xs: 6, sm: 8, md: 16 }}
        sx={{
          padding: 2,
          mt: 50,
        }}
        style={{ marginTop: 5, padding: 2, marginLeft: 30 }}
      >
        {userPosts.map((post) => (
          <ListView post={post} />
        ))}
      </Grid>

      <Button variant="contained" color="primary" onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};

export default Profile;
