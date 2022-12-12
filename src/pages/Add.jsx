import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Divider,
  Container,
  Typography,
  TextField,
  Grid,
  Rating,
  Button,
  Autocomplete,
  InputLabel,
} from "@mui/material";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import DatePicker from "react-datepicker";
import { PostContext } from "../context/PostContext";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthContext";

const Add = () => {
  const { createPost, loading, userPosts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    costOfTravel: 0,
    travelDate: new Date(),
    categories: [],
    images: [],
    ratings: 0,
    user: user._id,
  });
  const [image, setImage] = useState([]);
  const [rating, setRating] = useState(0);
  const [imagePreview, setImagePreview] = useState([]);
  const hiddenFileInput = useRef(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handlePick = (e) => {
    hiddenFileInput.current.click();
  };

  const imageChange = (e) => {
    const files = Array.from(e.target.files);
    setImage([]);
    setImagePreview([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((prevArray) => [...prevArray, reader.result]);
          setImage((prevArray) => [...prevArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  const formSubmit = (e) => {
    setValue(data[0].name);
    setInputValue(data[0].name + ", " + data[0].country.name);
    image.forEach((image) => {
      formData.images.push(image);
    });
    createPost(formData);
    setFormData({
      title: "",
      location: "",
      description: "",
      costOfTravel: 0,
      travelDate: new Date(),
      categories: [],
      images: [],
      ratings: 0,
      user: user._id,
    });
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
    const newImages = image.filter((image, i) => i !== index);
    const newImagePreview = imagePreview.filter((image, i) => i !== index);
    setImage(newImages);
    setImagePreview(newImagePreview);
  };
  console.log(userPosts);

  if (loading) return <h1>Loading...</h1>;

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
              setFormData({ ...formData, location: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Location"
                InputProps={{
                  ...params.InputProps,
                }}
                variant="outlined"
                required
              />
            )}
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
            required
            error={
              formData.description.length !== 0 &&
              formData.description.length < 3
            }
            helperText={
              formData.description.length !== 0 &&
              formData.description.length < 3
                ? "Description must be at least 3 characters"
                : ""
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
            required
            error={
              formData.costOfTravel.length !== 0 && formData.costOfTravel < 0
            }
            helperText={
              formData.costOfTravel.length !== 0 && formData.costOfTravel < 0
                ? "Cost of travel must be greater than 0"
                : ""
            }
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6">Rate your experience</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
              setFormData({ ...formData, ratings: newRating });
            }}
            sx={{ color: "yellow" }}
            required
            error={formData.ratings.length !== 0 && formData.ratings < 0}
            helperText={
              formData.ratings.length !== 0 && formData.ratings < 0
                ? "Rating must be greater than 0"
                : ""
            }
          />
        </Grid>
        <Grid item xs={5}>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={[
              { value: "Adventure Travel", label: "Adventure Travel" },
              { value: "Beach Vacation", label: "Beach Vacation" },
              {
                value: "Cultural & Theme Tours",
                label: "Cultural & Theme Tours",
              },
              { value: "Family Vacations", label: "Family Vacations" },
              { value: "Tours & Sightseeing", label: "Tours & Sightseeing" },
            ]}
            placeholder="Select categories"
            onChange={(e) => setFormData({ ...formData, categories: e })}
            value={formData.categories}
            required
            error={
              formData.categories.length !== 0 && formData.categories.length < 3
            }
            helperText={
              formData.categories.length !== 0 && formData.categories.length < 3
                ? "You must select at least 1 Category"
                : ""
            }
          />
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            onClick={handlePick}
            startIcon={<AddPhotoAlternateIcon />}
            sx={{ backgroundColor: "#FC5156" }}
            error={image.length !== 0 && image.length < 3}
            helperText={
              image.length !== 0 && image.length < 3
                ? "You must select at least 1 image"
                : ""
            }
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
            required
          />
        </Grid>
        <Grid item xs={5}>
          <InputLabel>Date you visited</InputLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) =>
              setStartDate(date) &&
              setFormData({ ...formData, startDate: date })
            }
          />
        </Grid>
      </Grid>
      <Grid container>
        <div>
          {imagePreview.map((img, index) => (
            <>
              <img
                src={img}
                alt="
            "
                style={{ height: "100px" }}
                key={img}
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
                key={img}
              >
                <DeleteIcon onClick={() => deleteImage(index)} />
              </div>
            </>
          ))}
        </div>
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
