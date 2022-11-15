import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookMessenger, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import austLogo from "../../Assets/Images/aust_logo.svg";
import austcdc from "../../Assets/Logo/cdc_footertwo.png";
import SubFooter from "./SubFooter";
const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="footer p-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#0f0c29] text-white">
        <div>
          <div>
            <div className="lg:flex">
              <img className="w-[150px] mr-4 " src={austLogo} alt="" />
              <img className="w-[146px] " src={austcdc} alt="" />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl uppercase">
                aust career development club
              </h1>
              <hr className="lg:w-[440px]"></hr>
              <p className="lg:w-[400px]">
              Aust Career Development Club is a platform where we empower future leaders and flourish the skills needed for upcoming employability, the students enrich their knowledge about career prospects and professional etiqu
              </p>
            </div>
            <div className="mt-6">
            <h1 className="text-2xl uppercase">
                social media
              </h1>
              <hr className="w-[200px]"></hr>
          <div className="flex items-center  justify-start mt-2 text-white">  
            <a href="https://www.facebook.com/" target="blank"><FaFacebookSquare className="h-8 w-8 hover:scale-125"></FaFacebookSquare></a>
            <a href="https://www.facebook.com/" target="blank"> <FaFacebookMessenger className="mx-1 h-[34px] w-[34px]  hover:scale-125"></FaFacebookMessenger></a>
            <a href="https://www.facebook.com/" target="blank"><AiFillLinkedin className="mx-1 h-[34px] w-[34px] hover:scale-125"></AiFillLinkedin></a>
            <a href="https://www.facebook.com/" target="blank"><MdEmail className="mx-1 h-[38px] w-[36px]  hover:scale-125"></MdEmail></a>
            <a href="https://www.facebook.com/" target="blank"><FaInstagramSquare className="mx-1 h-8 w-8  hover:scale-125"></FaInstagramSquare></a>
            <a href="https://www.facebook.com/" target="blank"><IoLogoYoutube className="mx-1  h-[34px] w-[34px] hover:scale-125"></IoLogoYoutube></a>
          </div>
        </div>


          </div>
          <div></div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <h1 className="text-2xl w-32 uppercase">Email us <hr></hr></h1>
          <div className="w-72">
          <input type="text" placeholder="Type here" className="input input-sm w-full cursor-auto text-primary" />
          <textarea className="textarea w-full h-[150px] mt-4" placeholder="Bio"></textarea>
            
          </div>
        </div>
        
      </footer>
      <hr></hr>
      <SubFooter></SubFooter>
    </div>
  );
};

export default Footer;
