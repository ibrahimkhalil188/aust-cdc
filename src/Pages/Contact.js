import React from 'react';
import ContactInf from '../Components/ContactUs/ContactInf';
import ContactUs from '../Components/ContactUs/ContactUs';
import GoogleMap from '../Components/ContactUs/Map';
import President from '../Components/ContactUs/President';

const Contact = () => {
    return (
        <div>
            <ContactUs></ContactUs>
            <President></President>
            <ContactInf></ContactInf>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Contact;