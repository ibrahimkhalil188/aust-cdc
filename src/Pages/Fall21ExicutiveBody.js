import React from "react";
import bannerImage from "../Assets/Images/Sample-picture-01.png";
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
      name: "lorem mamu",
      title:"President",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
      facebookUrl:"https://www.facebook.com/",
      LinkedInUrl:"https://www.linkedin.com/",
    },
    {
      id: "3",
      name: "lorem mamu",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
    },
    {
      id: "2",
      name: "lorem mamu",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
    },
    {
      id: "2",
      name: "lorem mamu",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
    },
    {
      id: "2",
      name: "lorem mamu",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
    },
    {
      id: "2",
      name: "lorem mamu",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
    },
    {
      id: "2",
      name: "lorem mamu",
      about:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur, ducimus quo doloremque pariatur eveniet voluptas ex facilis voluptatem quasi obcaecati dolores accusantium odit iusto. Dolore veniam dignissimos eos libero.",
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
