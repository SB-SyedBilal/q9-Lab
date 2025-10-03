import React from "react";
import TransButton from "../TransButton/TransButton";
import { ArrowUpRight } from "lucide-react";


const WhyQ9 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 gap-10">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="/img/whyq9.png"
          alt="Rotating Globe"
          className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[590px] h-auto object-contain"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 sm:px-6 lg:pr-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
          Why <span className="text-[#14cff0]">Q9 Labs</span>
        </h2>

        <p className="text-sm sm:text-base leading-relaxed mb-6 text-white/70">
          Q9 Labs is a UAE-based AI research and product company backed by
          CollabEZ. We design SaaS-based AI applications that replace
          inefficiency with automation, saving time, cutting costs, and scaling
          operations. Already piloted in the UAE, our products deliver
          measurable ROI and are built to grow globally.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center lg:justify-start">
          <button
            className=" group flex items-center justify-between gap-6 pl-8 pr-2 pt-2 pb-2 
             border-1 border-white rounded-full text-white
             hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
             relative overflow-hidden"
          >
            {/* Ripple/shine effect background */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 
               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
               duration-700 ease-in-out"
            ></span>

            <span className=" text-xs sm:text-[16px] relative z-10 ">
              Lern More
            </span>

            <span
              className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white 
               relative z-10 group-hover:scale-100 group-hover:rotate-45 
               transition-transform duration-500 ease-out"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyQ9;
