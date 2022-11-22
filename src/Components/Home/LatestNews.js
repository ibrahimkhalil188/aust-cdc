import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Style/slider.style.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import image1 from "../../Assets/Images/aust_logo.svg";
const LatestNews = () => {
  const news = [
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
          <h1 className="text-6xl mt-16 text-primary uppercase">Latest News</h1>
          <div className="ml-[10px]"><div className="bg-secondary h-1 w-[350px]"></div></div>
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
        {
          news.map(singleNews=><SwiperSlide key={singleNews.id}>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col-reverse lg:flex-row">
                <div>
                  <div>
                  <h1 className="text-4xl lg:text-6xl mx-16 font-bold border-secondary mt-16 lg:mt-[-200px] uppercase text-start">
                   {singleNews.title}
                  </h1>
                  <div className="bg-secondary ml-12 lg:ml-16 h-1 w-[250px] lg:w-[370px]"></div>
                  </div>
                  <p className="py-6 mx-16 text-justify">
                    {singleNews.des}
                  </p>
                </div>
                <div className="hidden lg:block">
                <img style={{width:"650px"}}
                  src={singleNews.image} alt=""
                /></div>
                <div className="lg:hidden block">
                <img style={{width:"250px"}}
                  src={singleNews.image} alt=""
                />
                </div>
                
              </div>
            </div>
            </SwiperSlide>)
        }
        
      </Swiper>
      </div>
  );
};


export default LatestNews;