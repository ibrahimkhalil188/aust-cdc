import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaFacebookMessenger } from "react-icons/fa";
const SubNavbar = () => {
    return (
        <div>
            <div className="h-8 w-full bg-gradient-to-r from-primary to-blue-900">
        <div className="flex justify-between items-center px-12">
          <div className="flex items-center text-white">
          <BsFacebook className="mx-2"></BsFacebook>
          <FaFacebookMessenger></FaFacebookMessenger>
          </div>
          <div className="text-white">
            <span>signin </span>
            |
            <span> signup</span>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SubNavbar;