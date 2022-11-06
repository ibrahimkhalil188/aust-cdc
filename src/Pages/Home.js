import React from 'react';
import About from '../Components/Home/About';
import Affiliation from '../Components/Home/Affiliation';
import AustCdcPillers from '../Components/Home/AustCdcPillers';
import Event from '../Components/Home/Event';
import HeroSection from '../Components/Home/HeroSection';
import LatestNews from '../Components/Home/LatestNews';
import Footer from '../Components/Shared/Footer';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AustCdcPillers></AustCdcPillers>
            <Event></Event>
            <About></About>
            <LatestNews></LatestNews>
            <Affiliation></Affiliation>
            <Footer></Footer>
        </div>
    );
};

export default Home;