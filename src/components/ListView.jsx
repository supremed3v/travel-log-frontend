import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const ListView = () => {
  let images = [
    "https://source.unsplash.com/random/200x200?sig=1",
    "https://source.unsplash.com/random/200x200?sig=2",
    "https://source.unsplash.com/random/200x200?sig=3",
    "https://source.unsplash.com/random/200x200?sig=4",
  ];
  return (
    <>
      <Typography
        variant="h3"
        style={{
          width: 700,
          color: "#1B0940",
          fontWeight: "bold",
          marginLeft: 10,
          padding: "2rem",
        }}
      >
        Discover the touch of nature!
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 6, sm: 8, md: 16 }}
        sx={{
          padding: 2,
        }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 200,
            }}
            variant="outlined"
          >
            <h1>Location</h1>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              indicators={false}
              animation="slide"
              duration={700}
            >
              {images.map((image) => (
                <img
                  src={image}
                  alt="example"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  key={image}
                />
              ))}
            </Carousel>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
            variant="outlined"
          >
            <h1>Location</h1>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              indicators={false}
              animation="slide"
              duration={700}
            >
              {images.map((image) => (
                <img
                  src={image}
                  alt="example"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  key={image}
                />
              ))}
            </Carousel>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
            variant="outlined"
          >
            <h1>Location</h1>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              indicators={false}
              animation="slide"
              duration={700}
            >
              {images.map((image) => (
                <img
                  src={image}
                  alt="example"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  key={image}
                />
              ))}
            </Carousel>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
            variant="outlined"
          >
            <h1>Location</h1>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              indicators={false}
              animation="slide"
              duration={700}
            >
              {images.map((image) => (
                <img
                  src={image}
                  alt="example"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  key={image}
                />
              ))}
            </Carousel>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card
            sx={{
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
            variant="outlined"
          >
            <h1>Location</h1>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              indicators={false}
              animation="slide"
              duration={700}
            >
              {images.map((image) => (
                <img
                  src={image}
                  alt="example"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  key={image}
                />
              ))}
            </Carousel>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ListView;
