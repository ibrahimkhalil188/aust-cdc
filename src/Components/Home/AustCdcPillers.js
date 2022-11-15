import React from "react";
import Accelerate2 from "../../Assets/Logo/accerate_red.png";
import Accelerate1 from "../../Assets/Logo/accerate_white.png";
import Adapt2 from "../../Assets/Logo/adapt_red.png";
import Adapt1 from "../../Assets/Logo/adapt_white.png";
import anticipate2 from "../../Assets/Logo/anticipate_red.png";
import anticipate1 from "../../Assets/Logo/anticipate_white.png";
import PillerCard from "./PilllerCard";

const AustCdcPillers = () => {
  const pipeline = [
    {
      id: 1,
      name: "anticipate",
      des: "The club tends to make the students ready for the future challenges they will face in their future careers. Cdcians will be able to forsee the competition and act accordingly.",
      ime1:anticipate1,
      ime2:anticipate2,
    },
    {
      id: 2,
      name: "Adapt",
      des: "Adapting to a new work culture and working with a varsatile workforce is one of the biggest challenge in today's world. Aust Career Development Club helps the students to learn to accommodate with this problem.",
      ime1:Adapt2,
      ime2:Adapt1,
    },
    {
      id: 3,
      name: "Accelerate",
      des: "This club helps the students to fast track their careers by choosing the right path and showing them the vision and different perspectives of different work cultures. The clubs main objective is to make the students more career conscious and have the best guidelines to shine in their respective fields. By this it helps them to accelerate in their career.",
      ime1:Accelerate1,
      ime2:Accelerate2,
    },
  ];
  return (
    <div>
        <h1 className="text-center text-5xl mt-24 font-semibold"><span className="text-primary">AUSTCDC</span> <span className="text-red-600">MOTO</span></h1>
        <div className="lg:ml-[35%]"><hr className="bg-primary h-1 w-[410px] "></hr></div>
      <div className="lg:flex justify-around items-center mt-16">
      {pipeline.map((singlePipeline) => (
        <PillerCard pipeline={singlePipeline} key={singlePipeline.id}></PillerCard>
      ))}
      </div>
    </div>
  );
};

export default AustCdcPillers;
