import React from "react";

const Member = () => {
  const member = [
    {
      id: "1",
      name:"lorem mamu",
      about:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero."
    },
    {
      id: "3",
      name:"lorem mamu",
      about:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero."
    },
    {
      id: "2",
      name:"lorem mamu",
      about:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero."
    }
  ];
  return (
    <div className="flex justify-around items-center mt-12">
      {member.map((m) => (
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            
              <img className="h-[350px]" src="https://placeimg.com/400/225/arch" alt="Shoes" />
           
            <div className="card-body">
              <h2 className="text-center text-4xl">{m.name}</h2>
              <p>{m.about}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;
