"use client";
import { ArrowUpRight } from "lucide-react";
import TransButton from "../TransButton/TransButton";

export default function ContactBanner() {
  return (
    <section className=" flex justify-center pt-8  max-w-[1700px] px-6 lg:px-8 mx-auto overflow-hidden">
      <div
        className="relative w-full  text-center rounded-xl animated-border 
        bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-6 py-10 lg:py-16 xl:py-20 
         transition-all duration-500 items-center flex flex-col "
      >
        {/* Background Glow in Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-[#06CBDE]/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-snug mb-6 max-w-lg xl:max-w-3xl">
          Ready to Advance Your  
          <span className="text-[#06CBDE]"> Intelligence?</span>
        </h2>
        <h3 className="text-[#ffffffdc] text-xl mb-8">Tell us about your goals—let’s craft the right AI approach together.</h3>

        {/* Button */}
        <TransButton text='Contact Us' link='#form' />
      </div>
    </section>
  );
}
