import React from 'react';
import AustCdcPillers from '../Components/AustCdcPillers';
import Event from '../Components/Event';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AustCdcPillers></AustCdcPillers>
            <Event></Event>
        </div>
    );
};

export default Home;