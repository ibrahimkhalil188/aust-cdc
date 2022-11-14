import React from 'react';
import AboutAust from '../Components/Home/AboutAust';
import AboutWithLogo from '../Components/Home/AboutWithLogo';
import Affiliation from '../Components/Home/Affiliation';
import AustCdcPillers from '../Components/Home/AustCdcPillers';
import EventWithFixedBg from '../Components/Home/EventWithFixedBg';
import LatestNews from '../Components/Home/LatestNews';
import Slider from '../Components/Home/slider';

const Home = () => {
    return (
        <div>
            {/* <HeroSection></HeroSection> */}
            <Slider></Slider>
            <AustCdcPillers></AustCdcPillers>
            <AboutWithLogo></AboutWithLogo>
            <AboutAust></AboutAust>
            <EventWithFixedBg></EventWithFixedBg>
            <LatestNews></LatestNews>
            <Affiliation></Affiliation>
            
        </div>
    );
};

export default Home;