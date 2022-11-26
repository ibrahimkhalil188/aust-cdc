import React from "react";
import AboutAust from "../Components/Home/AboutAust";
import AboutWithLogo from "../Components/Home/AboutWithLogo";
import Affiliation from "../Components/Home/Affiliation";
import AustCdcPillers from "../Components/Home/AustCdcPillers";
import EventWithFixedBg from "../Components/Home/EventWithFixedBg";
import HeroSection from "../Components/Home/HeroSection";
import LatestNews from "../Components/Home/LatestNews";
import Slider from "../Components/Home/slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HeroSection></HeroSection>
      <AustCdcPillers></AustCdcPillers>
      <AboutWithLogo></AboutWithLogo>
      <AboutAust></AboutAust>
      <LatestNews></LatestNews>
      <EventWithFixedBg></EventWithFixedBg>
      <Affiliation></Affiliation>
    </div>
  );
};

export default Home;
