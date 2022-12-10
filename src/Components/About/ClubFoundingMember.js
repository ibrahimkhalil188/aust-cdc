import React from 'react';



const ClubFoundingMember = () => {
    const ClubFoundingMemberList = [
        {
          id: "1",
          name:"JAHANGIR ALAM",
          img:"https://i.ibb.co/Dg9MXVG/Founder-1.png",
          },
        {
          id: "2",
          name:"YEADUL ISLAM SAZAL",
          img:"https://i.ibb.co/7Xq7mLG/Founder-2.png"
          },
        {
          id: "3",
          name:"SYED FAHIM RAHMAN",
          img:"https://i.ibb.co/16TCVvZ/Founder-3.png"
          },
        {
          id: "4",
          name:"SAIRAZ SAMIUDDIN NILOY",
          img:"https://i.ibb.co/T0BK3gY/Founder-4.png"
          },
        {
          id: "5",
          name:"NOBEL ROY",
          img:"https://i.ibb.co/3RrmD9J/Founder-5.png"
          },
        {
          id: "6",
          name:"SYED JUNAYED AHMED NILOY",
          img:"https://i.ibb.co/ccnvgbQ/Founder-6.png"
          },
        {
          id: "7",
          name:" FAHMIDA AKTER JOTEY",
          img:"https://i.ibb.co/ctm7Zjr/Founder-7.png"
          },
        {
          id: "8",
          name:"WAHIDUL ALAM NAHID",
          img:"https://i.ibb.co/xh4wFgb/Founder-8.png"
          },
        {
          id: "9",
          name:"TOWSIF MEHEDI DHRUBO",
          img:"https://i.ibb.co/XkNJ95N/Founder-9.png"
          },
        {
          id: "10",
          name:"AFRINA AKTER HIRA",
          img:"https://i.ibb.co/zVxvyTq/Founder-10.png"
          },
        {
          id: "11",
          name:"SARZIL HASIB",
          img:"https://i.ibb.co/ZzZv70W/Founder-11.png"
          },
        {
          id: "12",
          name:"SHAHED KARIM",
          img:"https://i.ibb.co/YfXQZxq/Founder-12.png"
          },
        
      
      ];
    return (
        <div>
            <h1 className='text-6xl my-8 mt-12 font-bold pt-24 uppercase text-primary text-center'>clubs <span className='text-secondary'> founding </span>members</h1>
            <div className='App mx-auto grid lg:grid-cols-4 gap-12 my-12 justify-around items-center mt-12'>
            {
ClubFoundingMemberList.map(singleMember=><div> <div className="card card-compact h-[430px] bg-base-100 shadow-2xl mt-12 lg:mt-2">
            
<img className="" src={singleMember.img} alt="" />

<div className="card-body">
<h2 className="text-center uppercase my-[-8px] text-xl">{singleMember.name}</h2>
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