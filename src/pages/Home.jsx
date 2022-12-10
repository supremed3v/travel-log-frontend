import { Typography, Grid, Button } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import ListView from "../components/ListView";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  if (user !== null) {
    const getUserPost = async (id) => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/find/${id}`);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserPost(user._id);
  }

  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: 5, padding: 2 }}>
        <Grid item xs={7}>
          <img
            src="https://images.unsplash.com/photo-1497531551184-06b252e1bee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="example"
            style={{
              width: "100%",
              objectFit: "cover",
              height: 600,
              borderRadius: 10,
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography
            variant="h1"
            style={{ width: 500, color: "#1B0940", fontWeight: "bold" }}
          >
            Life is short and the world is wide!
          </Typography>
          <Typography
            variant="span"
            style={{ color: "#1B0940", fontWeight: "bold", paddingTop: "2rem" }}
          >
            To get the best of your next adventure, you need to plan it right.
            Browse through our collection of curated trips and find the one that
            suits you best.
            <br />
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#FC5156", marginTop: "2rem" }}
          >
            Browse
          </Button>
        </Grid>
      </Grid>
      <ListView />
    </div>
  );
};

export default Home;
