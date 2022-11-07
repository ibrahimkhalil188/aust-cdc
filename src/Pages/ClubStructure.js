import React from "react";
import heroImage from "../Assets/Images/Sample-picture-01.png";
const ClubStructure = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mt-[-230px] mb-8 text-7xl font-bold uppercase">
              <span className="text-white">Club</span>{" "}
              <span className="text-red-600">hierarchy</span>
              <span className="text-white"> in aust</span>
            </h1>
            <button className=" hover:bg-red-600 bg-red-600 hover:border-red-600 border-red-600 text-4xl px-12 py-2 rounded-lg text-white uppercase">
              more about aust
            </button>
          </div>
        </div>
      </div>
      {/* second section of club structure */}
      <div className="shadow-2xl h-[90vh] w-[90%] m-auto mt-[-100px] z-10 rounded-xl bg-white">
        <div className="text-7xl text-center uppercase h-full w-full m-auto">image of the hierarchy</div>
      </div>
    </div>
  );
};

export default ClubStructure;
