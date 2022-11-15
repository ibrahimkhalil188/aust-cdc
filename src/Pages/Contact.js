import React from 'react';
import ContactInf from '../Components/ContactUs/ContactInf';
import ContactSlider from '../Components/ContactUs/ContactSlider';
import GoogleMap from '../Components/ContactUs/Map';
import President from '../Components/ContactUs/President';

const Contact = () => {
    return (
        <div>
            <ContactSlider></ContactSlider>
            <President></President>
            <ContactInf></ContactInf>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Contact;