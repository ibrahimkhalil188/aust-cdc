import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const ContactInf = () => {
  return (
    <div className="h-[90vh]">
      <div className="h-[70vh] bg-primary -skew-y-12 mt-48">
        <div className="text-white text-4xl skew-y-12 text-center">
        <h1 className="pt-24">Contact Inf</h1>
        <h1 className="pt-16">Contact Inf</h1>
        <h1 className="pt-16">Contact Inf</h1>
        </div>
      </div>
      <div>
      <div className="flex justify-center text-primary text-4xl mt-16">
          <BsFacebook className="mx-2"></BsFacebook>
          <AiFillFacebook></AiFillFacebook>
          <AiFillLinkedin></AiFillLinkedin>
        </div>
      </div>
    </div>
  );
};

export default ContactInf;
