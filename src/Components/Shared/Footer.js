import React from "react";
import {
  default as austCdcLogo,
  default as austLogo
} from "../../Assets/Logo/whiteLogo.png";
import SubFooter from "./SubFooter";
const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="footer p-10 bg-primary text-white">
        <div>
          <div>
            <div className="flex">
              <img className="w-48 mr-4 h-24" src={austLogo} alt="" />
              <img className="w-48 h-24" src={austCdcLogo} alt="" />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl uppercase">
                aust career development club
              </h1>
              <hr className="w-[440px]"></hr>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio adipisci aperiam laboriosam, minus libero officiis,
                itaque nobis corporis esse architecto mollitia deserunt dicta
                sint unde sequi voluptatem sapiente recusandae. Culpa?
              </p>
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
