import React from "react";
import TransButton from "../TransButton/TransButton";

const OurMission = () => {
  return (
    <div className="bg-[#080808] w-full">
      <div className="flex flex-col lg:flex-row  justify-between  max-w-[1700px] px-6 lg:px-8 py-12 mx-auto">
        {/* left Content */}
        <div className="w-full lg:w-1/2 flex flex-col mx-auto justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl xl:text-6xl font-bold mb-6 leading-snug text-white">
            Our <span className="text-[#14cff0]">Mission</span>
          </h2>

          <p className="2xl:text-2xl max-w-[320px] md:max-w-lg lg:xl:max-w-xl  leading-relaxed mb-6 text-white/70">
            To build profitable SaaS applications that integrate AI into
            workflows cutting costs, boosting efficiency, and driving outcomes.
          </p>
        </div>

        {/* right Image */}
        <div className="w-full flex lg:flex lg:justify-end items-center  justify-center">
          <img
            src="/img/mission.png"
            alt="Rotating Globe"
            className="w-sm xl:w-lg 2xl:w-2xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
