"use client"

import { ArrowUpRight } from "lucide-react"

import Button from "../TransButton/TransButton"

export default function HirmBanner() {

    return (

        <section className="relative w-full px-4 py-12 md:py-20 overflow-hidden">

            <div className=" relative mx-auto max-w-7xl rounded-2xl border border-white/20 bg-gradient-to-br p-8 md:p-20 text-center bg-[#0C0C0C] 
  [background-image:radial-gradient(circle_at_bottom_right,_rgba(6,203,222,0.7)_0%,_rgba(6,203,222,0.3)_5%,_transparent_50%)] transition-all duration-300 overflow-hidden">

                {/* White gradient glow in bottom-right */}

                <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40  bg-white/15 opacity-50 blur-3xl md:h-54 md:w-54"></div>

                <h2 className="text-2xl mb-6 font-bold text-white sm:text-3xl md:text-5xl leading-snug">

                    Transform Customer{""}

                    <span className="text-cyan-400">Engagement with AI,</span><br />


                </h2>

                <div className=" flex justify-center">
                    <p className="text-white w-[38rem] text-center">Slash your call center costs while boosting engagement with Ava. Our AI handles routine
                        conversations so your team can focus on what really matters closing deals
                        and building relationships.</p>
                </div>
                <div className="flex justify-center">

                    <Button text="Book A Demo" />

                </div>

            </div>

        </section>

    )

}