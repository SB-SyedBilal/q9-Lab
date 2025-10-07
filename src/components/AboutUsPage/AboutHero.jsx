"use client";

import { useState, useEffect } from "react";
import BlueBgButton from "@/components/BlueBgButton/BlueBgButton";

export default function AboutUsHero() {
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
      {/* {isHovering && (
        <div className="fixed hidden md:block pointer-events-none z-0 transition-opacity duration-300" />
      )} */}

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between pl-7 xl:pl-10 2xl:pl-26   mt-5 lg:mt-17 xl:mt-20 max-w-[1400px] 2xl:max-w-[2000px] mx-auto ">
        {/* Left: Text Content */}
        <div className="text-center max-w-[450px] lg:text-left lg:max-w-[480px] xl:max-w-[550px] 2xl:max-w-[650px] pr-6 md:pr-0 ">
          <h1 className="font-AmpleSoftPro text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 ">
            About {" "} 
            <span className="text-cyan-300">Us</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-md xl:text-lg 2xl:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
             Q9 Labs is a UAE  and US-based AI research and product company building SaaS applications that solve real business problems. Backed by CollabEZ, we merge cutting-edge research with rapid execution to deliver AI agents that cut costs, boost productivity, and scale operations.
          </p>

          
        </div>

        {/* Right: Image */}
        <div className="relative w-full max-w-[400px] md:max-w-[780px] lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[1000px] ">
          
          <img
            src="/img/aboutheroimg.png" // ✅ You can replace with your uploaded image path
            alt="AI Hiring Dashboard"
            className="w-full h-auto  object-contain"
          />
        </div>
      </div>
    </div>
  );
}
