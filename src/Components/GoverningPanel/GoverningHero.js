import React from 'react';
const GoverningHero = ({bannerData}) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerData.image})`,backgroundPosition: 'center',backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat', height:"100vh" }}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1 className="mt-[-230px] mb-8 text-8xl font-bold  uppercase"><span className="text-white">{bannerData.title.slice(0,-5)}</span> <span className="text-red-600">{bannerData.title.slice(-4)}</span></h1>
      <button className=" hover:bg-red-600 bg-red-600 hover:border-red-600 border-red-600 text-4xl px-12 py-2 rounded-lg text-white uppercase font-sans font-bold">{bannerData.name}</button>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default GoverningHero;