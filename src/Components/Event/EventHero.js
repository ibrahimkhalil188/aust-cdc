import React from "react";
import heroImage from "../../Assets/bgs/event-01.png";
const EventHero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          //height: "100vh",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="uppercase">
            <h1 className="mt-[-230px] mb-8 text-8xl font-bold">
              <span className="text-white">event </span>{" "}
              <span className="text-red-600">name</span>
            </h1>
            <button className=" hover:bg-red-600 bg-red-600 hover:border-red-600 border-red-600 text-4xl px-12 py-2 rounded-lg text-white uppercase">
              schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
