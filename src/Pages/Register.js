import React from 'react';
import GmailRegister from '../Components/Register/GmailRegister';
import RegisterHero from '../Components/Register/RegisterHero';
import RegisterInstruction from '../Components/Register/RegisterInstruction';

const Register = () => {
    return (
        <div>
            <RegisterHero></RegisterHero>
            <RegisterInstruction></RegisterInstruction>
            <GmailRegister></GmailRegister>
        </div>
    );
};

export default Register;