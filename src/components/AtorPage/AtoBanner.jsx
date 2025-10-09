"use client";
import { ArrowUpRight } from "lucide-react";
import TransButton from "../TransButton/TransButton";

export default function AtoBanner() {
  return (
    <section className=" flex justify-center py-10 sm:py-14 bg-black max-w-[1700px] px-6 lg:px-8 mx-auto overflow-hidden">
      <div
        className="relative w-full  text-center rounded-lg animated-border 
        bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-4 sm:px-6 py-10 lg:py-16 xl:py-20 
         transition-all duration-500 items-center flex flex-col "
      >
        {/* Background Glow in Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 xl:gap-10">
          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-snug ">
            Ready To Bring Personalized <br />
            <span className="text-cyan-400">Learning To Every Student?</span>
          </h2>

          {/* Button */}
          <TransButton text="Book A Demo" link="#form" />
        </div>
      </div>
    </section>
  );
}
