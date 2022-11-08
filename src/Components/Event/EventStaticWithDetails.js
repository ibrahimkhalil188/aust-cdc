import React from "react";

const EventStaticWithDetails = ({revers}) => {
    
  return (
    <div className={`flex ${revers?"flex-row-reverse":""} h-[60vh] m-auto mt-12 boxShadow-[0 -5px 5px -5px #333] mx-12`}>
      <div className="shadow-[0_0_15px] w-2/5 text-center rounded-2xl">Event static</div>
      <div className="w-1/2 ml-6">
        <h1 className="text-4xl text-secondary uppercase mt-12">Event details</h1>
        <hr className="bg-primary h-1 w-[45%]"></hr>
        <p className="mr-12 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          fugiat! Tenetur nihil voluptates quaerat voluptate quod, incidunt quas
          veritatis ipsam architecto assumenda quasi dolores, magnam harum sint!
          Expedita, velit tempore?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ipsa omnis saepe inventore ipsum molestias, fugiat
          beatae maxime est veniam corrupti, libero optio odio nostrum, repellat
          dolorem assumenda atque recusandae sed.
        </p>
      </div>
    </div>
  );
};

export default EventStaticWithDetails;
