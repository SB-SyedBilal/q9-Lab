"use client";

import { useState, useEffect } from "react";
import BlueBgButton from "@/components/BlueBgButton/BlueBgButton";

export default function ContactHero() {
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
      className="relative min-h-[40vh] sm:min-h-[40vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[65vh] 2xl:min-h-[80vh] overflow-hidden xl:py-0 py-6"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image */}
      <div className="absolute top-26 md:top-40 lg:top-60  xl:top-70 2xl:top-100 left-0 w-full h-full z-0 opacity-100">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between mt-5 lg:mt-10 xl:mt-20 max-w-[1700px] mx-auto px-6 lg:px-8">
        {/* Left: Text Content */}
        <div className="flex flex-col xl:gap-6 gap-4 lg:justify-start lg:items-start justify-center items-center mb-10 lg:mb-0">
          <h1 className="font-AmpleSoftPro text-3xl  md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl max-w-[450px] lg:max-w-[400px] text-center  lg:text-left  xl:max-w-[500px] font-bold text-white xl:leading-20 md:leading-12 leading-10">
            Let’s Build the Future
            <span className="text-[#06CBDE]"> Together</span>
          </h1>

          <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-[#ffffffdc]  xl:leading-10 leading-6 text-center  lg:text-left xl:max-w-[500px] max-w-[450px] lg:max-w-[400px]">
             Whether you’re a business exploring AI, an investor looking to partner, or a professional seeking opportunities we’d love to hear from you.
          </p>

          <div className="flex justify-center lg:justify-start">
            <BlueBgButton text="View Solutions" id='#form' />
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:flex relative w-full max-w-[300px] md:max-w-[500px] lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[900px] ">
          {/* <div className="absolute -top-10 -left-17 md:-top-15 md:-left-25">
            <img
              src="/img/hirmherocurve.png" // ✅ You can replace with your uploaded image path
              alt="AI Hiring Dashboard"
              className="w-[220px]  md:w-[380px]  h-auto object-contain"
            />
          </div> */}
          <img
            src="/img/contacthero.png" // ✅ You can replace with your uploaded image path
            alt="AI Hiring Dashboard"
            className="w-full h-auto  object-contain"
          />
        </div>
      </div>
    </div>
  );
}
