import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SubNavbar = ({login,setLogin}) => {
    return (
        <div>
            <div className="h-8 w-full bg-gradient-to-r from-primary to-blue-900">
        <div className="flex justify-between items-center px-12">
          <div className="flex items-center text-white">
          <BsFacebook className="mx-2"></BsFacebook>
          <FaFacebookMessenger></FaFacebookMessenger>
          </div>
          <div className="text-white text-lg uppercase flex justify-center items-center space-x-2 tracking-wider cursor-pointer">
            <Link to="/login">Sing in</Link>
            <div className='w-1 bg-white h-4 mx-4'></div>
            <Link to="/register">Sing up</Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SubNavbar;