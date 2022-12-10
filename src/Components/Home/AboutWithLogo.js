import React from 'react';
import { Link } from "react-router-dom";
import whiteLogo from '../../Assets/Logo/whiteLogo.png';
const AboutWithLogo = () => {
    return (
        <div className='lg:mx-24 mt-16'>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col-reverse lg:flex-row justify-between">
                    <img src={whiteLogo} alt="" className="w-[340px] lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black lg:mt-24 mx-4 lg:ml-24 pt-48'>
                        <h1 className="text-xl lg:text-4xl text-primary border-b-2 border-secondary font-bold uppercase lg:mt-[-300px]">aust career development club</h1>
                        <p className='text-xl font-sans mt-8 lg:mt-18 text-justify'>AUST Career Development Club, widely known as "AUST CDC", is established at Ahsanullah University of Science & Technology (AUST), Dhaka, in the Spring’2021. AUSTCDC aims to be the finest student-oriented club of Ahsanullah University of Science and Technology (AUST), incepted to prepare AUSTians as advanced human resources and help them to be more career conscious, develop them as a strong competitor for different competitive career opportunities and reach their desired peak in their respective sector.
</p><p className='text-xl font-sans mt-6 text-justify'>Our regular activities include job fairs, Intra & inter university competitions, seminars & webinars on Higher Studies Abroad, Research, Employability Skills, Career Prospects, and Professional Etiquette. Our vision is to make AUSTians confident about choosing career paths and being successful in the sector they wish to join after graduation.
</p><p className='text-xl font-sans mt-6 text-justify'>This club's supreme objective is to provide a common ground for students from all departments of AUST to get together and share their excitement.Our motto “Anticipate-Adapt-Accelerate” inspires us the most thriving towards excellence. 
<Link to="/About"><span className='text-xl lg:text-xl font-sans hover:text-secondary mt-6 lg:mt-12 text-justify'> See more...</span></Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutWithLogo;