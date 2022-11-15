import React from "react";
import whiteLogo from '../../Assets/Logo/whiteLogo.png';
import "../../Style/Card.style.css";
const Affiliation = () => {
  const affiliation = [
    {
      id: "1",
      image:whiteLogo
    },
    {
      id: "2",
      
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
    {
      id: "10",
    },
    {
      id: "11",
    },
    {
      id: "12",
    },
    {
      id: "13",
    },
    {
      id: "14",
    },
    {
      id: "15",
    },
    {
      id: "16",
    },
    {
      id: "17",
    },
    {
        id: "15",
      },
      {
        id: "16",
      },
      {
        id: "17",
      },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
      <div>
      <h1 className="text-3xl lg:text-4xl uppercase text-primary text-center font-bold mt-24">austcdc  <span className="text-secondary ml-2"> affiliation</span></h1>
      <div className="bg-primary h-1 w-[340px] lg:w-[410px]"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mx-6 lg:mx-24 mt-16">
        {affiliation.map((a) => (
          <div className="h-36 w-36 lg:h-48 lg:w-48 shadow-xl flex justify-center items-center card"><img className="w-[90px] lg:w-[120px]" src={a.image} alt=""/></div>
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
