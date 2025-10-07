import React from "react";
import TransButton from "../TransButton/TransButton";

const OurStory = () => {
  return (
    <div className="relative overflow-hidden mb-12">
      {/* Background Glow in Bottom Right */}
      <div className="absolute top-0 -right-30 w-[270px] h-[240px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className=" flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1700px] px-6 lg:px-8 mx-auto mt-15  ">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center  lg:justify-start">
          <img
            src="/img/storyimg.png"
            alt="Rotating Globe"
            className="w-sm xl:w-lg 2xl:w-2xl h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[40%] flex flex-col   text-center lg:text-start">
          <h2 className="text-4xl xl:text-6xl font-bold mb-6 leading-snug text-white">
            Our <span className="text-[#14cff0]">Story</span>
          </h2>

          <p className="2xl:text-2xl leading-relaxed mb-6 text-white/70">
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
