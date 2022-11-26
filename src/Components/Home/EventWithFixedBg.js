import React from "react";
import eventBg from "../../Assets/Images/eventsbg.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import image3 from "../../Assets/Images/corporate_crake.jpg";
import image4 from "../../Assets/Images/design_your_career.jpg";
import image2 from "../../Assets/Images/resulote.png";
const EventWithFixedBg = () => {
  const event = [
    {
      id: "1",
      title: "Event tittle",
      image: image2,
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?",
    },
    {
      id: "2",
      title: "Corporate Cracking: Crack the interview ",
      image: image3,
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?",
    },
    {
      id: "3",
      image: image4,
      title: "Design Your Career 101 (Fall21)",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi voluptatibus unde necessitatibus quae, molestiae ea consequatur iste iusto nihil, odit quaerat enim officia nam voluptas obcaecati! Quod, ad libero?",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${eventBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        
      }}
      className="lg:p-12 py-8 "
    >
      <div className="flex justify-center">
        <div>
          <h1 className="text-5xl lg:mx-16  text-center text-white font-sans font-bold">
            EVENTS
          </h1>
        </div>
        {/*  <div className=" h-1 w-48 bg-white"></div> */}
      </div>
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
        className="mySwiper"
      >
        <div>
          
          {event.map((singleEvent) => (
            <SwiperSlide key={singleEvent.id}>
              <div className="2xl:w-[1300px] lg:flex border-4 border-white rounded-2xl w-full m-4 lg:m-12 py-[-120px] 2xl:h-[60vh] h-[70vh] ">
                <div className="w-full lg:w-1/2  flex justify-center items-center">
                  <div className=" w-96 h-72 lg:w-[380px] lg:h-[380px]  ">
                  <img className="p-2" src={singleEvent.image} alt="" />
                  </div>
                </div>
                <div className="flex justify-center mt-12 text-justify mr-12 w-full lg:w-1/2 text-white ">
                  <div>
                  <h1 className="text-4xl mb-8 font-sans font-bold mx-4 lg:mx-0">{singleEvent.title}</h1>
                  <p className="text-lg font-sans mx-4 lg:mx-0">{singleEvent.des}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default EventWithFixedBg;
