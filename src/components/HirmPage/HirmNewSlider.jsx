"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HirmWorks from '../../components/HirmPage/HirmWorks'
const slides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "Hiring Bottlenecks That Drain Time",
    text: "Recruitment teams waste hundreds of hours screening CVs and repeating first-round interviews, slowing down the hiring cycle.",
    image: "/img/recruiter-slider-1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Automation That Handles the Heavy Lifting",
    text: "Hirm automates JDs, screens CVs, runs interviews, and delivers structured shortlists.",
    image: "/img/recruiter-slider-2.png",
  },
  {
    id: 3,
    badge: "KEY BENEFITS",
    title: "Smarter Hiring with Less Effort",
    text: "Cut ~60% of recruiter workload, reduce hiring costs, ensure unbiased shortlisting, and achieve faster time-to-hire.",
    image: "/img/recruiter-slider-3.png",
  },
];

export default function AtorNewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[activeIndex];
  const next = slides[(activeIndex + 1) % slides.length];

  return (
    <div
      style={{
        backgroundImage: `url('/img/main-slider-img.png')`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="relative text-white px-4 sm:px-6 lg:px-8 pt-16 max-w-[1700px] mx-auto overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-tight">
            The Future of Scalable <br />
            <span className="text-[#06CBDE]">Customer Conversations</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8">
          {/* LEFT BOX — Main Slide with animation */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] animated-border rounded-sm p-8 lg:p-0 lg:pt-6 lg:pl-6 xl:pt-16 2xl:pl-16 flex flex-col lg:flex-row justify-between items-center w-full lg:w-[65%] xl:w-[1300px] h-auto shadow-[0_0_40px_rgba(6,203,222,0.08)]"
            >
              <div className="flex flex-col justify-center space-y-4 xl:space-y-6 w-full lg:w-sm">
                <span className="inline-block bg-[#16D1EF]/10 text-[#06CBDE] text-xs md:text-sm px-5 py-2 rounded-full w-fit">
                  {current.badge}
                </span>
                <h3 className="text-2xl xl:text-3xl 2xl:text-4xl leading-snug">
                  {current.title}
                </h3>
                <p className="text-[#ffffffdc] text-base xl:text-lg lg:w-[295px] xl:w-sm 2xl:w-lg leading-relaxed">
                  {current.text}
                </p>
              </div>

              <div className="lg:flex justify-end mt-6 lg:mt-0 w-full lg:w-1/2 hidden">
                <Image
                  src={current.image}
                  alt={current.title}
                  width={580}
                  height={500}
                  className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[480px] xl:w-[480px] h-auto object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT BOX — Next Slide Preview */}
          <motion.div
            key={next.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A] animated-border rounded-sm p-6 sm:p-10 flex flex-col justify-center w-full lg:w-[35%] xl:w-[600px] h-auto shadow-[0_0_40px_rgba(6,203,222,0.08)]"
          >
            <span className="inline-block bg-[#16D1EF]/10 text-[#06CBDE] text-xs md:text-sm font-medium px-6 py-2 rounded-full w-fit">
              {next.badge}
            </span>
            <h3 className="text-2xl xl:text-3xl 2xl:text-4xl leading-snug mt-4 md:mt-6">
              {next.title}
            </h3>
            <p className="hidden lg:flex text-[#ffffffdc] text-base xl:text-lg leading-relaxed mt-2 md:mt-4">
              {next.text}
            </p>
          </motion.div>
        </div>

        {/* Navigation Button */}
        <button
          onClick={nextSlide}
          className="z-10 hidden md:flex absolute right-6 md:right-10 top-30 lg:top-1/2 lg:translate-y-5 translate-x-6 xl:translate-x-8 bg-[#06CBDE1A] border border-[#06CBDE33] hover:bg-[#06CBDE33] text-[#06CBDE] p-3 rounded-full transition"
        >
          <ChevronRight className="w-4 h-4 xl:w-6 xl:h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 ${
                i === activeIndex ? "bg-[#06CBDE]" : "bg-[#06CBDE33]"
              }`}
            />
          ))}
        </div>
      </section>
      <HirmWorks />
    </div>
  );
}
