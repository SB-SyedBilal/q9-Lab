import React from "react";
import TransButton from "../TransButton/TransButton";

const OurStory = () => {
  return (
    <div className="relative overflow-hidden mb-12">
      {/* Background Glow in Bottom Right */}
      <div className="absolute top-0 -right-30 w-[270px] h-[240px] bg-[#14cff0]/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className=" flex flex-col-reverse gap-12 lg:flex-row items-center justify-between max-w-[1700px] px-6 lg:px-8 mx-auto mt-15  ">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center  lg:justify-start">
          <img
            src="/img/storyimg.png"
            alt="Rotating Globe"
            className="w-[280px] xl:w-lg 2xl:w-xl h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-6   text-center lg:text-start">
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-snug text-white">
            Our <span className="text-[#06CBDE]">Story</span>
          </h2>

          <p className="text-[15px] sm:text-[18px] lg:text-md xl:text-lg 2xl:text-2xl leading-relaxed max-w-md lg:max-w-2xl text-center mx-auto lg:text-left  text-white/70">
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
