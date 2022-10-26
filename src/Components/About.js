import React from 'react';
import profile from '../Assets/Logo/austlogo.png';
const About = () => {
    return (
        <div id='aboutme'>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={profile} alt="" className="w-[380px] lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black m-6 lg:w-1/2 lg:ml-12'>
                        <h1 className="text-5xl font-bold">About me</h1>
                        <p className="py-6 text-xl font-serif ">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum rerum veniam? Libero quaerat dolore modi, eaque architecto dolor nobis maiores? Nisi debitis sunt fugiat minima sit, enim ipsam possimus doloribus fuga fugit ea, expedita adipisci harum recusandae laboriosam deserunt!
                        </p>
                        <a href='https://drive.google.com/file/d/1hC41TNJo9SzHj65C1Z3ztXo0w5IczAcc/view ' target="_blank" rel="noreferrer" className='btn btn-accent mr-4 uppercase hover:bg-accent '>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;