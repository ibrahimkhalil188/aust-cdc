import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookMessenger, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const SubNavbar = () => {

  return (
    <div id="topSection">
      <div className="h-8 w-full font-sans bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#0f0c29]">
        
        <div className="flex justify-between items-center px-4 lg:px-12">
          <div className="flex items-center justify-center mt-1 text-white">
            <span className="hidden lg:block uppercase font-bold text-[10px]">contact us</span>
            <a href="https://www.facebook.com/" target="blank"><FaFacebookSquare className="mx-1 text-md lg:ml-4 hover:scale-125"></FaFacebookSquare></a>
            <a href="https://www.facebook.com/" target="blank"> <FaFacebookMessenger className="mx-1 text-md  hover:scale-125"></FaFacebookMessenger></a>
            <a href="https://www.facebook.com/" target="blank"><AiFillLinkedin className="mx-1 text-md hover:scale-125"></AiFillLinkedin></a>
            <a href="https://www.facebook.com/" target="blank"><MdEmail className="mx-1 text-md  hover:scale-125"></MdEmail></a>
            <a href="https://www.facebook.com/" target="blank"><FaInstagramSquare className="mx-1 text-md  hover:scale-125"></FaInstagramSquare></a>
            <a href="https://www.facebook.com/" target="blank"><IoLogoYoutube className="mx-1 text-md  hover:scale-125"></IoLogoYoutube></a>
          </div>
          <div className="flex justify-center items-center mt-1 text-white cursor-pointer">
            <Link to="/login"><span >Sign in</span></Link>
            <div className="w-[.5px] bg-white h-4 mx-2"></div>
            <Link to="/register"><span>Sign up</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
