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
import image1 from "../../Assets/Images/aust_logo.svg";
const EventWithFixedBg = () => {
  const event = [
    {
      id:"1",
      title:"Event tittle",
      image:image1,
      des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?"
    },
    {
      id:"2",
      title:"Event tittle",
      image:image1,
      des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?"
    },
    {
      id:"3",
      image:image1,     
      title:"Event tittle",
      des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?"
    }
  ]
  return (
   
    <div>
     < div className=" flex items-center flex-col">
          <h1 className="text-6xl mt-16 text-secondary">EVENTS</h1>
          <div className="ml-[10px] mb-12"><div className="bg-primary h-1 w-[210px]"></div></div>
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
        className="mySwiper"
      >
        {
          event.map(singleEvent=><SwiperSlide>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <img style={{width:"450px"}}
                  src={singleEvent.image} alt=""
                />
                <div className="text-white ">
                  <div>
                  <h1 className="text-6xl mx-16 font-bold border-secondary mt-[-200px] uppercase text-start">
                   {singleEvent.title}
                  </h1>
                  <div className="bg-secondary ml-16 h-1 w-[370px]"></div>
                  </div>
                  <p className="py-6 mx-16 text-justify">
                    {singleEvent.des}
                  </p>
                </div>
              </div>
            </div>
            </SwiperSlide>)
        }
        
      </Swiper>
      </div>
  );
};

export default EventWithFixedBg;
