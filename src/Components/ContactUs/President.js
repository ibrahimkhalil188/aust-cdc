import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "../../Style/Card.style.css";
const President = () => {
  return (
    <div className="flex justify-around items-center mt-12">
      <div>
        <div className="h-96 w-96 card"></div>
        <h1 className="text-center">Name Of Vice president</h1>
        <div className="flex justify-center text-secondary text-4xl">
          <BsFacebook className="mx-2"></BsFacebook>
          <AiFillFacebook></AiFillFacebook>
          <AiFillLinkedin></AiFillLinkedin>
        </div>
      </div>
      <div>
        <div className="h-96 w-96 card2"></div>
        <h1 className="text-center">Name Of Vice president</h1>
        <div className="flex justify-center text-secondary text-4xl">
          <BsFacebook className="mx-2"></BsFacebook>
          <AiFillFacebook></AiFillFacebook>
          <AiFillLinkedin></AiFillLinkedin>
        </div>
      </div>
    </div>
  );
};

export default President;
