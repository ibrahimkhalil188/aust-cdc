import React from 'react';
import GmailLogin from '../Components/Login/GmailLogin';
import LoginHero from '../Components/Login/LoginHero';

const LogIn = () => {
    return (
        <div>
            <LoginHero></LoginHero>
            <GmailLogin></GmailLogin>
        </div>
    );
};

export default LogIn;