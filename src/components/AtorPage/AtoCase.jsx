"use client";
import Banner from "@/components/Banner/Banner";
import Heading from "@/components/Heading/Heading";
import MobileAutoSlider from "@/components/mobile-auto-slider/mobile-auto-slider";
import { useState } from "react";
import BlueBgButton from "../BlueBgButton/BlueBgButton";
const AtoCase = () => {
  const industries = [
    {
      icon: "/img/atorcase1.png",
      title: "Schools",
      description:
        "Schools used AI-driven lessons to deliver personalized learning at scale. Teachers saved time while students received interactive, adaptive content that matched their individual pace.",
    },
    {
      icon: "/img/atorcase2.png",
      title: "EdTech Platforms",
      description:
        "EdTech platforms integrated AI to create tailored courses and exercises. Learners experienced more engaging content, leading to higher completion rates and better outcomes.",
    },
    {
      icon: "/img/atorcase3.png",
      title: "Corporate Training",
      description:
        "Companies adopted AI-based modules for workforce training. Teams across different regions gained customized learning paths, improving efficiency and reducing training costs.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className=" mb-18">
      <section
        id="industries-section"
        className=" text-white bg-[#080808] z-0 "
        style={{
          backgroundImage: "url('/img/grabii.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1700px] mx-auto px-6 py-19 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <Heading heading="Real-World" highlight="Case Studies" />
          </div>

          {/* Mobile: horizontal slider with auto-advance */}
          <div className="md:hidden -mx-6">
            <MobileAutoSlider
              className="pl-6 pr-6"
              intervalMs={3000}
              ariaLabel="Industries horizontal auto slider"
              pause={expandedIndex !== null} // ✅ stop when expanded
            >
              {industries.map((industry, index) => {
                const isExpanded = expandedIndex === index;
                const shortText =
                  industry.description.length > 100
                    ? industry.description.slice(0, 100) + "..."
                    : industry.description;

                return (
                  <div
                    key={index}
                    className="snap-start shrink-0 w-[85%] max-w-xs"
                  >
                    <div className="relative group">
                      <div className="relative z-10 rounded-xl overflow-hidden">
                        <div className="z-50 absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-bl-full scale-0 group-hover:scale-35 transition-transform duration-300 origin-top-right pointer-events-none"></div>
                        <div className="relative z-20 bg-black rounded-xl p-10 h-full flex flex-col items-center text-center border border-gray-800">
                          <div className="mb-4">
                            <img
                              src={
                                industry.icon ||
                                "/placeholder.svg?height=50&width=50&query=industry%20icon"
                              }
                              alt={industry.title}
                              className="w-[50px] h-[50px] object-contain"
                            />
                          </div>
                          <h3 className="relative text-lg font-semibold mb-4 text-white after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                            {industry.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                            {isExpanded ? industry.description : shortText}
                          </p>

                          {/* ✅ Read More / Less Toggle */}
                          {industry.description.length > 100 && (
                            <button
                              onClick={() => toggleDescription(index)}
                              className="text-cyan-400 text-sm font-medium hover:underline"
                            >
                              {isExpanded ? "Read Less" : "Read More"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </MobileAutoSlider>
          </div>

          {/* Tablet/Desktop: original grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-18 ">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="relative z-20 rounded-2xl p-18 h-full flex flex-col justify-between
            bg-[#0C0C0C] animated-border min-h-[420px] overflow-hidden group
            transition-all duration-500 "
              >
                {/* Hover shape from top-right */}
                <div className="z-50 absolute top-0 right-0 w-[60%]  h-1/2 2xl:h-[60%] bg-cyan-400 rounded-bl-full scale-0 group-hover:scale-30 transition-transform duration-300 origin-top-right"></div>
                
                <div className="absolute bottom-0 right-0 w-[120px] h-[100px] bg-cyan-500/30 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="flex flex-col gap-4 xl:gap-10">
                  {/* Icon */}
                  <div className="bg-[#06CBDE21] rounded-full p-4 w-fit">
                    <img
                      src={industry.icon}
                      alt={industry.title}
                      className="xl:w-[48px] xl:h-[50px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl xl:text-3xl ">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className=" text-sm xl:text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  className="mt-8 flex items-center gap-2 text-white font-semibold underline underline-offset-2
              hover:text-cyan-400 transition-colors duration-300 w-fit"
                >
                  Let’s Connect
                  <svg
                    className="w-5 h-5 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-12 ">
            <BlueBgButton text="See It in Action" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtoCase;
