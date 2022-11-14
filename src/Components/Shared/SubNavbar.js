import React from "react";
import { FaFacebookMessenger, FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
const SubNavbar = () => {

  return (
    <div>
      <div className="h-8 w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#0f0c29]">
        
        <div className="flex justify-between items-center px-12">
          <div className="flex items-center justify-center mt-1 text-white">
            <span className="uppercase font-bold text-[10px]">contact us</span>
            <a href="https://www.facebook.com/" target="blank"><FaFacebookSquare className="mx-1 text-md ml-4 hover:scale-125"></FaFacebookSquare></a>
            <a href="https://www.facebook.com/" target="blank"> <FaFacebookMessenger className="mx-1 text-md  hover:scale-125"></FaFacebookMessenger></a>
            <a href="https://www.facebook.com/" target="blank"><AiFillLinkedin className="mx-1 text-md hover:scale-125"></AiFillLinkedin></a>
            <a href="https://www.facebook.com/" target="blank"><MdEmail className="mx-1 text-md  hover:scale-125"></MdEmail></a>
            <a href="https://www.facebook.com/" target="blank"><FaInstagramSquare className="mx-1 text-md  hover:scale-125"></FaInstagramSquare></a>
            <a href="https://www.facebook.com/" target="blank"><IoLogoYoutube className="mx-1 text-md  hover:scale-125"></IoLogoYoutube></a>
          </div>
          <div className="flex justify-center items-center mt-1  mr-[-24px] text-white text-sm  space-x-2 tracking-wider cursor-pointer">
            <Link to="/login"><span className="hover:text-secondary">Sing in</span></Link>
            <div className="w-[.5px] bg-white h-4 mx-4"></div>
            <Link to="/register"><span className="hover:text-secondary">Sing up</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
