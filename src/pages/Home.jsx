import { Typography, Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import ListView from "../components/ListView";
import { PostContext } from "../context/PostContext";

const Home = () => {
  const { userPosts, posts, loading } = useContext(PostContext);
  console.log(userPosts);
  console.log(posts);
  if (loading) return <h1>Loading...</h1>;
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
      <Typography variant="h2">Start finding your next adventure!</Typography>
      <div style={{ marginTop: 50, marginLeft: 10, paddingLeft: 40 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 6, sm: 8, md: 16 }}
          sx={{
            padding: 2,
            mt: 50,
          }}
        >
          {posts && posts.map((post) => <ListView post={post} />)}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
