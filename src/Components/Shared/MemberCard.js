import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
const MemberCard = ({membersDAta}) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl mt-12 lg:mt-2">
            
            <img className="h-[350px]" src="https://placeimg.com/400/225/arch" alt="Shoes" />
         
          <div className="card-body">
            <h2 className="text-center text-4xl">{membersDAta.name}</h2>
            <h2 className="text-center text-4xl">{membersDAta.title}</h2>
            <p>{membersDAta.about}</p>
            <div className='flex justify-center text-primary'>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-xl lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-xl lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-xl lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
            </div>
          </div>
        </div>
        </div>
    );
};

export default MemberCard;