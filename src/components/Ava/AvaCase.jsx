"use client";

import Image from "next/image";
import BlueBgButton from "../BlueBgButton/BlueBgButton";
import { div } from "framer-motion/m";

export default function AvaCase() {
  return (
    <div className="bg-[#080808] mb-4"
      style={{
        backgroundImage: "url('/img/drop-dashed-lines.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="relative  max-w-[1700px] mx-auto py-8 md:py-16 overflow-hidden px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Real-World <span className="text-[#06CBDE]">Case Studies</span>
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-10 xl:gap-14 ">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row xl:gap-6 items-center justify-between bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] animated-border rounded-xl p-4 sm:p-5 xl:p-10 xl:pb-0 w-full lg:w-[60%] xl:w-[950px] shadow-[0_0_40px_rgba(6,203,222,0.08)]">
            {/* Left Content */}
            <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2 text-center lg:text-left ">
              <h3 className="text-2xl xl:text-3xl 2xl:text-4xl leading-snug text-white">
                Real Estate Lead
                <br className="hidden sm:block" />
                Qualification
              </h3>
              <p className="text-[#ffffffdc] text-base xl:text-lg leading-relaxed">
                Ava connects with prospects the moment they inquire, qualifying
                leads with natural conversations and passing only hot leads to
                agents — reducing response times and increasing conversions.
              </p>
              <button className="flex items-center justify-center lg:justify-start gap-2 text-white font-medium group">
                <a
                  href="#"
                  className="underline decoration-[#06CBDE] underline-offset-4 text-lg"
                >
                  Let’s Connect
                </a>
                <svg
                  className="w-5 h-5 text-[#06CBDE] group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-0">
              <Image
                src="/img/Ava/ava-mockup-img.png"
                alt="Real Estate Lead Qualification mockup"
                width={400}
                height={600}
                className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-auto drop-shadow-[0_0_40px_rgba(6,203,222,0.3)]"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] animated-border rounded-xl p-6 sm:p-8 md:p-10 w-full lg:w-[40%] xl:w-[550px] shadow-[0_0_40px_rgba(6,203,222,0.08)]">
            <h3 className="text-2xl xl:text-3xl 2xl:text-4xl leading-snug text-white mb-4 md:mb-6">
              Retail & Travel
              <br className="hidden sm:block" />
              Support
            </h3>
            <p className="text-[#ffffffdc] text-base xl:text-lg  leading-relaxed mb-6 md:mb-8">
              From order updates to booking assistance, Ava delivers instant
              support around the clock. Businesses cut call center costs while
              customers enjoy faster, friction-free service.
            </p>
            <button className="flex items-center gap-2 text-white font-medium group">
              <a
                href="#"
                className="underline decoration-[#06CBDE] underline-offset-4 text-lg"
              >
                Let’s Connect
              </a>
              <svg
                className="w-5 h-5 text-[#06CBDE] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4 md:mt-10">
          <BlueBgButton text="See It In Action" id='#form' />
        </div>
      </section>
    </div>
  );
}
