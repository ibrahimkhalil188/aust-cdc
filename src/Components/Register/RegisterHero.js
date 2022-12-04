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
        className="mySwiper relative"
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

      <div className="absolute flex justify-center items-center lg:h-full h-1/2 w-full top-[3%] z-10">
   <div>
   <h1 className="text-3xl lg:text-[90px] text-center font-bold uppercase"><span className="text-white">Join the League of</span> <span className="text-secondary">Leaders</span></h1>
      <div className="flex justify-center">
      <button className="hover:bg-white hover:text-secondary hover:scale-105 bg-secondary text-lg lg:text-xl font-bold px-2 lg:px-8 lg:py-3 py-2 mt-2 lg:mt-16 rounded-lg text-white"><Link to="/register">REGISTER NOW</Link></button>
      </div>
   </div>
    </div>
    </>
  );
};

export default RegisterSlider;
