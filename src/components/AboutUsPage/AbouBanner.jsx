"use client";
import { ArrowUpRight } from "lucide-react";
import TransButton from "../TransButton/TransButton";

export default function AbouBanner() {
  return (
    <section className=" flex justify-center py-10 sm:py-14 bg-black max-w-[1700px] px-6 lg:px-8 mx-auto overflow-hidden">
      <div
        className="relative w-full  text-center rounded-lg animated-border 
        bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-4 sm:px-6 py-10 lg:py-16 xl:py-20 
         transition-all duration-500 items-center flex flex-col gap-6"
      >
        {/* Background Glow in Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-[#06CBDE]/30 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-snug ">
          Invest in Tomorrow’s AI, 
          <span className="text-[#06CBDE]">  Today</span>
        </h2>
        <p className="text-[#FFFFFF] text-[15px] sm:text-[18px] lg:text-md xl:text-lg 2xl:text-2xl">Be part of Q9 Labs’ journey to build applied AI SaaS with global impact.</p>

        {/* Button */}
        <TransButton text="Request Investor Deck" link='/contact-us' />
      </div>
    </section>
  );
}
