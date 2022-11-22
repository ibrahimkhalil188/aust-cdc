import React from 'react';
import AboutHero from '../Components/About/AboutHero';
import JoinUs from '../Components/About/JoinUs';
import LogoAndVideo from '../Components/About/LogoAndVideo';
import Member from '../Components/GoverningPanel/Member';
import AustCdcPillers from '../Components/Home/AustCdcPillers';
import LogoExplane from '../Components/About/LogoExplane';

const About = () => {
    
    return (
        <div>
            <AboutHero></AboutHero>
           <LogoAndVideo>Logo with explanation</LogoAndVideo>
            <JoinUs></JoinUs>
            <LogoExplane></LogoExplane>
            <AustCdcPillers></AustCdcPillers>
            <h1 className='text-6xl my-8 mt-12 font-bold uppercase text-primary text-center'>clubs <span className='text-secondary'> founding </span>members</h1>
            <Member></Member>
        </div>
    );
};

export default About;