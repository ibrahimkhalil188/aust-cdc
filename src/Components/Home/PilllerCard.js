import React, { useState } from 'react';

const PillerCard = ({pipeline}) => {
    const {ime1, ime2, name, des} = pipeline;
    const [hover,setHover]= useState(true);
    return (
        
        <div className="card h-[520px] w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2" onMouseOver={()=>setHover(false)} onMouseLeave={()=>setHover(true)}>
                <img src={`${hover?ime1:ime2}`} alt=""/>
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase text-primary text-2xl">{name}</h2>
            <p className="text-lg">{des}</p>
          </div>
        </div>
    );
};

export default PillerCard;