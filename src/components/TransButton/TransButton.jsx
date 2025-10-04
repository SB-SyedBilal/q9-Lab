"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TransButton = ({ link = "#", text = "Click Me" }) => {
  return (
    <Link
      href={link}
      className="group flex items-center justify-center md:gap-6 md:pl-8 md:pr-2 pt-2 pb-2 
                 md:border-1 border-white rounded-full text-white 2xl:text-lg
                 hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
                 relative overflow-hidden"
    >
      {/* Ripple / Shine effect */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 
                   -translate-x-full group-hover:translate-x-full transition-transform 
                   duration-700 ease-in-out"
      ></span>

      <span className="text-xs sm:text-[16px] 2xl:text-[22px] relative z-10 border-b md:border-none">
        {text}
      </span>

      <span
        className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full md:bg-white 
                   relative z-10 group-hover:scale-100 group-hover:rotate-45 
                   transition-transform duration-500 ease-out"
      >
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 md:text-cyan-400" />
      </span>
    </Link>
  );
};

export default TransButton;
