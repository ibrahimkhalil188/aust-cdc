import React from 'react';
import About from '../Components/Home/AboutWithLogo';
import Affiliation from '../Components/Home/Affiliation';
import AustCdcPillers from '../Components/Home/AustCdcPillers';
import EventWithFixedBg from '../Components/Home/EventWithFixedBg';
import HeroSection from '../Components/Home/HeroSection';
import LatestNews from '../Components/Home/LatestNews';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AustCdcPillers></AustCdcPillers>
            <EventWithFixedBg></EventWithFixedBg>
            <About></About>
            <LatestNews></LatestNews>
            <Affiliation></Affiliation>
            
        </div>
    );
};

export default Home;