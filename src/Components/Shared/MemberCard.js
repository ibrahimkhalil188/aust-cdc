import React from 'react';

const MemberCard = ({membersDAta}) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl mt-12 lg:mt-2">
            
            <img className="h-[350px]" src="https://placeimg.com/400/225/arch" alt="Shoes" />
         
          <div className="card-body">
            <h2 className="text-center text-4xl">{membersDAta.name}</h2>
            <p>{membersDAta.about}</p>
          </div>
        </div>
        </div>
    );
};

export default MemberCard;