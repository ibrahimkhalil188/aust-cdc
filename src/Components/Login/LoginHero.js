import React from "react";
import heroImage from '../../Assets/bgs/loginBanner.png';
import { Link } from "react-router-dom";
const LoginHero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})`,backgroundPosition: 'center',backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat', height:"60vh" }}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1 className="mt-[-30px] mb-8 text:4xl lg:text-6xl font-bold"><span className="text-white uppercase">LOGIN for show the</span> <span className="text-white uppercase">incredible events</span></h1>
    <Link to="/register"><button  className=" hover:bg-white bg-red-600 hover:border-white border-red-600 text-xl px-12 py-2 rounded-lg text-white hover:text-red-600">SIGN UP </button></Link>
    </div>
  </div>
</div>
  );
};

export default LoginHero;