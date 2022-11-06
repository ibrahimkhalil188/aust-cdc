import React from 'react';
import '../../Style/Button.style.css';

const Button = ({children}) => {
    return (
        <div>
            <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-white" type="button">
      <span class="absolute inset-0 bg-red-600"></span>
      <span class="absolute inset-0 flex justify-center items-center font-bold"> 
        {children}
      </span>
      {children}
    </button>
        </div>
    );
};

export default Button;