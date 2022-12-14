import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HashLink, HashLink as Link } from "react-router-hash-link";
import aboutIcon from "../../Assets/Logo/about_red.png";
import logo from "../../Assets/Logo/austlogo.png";
import contactIcon from "../../Assets/Logo/contact_red.png";
import eventIcon from "../../Assets/Logo/event_red.png";
import gellaryIcon from "../../Assets/Logo/gallery_red.png";
import gPanelIcon from "../../Assets/Logo/gpanel_red.png";
import homeIcon from "../../Assets/Logo/home_red.png";
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
          <div className="flex justify-between items-center mx-6 py-2">
            <div>
              <img className="w-32" src={logo} alt="" />
            </div>
            <div>
              <h1 onClick={() => setOpen(!open)}>
                {!open ? (
                  <AiOutlineMenu className="text-3xl text-primary"></AiOutlineMenu>
                ) : (
                  <AiOutlineClose className="text-3xl text-secondary"></AiOutlineClose>
                )}
              </h1>
            </div>
          </div>
          <div
            className={`${
              !open ? "hidden" : "block"
            } absolute right-0 bg-white w-full px-4`}
          >
            <ul className="flex flex-col text-lg font-sans font-medium mb-5">
              <li
                className="my-2 my-2cursor-pointer "
                onClick={() => setOpen(false)}
              >
                <Link to="/" className="flex items-center">
                  <img
                    className="w-6 inline-block mr-2"
                    src={homeIcon}
                    alt=""
                  ></img>
                  Home
                </Link>
              </li>
              <ul className="dropdown cursor-pointer ">
                <li> 
                <img
                    className="w-6 inline-block mr-2"
                    src={gPanelIcon}
                    alt=""
                  ></img>
                  Governing Panel</li>
                <ul className="dropdown-1 text-sm text-primary bg-white">
                  <li className="my-2 w-1/2 fall21">
                    Fall 21 panel
                    <ul className="dropdown-2 ml-[-200px] bg-white text-primary">
                      <li className="mt-2 my-2">
                        <Link to="/executive" className="my-2">
                          Executive Body
                        </Link>
                      </li>
                      <li>
                        <Link to="/subExecutive" className="my-2 ">
                          Sub-Executive Body
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="my-2 w-1/2 spring21">
                    Spring 21 panel
                    <ul className="dropdown-3 ml-[-180px] bg-white text-primary">
                      <li className="mt-[-20px] my-2">
                        <Link to="/executive" className="my-2">
                          Executive Body
                        </Link>
                      </li>
                      <li>
                        <Link to="/subExecutive" className="my-2 ">
                          Sub-Executive Body
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
              <li className="my-2 cursor-pointer">
                <Link to="/about">
                <img
                    className="w-6 inline-block mr-2"
                    src={aboutIcon}
                    alt=""
                  ></img>
                  About us
                  </Link>
              </li>
              <li className="my-2 cursor-pointer ">
                <Link to="/captureCollection">
                <img
                    className="w-6 inline-block mr-2"
                    src={gellaryIcon}
                    alt=""
                  ></img>
                  Preeminenece gallery</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                {" "}
                <Link to="/event">
                <img
                    className="w-6 inline-block mr-2"
                    src={eventIcon}
                    alt=""
                  ></img>
                  Event</Link>
              </li>
              <li className="my-2  cursor-pointer ">
                <Link to="contact">
                <img
                    className="w-6 inline-block mr-2"
                    src={contactIcon}
                    alt=""
                  ></img>
                  Contact Info</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/*
        For large devise 
        */}

        <div className="hidden lg:block">
          <nav
            id="navbar"
            className="flex justify-between mx-24 items-center h-[60px] my-2 p-4 text-lg font-semibold text-primary"
          >
            <div>
              <ul className="flex items-center">
                <HashLink to="/home#topSection">
                  <li className="my-2 cursor-pointer ">Home</li>
                </HashLink>

                <ul className="dropdown cursor-pointer ">
                  <li> Governing Panel</li>
                  <ul className="dropdown-1 text-sm text-primary bg-white">
                    <li className="fall21">
                      Fall 21 panel
                      <ul className="dropdown-2 bg-white text-primary">
                        <HashLink smooth to="/Fall21Executive#topSection" className="my-2">
                          <li>Executive Body</li>
                        </HashLink>

                        <HashLink to="/Fall21SubExecutive#topSection" className="my-2 ">
                          <li>Sub-Executive Body</li>
                        </HashLink>
                      </ul>
                    </li>
                    <li className="spring21">
                      Spring 21 panel
                      <ul className="dropdown-3 bg-white text-primary">
                        <HashLink to="/Spring21Executive#topSection" className="my-2">
                          <li>Executive Body</li>
                        </HashLink>

                        <HashLink to="/Spring21SubExecutive#topSection" className="my-2 ">
                          <li>Sub-Executive Body</li>
                        </HashLink>
                      </ul>
                    </li>
                  </ul>
                </ul>

                <Link to="/about">
                  <li className="my-2 cursor-pointer">About us </li>
                </Link>
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
                <HashLink to="/captureCollection#topSection">
                  <li className="my-2 cursor-pointer ">Preeminenece gallery</li>
                </HashLink>{" "}
                <HashLink to="/event#topSection">
                  <li>Event</li>
                </HashLink>
                <HashLink to="contact#topSection">
                  <li className="my-2  cursor-pointer ">Contact Info</li>
                </HashLink>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
