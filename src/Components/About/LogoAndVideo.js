import React from 'react';

const LogoAndVideo = ({children}) => {
    return (
       <div className='content-center bg-base-100'>
         <div className='shadow-2xl m-auto mt-12  h-[70vh] w-[90%]'>
            <h1 className='text-5xl uppercase text-center'>{children}</h1>
        </div>
       </div>
    );
};

export default LogoAndVideo;