import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import { Link } from "react-router-dom";
import image1 from "../../Assets/Images/regis_one.png";
import image2 from "../../Assets/Images/regis_three.png";
import image3 from "../../Assets/Images/regis_two.png";
const RegisterSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[85vh] relative"
      >
        <SwiperSlide>
          <img className="w-full object-fill" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-fill" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-fill" src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-[38%] left-8 z-10">
        <h1 className="text-[90px] font-bold uppercase">
          <span className="text-white">Join the League of </span>{" "}
          <span className="text-secondary">Leaders</span>
        </h1>
        <button className="hover:bg-white hover:text-secondary hover:scale-105 bg-secondary text-xl font-bold px-8 py-3 mt-2 rounded-lg text-white ml-[40%]">
          <Link to="/register">REGISTER NOW</Link>
        </button>
      </div>
    </>
  );
};

export default RegisterSlider;
