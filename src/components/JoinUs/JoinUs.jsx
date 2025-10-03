import React from "react";
import BlueBgButton from "../BlueBgButton/BlueBgButton";

const JoinUs = () => {
  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10">
      <div
        className="w-full max-w-[1400px] bg-cover bg-center rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-white text-center relative"
        style={{
          backgroundImage: `url('/img/joinusbg.png')`, // Replace with actual path
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight">
            <span className="text-[#00CFFF]">Join Us</span> In Advancing
            Intelligence
          </h2>

          {/* Sub Text */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 md:mb-10 font-medium max-w-[800px] mx-auto leading-relaxed">
            One epoch at a time. Your transformation starts today.
          </p>

          {/* Button */}
          <BlueBgButton text='Get Started' />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
