import React from 'react';
import AboutWithLogo from '../Components/Home/AboutWithLogo';
import Affiliation from '../Components/Home/Affiliation';
import AustCdcPillers from '../Components/Home/AustCdcPillers';
import EventWithFixedBg from '../Components/Home/EventWithFixedBg';
import HeroSection from '../Components/Home/HeroSection';
import LatestNews from '../Components/Home/LatestNews';
import AboutAust from '../Components/Home/AboutAust';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
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