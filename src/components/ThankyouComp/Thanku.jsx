"use client";

import { useState, useEffect } from "react";
// import Navbar from "../NavBar/Navbar";
import BlueBgButton from "@/components/BlueBgButton/BlueBgButton";
import TransButton from "../TransButton/TransButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Thanku() {
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
      className=" relative min-h-[40vh] sm:min-h-[30vh] md:min-h-[33vh] lg:min-h-[60vh] xl:min-h-[80vh] 2xl:min-h-[75vh]  overflow-hidden xl:pt-20 pb-10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Curved Overlay Image */}
      <div className=" absolute top-43   md:top-60 lg:top-55 xl:top-85 2xl:top-70 left-0 w-full h-full z-0 opacity-100">
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
      <div className="font-AmpleSoftPro relative z-10 flex flex-col items-center justify-center text-center ">
        <div className=" flex flex-col gap-4 xl:gap-6 xl:mt-16 mt-8">
          <h1 className="max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-3xl 2xl:max-w-5xl mx-auto font-AmpleSoftPro text-3xl  md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-white  leading-snug">
            Thank
            <span className="text-[#06CBDE]"> You!</span>
          </h1>

          <h3 className="text-[#FFFFFF] text-2xl xl:text-3xl md:max-w-[500px] max-w-[250px] mx-auto">
            Your Submission Has Been Received.
          </h3>

          <p className="max-w-[320px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-3xl 2xl:max-w-5xl mx-auto text-[15px] md:text-[20px] 2xl:text-[25px] text-[#ffffffdc]  leading-relaxed">
            We’re excited to learn more about your business and explore how AI
            can make a real impact.Our team will review your message and get
            back to you within 24 hours. In the meantime, feel free to browse
            our latest AI solutions and case studies.
          </p>
        </div>
      </div>
    </div>
  );
}
