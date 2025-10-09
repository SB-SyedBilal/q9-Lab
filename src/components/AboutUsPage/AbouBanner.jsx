"use client";
import { ArrowUpRight } from "lucide-react";
import TransButton from "../TransButton/TransButton";

export default function AbouBanner() {
  return (
    <section className=" flex justify-center pt-12 md:py-16 bg-black max-w-[1700px] px-6 lg:px-8 mx-auto overflow-hidden">
      <div
        className="relative w-full  text-center rounded-xl animated-border 
        bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-6 py-15 
         transition-all duration-500 items-center flex flex-col "
      >
        {/* Background Glow in Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-white  text-3xl md:text-4xl xl:text-6xl font-bold leading-snug mb-8">
          Invest in Tomorrow’s AI, <br />
          <span className="text-[#06CBDE]">  Today</span>
        </h2>
        <p className="text-[#FFFFFF] mb-8">Be part of Q9 Labs’ journey to build applied AI SaaS with global impact.</p>

        {/* Button */}
        <TransButton text="Request Investor Deck" link='/contact-us' />
      </div>
    </section>
  );
}
