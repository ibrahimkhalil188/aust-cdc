import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import image1 from "../../Assets/bgs/contactus.png";
const ContactSlider = () => {
  return (
    <div>
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
        className="mySwiper  relative"
      >
        <SwiperSlide>
          <img className="w-full object-fill" src={image1} alt="" />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default ContactSlider;
