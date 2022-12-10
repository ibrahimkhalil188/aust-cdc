import React from 'react';
import heri from "../../Assets/bgs/hier-01.png"
import arch from "../../Assets/bgs/stac.png"

const LogoExplane = () => {
    return (
        
        <div className='content-center bg-base-100 mt-' id='logoExplanation'>
        <div> <h1 className="text-center text-6xl lg:text-6xl mt-8 lg:mt-24 font-semibold pt-10 py-10"><span className="text-primary">CLUB</span> <span className="text-secondary">HIERARCHY</span></h1>
       </div>
         <div className="bg-fixed" style ={{
backgroundImage: `url(${heri})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundAttachment: "fixed",
         }}>
            <img src={arch} alt=""></img>
        </div>
       </div>
    );
};

export default LogoExplane;