import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
 
    <div className="absolute flex justify-center items-center h-1/2 lg:h-full w-full top-10 z-10" >
   <div>
   <h1 className="text-3xl lg:text-[110px] text-center font-bold"><span className="text-white">CAREER THAT</span> <span className="text-secondary">MATTER</span></h1>
      <div className="flex justify-center">
      <button className="hover:bg-white hover:text-secondary hover:scale-105 bg-secondary text-lg lg:text-xl font-bold px-2 lg:px-8 lg:py-3 py-2 mt-2 lg:mt-16 rounded-lg text-white"><Link to="/register">REGISTER NOW</Link></button>
      </div>
   </div>
    </div>
  );
};

export default HeroSection;
