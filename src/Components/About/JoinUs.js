import React from 'react';
import heroImage from '../../Assets/Images/Sample-picture-01.png';
const JoinUs = () => {
    return (
        <div className="hero min-h-screen  my-12" style={{ backgroundImage: `url(${heroImage})`,backgroundPosition: 'center',backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat', }}>
            <div >
            <h1 className='text-5xl lg:text-7xl text-white uppercase font-bold text-center w-[90%] lg:w-[75%] m-auto'>Why should you join</h1>
            
            <h1 className='w-full text-4xl lg:text-6xl font-semibold text-secondary uppercase pb-2 text-center bg-primary mx-auto border-4 border-primary mt-2'>aust career development club.</h1>
            <p className='text-white text-xl font-sans lg:text-4xl w-[75%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quam doloribus neque eius, quaerat quos corporis sunt cumque possimus, libero numquam accusantium minima. Tenetur voluptatibus laborum aspernatur omnis natus nobis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam, maiores nam non, excepturi voluptate nihil eos aliquid corporis ipsum sapiente itaque ut cum autem reiciendis labore at amet? Asperiores.</p>
        </div>
        </div>
    );
};

export default JoinUs;