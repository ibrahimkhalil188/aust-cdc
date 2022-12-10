import React from 'react';
import spinner from "../../Assets/White.mp4";
const LoadingSpinner = () => {
    return (
        <div>
            <video className="w-[100%] h-[100%]" src={spinner} autoPlay loop muted/>
        </div>
    );
};

export default LoadingSpinner;