"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "Hiring Bottlenecks That Drain Time",
    description:
      "Recruitment teams waste hundreds of hours screening CVs and repeating first-round interviews, slowing down the hiring cycle.",
    image: "/img/hirmslider1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Automation That Handles the Heavy Lifting",
    description:
      "Hirm automates JDs, screens CVs, runs interviews, and delivers structured shortlists.",
    image: "/img/hirmslider2.png",
  },
  {
    id: 3,
    badge: "KEY BENEFITS",
    title: "Smarter Hiring with Less Effort",
    description:
      "Cut ~60% of recruiter workload, reduce hiring costs, ensure unbiased shortlisting, and achieve faster time-to-hire.",
    image: "/img/hirmslider3.png",
  },
];

export default function DualSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // 6 seconds
    return () => clearInterval(interval); // Cleanup
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const nextIndex = (activeIndex + 1) % slides.length;
  const activeSlide = slides[activeIndex];
  const nextSlide = slides[nextIndex];

  return (
    <div className="  text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-[1300px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold mb-4 text-balance">
            The Future of Scalable
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-cyan-400 text-balance">
            Customer Conversations
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center transition-all duration-500 ease-in-out">
            {/* Active Slide */}
            <div
              className="w-full lg:w-[1000px] h-auto  lg:h-[451px] transition-all duration-500 ease-in-out rounded-2xl
              bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30"
            >
              <div className="h-full p-6 sm:p-8 flex flex-col">
                {/* Badge */}
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {activeSlide.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col lg:flex-row items-center gap-6 mt-4">
                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-2xl xl:text-3xl mb-4">
                      {activeSlide.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {activeSlide.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className=" w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[400px] h-[150px] sm:h-[300px] lg:h-[370px] flex items-center justify-center">
                    <img
                      src={activeSlide.image || "/placeholder.svg"}
                      alt={activeSlide.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Next Slide Preview (Text Only) */}
            <div className="w-full lg:w-[610px] h-auto lg:h-[451px] transition-all duration-500 ease-in-out rounded-2xl bg-[#1a1a1a] border border-gray-800">
              <div className="h-full p-6 sm:p-8 flex flex-col justify-between">
                {/* Badge */}
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400">
                    {nextSlide.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center mt-4">
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl md:text-2xl xl:text-3xl mb-4">
                      {nextSlide.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {nextSlide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-cyan-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
