import React from "react";
import TransButton from "../TransButton/TransButton";

const OurStory = () => {
  return (
    <div className="relative overflow-hidden md:mb-12 mb-8">
      {/* Background Glow in Bottom Right */}
      <div className="absolute top-0 -right-30 w-[270px] h-[240px] bg-[#14cff0]/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className=" flex flex-col-reverse gap-12 lg:flex-row items-center justify-between max-w-[1700px] px-6 lg:px-8 mx-auto md:mt-12 mt-8  ">
        {/* Left: Image */}
        <div className="w-full xl:w-1/2 flex justify-center  lg:justify-start">
          <img
            src="/img/our-story-img.png"
            alt="Rotating Globe"
            className="w-[280px] lg:w-xs xl:w-md 2xl:w-xl h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full xl:w-[40%] flex flex-col gap-6 lg:gap-6   text-center lg:text-start">
          <h2 className="text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-snug text-white">
            Our <span className="text-[#06CBDE]">Story</span>
          </h2>

          <p className="text-base lg:text-md xl:text-lg 2xl:text-2xl leading-relaxed max-w-md lg:max-w-2xl text-center mx-auto lg:text-left  text-[#ffffffdc] relative z-10">
            Q9 Labs was born out of a simple observation: businesses lose
            millions each year to repetitive tasks. We started Q9 Labs to create
            applied AI agents that solve one big inefficiency. Today, we’re
            proud to have pilots live in the UAE, with a roadmap to expand
            globally from Dubai and Chicago.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
