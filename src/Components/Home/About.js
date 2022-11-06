import React from 'react';
import whiteLogo from '../../Assets/Logo/whiteLogo.png';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row justify-between">
                    <img src={whiteLogo} alt="" className="w-[310px] lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black ml-6 lg:ml-12'>
                        <h1 className="text-4xl text-primary border-b-4 border-primary font-bold uppercase mt-[-300px]">aust career development club</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;