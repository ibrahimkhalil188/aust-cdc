import React from 'react';
import heroImage from '../../Assets/Images/Sample-picture-01.png';
const ContactUs = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage})`,backgroundPosition: 'center',backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat', height:"100vh" }}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1 className="mt-[-230px] mb-8 text-8xl font-bold uppercase"><span className="text-white">contact</span> <span className="text-secondary ml-2">Info</span></h1>   
    </div>
  </div>
</div>
    );
};

export default ContactUs;