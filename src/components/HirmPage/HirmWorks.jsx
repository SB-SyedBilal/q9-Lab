"use client";
import React from "react";

import { useEffect, useRef, useState } from "react";

import BlueBgButton from "../BlueBgButton/BlueBgButton";
import WhyQ9 from "../whyQ9/WhyQ9";
import Heading from "../Heading/Heading";

const HirmWorks = () => {
  const steps = [
    {
      number: "01",

      title: "Auto-generate JD",

      description:
        "Save hours with AI-crafted job descriptions tailored to role, skills, and company culture.",
    },

    {
      number: "02",

      title: "Screen & interview candidates",

      description:
        "Automated CV parsing and AI-led first-round interviews ensure unbiased, consistent evaluations.",
    },

    {
      number: "03",

      title: "Generate shortlist with transcripts & summaries",

      description:
        "Get structured candidate shortlists, complete with interview transcripts, insights, and key highlights.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.offsetWidth;

      carouselRef.current.scrollTo({
        left: scrollWidth * activeIndex,

        behavior: "smooth",
      });
    }
  }, [activeIndex]);
  return (
    <div>
      <section
        id="how-it-works"
        className="text-white 2xl:py-8 relative overflow-hidden  max-w-[1700px] px-6 lg:px-8 mx-auto mt-12 xl:mt-8 "
        
      >
        <div className="text-center md:text-left ">
          <Heading heading="How It" highlight="Works" />

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 hide-scrollbar"
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 snap-center flex flex-col items-center text-center group px-4"
                >
                  <div className="relative w-24 h-24 rounded-full border border-cyan-400 flex items-center justify-center text-3xl font-semibold bg-black overflow-hidden group-hover:shadow-lg transition duration-300">
                    <span className="z-10">{step.number}</span>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-tl-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right"></div>
                  </div>
                  <h3 className="text-cyan-400 font-semibold text-xl mt-6 mb-3 max-w-[300px]">
                    {step.title}
                  </h3>
                  <p className="text-white text-sm max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div className="flex justify-center mt-4 gap-2">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === idx
                      ? "bg-cyan-400 scale-110"
                      : "bg-gray-600 hover:bg-cyan-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Steps */}
          <div className="hidden md:flex relative flex-row justify-between items-start gap-6 mt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative z-10"
              >
                <div className="relative w-25 h-25 xl:w-36 xl:h-36 2xl:w-42 2xl:h-42 rounded-full border border-cyan-400 flex items-center justify-center text-3xl 2xl:text-5xl font-semibold bg-black overflow-hidden group-hover:shadow-lg transition duration-300">
                  <span className="z-10">{step.number}</span>

                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-tl-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right"></div>
                </div>
                <h3
                  className="relative text-cyan-400 font-semibold text-2xl 2xl:text-3xl mt-6 mb-3 
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 
  after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300
  group-hover:after:w-1/2 max-w-[370px]"
                >
                  {step.title}
                </h3>
                <p className="text-white text-[14px] 2xl:text-[18px] max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}

            {/* Dashed Line */}
            <div className="hidden md:block absolute top-[52px] xl:top-[75px] 2xl:top-[92px] left-[12%] xl:left-[8%] w-[75%] xl:w-[80%] h-[1px] z-0">
              <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full blur-sm"></div>
              <div className="w-full h-full border-t border-dashed border-cyan-500"></div>
            </div>
          </div>

          {/* <div className=" flex justify-center mt-6">
            <BlueBgButton text="See It in Action" id="#form" />
          </div> */}
        </div>
      </section>

      {/* <WhyQ9 /> */}
    </div>
  );
};

export default HirmWorks;
