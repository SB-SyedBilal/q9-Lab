"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TransButton = ({ link = "/", text = "Click Me" }) => {
  return (
    <Link
      href={link}
      className="group flex items-center justify-between sm:justify-center gap-4 sm:gap-6 
        px-2 sm:px-4 md:px-4 lg:px-4 xl:px-3 2xl:pl-6
        py-1 sm:py-3 md:py-3 lg:py-2 
        border border-white rounded-full text-white
        hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
        relative overflow-hidden w-fit"
    >
      {/* Ripple / Shine effect */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 
          -translate-x-full group-hover:translate-x-full transition-transform 
          duration-700 ease-in-out"
      ></span>

      <span className="text-sm sm:text-base md:text-lg 2xl:text-xl relative z-10 whitespace-nowrap">
        {text}
      </span>

      <span
        className="flex items-center justify-center 
          w-7 h-7 sm:w-9 sm:h-9 2xl:w-11 2xl:h-11 
          rounded-full bg-white relative z-10 
          group-hover:scale-100 group-hover:rotate-45 
          transition-transform duration-500 ease-out"
      >
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-cyan-400" />
      </span>
    </Link>
  );
};

export default TransButton;
