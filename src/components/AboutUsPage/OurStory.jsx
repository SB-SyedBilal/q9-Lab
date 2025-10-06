import React from "react";
import TransButton from "../TransButton/TransButton";

const OurStory = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1500px] xl:max-w-[2200px] 2xl:max-w-full mt-22 lg:mt-25 2xl:mt-12   px-4 sm:px-6 md:px-8 gap-10 2xl:gap-36  xl:py-8 ">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="/img/storyimg.png"
          alt="Rotating Globe"
          className="w-full max-w-[270px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[620px] h-auto object-contain"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-2 sm:px-6 lg:pr-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug text-white">
          Our <span className="text-[#14cff0]">Story</span>
        </h2>

        <p className="text-sm sm:text-base 2xl:text-lg md:max-w-lg lg:xl:max-w-xl leading-relaxed mb-6 text-white/70">
          Q9 Labs was born out of a simple observation: businesses lose millions
          each year to repetitive tasks. We started Q9 Labs to create applied AI
          agents that solve one big inefficiency. Today, we’re proud to have
          pilots live in the UAE, with a roadmap to expand globally from Dubai
          and Chicago.
        </p>

        
      </div>
    </div>
  );
};

export default OurStory;
