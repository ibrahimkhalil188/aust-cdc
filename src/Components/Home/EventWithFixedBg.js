import React from "react";
import eventBg from "../../Assets/Images/eventBG-01.png";

const EventWithFixedBg = () => {
  return (
    <div>
      <div
        className="relative my-24"
        style={{
          backgroundImage: `url(${eventBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className=" flex items-center flex-col">
          <h1 className="text-6xl text-white border-b-2 mt-6">EVENTS</h1>
         {/*  <div className=" h-1 w-48 bg-white"></div> */}
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch" alt=""
              className=" w-[550px] h-[450px] rounded-lg shadow-2xl"
            />
            <div className="text-white ">
              <h1 className="text-6xl mx-16 font-bold border-b-4 border-secondary mt-[-200px] uppercase">
                title of the event
              </h1>
              <p className="py-6 mx-16">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWithFixedBg;
