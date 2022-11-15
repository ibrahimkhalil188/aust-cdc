import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import image1 from "../../Assets/Images/slider_one-01.png";
import image3 from "../../Assets/Images/slider_three-01.png";
import image2 from "../../Assets/Images/slider_two-01.png";
const ContactSlider = () => {
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
    </>
  );
};

export default ContactSlider;
