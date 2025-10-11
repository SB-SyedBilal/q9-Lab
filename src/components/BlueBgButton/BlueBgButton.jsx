import { ArrowUpRight } from "lucide-react";
import React from "react";

const BlueBgButton = (props) => {
  return (
    <a 
      href={props.id}
      className="cursor-pointer  mx-auto md:mx-0 flex items-center justify-center px-5 pt-2 pb-2 2xl:pt-3 2xl:pb-3
             rounded-full bg-[#06CBDE] text-white  text-base lg:text-lg 2xl:text-[22px]
             shadow-lg transition-all duration-700 ease-out relative overflow-hidden group"
    >
      <span className="relative z-10 text-black">{props.text}</span>

      {/* Icon container */}
      <span
        className="ml-2 w-7 h-7 sm:w-7 sm:h-7 xl:w-9 xl:h-9 rounded-full bg-black flex items-center justify-center 
               relative z-10 transition-transform duration-500 ease-out
               group-hover:scale-100 group-hover:rotate-45 "
      >
        {/* <svg
          className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 text-blue transition-transform duration-500 ease-out 
                 group-hover:rotate-32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 19L19 5M10 5h9v9"
          />
        </svg> */}
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7  lg:flex text-[#ffffff]" />
      </span>

      {/* Rotating gradient overlay */}
      

      {/* Shine streak */}
      <span
        className="absolute top-0 left-[-50%] w-[60%] h-full 
               bg-gradient-to-tr from-transparent via-white/60 to-transparent 
               transform rotate-12 
               group-hover:translate-x-[250%] 
               transition-transform duration-1000 ease-in-out"
      ></span>

      <style>
        {`
      @keyframes rotateGradient {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
      </style>
    </a>
  );
};

export default BlueBgButton;
