import React from "react";
import heroImage from '../Assets/Images/Sample-picture-01.png';
const HeroSection = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage})`,backgroundPosition: 'center',backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height:"100vh" }}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mt-[-230px] mb-8 text-8xl font-bold">CAREER THAT <span className="text-red-600">MATTER</span></h1>
      <button className=" hover:bg-red-600 bg-red-600 hover:border-red-600 border-red-600 text-4xl px-12 py-2 rounded-lg">REGISTER NOW</button>
    </div>
  </div>
</div>
  );
};

export default HeroSection;
