import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import image1 from "../../Assets/Images/austBg.png";
import image2 from "../../Assets/Images/eventBG-01.png";
const Slider = ()=> {
  return (
    <>
      <Swiper spaceBetween={30}
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
        className="mySwiper">
        <SwiperSlide><img src={image1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={image1} alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;