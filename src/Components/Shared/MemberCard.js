import React from 'react';
<<<<<<< HEAD
import { FaFacebookSquare,FaInstagramSquare } from 'react-icons/fa';
import { AiFillMail } from "react-icons/ai";

=======
import { FaFacebookSquare } from 'react-icons/fa';
>>>>>>> 4345a7245f4d01748f62ad6ea4d7025f7bac69e4
const MemberCard = ({membersDAta}) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl mt-12 lg:mt-2">
            
            <img className="h-[320px]" src="https://placeimg.com/400/225/arch" alt="" />
         
          <div className="card-body">
<<<<<<< HEAD
            <h2 className="text-center uppercase text-xl">{membersDAta.name}</h2>
            <h2 className="text-center uppercase text-lg">{membersDAta.title}</h2>
            <p>{membersDAta.about}</p>
            <div className='flex justify-center text-secondary'>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-2xl lg:ml-4 hover:text-red-700"></FaFacebookSquare></a>
            <a href={membersDAta.instaUrl} target="blank"><FaInstagramSquare className="mx-1 text-2xl lg:ml-4 hover:text-  hover:text-red-700"></FaInstagramSquare></a>
            <a href={membersDAta.mailUrl} target="blank"><AiFillMail className="mx-1 text-2xl lg:ml-4 hover:text-#07072B  hover:text-red-700"></AiFillMail></a>
=======
            <h2 className="text-center text-4xl">{membersDAta.name}</h2>
            <h2 className="text-center text-4xl">{membersDAta.title}</h2>
            <p>{membersDAta.about}</p>
            <div className='flex justify-center text-primary'>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-xl lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-xl lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
            <a href={membersDAta.facebookUrl} target="blank"><FaFacebookSquare className="mx-1 text-xl lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
>>>>>>> 4345a7245f4d01748f62ad6ea4d7025f7bac69e4
            </div>
          </div>
        </div>
        </div>
    );
};

export default MemberCard;