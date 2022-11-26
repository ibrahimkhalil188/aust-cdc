import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagramSquare
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { HashLink as Link } from 'react-router-hash-link';
import austLogo from "../../Assets/Images/aust_logo.svg";
import austcdc from "../../Assets/Logo/austcdc_logo.svg";
import { EmailJs } from "./Emailjs";
import SubFooter from "./SubFooter";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#0f0c29]">
      <footer className=" lg:flex p-10 text-white 2xl:w-[1350px] mx-auto">
        <div className="lg:w-[35%] mr-[5%]">
          <div>
            <div className="flex flex-row">
              <img className="w-[120px] mr-8 " src={austLogo} alt="" />
              <img className=" w-[112px] " src={austcdc} alt="" />
            </div>
            <div className="mt-6">
              <h1 className="text-xl uppercase font-sans font-bold">
                aust career development club
              </h1>
              <div className="bg-white h-[0.5px]"></div>
              <p className="font-sans text-sm text-justify mt-2">
                Aust Career Development Club is a platform where we empower
                future leaders and flourish the skills needed for upcoming
                employability, the students enrich their knowledge about career
                prospects and professional etiqu
              </p>
            </div>
            <div className="mt-6">
              <h1 className="text-xl uppercase font-sans font-bold">
                social media
              </h1>
              <hr className="w-[200px]"></hr>
              <div className="flex items-center  justify-start mt-2 text-white">
                <a href="https://www.facebook.com/" target="blank">
                  <FaFacebookSquare className="h-8 w-8 hover:scale-125"></FaFacebookSquare>
                </a>
                <a href="https://www.facebook.com/" target="blank">
                  {" "}
                  <FaFacebookMessenger className="mx-1 h-[34px] w-[34px]  hover:scale-125"></FaFacebookMessenger>
                </a>
                <a href="https://www.facebook.com/" target="blank">
                  <AiFillLinkedin className="mx-1 h-[34px] w-[34px] hover:scale-125"></AiFillLinkedin>
                </a>
                <a href="https://www.facebook.com/" target="blank">
                  <FaInstagramSquare className="mx-1 h-8 w-8  hover:scale-125"></FaInstagramSquare>
                </a>
                <a href="https://www.facebook.com/" target="blank">
                  <IoLogoYoutube className="mx-1  h-[34px] w-[34px] hover:scale-125"></IoLogoYoutube>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="lg:w-[20%] mt-12  ml-[5%]">
          <h1 className="text-md font-sans font-bold">Governing Panel</h1>
          <div className="bg-white h-[0.5px] w-[140px]"></div>
          <div className="mt-4 font-sans text-sm">
            <a className="link link-hover block">Fall 21 Panel</a>
            <a className="link link-hover block">Spring 21 Panel</a>
          </div>

          <h1 className="text-md font-sans font-bold mt-14">About Us</h1>
          <div className="bg-white h-[0.5px] w-[140px]"></div>
          <div className="font-sans text-sm mt-4">
            <a className="link link-hover block">Founding Members</a>
            <Link to="/about#logoExplanation" className="link link-hover block">Logo Explanation</Link>
          </div>
        </div>

        <div className="lg:w-[20%] mt-12 mr-[5%]">
        <h1 className="text-md font-sans font-bold">Events</h1>
          <div className="bg-white h-[0.5px] w-[140px]"></div>
          <div className="font-sans text-sm mt-4">
            <a className="link link-hover block">Founding Members</a>
            <Link to="/about#logoExplanation" className="link link-hover block">Logo Explanation</Link>
          </div>
          <h1 className="text-md font-sans font-bold mt-14">Important Links</h1>
          <div className="bg-white h-[0.5px] w-[140px]"></div>
          <div className="font-sans text-sm mt-4">
            <Link to="/advisorPanel" className="link link-hover block">Advisors Panel</Link>
            <Link to="/contact#TopSection" className="link link-hover block">Contact Info</Link>
          </div>
        </div>

        {/* Sent email */}
        <EmailJs></EmailJs>
      </footer>
      <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#0f0c29]">
        <div className="bg-white h-[0.2px] mx-48"></div>
      </div>
      <hr></hr>
      <SubFooter></SubFooter>
    </div>
  );
};

export default Footer;
