import React, { useState } from "react";
import { Divider, Container, Typography, TextField, Grid } from "@mui/material";

const Add = () => {
  const [value, setValue] = useState({
    name: "",
    location: "",
    description: "",
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container
      fixed
      sx={{
        p: 2,
        marginTop: 10,
        boxShadow:
          "0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2) ",
      }}
    >
      <Typography variant="h2">Share your experience!</Typography>
      <Divider />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 1, md: 2 }}
        sx={{ mt: 2 }}
      >
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
            value={value}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Add;
