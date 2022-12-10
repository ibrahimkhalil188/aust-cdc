import React from "react";
import austbg from "../../Assets/Images/austaboutbg.png";
import austlogo from "../../Assets/Images/aust_logo.svg";

const EventWithFixedBg = () => {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${austbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          }}
        
      >
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            
            <div className="mt-48">
              <h1 className="text-4xl lg:text-6xl text-white mx-16 font-bold border-secondary mt-[-200px]">
                About AUST
              </h1>
              <div className="ml-[50px]"><div className="bg-secondary h-1 w-[220px] lg:w-[410px]"></div></div>
              <p className="py-6 mx-2 text-justify lg:mx-16 text-white text-xl font-sans ">
              The Ahsanullah University of Science and Technology (AUST) was founded by the Dhaka Ahsania Mission in 1995. Dhaka Ahsania Mission is a non-profit voluntary organization in Bangladesh. The Mission was established in 1958 by Khan Bahadur Ahsanullah, an outstanding educationist and social reformer of undivided India. With his own vision of a better society, characterized by a wealth of moral and spiritual values of the highest humanism that are universally acclaimed through ages and manifested in every sphere of life social, economic and cultural; and access to education and resources, he established the Mission. His remarkable educational reforms include among others introduction of roll number system in the public examination and creating equal opportunity for education of all groups of people in the society.

Besides, he has contributed to the society by writing a large number of books covering a wide range of areas from human and social life, history, human development, literature, religion, biography, moral values etc.

Though initially charity and welfare activities were the major focus of the Mission agenda, it has expanded its arena of activities leaning towards sustainable development strategies with the passage of time since early 1980s. <a className=" hover:text-sky-300 hover:text-bold" href="https://www.aust.edu/">See more...</a>
              </p>
            </div>
            <img
              src={austlogo} alt=""
              className=" w-[450px] h-[350px] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWithFixedBg;
