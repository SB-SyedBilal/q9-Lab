"use client";

import Image from "next/image";
import BlueBgButton from "../BlueBgButton/BlueBgButton";
import { cn } from "@/lib/utils"

import { useMotionValue, motion, useMotionTemplate } from "framer-motion"

function CardSpotlight({ children, radius = 500, color = "#06CBDE", className, ...props }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  
  // Handle touch events for mobile devices
  function handleTouchMove({ currentTarget, touches }) {
    if (touches && touches[0]) {
      const { clientX, clientY } = touches[0]
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
  }

  return (
    <div 
      className={cn("group/spotlight p-4 sm:p-6 md:p-8 lg:p-10 rounded-md relative ", className)} 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      {...props}
    >
      {/* Spotlight glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/spotlight:opacity-40 sm:group-active/spotlight:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 203, 222, 0.8),
              transparent 60%
            )
          `,
        }}
      />
      
      {children}
    </div>
  )
}

export default function CaseStudiesSection() {
    return (
        <section className="relative bg-[#080808] px-4 overflow-hidden ">
            <img src="/img/Ava/CaseStudies.png" alt="" className="absolute hidden md:block" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute top-20 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-cyan-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-0 w-40 md:w-80 h-40 md:h-80 bg-cyan-400/5 rounded-full blur-3xl" />
                {/* Decorative line patterns */}
                <div className="absolute top-10 left-10 w-16 md:w-32 h-16 md:h-32 opacity-10">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"
                        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    />
                </div>
            </div>

            <div className="relative m-auto">
                <div className="py-10 md:py-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                        <span className="text-white">Real-World </span>
                        <span className="text-cyan-400">Case Studies</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 mb-8 lg:mb-16">
                    {/* Card 1: Real Estate Lead Qualification */}
                    <CardSpotlight className="relative flex flex-col md:flex-row justify-between rounded-3xl p-4 sm:p-6 md:p-8 w-full lg:w-[60%] xl:w-[1032px] animated-border bg-[#0C0C0C]">
                        <div className="space-y-4 md:space-y-6 flex flex-col justify-center mb-6 md:mb-0">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                Real Estate Lead
                                <br className="hidden sm:block" />
                                Qualification
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Ana connects with prospects the moment they inquire,
                                <br className="hidden sm:block" />
                                qualifying leads through natural conversations and
                                <br className="hidden sm:block" />
                                passing only hot leads to agents reducing response time
                                <br className="hidden sm:block" />
                                and increasing conversions.
                            </p>

                            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                                <span className="font-medium">Let's Connect</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex justify-center md:translate-y-9.5">
                            <Image
                                src="/img/Ava/mockup.png"
                                width={400}
                                height={600}
                                alt="Real Estate Lead Qualification mockup"
                                className="w-[200px] sm:w-[300px] md:w-[400px] h-auto"
                            />
                        </div>
                    </CardSpotlight>

                    {/* Card 2: Retail & Travel Support */}
                    <CardSpotlight className="flex items-center border border-gray-700 rounded-3xl p-4 sm:p-6 md:p-8 animated-border w-full lg:w-[40%] xl:w-[643px] bg-[#0C0C0C]">
                        <div className="space-y-4 md:space-y-6 flex flex-col">
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                Retail & Travel
                                <br className="hidden sm:block" />
                                Support
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                From order updates to booking assistance, Ana delivers
                                <br className="hidden sm:block" />
                                instant answers around the clock. Businesses cut call
                                <br className="hidden sm:block" />
                                center costs while customers enjoy faster, friction-free
                                <br className="hidden sm:block" />
                                service.
                            </p>

                            <div className="flex-grow" />

                            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group mt-auto">
                                <span className="font-medium">Let's Connect</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </CardSpotlight>
                </div>

                <div className="flex justify-center mt-4 sm:mt-8">
                    <BlueBgButton text="See It In Action" />
                </div>
            </div>
        </section>
    )
}
