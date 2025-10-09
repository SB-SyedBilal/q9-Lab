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
      className=" relative min-h-[65vh]  sm:min-h-[40vh] md:min-h-[40vh] lg:min-h-[40vh] xl:min-h-[80vh] 2xl:min-h-[85vh]  overflow-hidden "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Curved Overlay Image */}
      <div className=" absolute top-63   md:top-60 lg:top-35 xl:top-85 2xl:top-90 left-0 w-full h-full z-0 opacity-100">
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
      {isHovering && (
        <div
          className="fixed hidden md:block pointer-events-none z-0 transition-opacity duration-300"
          // style={{
          //   left: mousePosition.x - 500,
          //   top: mousePosition.y - 500,
          //   width: "1000px",
          //   height: "1000px",
          //   background:
          //     "radial-gradient(circle, rgba(62,130,246,0.3) 20%, rgba(62,130,246,0.15) 40%, transparent 60%)",
          //   borderRadius: "50%",
          //   filter: "blur(70px)",
          // }}
        />
      )}

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 mt-8 md:mt-15 lg:mt-18 xl:mt-24 lg:mb-24">
        <div className="flex flex-col gap-4 xl:gap-8">
          <h1 className="max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-3xl 2xl:max-w-5xl  mx-auto  font-AmpleSoftPro text-3xl  md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white xl:leading-20 md:leading-12 leading-10">
            Building AI Agents That Solve{" "}
            <span className="text-[#06CBDE]">Real Business Problems</span>
          </h1>

          <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-200 xl:leading-10 leading-6 max-w-[320px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-3xl 2xl:max-w-5xl  mx-auto mb-2" >
            Q9 Labs builds SaaS-based AI applications that replace inefficiency
            with automation, cutting costs, boosting productivity, and scaling
            operations.
          </p>

          <div className="flex justify-center  gap-6 lg:gap-8 xl:gap-12 lg:flex-row flex-col lg:w-auto md:w-fit w-fit mx-auto">
            <div className="w-full sm:w-auto">
              <BlueBgButton text="Explore Our Products" id="#products" />
            </div>

            {/* <TransButton text='Book A Demo' link='#form' /> */}
            <Link
              href="#form"
              className="group flex items-center justify-center gap-4 md:pl-8 md:pr-3 pt-2 pb-2 
                 border-1 border-white rounded-full text-white 2xl:text-lg
                 hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
                 relative overflow-hidden bg-white/10"
            >
              {/* Ripple / Shine effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 
                   -translate-x-full group-hover:translate-x-full transition-transform 
                   duration-700 ease-in-out"
              ></span>

              <span className="text-base 2xl:text-[22px] relative z-10  ">
                Book A Demo
              </span>

              <span
                className="flex items-center justify-center w-7 h-7 sm:w-7 sm:h-7 xl:w-9 xl:h-9 rounded-full  bg-white 
                   relative z-10 group-hover:scale-100 group-hover:rotate-45 
                   transition-transform duration-500 ease-out"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7  lg:flex text-[#06CBDE]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}