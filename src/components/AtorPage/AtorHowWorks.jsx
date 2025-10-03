"use client";

import { useEffect, useRef, useState } from "react";
import BlueBgButton from "../BlueBgButton/BlueBgButton";
import Heading from "../Heading/Heading";

export default function AtorHowWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose subject & level",
      description:
        "Pick any subject and grade level that matches the student’s needs. Ator sets the foundation for a personalized learning journey.",
    },
    {
      number: "02",
      title: "Ator generates lessons",
      description:
        "Instantly get structured lessons with explanations, visuals, and exercises crafted to fit the learner’s pace and style.",
    },
    {
      number: "03",
      title: "Students learn interactively with instant feedback",
      description:
        "Engage with lessons through interactive exercises and diagrams. Ator gives real-time feedback to guide progress and boost confidence.",
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
    <section
      id="how-it-works"
      className="text-white py-6 relative overflow-hidden px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('/img/lines.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "auto 100%",
      }}
    >
      <div className="max-w-8xl mx-auto   ">
        <div className="pl-25">
          <Heading heading="How It" highlight="Works" />
        </div>

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
                <h3 className="text-cyan-400 font-semibold text-xl mt-6 mb-3">
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
              className="flex flex-col items-center text-center md:w-1/3 group relative z-10"
            >
              <div className="relative w-25 h-25 rounded-full border border-cyan-400 flex items-center justify-center text-3xl font-semibold bg-black overflow-hidden group-hover:shadow-lg transition duration-300">
                <span className="z-10">{step.number}</span>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-tl-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right"></div>
              </div>
              <div className="relative group-hover:after:scale-100 after:transition-transform after:duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-14 after:bg-cyan-400 after:scale-0">
                <h3 className="text-cyan-400 font-semibold text-lg  lg:text-2xl mt-6 mb-4">
                  {step.title}
                </h3>
              </div>

              <p className="text-white text-[14px] lg:max-w-[275px] xl:max-w-xs mt-2">
                {step.description}
              </p>
            </div>
          ))}

          {/* Dashed Line */}
          <div className="hidden md:block absolute top-[52px] left-[17%] w-[66%] h-[1px] z-0">
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full blur-sm"></div>
            <div className="w-full h-full border-t border-dashed border-cyan-500"></div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
