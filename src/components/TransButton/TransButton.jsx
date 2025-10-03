import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button = (props) => {
  return (
    <button
      className=" group flex items-center justify-between md:gap-6 md:pl-8 md:pr-2 pt-2 pb-2 
             md:border-1 border-white rounded-full text-white
             hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
             relative overflow-hidden"
    >
      {/* Ripple/shine effect background */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 
               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
               duration-700 ease-in-out"
      ></span>

      <span className=" text-xs sm:text-[16px] relative z-10 border-b md:border-none">
        {props.text}
      </span>

      <span
        className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full md:bg-white 
               relative z-10 group-hover:scale-100 group-hover:rotate-45 
               transition-transform duration-500 ease-out"
      >
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:text-cyan-400" />
      </span>
    </button>
  );
};

export default Button;
