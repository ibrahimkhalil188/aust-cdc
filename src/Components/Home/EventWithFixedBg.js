import React from "react";
import eventBg from "../../Assets/Images/eventBG-01.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const EventWithFixedBg = () => {
  return (
    <div>
     < div className=" flex items-center flex-col">
          <h1 className="text-6xl mt-6 text-secondary">EVENTS</h1>
          <div className="ml-[10px]"><div className="bg-primary h-1 w-[210px]"></div></div>
         {/*  <div className=" h-1 w-48 bg-white"></div> */}
        </div>
        <Swiper
        style={{
          backgroundImage: `url(${eventBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
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
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch" alt=""
              className=" w-[550px] h-[450px] rounded-lg shadow-2xl"
            />
            <div className="text-white ">
              <h1 className="text-6xl mx-16 font-bold border-b-4 border-secondary mt-[-200px] uppercase">
                title of the event
              </h1>
              <p className="py-6 mx-16">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch" alt=""
              className=" w-[550px] h-[450px] rounded-lg shadow-2xl"
            />
            <div className="text-white ">
              <h1 className="text-6xl mx-16 font-bold border-b-4 border-secondary mt-[-200px] uppercase">
                title of the event
              </h1>
              <p className="py-6 mx-16">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch" alt=""
              className=" w-[550px] h-[450px] rounded-lg shadow-2xl"
            />
            <div className="text-white ">
              <h1 className="text-6xl mx-16 font-bold border-b-4 border-secondary mt-[-200px] uppercase">
                title of the event
              </h1>
              <p className="py-6 mx-16">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default EventWithFixedBg;
