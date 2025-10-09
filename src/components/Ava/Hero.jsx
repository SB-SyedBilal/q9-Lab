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
      <div className=" absolute top-16 overflow-hidden md:top-35 lg:top-45 xl:top-55 2xl:top-60 left-0 w-full h-full z-0 opacity-100">
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
      <div className="relative z-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 mt-8 md:mt-15 lg:mt-18 xl:mt-24 gap-8 md:gap-16">
        <div className="flex flex-col gap-4 xl:gap-8">
          <h1 className="max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-3xl 2xl:max-w-5xl  mx-auto  font-AmpleSoftPro text-3xl  md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white xl:leading-20 md:leading-12 leading-10">
          The Future of Customer{"  "}
            <span className="text-[#06CBDE]">Engagement</span>
          </h1>

          <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-[#ffffffdc] xl:leading-10 leading-6 max-w-[320px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-3xl 2xl:max-w-5xl  mx-auto xl:mb-0 mb-2">
            Ava replaces costly call centers with a scalable AI voice agent that delivers smarter, faster, and more affordable customer conversations.
          </p>

          <div className="flex justify-center gap-8 lg:flex-row flex-col lg:w-auto md:w-fit w-fit mx-auto">
            <div className="w-full sm:w-auto">
              <BlueBgButton text="Try AVA Now" id='#form' />
            </div>
          </div>
        </div>
        <div className=" lg:block overflow-hidden">
          {/* <img src="/img/hirmherocurve.png" className="absolute -top-10 -right-50 z-20" alt="" /> */}
          <img
            src="/img/Ava/avahero.png"
            alt="Curved design overlay"
            className="w-2xl xl:w-4xl 2xl:w-7xl h-auto"
          />
        </div>
      </div>
    </div>
  );
}