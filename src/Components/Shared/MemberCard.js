import React from 'react';
import { FaFacebookSquare,FaInstagramSquare } from 'react-icons/fa';
import { AiFillMail } from "react-icons/ai";

const MemberCard = ({membersDAta}) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl mt-12 lg:mt-2">
            
            <img className="h-[320px]" src="https://placeimg.com/400/225/arch" alt="" />
         
          <div className="card-body">
            <h2 className="text-center uppercase text-xl">{membersDAta.name}</h2>
            <h2 className="text-center uppercase text-lg">{membersDAta.title}</h2>
            <p>{membersDAta.about}</p>
            <div className='flex justify-center text-secondary'>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-2xl lg:ml-4 hover:text-red-700"></FaFacebookSquare></a>
            <a href={membersDAta.instaUrl} target="blank"><FaInstagramSquare className="mx-1 text-2xl lg:ml-4 hover:text-  hover:text-red-700"></FaInstagramSquare></a>
            <a href={membersDAta.mailUrl} target="blank"><AiFillMail className="mx-1 text-2xl lg:ml-4 hover:text-#07072B  hover:text-red-700"></AiFillMail></a>
            </div>
          </div>
        </div>
        </div>
    );
};

export default MemberCard;