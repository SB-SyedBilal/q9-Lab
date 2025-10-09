"use client";
import { ArrowUpRight } from "lucide-react";
import TransButton from "../TransButton/TransButton";

export default function AvaBanner() {
  return (
    <section className="flex justify-center py-10 sm:py-14 bg-black max-w-[1700px] px-4 sm:px-6 lg:px-8 mx-auto overflow-hidden">
      <div
        className="relative w-full text-center rounded-xl animated-border 
    bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-4 sm:px-6 py-10 lg:py-16 xl:py-20 
    transition-all duration-500 items-center flex flex-col"
      >
        {/* Background Glow in Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] bg-cyan-500/30 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 xl:gap-10">
          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-snug">
            Transform Customer
            <span className="text-[#06CBDE]"> Engagement with AI</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#ffffffdc] text-base md:text-lg lg:text-xl max-w-[90%] sm:w-3/4 lg:w-3xl xl:w-5xl">
            Slash your call center costs while boosting engagement with Ava. Our
            AI handles routine conversations so your team can focus on what
            really matters closing deals and building relationships.
          </p>

          {/* Button */}
          <div className="mt-2">
            <TransButton text="Book A Demo" link='#form' />
          </div>
        </div>
      </div>
    </section>
  );
}
