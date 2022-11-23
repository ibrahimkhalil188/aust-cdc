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
import image2 from "../../Assets/Images/resulote.png";
import image3 from "../../Assets/Images/corporate_crake.jpg";
import image4 from "../../Assets/Images/design_your_career.jpg";
const EventWithFixedBg = () => {
  const event = [
    {
      id:"1",
      title:"Event tittle",
      image:image2,
      des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?"
    },
    {
      id:"2",
      title:"Corporate Cracking: Crack the interview ",
      image:image3,
      des:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?"
    },
    {
      id:"3",
      image:image4,     
      title:"Design Your Career 101 (Fall21)",
      des: ""
    },
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
          event.map(singleEvent=><SwiperSlide key={singleEvent.id}>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
              <div className="hidden lg:block">
                <img style={{width:"650px"}}
                  src={singleEvent.image} alt=""
                /></div>
                <div className="lg:hidden block">
                <img style={{width:"250px"}}
                  src={singleEvent.image} alt=""
                /></div>
                <div className="text-white ">
                  <div>
                  <h1 className=" text-5xl lg:text-6xl mx-4 lg:mx-16 font-bold border-secondary lg:mt-[-200px] uppercase text-center lg:text-start">
                   {singleEvent.title}
                  </h1>
                  <div className="bg-secondary ml-6 lg:ml-16 h-1 w-[310px] lg:w-[370px]"></div>
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
