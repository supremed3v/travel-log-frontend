import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ExperienceDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const getPostDetails = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/findSingle/${id}`
    );
    setData(response.data.travelExperience);
  };
  useEffect(() => {
    getPostDetails();
  }, []);
  console.log(data);
  if (!data) return null;

  return (
    <>
      <Typography variant="h2">{data.location}</Typography>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image.url} alt="example" key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image.url}
              alt="example"
              key={i}
              style={{ height: 150, width: 150 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <Typography variant="h4">Description</Typography>
        <Typography variant="body1">{data.description}</Typography>
      </div>
      <div>
        <Typography variant="h4">Cost of travel</Typography>
        <Typography variant="body1">{data.costOfTravel}</Typography>
      </div>
      <div>
        <Typography variant="h4">Visited on</Typography>
        <Typography variant="body1">{data.travelDate}</Typography>
      </div>
    </>
  );
};

export default ExperienceDetails;
