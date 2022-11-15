import React from "react";
import eight from '../../Assets/Logo/affiliation/eight.png';
import oneeight from '../../Assets/Logo/affiliation/eightine.png';
import oneone from '../../Assets/Logo/affiliation/eleven.png';
import onefive from '../../Assets/Logo/affiliation/fiftine.png';
import five from '../../Assets/Logo/affiliation/five.jpeg';
import four from '../../Assets/Logo/affiliation/four.webp';
import onefour from '../../Assets/Logo/affiliation/fourtine.png';
import nine from '../../Assets/Logo/affiliation/nine.png';
import onenine from '../../Assets/Logo/affiliation/ninetine.png';
import one from "../../Assets/Logo/affiliation/one.png";
import seven from '../../Assets/Logo/affiliation/seven.png';
import oneseven from '../../Assets/Logo/affiliation/seventine.png';
import six from '../../Assets/Logo/affiliation/six.png';
import onesix from '../../Assets/Logo/affiliation/sixtine.png';
import ten from '../../Assets/Logo/affiliation/ten.png';
import onethree from '../../Assets/Logo/affiliation/thirty.png';
import three from '../../Assets/Logo/affiliation/three.jpeg';
import onetwo from '../../Assets/Logo/affiliation/twelve.png';
import twenty from '../../Assets/Logo/affiliation/twenty.png';
import twofive from '../../Assets/Logo/affiliation/twentyfive.png';
import twofour from '../../Assets/Logo/affiliation/twentyfour.png';
import twoone from '../../Assets/Logo/affiliation/twentyone.png';
import twosix from '../../Assets/Logo/affiliation/twentysix.png';
import twothree from '../../Assets/Logo/affiliation/twentythree.png';
import twotwo from '../../Assets/Logo/affiliation/twentytow.png';
import two from '../../Assets/Logo/affiliation/two.jpg';

import "../../Style/Card.style.css";
const Affiliation = () => {
  const affiliation = [
    {
      id: "1",
      image:one
    },
    {
      id: "2",
      image:two
    },
    {
      id: "3",
      image:three 
    },
    {
      id: "4",
      image:four
    },
    {
      id: "5",
      image:five 
    },
    {
      id: "6",
      image:six
    },
    {
      id: "7",
      image:seven 
    },
    {
      id: "8",
      image:eight 
    },
    {
      id: "9",
      image:nine 
    },
    {
      id: "10",
      image:ten 
    },
    {
      id: "11",
      image:oneone
    },
    {
      id: "12",
      image:onetwo
    },
    {
      id: "13",
      image:onethree
    },
    {
      id: "14",
      image:onefour 
    },
    {
      id: "15",
      image:onefive 
    },
    {
      id: "16",
      image:onesix 
    },
    {
      id: "17",
      image:oneseven
    },
    {
        id: "18",
        image:oneeight 
      },
      {
        id: "19",
        image:onenine
      },
      {
        id: "20",
        image:twenty
      },
      {
        id: "21",
        image:twoone 
      },
      {
        id: "22",
        image:twotwo
      },
      {
        id: "23",
        image:twothree 
      },
      {
        id: "24",
        image:twofour 
      },
      {
        id: "25",
        image:twofive 
      },
      {
        id: "26",
        image:twosix  
      },
  ];
  return (
    <div>
      <div className="flex justify-center items-center">
      <div>
      <h1 className="text-3xl lg:text-4xl uppercase text-primary text-center font-bold mt-24">austcdc  <span className="text-secondary ml-2"> affiliation</span></h1>
      <div className="bg-primary h-1 w-[340px] lg:w-[410px]"></div>
      </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mx-6 lg:mx-24 mt-16">
        {affiliation.map((a) => (
          <div className="h-36 w-36 lg:h-48 lg:w-48 shadow-xl flex justify-center items-center hover:scale-105 card"><img className="w-[90px] lg:w-[120px]" src={a.image} alt=""/></div>
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
