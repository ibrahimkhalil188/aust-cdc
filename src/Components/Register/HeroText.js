import React from 'react';
import { Link } from 'react-router-dom';

const HeroText = () => {
    return (
        <div className="absolute top-[30%] left-[10%] z-10">
    <h1 className="text-[110px] font-bold"><span className="text-white">CAREER THAT</span> <span className="text-secondary">MATTER</span></h1>
      <button className="hover:bg-white hover:text-secondary hover:scale-105 bg-secondary text-xl font-bold px-8 py-3 mt-2 rounded-lg text-white ml-[40%]"><Link to="/register">REGISTER NOW</Link></button>
    </div>
    );
};

export default HeroText;