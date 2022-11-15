import React from 'react';
import GmailRegister from '../Components/Register/GmailRegister';
import RegisterSlider from '../Components/Register/RegisterHero';
import RegisterInstruction from '../Components/Register/RegisterInstruction';

const Register = () => {
    return (
        <div>
            <RegisterSlider></RegisterSlider>
            <RegisterInstruction></RegisterInstruction>
            <GmailRegister></GmailRegister>
        </div>
    );
};

export default Register;