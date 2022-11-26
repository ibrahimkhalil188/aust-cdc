import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
 
    <div className="absolute to top-28 left-14 2xl:left-[20%]  lg:top-[38%] lg:left-[10%] z-10">
    <h1 className="text-3xl lg:text-[110px] font-bold"><span className="text-white">CAREER THAT</span> <span className="text-secondary">MATTER</span></h1>
      <button className="hover:bg-white hover:text-secondary hover:scale-105 bg-secondary text-lg lg:text-xl font-bold px-2 lg:px-8 lg:py-3 py-2 mt-2 lg:mt-16 rounded-lg text-white ml-[25%] lg:ml-[40%]"><Link to="/register">REGISTER NOW</Link></button>
    </div>
  );
};

export default HeroSection;
