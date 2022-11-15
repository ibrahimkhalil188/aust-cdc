import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/austlogo.png";
import "../../Style/Navbar.style.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("white");
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setHeaderColor("white") : setHeaderColor("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div
      style={{
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        backgroundColor: headerColor,
        padding: "1px",
        zIndex: "100",
      }}
    >
      <div>
        {/* 
      For small devise
    */}

        <nav className="lg:hidden md:hidden">
          <div className="flex justify-around items-center">
            <div>Logo</div>
            <div>
              <h1 onClick={() => setOpen(!open)}>{open ? "Close" : "Open"}</h1>
            </div>
          </div>
          {open ? (
            <ul className="my-2 p-4 text-xl text-primary">
              <li className="mx-4 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown mx-4 cursor-pointer ">
                <Link to="/governingPanel">Governing Panel</Link>
                <ul id="dropdown-1" className="border-1">
                  <li className="nestedDropdown mt-2 hover:pb-16 ">
                    Fall 21 panel
                    <ul className="dropdown-2 ml-32 mt-[-32px]">
                      <Link to="/executive" className="my-2 ">
                        Executive Body
                      </Link>
                      <li className="my-2 ">Sub-Executive Body</li>
                    </ul>
                  </li>
                  <li className="nestedDropdown mt-2 pb-16 pt-4 ">
                    Spring 21 panel
                    <ul className="dropdown-2 ml-4">
                      <li className="my-2 ">Executive Body</li>
                      <li className="my-2 ">Sub-Executive Body</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="mx-4 cursor-pointer ">
                <Link to="/clubStructure ">Club Structure</Link>{" "}
              </li>
              <li className="mx-4 cursor-pointer ">
                <Link to="/captureCollection ">Capture Collections</Link>
              </li>
              <li className="mx-4 cursor-pointer">
                <Link to="/about">About us</Link>
              </li>
              <li className="mx-4  cursor-pointer">
                <Link to="contact">Contact us</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </nav>

        {/*
        For large devise 
        */}

        <div className="hidden lg:block">
          <nav
            id="navbar"
            className="flex justify-between mx-24 items-center h-[50px] my-2 p-4 text-lg font-semibold text-primary"
          >
            <div>
              <ul className="flex items-center">
                <li className="cursor-pointer ">
                  <Link to="/">Home</Link>
                </li>
                <ul className="dropdown cursor-pointer ">
                 <li> Governing Panel</li>
                  <ul className="dropdown-1 text-sm text-primary bg-white">
                    <li className="fall21">
                      Fall 21 panel
                      <ul className="dropdown-2 bg-white text-primary">
                        <li><Link to="/executive" className="my-2">Executive Body</Link></li>
                        <li><Link to="/subExecutive" className="my-2 ">Sub-Executive Body</Link></li>
                      </ul>
                    </li>
                    <li className="spring21">
                      Spring 21 panel
                      <ul className="dropdown-3 bg-white text-primary">
                      <li><Link to="/executive" className="my-2">Executive Body</Link></li>
                        <li><Link to="/subExecutive" className="my-2 ">Sub-Executive Body</Link></li>
                      </ul>
                    </li>
                  </ul>
                </ul>
                <li className="cursor-pointer">
                  <Link to="/about">About us</Link>
                
                </li>
              </ul>
            </div>
            <div className="p-4 mx-12">
              <img
                className="h-[55px] hover:h-[50px] hover:ease-in-out duration-100 cursor-pointer"
                src={logo}
                alt="aust cdc logo"
              />
            </div>
            <div className="">
              <ul className="flex items-center">
                <li className="cursor-pointer ">
                  <Link to="/captureCollection">Preeminenece gallery</Link>
                </li>
               <li> <Link to="/event">Event</Link></li>
                
                <li className=" cursor-pointer ">
                  <Link to="contact">Contact Info</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
