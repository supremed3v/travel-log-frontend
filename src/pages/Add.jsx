import React, { useState, useRef, useEffect } from "react";
import {
  Divider,
  Container,
  Typography,
  TextField,
  Grid,
  Rating,
  Button,
  Autocomplete,
} from "@mui/material";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    costOfTravel: "",
    travelDate: "",
    categories: [],
  });
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [imagePreview, setImagePreview] = useState([]);
  const hiddenFileInput = useRef(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handlePick = (e) => {
    hiddenFileInput.current.click();
  };

  const imageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagePreview([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((prevArray) => [...prevArray, reader.result]);
          setImages((prevArray) => [...prevArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  const formSubmit = (e) => {
    setValue(data[0].name);
    setInputValue(data[0].name + ", " + data[0].country.name);
    formData.location = inputValue;
    console.log(formData.location);
  };

  useEffect(() => {
    const searchPlace = () => {
      const options = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places/autocomplete",
        params: { limit: "4", skip: "0", q: inputValue, type: "CITY" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "spott.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    searchPlace();
  }, [inputValue]);

  const deleteImage = (index) => {
    const newImages = images.filter((image, i) => i !== index);
    const newImagePreview = imagePreview.filter((image, i) => i !== index);
    setImages(newImages);
    setImagePreview(newImagePreview);
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
            label="Place you visited"
            variant="outlined"
            fullWidth
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-number"
            label="Cost of travel"
            variant="outlined"
            fullWidth
            value={formData.costOfTravel}
            onChange={(e) =>
              setFormData({ ...formData, costOfTravel: e.target.value })
            }
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6">Rate your experience</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
              console.log(newRating);
            }}
            sx={{ color: "yellow" }}
          />
        </Grid>
        <Grid item xs={5}>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            onChange={(e) => setFormData({ ...formData, categories: e })}
            value={formData.categories}
          />
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            onClick={handlePick}
            startIcon={<AddPhotoAlternateIcon />}
            sx={{ backgroundColor: "#FC5156" }}
          >
            Add photos
          </Button>
          <input
            type="file"
            multiple
            accept="image/"
            onChange={imageChange}
            style={{ display: "none" }}
            ref={hiddenFileInput}
          />
        </Grid>
        <Grid item xs={5}>
          <Autocomplete
            value={value}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={data.map(
              (option) => option.name + ", " + option.country.name
            )}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            onChange={(event, newValue) => {
              setValue(newValue);
              formData.location = newValue;
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Location"
                InputProps={{
                  ...params.InputProps,
                }}
                variant="outlined"
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container>
        {imagePreview.map((img, index) => (
          <div>
            <img
              src={img}
              alt="
            "
              style={{ height: "100px" }}
              key={index}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 10,
                marginLeft: 20,
              }}
            >
              <DeleteIcon onClick={() => deleteImage(index)} />
            </div>
          </div>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Button variant="contained" onClick={formSubmit} size="large">
          Add experience
        </Button>
      </div>
    </Container>
  );
};

export default Add;
