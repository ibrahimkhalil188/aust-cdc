import React from "react";
import bannerImage from "../Assets/bgs/executive-01.png";
import ExecutiveMember from "../Components/GoverningPanel/ExecutiveMember";
import GoverningHero from "../Components/GoverningPanel/GoverningHero";
const Fall21ExecutiveBody = () => {
  const bannerData = {
    image: bannerImage,
    title: "Executive body",
    name: "Fall 21",
  };
  const ExecutiveMemberList = [
    {
      id: "1",
      //image: ,
      name: "SYED SHAHEERUDDIN AHMED",
      title: "PRESIDENT",
      

    },
    {
      id: "2",
      //image: ,
      name: "FAISAL FARHAN",
      title: "TREASURER",
      

    },
    {
      id: "3",
      //image: ,
      name: "JUNAYED AHMED NILOY",
      title: "VICE-PRESIDENT",
      about: " ewwd ",
      facebookUrl: "https://www.facebook.com/info.shahedkarim",
      instaUrl: "https://www.facebook.com/info.shahedkarim",
      mailUrl: "https://www.facebook.com/info.shahedkarim",

    },
    {
      id: "4",
      //image: ,
      name: "Fahmida Akter Jotey ",
      title: "General Secretary",
      about: " ewwd ",
      facebookUrl: "https://www.facebook.com/profile.php?id=100010310259728",
      instaUrl: "https://www.linkedin.com/in/fahmida-jotey-026914171/",
      mailUrl: "https://mail.google.com/mail/?view=cm&source=mailto&to=fahmidajotey321@gmail.com",

    },
    {
      id: "5",
      //image: ,
      name: "Syed Shaheeruddin Ahmed",
      title: "PRESIDENT",
      about: " ewwd ",
      facebookUrl: "https://www.facebook.com/info.shahedkarim",
      instaUrl: "https://www.facebook.com/info.shahedkarim",
      mailUrl: "https://www.facebook.com/info.shahedkarim",

    },
    {
      id: "6",
      //image: ,
      name: "Syed Shaheeruddin Ahmed",
      title: "PRESIDENT",
      about: " ewwd ",
      facebookUrl: "https://www.facebook.com/info.shahedkarim",
      instaUrl: "https://www.facebook.com/info.shahedkarim",
      mailUrl: "https://www.facebook.com/info.shahedkarim",

    },
    
  ];
  return (
    <div>
      <GoverningHero bannerData={bannerData}></GoverningHero>
      <ExecutiveMember
        ExecutiveMemberList={ExecutiveMemberList}
      ></ExecutiveMember>
    </div>
  );
};

export default Fall21ExecutiveBody;
