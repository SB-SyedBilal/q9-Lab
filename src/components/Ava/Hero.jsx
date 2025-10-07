"use client";

import { useState, useEffect } from "react";
// import Navbar from "../NavBar/Navbar";
import BlueBgButton from "@/components/BlueBgButton/BlueBgButton";
import TransButton from "../TransButton/TransButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      className="relative min-h-[45vh]  sm:min-h-[40vh] md:min-h-[40vh] lg:min-h-[40vh] xl:min-h-[80vh] 2xl:min-h-[75vh]  overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Curved Overlay Image */}
      <div className=" absolute top-63 overflow-hidden md:top-60 lg:top-65 xl:top-85 2xl:top-90 left-0 w-full h-full z-0 opacity-100">
        <img
          src="/img/heroimg3.png"
          alt="Curved design overlay"
          className="w-full h-full object-cover"
        />
      </div>
      {/* for mobile */}
      {/* <div className="md:hidden absolute top-63  md:top-60 lg:top-75 xl:top-85 2xl:top-95 left-0 w-full h-full z-0 opacity-100">
        <img
          src="/img/heroimg2.png"
          alt="Curved design overlay"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Mouse-following gradient (only on desktop) */}
      {/* {isHovering && (
        <div
          className="fixed hidden md:block pointer-events-none z-0 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 500,
            top: mousePosition.y - 500,
            width: "1000px",
            height: "1000px",
            background:
              "radial-gradient(circle, rgba(62,130,246,0.3) 20%, rgba(62,130,246,0.15) 40%, transparent 60%)",
            borderRadius: "50%",
            filter: "blur(70px)",
          }} */}
        {/* />
      )} */}

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 mt-8 md:mt-15 lg:mt-18 xl:mt-24 gap-[5.5rem] ">
        <div className="max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-3xl 2xl:max-w-5xl mx-auto ">
          <h1 className="font-AmpleSoftPro text-3xl  md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug">
          The Future of Customer{"  "}
            <span className="text-cyan-300">Engagement</span>
          </h1>

          <p className="text-[14px] sm:text-base md:text-sm lg:text-md xl:text-lg 2xl:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
            Ava replaces costly call centers with a scalable AI voice agent that delivers smarter, faster, and more affordable customer conversations.
          </p>

          <div className="flex justify-center gap-8 lg:flex-row flex-col">
            <div className="w-full sm:w-auto">
              <BlueBgButton text="Try Now" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block overflow-hidden">
          <img
            src="/img/ava/avahero.png"
            alt="Curved design overlay"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}