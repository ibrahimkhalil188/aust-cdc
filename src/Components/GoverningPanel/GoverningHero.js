import React from "react";
const GoverningHero = ({ bannerData }) => {
  return (
    <div className="lg:h-[100vh] h-[50vh]">
      <div
        className="
        bg-no-repeat 
        bg-center 
        bg-cover"
        style={{
          backgroundImage: `url(${bannerData.image})`,
        }}
      >
        <div className="flex justify-center items-start  py-12  text-center lg:py-28 lg:pb-72 h-full">
        <div>
            <h1 className="mb-12 text-4xl lg:text-8xl font-bold pt-12 uppercase">
              <span className="text-white ">
                {bannerData.title.slice(0, -5)}
              </span>{" "}
              <span className="text-red-600">{bannerData.title.slice(-4)}</span>
            </h1>
            <div className="flex justify-center">
            <button className=" hover:bg-red-600 bg-red-600 hover:border-red-600 border-red-600 text-2xl lg:text-4xl px-12 py-2 rounded-lg text-white uppercase font-sans font-bold">
              {bannerData.name}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoverningHero;
