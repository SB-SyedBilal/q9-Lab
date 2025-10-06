"use client"

import { ArrowUpRight } from "lucide-react"
import Button from "../TransButton/TransButton"
import { cn } from "@/lib/utils"
import { useMotionValue, motion, useMotionTemplate } from "framer-motion"

function CardSpotlight({ children, radius = 350, color = "#06CBDE", className, ...props }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div className={cn("group/spotlight rounded-sm relative", className)} onMouseMove={handleMouseMove} {...props}>
      <motion.div
        className="pointer-events-none absolute -z-10 opacity-0 cursor-pointer transition duration-300 group-hover/spotlight:opacity-50 lg:block hidden overflow-hidden"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 90%
            )
          `,
        }}
      ></motion.div>
      {children}
    </div>
  )
}

export default function AboutBanner() {
    return (
        <section className="relative w-full px-4 py-12 md:py-20 overflow-hidden">
            <CardSpotlight className="m-auto max-w-[300px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1700px]   bg-gradient-to-br p-8 md:p-20 text-center bg-[#0C0C0C] [background-image:radial-gradient(circle_at_bottom_right,_rgba(2,203,222,0.3)_0%,_rgba(2,203,222,0.3)_0%,_transparent_30%)] transition-all duration-300 overflow-hidden animated-border ">
                {/* White gradient glow in bottom-right */}
                <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 bg-white/5 opacity-50 blur-3xl md:h-54 md:w-54"></div>
                
                <h2 className=" mb-6 font-bold text-white text-xl md:text-3xl xl:text-5xl leading-snug">
                    Invest in Tomorrow’s AI,{""}
                    <br /><span className="text-cyan-400"> Today</span><br />
                </h2>
                
                <div className="flex justify-center">
                    <p className="text-white w-[38rem] text-center">Be part of Q9 Labs’ journey to build applied AI SaaS with global impact.</p>
                </div>
                
                <div className="flex justify-center mt-8">
                    <Button text="Request Investor Deck" />
                </div>
            </CardSpotlight>
        </section>
    )
}