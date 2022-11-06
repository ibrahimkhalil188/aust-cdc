import React from "react";

const AustCdcPillers = () => {
  const pipeline = [
    {
      id: 1,
      name: "Sahed",
      des: "lorem",
    },
    {
      id: 2,
      name: "Sahed",
      des: "lorem",
    },
    {
      id: 3,
      name: "Sahed",
      des: "lorem",
    },
  ];
  return (
    <div>
        <h1 className="text-center text-4xl my-8 mt-12 font-semibold"><span className="text-primary">AUSTCDC</span> <span className="text-red-600">PIPELINE</span></h1>
      <div className="lg:flex justify-around items-center">
      {pipeline.map((e) => (
        <div key={e.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam rem dolor minima dolorem consequuntur repellendus voluptatibus, assumenda adipisci quod commodi laborum tenetur nesciunt! Illo reiciendis numquam esse vero error magni.</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AustCdcPillers;
