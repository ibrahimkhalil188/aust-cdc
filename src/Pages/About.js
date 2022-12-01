import React from 'react';
import AboutHero from '../Components/About/AboutHero';
import ClubFoundingMember from '../Components/About/ClubFoundingMember';
import JoinUs from '../Components/About/JoinUs';
import LogoAndVideo from '../Components/About/LogoAndVideo';
import LogoExplane from '../Components/About/LogoExplane';
import AustCdcPillers from '../Components/Home/AustCdcPillers';

const About = () => {
    
    return (
        <div>
            <AboutHero></AboutHero>
           <LogoAndVideo>Logo with explanation</LogoAndVideo>
            <JoinUs></JoinUs>
            <LogoExplane></LogoExplane>
            <AustCdcPillers></AustCdcPillers>
            <ClubFoundingMember></ClubFoundingMember>
        </div>
    );
};

export default About;