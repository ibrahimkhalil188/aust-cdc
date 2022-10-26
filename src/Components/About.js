import React from 'react';
import profile from '../Assets/Logo/austlogo.png';
const About = () => {
    return (
        <div className='mt-[-150px]'>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={profile} alt="" className="w-[380px] lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black mx-6 lg:w-1/2 lg:ml-12'>
                        <h1 className="text-5xl font-bold">About me</h1>
                        <p className="py-6 text-xl font-serif ">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum rerum veniam? Libero quaerat dolore modi, eaque architecto dolor nobis maiores? Nisi debitis sunt fugiat minima sit, enim ipsam possimus doloribus fuga fugit ea, expedita adipisci harum recusandae laboriosam deserunt!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;