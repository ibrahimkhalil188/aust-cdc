import React from "react";
import heroImage from "../Assets/Images/Sample picture-01.png";
const HeroSection = () => {
  return (
    <div>
      <img className="h-[80vh] w-full" src={heroImage} alt="Hero Images" />
    </div>
  );
};

export default HeroSection;
