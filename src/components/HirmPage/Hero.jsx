"use client";

import { useState, useEffect } from "react";
import BlueBgButton from "@/components/BlueBgButton/BlueBgButton";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div
      id="home"
      className="relative min-h-[45vh] sm:min-h-[40vh] md:min-h-[40vh] lg:min-h-[30vh] xl:min-h-[65vh] 2xl:min-h-[80vh] overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image */}
      <div className="absolute top-26 md:top-40  xl:top-70 2xl:top-90 left-0 w-full h-full z-0 opacity-100">
        <img
          src="/img/heroimg3.png"
          alt="Curved design overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mouse-following gradient (desktop only) */}
      {isHovering && (
        <div className="fixed hidden md:block pointer-events-none z-0 transition-opacity duration-300" />
      )}

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 mt-5 lg:mt-10 xl:mt-20 max-w-[1400px] 2xl:max-w-[1700px] mx-auto ">
        {/* Left: Text Content */}
        <div className="text-center max-w-[450px] lg:text-left lg:max-w-[400px] xl:max-w-[500px] mb-10 lg:mb-0">
          <h1 className="font-AmpleSoftPro text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug">
            Smarter, Faster, <br />
            <span className="text-cyan-300">Fairer Hiring</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-md xl:text-lg 2xl:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            Hirm automates recruitment end-to-end, from writing job descriptions
            to CV screening and AI driven interviews.
          </p>

          <div className="flex justify-center lg:justify-start">
            <BlueBgButton text="Request Early Access" />
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full max-w-[300px] md:max-w-[500px] lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[900px] ">
          <div className="absolute -top-10 -left-17 md:-top-15 md:-left-25">
            <img
              src="/img/hirmherocurve.png" // ✅ You can replace with your uploaded image path
              alt="AI Hiring Dashboard"
              className="w-[220px]  md:w-[380px]  h-auto object-contain"
            />
          </div>
          <img
            src="/img/hirmheroimg.png" // ✅ You can replace with your uploaded image path
            alt="AI Hiring Dashboard"
            className="w-full h-auto  object-contain"
          />
        </div>
      </div>
    </div>
  );
}
