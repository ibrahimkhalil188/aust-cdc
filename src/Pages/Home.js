import React from 'react';
import About from '../Components/About';
import Affiliation from '../Components/Affiliation';
import AustCdcPillers from '../Components/AustCdcPillers';
import Event from '../Components/Event';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import LatestNews from '../Components/LatestNews';

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