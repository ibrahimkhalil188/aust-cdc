import React from "react";
import { Link } from "react-router-dom";
import "../../Style/Card.style.css";

import one from "../../Assets/bgs/paymentShahed.svg";
import two from "../../Assets/bgs/paymentJotey.svg";
import three from "../../Assets/bgs/paymentRoket.svg";

const RegisterInstruction = () => {
  const affiliation = [
    {
      id: "1",
      image:one
    },
    {
      id: "3",
      image:three
    },
    {
      id: "2",
      image:two
    },
    
      ]
  return (
    <div>
      <div className="">
      <div> <h1 className="text-center text-4xl lg:text-6xl mt-8 lg:mt-24 font-semibold"><span className="text-primary uppercase">  Register's</span> <span className="text-secondary uppercase">Instruction</span></h1>
       </div>
        <div className="text-primary text-lg lg:text-2xl text-center pt-18">
          <h1 className="text-center text-2xl lg:text-4xl mt-8 lg:mt-12 font-semibold "> 𝐓𝐡𝐞 𝐠𝐞𝐧𝐞𝐫𝐚𝐥 𝐦𝐞𝐦𝐛𝐞𝐫 𝐫𝐞𝐜𝐫𝐮𝐢𝐭𝐦𝐞𝐧𝐭 𝐩𝐫𝐨𝐠𝐫𝐚𝐦 𝐨𝐟 𝐀𝐔𝐒𝐓 𝐂𝐚𝐫𝐞𝐞𝐫 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐂𝐥𝐮𝐛 𝐢𝐬 𝐥𝐢𝐯𝐞!</h1>
          <p className="mx-32 py-6 text-justify">
          AUSTCDC is welcoming all the students of AUST to join the club for developing themselves as more career oriented, and grab the opportunity to be guided under the supervision of proper mentors. The vast vision of the club is to create a common ground for all departments’ students and composition their enthusiasm.

</p><p className="mx-32 py-2 pb-6 text-justify">So, Don't be late! Fill up the form now & Complete your registration.
          </p>
          <p className="mx-32 py-2 pb-6 text-justify ">Step-1: 𝐏𝐚𝐲 𝟏𝟎𝟎 𝐁𝐃𝐓 𝐢𝐧 𝐜𝐚𝐬𝐡 𝐚𝐭 𝐨𝐮𝐫 𝐛𝐨𝐨𝐭𝐡(𝐀𝐔𝐒𝐓 𝐏𝐥𝐚𝐳𝐚) 𝐨𝐫 𝐩𝐚𝐲 𝟏𝟎𝟐 𝐁𝐃𝐓 & Keep you Transaction Id.
          
          <b><p className="text-secondary pt-6 ">Bkash: 01521213079 </p>
          <p className="text-secondary">Bkash: 01531542756 </p>
          <p className="text-secondary">Nagad: 01531542756 </p>
          <p className="text-secondary">Rocket:01531542756 </p> </b>


</p><p className="mx-32 py-2 pb-6 text-justify text-primary">Step-2: Fill up this registration form properly.
And That's it! </p>

<p className="mx-32 py-2  text-sm text-justify text-primary">#𝐀𝐔𝐒𝐓𝐂𝐃𝐂 #𝐀𝐧𝐭𝐢𝐜𝐢𝐩𝐚𝐭𝐞 #𝐀𝐝𝐚𝐩𝐭 #𝐀𝐜𝐜𝐞𝐥𝐞𝐫𝐚𝐭𝐞
#𝐓𝐡𝐫𝐢𝐯𝐞𝐟𝐨𝐫𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞</p>
<Link to="/About"><p className="mx-32 text-sm text-justify text-primary"> Why should I join AUSTCDC? </p></Link>
        </div>
      </div>
     
      <div className="App ml-32 grid lg:grid-cols-3 lg:gap-8 gap-4 lg:mx-auto mt- lg:mt- pb-[-8n] py-12 lg:px-48 ">
        {affiliation.map((a) => (
          <div key={a.id} className="h-64 w-64 shadow-lg flex justify-center items-center customCard"><img className="w-[200px] " src={a.image} alt=""/></div>
        ))}
      </div>
    </div>
  );
};

export default RegisterInstruction;
