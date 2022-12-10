import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import image1 from "../../Assets/Images/homepage1-01.png";
import image2 from "../../Assets/Images/homepage2-01.png";
import image3 from "../../Assets/Images/homepage3-01.png";
import image4 from "../../Assets/Images/homepage4-01.png";
const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
        <SwiperSlide>
          <img className="w-full object-fill" src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
