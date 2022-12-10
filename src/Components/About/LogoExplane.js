import React from 'react';
import logoExp from "../../Assets/Images/LogoWithExplanation.png";
const LogoExplane = () => {
    return (
       
       <div className='content-center bg-base-100 mt-' id='logoExplanation'>
        <div> <h1 className="text-center text-4xl lg:text-6xl mt-8 lg:mt-24 font-semibold"><span className="text-primary">LOGO</span> <span className="text-secondary">EXPLANATION</span></h1>
       </div>
         <div className='shadow-2xl m-auto mt-12  lg:h-[100vh] w-[90%]'>
            <img src={logoExp} alt=""></img>
        </div>
       </div>
    );
};

export default LogoExplane;