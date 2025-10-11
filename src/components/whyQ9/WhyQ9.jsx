import React from "react";
import TransButton from "../TransButton/TransButton";
import { ArrowUpRight } from "lucide-react";
import Heading from "../Heading/Heading";

const WhyQ9 = () => {
  return (
    <div className=" border  w-full mx-auto  bg-[#080808] py-12 xl:mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between max-w-[1700px] px-6 lg:px-8 mx-auto ">
        

        {/* Right: Content */}
        <div className="w-full lg:w-4xl flex flex-col items-center lg:items-start justify-center text-center lg:text-left ">
          {/* <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-5xl font-bold mb-6 leading-snug text-white">
            Why <span className="text-[#14cff0]">Q9 Labs</span>
          </h2> */}
          <Heading heading="Why" highlight="Q9 Labs" />

          <p className="text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl 2xl:max-w-2xl leading-8 xl:mb-8 mb-6 text-[#ffffffdc]">
            Q9 Labs is a UAE-based AI research and product company backed by
            CollabEZ. We design SaaS-based AI applications that replace
            inefficiency with automation, saving time, cutting costs, and
            scaling operations. Already piloted in the UAE, our products deliver
            measurable ROI and are built to grow globally.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="#form"
              className="group flex items-center justify-between gap-6 pl-8 pr-2 pt-2 pb-2 
    border-1 border-white rounded-full text-white
    hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
    relative overflow-hidden"
            >
              {/* Ripple/shine effect background */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#06CBDE]/20 via-transparent to-cyan-400/20 
      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
      duration-700 ease-in-out"
              ></span>

              <span className="text-base xl:text-lg 2xl:text-[24px] relative z-10">
                Let's Talk
              </span>

              <span
                className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white 
      relative z-10 group-hover:scale-100 group-hover:rotate-45 
      transition-transform duration-500 ease-out"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              </span>
            </a>
          </div>
        </div>

        {/* Left: Image */}
        <div className="">
          <img
            src="/img/hero-why-q9.png"
            alt="Rotating Globe"
            className="w-[600px] h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default WhyQ9;
