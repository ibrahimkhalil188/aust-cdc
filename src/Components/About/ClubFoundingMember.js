import React from 'react';
import MemberCard from '../Shared/MemberCard';

const ClubFoundingMember = () => {
    const ClubFoundingMemberList = [
        {
          id: "1",
          name:"lorem mamu",
          },
        {
          id: "3",
          name:"lorem mamu",
          },
        {
          id: "2",
          name:"lorem mamu",
          }
      ];
    return (
        <div>
            <h1 className='text-6xl my-8 mt-12 font-bold uppercase text-primary text-center'>clubs <span className='text-secondary'> founding </span>members</h1>
            <div className='App mx-auto grid lg:grid-cols-3 gap-12 my-12 justify-around items-center mt-12'>
            {
ClubFoundingMemberList.map(singleMember=><div> <div className="card card-compact bg-base-100 shadow-2xl mt-12 lg:mt-2">
            
<img className="h-[320px]" src="https://placeimg.com/400/225/arch" alt="" />

<div className="card-body">
<h2 className="text-center uppercase text-xl">{singleMember.name}</h2>
<h2 className="text-center uppercase text-lg">{singleMember.title}</h2>
<p>{singleMember.about}</p>
</div>
</div></div>)
            }
        </div>
        </div>
    );
};

export default ClubFoundingMember;