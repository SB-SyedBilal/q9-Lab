"use client";
import Banner from "@/components/Banner/Banner";
import Heading from "@/components/Heading/Heading";
import MobileAutoSlider from "@/components/mobile-auto-slider/mobile-auto-slider";
import { useState } from "react";
import Button from "../TransButton/TransButton";
import BlueBgButton from "../BlueBgButton/BlueBgButton";

export default function AtorCase() {
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
    <div className="pb-6 bg-[#0e0e0ec1]">
      <section
        id="industries-section"
        className=" text-white lg:py-10 px-6  z-0 "
        style={{
          backgroundImage: "url('/img/lines2.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1150px] 2xl:max-w-[1700px] mx-auto">
          {/* Header */}
          <div className="md:mb-12 text-center ">
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
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="relative group h-full" tabIndex={0}>
                <div className="relative z-10 rounded-xl overflow-hidden h-full">
                  {/* Hover shape from top-right */}
                  <div className="z-50 absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-bl-full scale-0 group-hover:scale-35 group-focus-within:scale-35 group-active:scale-35 transition-transform duration-300 origin-top-right pointer-events-none"></div>

                  {/* Card content */}
                  <div className="overflow-hidden relative z-20 bg-black rounded-xl p-7 h-full flex flex-col border border-gray-800 min-h-[460px] lg:min-h-[420px] xl:min-h-[450px] 2xl:min-h-[400px]">
                    {/* White gradient glow in bottom-right */}
                    <div
                      className="pointer-events-none absolute -bottom-8 -right-6  lg:h-34 md:w-60 xl:h-44 xl:w-60 
                bg-[radial-gradient(circle_at_bottom_right,_#b9f3fa,_white,_transparent)] 
                opacity-14 blur-3xl"
                    ></div>
                    {/* Icon with rounded background */}
                    <div className="mb-4 md:mb-7">
                      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] 2xl:w-[70px] 2xl:h-[70px] flex items-center justify-center rounded-full bg-[#06CBDE21]">
                        <img
                          src={industry.icon || "/placeholder.svg"}
                          alt={industry.title}
                          className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] 2xl:w-[36px] 2xl:h-[36px] object-cover"
                        />
                      </div>
                    </div>

                    {/* Title with underline on hover */}
                    <h3 className="relative text-lg md:text-2xl 2xl:text-3xl  mb-4 md:mb-7 text-white after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 w-fit">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-[15px] 2xl:text-[18px] leading-relaxed  mb-8">
                      {industry.description}
                    </p>

                    {/* Let's Connect Button */}
                    <button
                      className="text-white text-sm xl:text-lg 2xl:text-xl font-medium hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2 border-b border-white w-fit"
                      aria-label={`Learn more about ${industry.title}`}
                    >
                      Let's Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-4 flex justify-center">
        <BlueBgButton text="See It in Action" />
      </div>
    </div>
  );
}
