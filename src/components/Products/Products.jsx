"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import TransButton from "../TransButton/TransButton";
import Heading from "../Heading/Heading";

const items = [
  {
    id: 0,
    src: "/img/ai1.png",
    alt: "Robot singing into a studio microphone with teal lighting",
    bedge: "AVA",
    title: "AI Voice Agent",
    desc: "Your 24/7 sales & support caller. Ava handles lead qualification and customer support at just $1 per call, reducing call centre costs by up to 80%.",
    link: '/ava'
  },
  {
    id: 1,
    // using the built-in placeholder generator for the second closed card
    src: "/img/product-2.png",
    alt: "Futuristic robot standing beside a laptop",
    bedge: "ATOR",
    title: "AI Tutor",
    desc: "Your personalized learning companion. Ator delivers interactive lessons that adapt to each student’s pace, making quality education scalable and affordable.",
    link: '/ator'
  },
  {
    id: 2,
    // using the built-in placeholder generator for the third closed card
    src: "/img/product-3a.png",
    alt: "Business robot portrait in a suit",
    bedge: "HIRM",
    title: "AI Recruiter",
    desc: "Your always-on recruiter. From CV screening to AI-driven interviews, Hirm cuts 60% of HR workload—freeing teams to focus on top talent.",
    link: '/hirm'
  },
];

export default function Products() {
  const [active, setActive] = useState(0); // first item open by default

  return (
    <section id='products' className="w-full">
      
      <div className="mx-auto max-w-[1700px] md:mb-14 mb-8 px-6 lg:px-8 ">
        <div className="flex justify-center md:mb-10">
          <Heading heading="Our Revolutionary" highlight="Products" />
        </div>

        <div
          className="
            flex flex-col gap-4 md:flex-row
          "
        >
          {items.map((item, idx) => {
            const isOpen = active === idx;
            return (
              <div
                key={item.id}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onMouseOver={() => setActive(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(idx);
                }}
                className={cn(
                  "group relative overflow-hidden rounded-[24px] ring-1 ring-border",
                  "transition-all duration-500 ease-in-out ",
                  // heights: stacked on mobile, same height on md+
                  isOpen
                    ? "h-[20rem] md:h-[28rem] lg:h-[25rem] xl:h-[30rem] 2xl:h-[40rem]"
                    : "h-30 md:h-[28rem] lg:h-[25rem] xl:h-[30rem] 2xl:h-[40rem]",
                  // width behavior on md+: image-accordion
                  "md:flex-1",
                  isOpen ? "md:flex-[4]" : "md:flex-[1.2]",
                  // visual polish
                  "bg-card"
                )}
              >
                {/* Background image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-hidden={false}
                />

                {/* Subtle vignette and tint for readability */}
                {/* Gradient only when open */}
                {isOpen && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(217, 217, 217, 0), rgba(0, 100, 120, 1))",
                    }}
                  />
                )}

                {/* Content only visible when open */}
                <div
                  className={cn(
                    "absolute inset-0 flex justify-between flex-col",
                    "p-5 sm:p-7 md:p-9 lg:p-12",
                    "transition-all duration-500 ",
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 translate-y-2"
                  )}
                >
                  {/* Glassy badge */}
                  <div>
                    <div className="bg-white/30 text-white text-sm md:text-base px-6 sm:px-9 py-2 rounded-full inline-block mb-4 sm:mb-6">
                      {item.bedge}
                    </div>
                  </div>

                  <div className="max-w-sm flex flex-col gap-4">
                    <h2 className="text-white font-semibold leading-tight text-primary text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
                      {item.title}
                    </h2>

                    <p className="max-w-[437px] leading-relaxed text-white text-base xl:text-lg">
                      {item.desc}
                    </p>

                    <div className="max-w-[220px]">
                      <TransButton text="Learn More" link={item.link} />
                    </div>
                  </div>
                </div>

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
