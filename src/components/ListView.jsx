import React from "react";
import { Card, Divider, Grid, Rating, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

const ListView = ({ post }) => {
  const options = {
    value: post.rating,
    precision: 0.5,
    readOnly: true,
  };
  return (
    <Link style={{ textDecoration: "none" }} to={`/travel-log/${post._id}`}>
      <Grid
        item
        xs={2}
        sm={4}
        md={4}
        sx={{
          ml: 1,
          mt: 2,
        }}
      >
        <Card
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
          }}
          variant="outlined"
        >
          <Typography variant="h4">{post.location}</Typography>
          <Divider />
          <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            indicators={false}
            animation="slide"
            duration={700}
          >
            {post.images.map((image) => (
              <img
                src={image.url}
                alt="example"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                key={image}
              />
            ))}
          </Carousel>
          <Rating {...options} />
        </Card>
      </Grid>
    </Link>
  );
};

export default ListView;
