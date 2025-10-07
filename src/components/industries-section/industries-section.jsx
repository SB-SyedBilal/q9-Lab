"use client";
import Banner from "@/components/Banner/Banner";
import Heading from "@/components/Heading/Heading";
import MobileAutoSlider from "@/components/mobile-auto-slider/mobile-auto-slider";
import { useState } from "react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: "/img/serve1.png",
      title: "Real Estate",
      description:
        "Close deals faster with Ava, our AI Voice Agent. From booking property viewings to qualifying leads, Q9 Labs empowers real estate firms to automate outreach, engage clients instantly, and reduce sales cycle time while boosting conversions.",
    },
    {
      icon: "/img/serve2.png",
      title: "Finance & Banking",
      description:
        "Deliver compliant, reliable customer interactions. From loan inquiries to KYC follow-ups, our AI agents streamline banking operations, provide instant responses, and scale client engagement while maintaining accuracy, efficiency, and security.",
    },
    {
      icon: "/img/serve3.png",
      title: "Retail & E-commerce",
      description:
        "Engage customers at scale with personalized AI-driven conversations. From product discovery to post-purchase support, our AI Shopping Assistant transforms the online retail experience, driving higher sales, increasing loyalty, and reducing costs.",
    },
    {
      icon: "/img/serve4.png",
      title: "Recruitment & HR",
      description:
        "Eliminate repetitive hiring tasks with Hirm, our AI Recruiter. It automates resume screening, conducts structured interviews, and generates unbiased shortlists, saving HR teams hundreds of hours and ensuring top talent never slips away.",
    },
    {
      icon: "/img/serve5.png",
      title: "Education & Training",
      description:
        "Personalized learning at scale with Ator, our AI Tutor. It adapts to each learner’s pace, explains concepts in simple terms, and generates practice material, empowering schools, universities, and training providers to improve outcomes.",
    },
    {
      icon: "/img/serve6.png",
      title: "Healthcare",
      description:
        "Boost efficiency without compromising care. Our AI agents manage scheduling, patient inquiries, and routine follow-ups, freeing healthcare staff to focus on treatment, reducing waiting times, and improving the overall patient experience.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pb-12">
      <section
        id="industries-section"
        className=" text-white py-16 xl:mb-12 z-0 bg-[#080808]"
        style={{
          backgroundImage: "url('/img/lines2.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1700px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <Heading heading="Industries" highlight="We Serve " />
            <p className="text-gray-400 max-w-md 2xl:max-w-xl 2xl:text-xl">
              From sales-heavy organizations to education and recruitment, Q9
              Labs builds AI agents designed for industries where efficiency and
              scale matter most.
            </p>
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
              <div
                key={index}
                className="relative group h-full"
                tabIndex={0} // For mobile hover effect (optional)
              >
                <div className="relative z-10 rounded-xl overflow-hidden h-full">
                  {/* Hover shape from top-right */}
                  <div className="z-50 absolute top-0 right-0 w-1/2  h-1/2 2xl:h-[65%] bg-cyan-400 rounded-bl-full scale-0 group-hover:scale-30 transition-transform duration-300 origin-top-right"></div>


                  {/* Card content */}
                  <div className="relative z-20 bg-black rounded-xl p-7 h-full flex flex-col items-center text-center animated-border  min-h-[460px] lg:min-h-[420px] xl:min-h-[450px] 2xl:min-h-[400px]">
                    {/* Icon */}
                    <div className="mb-4 md:mb-7">
                      <img
                        src={industry.icon || "/placeholder.svg"}
                        alt={industry.title}
                        className="w-[50px] h-[50px] md:w-[70px] 2xl:w-[80px] 2xl:h-[80px] md:h-[70px] object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="relative md:text-2xl 2xl:md:text-3xl font-semibold mb-4 md:mb-7 text-white after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-2sm 2xl:text-lg leading-relaxed mb-10">
                      {industry.description}
                    </p>

                    {/* Learn More Button (desktop only) */}
                    <button
                      className="cursor-pointer text-white text-2sm 2xl:text-xl font-medium hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2 border-b 2xl:mb-4"
                      aria-label={`Learn more about ${industry.title}`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Banner />
    </div>
  );
}
