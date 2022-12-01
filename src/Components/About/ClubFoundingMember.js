import React from 'react';
import MemberCard from '../Shared/MemberCard';

const ClubFoundingMember = () => {
    const ClubFoundingMemberList = [
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
        <div>
            <h1 className='text-6xl my-8 mt-12 font-bold uppercase text-primary text-center'>clubs <span className='text-secondary'> founding </span>members</h1>
            <div className='App mx-auto grid lg:grid-cols-3 gap-12 my-12 justify-around items-center mt-12'>
            {
ClubFoundingMemberList.map(singleMember=><MemberCard membersDAta={singleMember}></MemberCard>)
            }
        </div>
        </div>
    );
};

export default ClubFoundingMember;