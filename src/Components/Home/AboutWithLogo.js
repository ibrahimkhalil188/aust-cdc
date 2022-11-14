import React from 'react';
import whiteLogo from '../../Assets/Logo/whiteLogo.png';
const AboutWithLogo = () => {
    return (
        <div className='mx-24 mt-24'>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row justify-between">
                    <img src={whiteLogo} alt="" className="w-[310px] lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black mt-24 ml-6 lg:ml-24'>
                        <h1 className="text-4xl text-primary border-b-2 border-primary font-bold uppercase mt-[-300px]">aust career development club</h1>
                        <p className='text-2xl font-sans mt-12 text-justify '>AUST Career Development Club, widely known as "AUSTCDC", is established in Ahsanullah University of Science & Technology (AUST), consists of more than 2000 members, and aims to be the finest student-oriented club in this Institute, incepted to prepare AUSTians as an advanced human resource and help them to be more career conscious, develop them as a strong competitor for different competitive career opportunities and reach their desired peak in their respective sector.
Our regular activities include seminars on Higher Studies Abroad, Research, Employability Skills, Career Prospects, Skill Set development, and Professional Etiquette.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutWithLogo;