"use client";

import { useEffect, useRef, useState } from "react";

import BlueBgButton from "../BlueBgButton/BlueBgButton";
import WhyQ9 from "../whyQ9/WhyQ9"
import Heading from "../Heading/Heading";

export default function AvaWorks() {

  const steps = [

    {

      number: "01",

      title: "Connect Ava to CRM/telephony",

      description:

        "Ava plugs directly into your CRM and telephony systems without extra setup. All customer interactions stay synced and accessible in one place.",

    },

    {

      number: "02",

      title: "Ava engages with customers",

      description:

        "Ava handles conversations naturally and instantly, delivering consistent support across calls and chats. Customers get quick answers, anytime.",

    },

    {

      number: "03",

      title: "Escalates only complex cases",

      description:

        "Simple requests are resolved automatically, while only tricky or high-value cases are passed to your team saving time and reducing workload.",

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
        className="text-white py-6  relative overflow-hidden px-4 sm:px-6 md:px-8"
        style={{
          backgroundImage: "url('/img/lines.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "auto 100%",
        }}
      >
        <div className="max-w-8xl mx-auto text-center mb-14 2xl:mb-20">
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
                <div className="relative w-25 h-25 2xl:w-32 2xl:h-32 rounded-full border border-cyan-400 flex items-center justify-center text-3xl 2xl:text-4xl font-semibold bg-black overflow-hidden group-hover:shadow-lg transition duration-300">
                  <span className="z-10">{step.number}</span>

                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-tl-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right"></div>

                </div>
                <h3 className="text-cyan-400 font-semibold text-2xl 2xl:text-3xl mt-6 mb-3">
                  {step.title}

                </h3>
                <p className="text-white text-[14px] 2xl:text-[18px] max-w-xs">
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

          <div className="mt-10 flex justify-center">
            <BlueBgButton text="See It in Action" id="#form" />
          </div>

        </div>
      </section>

      <WhyQ9 />
    </div>
  );

}

