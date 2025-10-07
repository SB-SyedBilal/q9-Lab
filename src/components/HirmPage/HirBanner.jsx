"use client";
import { ArrowUpRight } from "lucide-react";
import TransButton from "../TransButton/TransButton";

export default function HirBanner() {
  return (
    <section className=" flex justify-center  py-16 bg-black max-w-[1700px] px-6  mx-auto overflow-hidden">
      <div
        className="relative w-full  text-center rounded-3xl animated-border 
        bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-6 py-10 md:py-30 
         transition-all duration-500 items-center flex flex-col "
      >
        {/* Background Glow in Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold leading-snug mb-12 max-w-xl lg:max-w-5xl">
          Ready To Make 
          <span className="text-cyan-400"> Hiring Faster, Smarter, <span className="text-white">And </span>Fairer?</span>
        </h2>

        {/* Button */}
        <TransButton text='Book A Demo' />
      </div>
    </section>
  );
}
