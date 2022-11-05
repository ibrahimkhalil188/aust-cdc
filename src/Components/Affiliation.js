import React from "react";

const Affiliation = () => {
  const affiliation = [
    {
      id: "1",
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
      <h1 className="text-4xl text-center uppercase text-primary font-bold">austcdc affiliation</h1>
      <div className="grid grid-cols-5 gap-5 mx-24">
        {affiliation.map((a) => (
          <div className="h-48 w-48 shadow-xl flex justify-center items-center">Hi</div>
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
