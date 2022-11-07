import React from 'react';
import About from '../Components/Home/AboutWithLogo';
import Affiliation from '../Components/Home/Affiliation';
import AustCdcPillers from '../Components/Home/AustCdcPillers';
import Event from '../Components/Home/Event';
import HeroSection from '../Components/Home/HeroSection';
import LatestNews from '../Components/Home/LatestNews';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AustCdcPillers></AustCdcPillers>
            <Event></Event>
            <About></About>
            <LatestNews></LatestNews>
            <Affiliation></Affiliation>
            
        </div>
    );
};

export default Home;