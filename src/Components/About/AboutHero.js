import React from "react";
import heroImage from "../../Assets/Images/Sample-picture-01.png";
const AboutHero = () => {
  return (
    <div className="lg:hero lg:min-h-screen h-[20vh]"
    style={{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}>
      <div
      >
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mt-[-6px] mb-4 lg:mb-8 text-4xl lg:text-8xl font-bold">
              <span className="text-white">ABOUT</span>{" "}
              <span className="text-secondary">AUSTCDC</span>
            </h1>
            <button className=" hover:bg-secondary bg-secondary hover:border-secondary border-secondary text-2xl lg:text-4xl px-6 lg:px-12 py-2 rounded-lg text-white">
              DEEP A DIVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
