import React from 'react';
import AboutHero from '../Components/About/AboutHero';
import ClubFoundingMember from '../Components/About/ClubFoundingMember';
import JoinUs from '../Components/About/JoinUs';
//import LogoAndVideo from '../Components/About/LogoAndVideo';
import LogoExplane from '../Components/About/LogoExplane';
import ClubStructure from '../Components/About/ClubStructure';
import AustCdcPillers from '../Components/Home/AustCdcPillers';

const About = () => {
    
    return (
        <div>
            <AboutHero></AboutHero>
            <AustCdcPillers></AustCdcPillers>
            <JoinUs></JoinUs>
            <LogoExplane></LogoExplane>
            
            <ClubStructure></ClubStructure>
            <ClubFoundingMember></ClubFoundingMember>
        </div>
    );
};

export default About;