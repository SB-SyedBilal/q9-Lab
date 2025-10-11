import React from "react";
import TransButton from "../TransButton/TransButton";

const OurMission = () => {
  return (
    <div className="bg-[#080808] w-full relative overflow-hidden">
      {/* Background Glow in Bottom Right */}
      <div className="absolute top-0 -left-25 w-[270px] h-[240px] bg-[#14cff0]/20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="flex flex-col lg:flex-row  justify-between  max-w-[1700px] px-6 lg:px-8 py-12 mx-auto">
        {/* left Content */}
        <div className="w-full xl:w-[40%] flex flex-col mx-auto justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold mb-6 leading-snug text-white">
            Our <span className="text-[#14cff0]">Mission</span>
          </h2>

          <p className="text-base sm:text-[18px] lg:text-md xl:text-lg 2xl:text-2xl md:max-w-lg lg:xl:max-w-xl  leading-relaxed mb-6 text-white/70">
            To build profitable SaaS applications that integrate AI into
            workflows cutting costs, boosting efficiency, and driving outcomes.
          </p>
        </div>

        {/* right Image */}
        <div className="w-full flex lg:flex lg:justify-end items-center  justify-center">
          <img
            src="/img/our-mission.png"
            alt="Rotating Globe"
            className="w-[280px] lg:w-sm xl:w-xl 2xl:w-2xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
