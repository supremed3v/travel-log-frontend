let activeStyle = {
  color: "#61dafb",
  textDecoration: "none",
};
let anchorStyle = {
  textDecoration: "none",
  color: "white",
  hover: {
    color: "#61dafb",
  },
};
let logoStyle = {
  textDecoration: "none",
  color: "#61dafb",
};
let activeButton = {
  textDecoration: "none",
};

const categories = [
  "Adventure Travel",
  "Beach Vacations",
  "Cultural & Theme Tours",
  "Cruises",
  "Family Vacations",
  "Food & Wine Tours",
  "Honeymoons & Romantic Getaways",
  "Luxury & Special Occasions",
  "Nature & Wildlife Tours",
  "Safari & Wildlife",
  "Sightseeing & Tours",
  "Spa & Wellness",
  "Sports & Outdoors",
  "Tours & Sightseeing",
  "Vacation Packages",
  "Walking & Biking Tours",
  "Water Sports",
  "Wildlife & Nature Tours",
  "Yoga & Wellness",
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export {
  activeStyle,
  anchorStyle,
  logoStyle,
  activeButton,
  categories,
  modalStyle,
};
