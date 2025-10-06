"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils"; // Optional: Replace or define your own className merge util

// ----------------------------------------------
// CardSpotlight Component
// ----------------------------------------------
function CardSpotlight({ children, radius = 350, color = "#06CBDE", className, ...props }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={cn("group/spotlight p-10 rounded-sm relative", className)} onMouseMove={handleMouseMove} {...props}>
      <motion.div
        className="pointer-events-none absolute opacity-0 cursor-pointer transition duration-300 group-hover/spotlight:opacity-50 lg:block hidden"
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
      />
      {children}
    </div>
  );
}

// ----------------------------------------------
// Slide Data
// ----------------------------------------------
const slides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "The Gap in Learning Support",
    description:
      "Many students struggle because they can’t afford quality one-on-one tutoring. The lack of personalized guidance limits their learning potential.",
    image: "/img/atorslider1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Ator: Personalized Learning for Every Student",
    description:
      "Ator solves this by offering interactive lessons, visual diagrams, and practice exercises. Each learning path is personalized to the student’s needs.",
    image: "/img/atorslider2.png",
  },
  {
    id: 3,
    badge: "KEY BENEFITS",
    title: "Simple, Adaptive, and Global Learning Experience",
    description:
      "It explains concepts in simple terms, generates clear diagrams, and adjusts to the learner’s pace. Ator supports multiple subjects and languages seamlessly.",
    image: "/img/atorslider3.png",
  },
];

// ----------------------------------------------
// Main Slider Component
// ----------------------------------------------
export default function AtorSlider() {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  const timerRef = useRef(null);
  const isResettingRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!isResettingRef.current) handleNext();
      }, 5000);
    };

    startTimer();

    return () => {
      clearInterval(timerRef.current);
      clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(handleNext, 5000);
  };

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (isResettingRef.current) return;

    clearTimeout(transitionTimeoutRef.current);

    if (currentIndex >= extendedSlides.length - 1) {
      isResettingRef.current = true;
      setEnableTransition(false);
      requestAnimationFrame(() => {
        setCurrentIndex(1);
        requestAnimationFrame(() => {
          setEnableTransition(true);
          isResettingRef.current = false;
        });
      });
    } else if (currentIndex <= 0) {
      isResettingRef.current = true;
      setEnableTransition(false);
      requestAnimationFrame(() => {
        setCurrentIndex(slides.length);
        requestAnimationFrame(() => {
          setEnableTransition(true);
          isResettingRef.current = false;
        });
      });
    }
  };

  const handlePrevious = () => {
    if (isResettingRef.current) return;
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    if (isResettingRef.current) return;
    setCurrentIndex((prev) => Math.min(extendedSlides.length - 1, prev + 1));
    resetTimer();
  };

  const handleDotClick = (idx) => {
    if (isResettingRef.current) return;
    const targetIndex = idx + 1;
    if (targetIndex === currentIndex) return;
    setCurrentIndex(targetIndex);
    resetTimer();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? handleNext() : handlePrevious();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const activeDotIndex =
    currentIndex === 0
      ? slides.length - 1
      : currentIndex === extendedSlides.length - 1
      ? 0
      : currentIndex - 1;

  return (
    <div className="text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="pointer-events-none right-0 absolute w-full h-full hidden lg:block overflow-hidden">
        <div className="right-[-10rem] absolute top-[-15rem] opacity-50 lg:opacity-100">
          <img src="/img/Ava/wireframes.png" alt="" className="max-w-[1338px]" />
        </div>
      </div>

      <div className="w-full max-w-[1700px] relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            The Future of Scalable
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-400 text-balance px-4">
            Customer Conversations
          </h2>
        </div>

        {/* Main Slide View */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_610px] xl:grid-cols-[1fr_720px] gap-3 sm:gap-4 md:gap-6 xl:gap-8">
            {/* Active Slide (Main) */}
            <div
              className="relative w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={cn("flex h-full", enableTransition && "transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]")}
                style={{
                  transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                  willChange: enableTransition ? "transform" : "auto",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, idx) => (
                  <div key={`${slide.id}-${idx}`} className="w-full h-full shrink-0">
                    <CardSpotlight className="flex bg-[#0C0C0C] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[640px]">
                      <div className="flex flex-col justify-center w-full">
                        <div className="flex">
                          <span className="px-3 py-1 text-xs font-semibold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-3xl">
                            {slide.badge}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-balance leading-tight">
                              {slide.title}
                            </h3>
                            <p className="text-sm lg:text-base xl:text-lg text-gray-400 leading-relaxed">
                              {slide.description}
                            </p>
                          </div>
                          <div className="hidden sm:flex w-full md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[400px] xl:h-[400px] mx-auto md:mx-0 items-center justify-center">
                            <img src={slide.image} alt={slide.title} className="w-full h-full" />
                          </div>
                        </div>
                      </div>
                    </CardSpotlight>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Slide Preview (Right side on large screens) */}
            <div className="hidden lg:block w-full relative overflow-hidden">
              <div
                className={cn("flex h-full", enableTransition && "transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]")}
                style={{
                  transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                  willChange: enableTransition ? "transform" : "auto",
                }}
              >
                {extendedSlides.map((slide, idx) => {
                  const nextIdx = (idx + 1) % extendedSlides.length;
                  const nextSlide = extendedSlides[nextIdx];
                  return (
                    <div key={`${slide.id}-${idx}-next`} className="w-full h-full shrink-0">
                      <CardSpotlight className="w-full flex items-center h-full bg-[#0C0C0C] p-6 lg:p-8 xl:p-10">
                        <div className="flex flex-col justify-evenly">
                          <div className="mb-4">
                            <span className="px-3 py-1 text-xs font-semibold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-3xl">
                              {slide.badge}
                            </span>
                          </div>
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4">{nextSlide.title}</h3>
                          <p className="text-sm lg:text-base text-gray-400">{nextSlide.description}</p>
                        </div>
                      </CardSpotlight>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={handlePrevious} aria-label="Previous slide" className="slider-nav left">
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>
          <button onClick={handleNext} aria-label="Next slide" className="slider-nav right">
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === activeDotIndex ? "bg-cyan-400 w-8" : "bg-gray-600 w-2 hover:bg-gray-500"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
