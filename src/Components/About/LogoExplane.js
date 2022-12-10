import React from 'react';
import logoExp from "../../Assets/Images/LogoWithExplanation.png";
const LogoExplane = () => {
    return (
       <div className='content-center bg-base-100 mt-48' id='logoExplanation'>
         <div className='shadow-2xl m-auto mt-12  lg:h-[100vh] w-[90%]'>
            <img src={logoExp} alt=""></img>
        </div>
       </div>
    );
};

export default LogoExplane;