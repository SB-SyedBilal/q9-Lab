"use client";

import { ArrowUpRight } from "lucide-react";
import Button from "../TransButton/TransButton";

export default function AtorBanner() {
  return (
    <section className="relative w-full px-4 py-6  overflow-hidden">
      <div className=" relative mx-auto max-w-6xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1600px] rounded-2xl border border-white/20 bg-[#020202] p-8 md:p-20 2xl:p-28 text-center shadow-[0_0_150px_-40px_rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden">
        {/* White gradient glow in bottom-right */}
        <div
          className="pointer-events-none absolute -bottom-8 -right-6 h-40 w-40 md:h-52 md:w-70  2xl:h-84 2xl:w-120 xl:h-54 xl:w-80
                bg-[radial-gradient(circle_at_bottom_right,_#06CBDE,_white,_transparent)] 
                opacity-15 lg:opacity-15 xl:opacity-12 blur-3xl"
        ></div>

        <h2 className="text-2xl mb-6 font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl leading-snug">
          Ready To Bring Personalized <span className="text-cyan-400">Learning To Every Student?</span>
          <br />
          <span className="text-cyan-400">Smarter, And Fairer?</span>
        </h2>

        <div className="flex justify-center">
          <Button text="Book A Demo" />
        </div>
      </div>
    </section>
  );
}
