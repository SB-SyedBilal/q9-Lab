"use client"

import { ArrowUpRight } from "lucide-react"
import Button from "../TransButton/TransButton"

export default function AtorBanner() {
  return (
    <section className="relative w-full px-4 py-6  overflow-hidden">
      <div className=" relative mx-auto max-w-6xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl rounded-2xl border border-white/20 bg-gradient-to-br from-black to-[#020617] p-8 md:p-20 text-center shadow-[0_0_150px_-40px_rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden">
        {/* White gradient glow in bottom-right */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40  bg-white opacity-10 blur-3xl md:h-54 md:w-74"></div>

        <h2 className="text-2xl mb-6 font-bold text-white sm:text-3xl md:text-4xl xl:text-5xl leading-snug">
          Ready To Bring Personalized{" "} <br />
          <span className="text-cyan-400"> Learning To Every Student?</span><br />
          
        </h2>

        <div className="flex justify-center">
          <Button text="Book A Demo" />
        </div>
      </div>
    </section>
  )
}
