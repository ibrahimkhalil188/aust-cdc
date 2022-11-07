import React from 'react';
import heroImage from '../../Assets/Images/Sample-picture-01.png';
const JoinUs = () => {
    return (
        <div className="hero min-h-screen my-12" style={{ backgroundImage: `url(${heroImage})`,backgroundPosition: 'center',backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat', height:"100vh" }}>
            <div className='w-[90%] m-auto'>
            <h1 className='text-7xl text-white uppercase font-bold'>Why should you join with us</h1>
            <h1 className='text-6xl font-semibold text-secondary uppercase my-6'>aust career development club.</h1>
            <p className='text-white text-4xl mx-12 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quam doloribus neque eius, quaerat quos corporis sunt cumque possimus, libero numquam accusantium minima. Tenetur voluptatibus laborum aspernatur omnis natus nobis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quibusdam, maiores nam non, excepturi voluptate nihil eos aliquid corporis ipsum sapiente itaque ut cum autem reiciendis labore at amet? Asperiores.</p>
        </div>
        </div>
    );
};

export default JoinUs;