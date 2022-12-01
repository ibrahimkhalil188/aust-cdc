import React from 'react';
import MemberCard from '../Shared/MemberCard';

const ExecutiveMember = ({ExecutiveMemberList}) => {
      return (
        <div className="App mx-auto grid lg:grid-cols-3 gap-12 my-12 justify-around items-center mt-12">
          {ExecutiveMemberList.map((singleMember) =><MemberCard membersDAta={singleMember}></MemberCard> 
          )}
        </div>
      );
};

export default ExecutiveMember;