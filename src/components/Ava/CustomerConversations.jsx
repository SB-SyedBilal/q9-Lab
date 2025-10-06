"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
      ></motion.div>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Slide data                                                        */
/* ------------------------------------------------------------------ */
const slides = [
  {
    id: 1,
    badge: "CHALLENGE",
    title: "The Hidden Cost of Call Centers",
    description:
      "Call centers drain budgets, struggle with quality, and buckle under pressure when demand spikes. Customer wait times, businesses lose opportunities, and scaling becomes nearly impossible.",
    image: "/img/Ava/img1.png",
  },
  {
    id: 2,
    badge: "SOLUTION",
    title: "Seamless Conversations, Built for Business",
    description:
      "Ava delivers scalable, natural, human-like conversations with sub-200ms latency, ensuring smooth customer interactions. Seamlessly integrated with CRMs and telephony systems, it fits directly into existing workflows without disruption.",
    image: "/img/Ava/img2.png",
  },
  {
    id: 3,
    badge: "RESULTS",
    title: "Transform Your Customer Experience",
    description:
      "Reduce operational costs by up to 70% while improving customer satisfaction scores. Scale effortlessly during peak times and provide 24/7 support without additional staffing costs.",
    image: "/img/Ava/img3.png",
  },
]

/* ------------------------------------------------------------------ */
/*  Carousel component                                                */
/* ------------------------------------------------------------------ */
export default function CarouselPage() {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]]

  const [currentIndex, setCurrentIndex] = useState(1)
  const [enableTransition, setEnableTransition] = useState(true)
  const timerRef = useRef(null)
  const isResettingRef = useRef(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const transitionTimeoutRef = useRef(null)

  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      timerRef.current = setInterval(() => {
        if (!isResettingRef.current) {
          handleNext()
        }
      }, 5000)
    }

    startTimer()

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      handleNext()
    }, 5000)
  }

  const handleTransitionEnd = (e) => {
    // Only handle transition end for the main container, not child elements
    if (e && e.target !== e.currentTarget) return
    if (isResettingRef.current) return

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }

    if (currentIndex >= extendedSlides.length - 1) {
      isResettingRef.current = true
      setEnableTransition(false)

      // Use immediate state update
      requestAnimationFrame(() => {
        setCurrentIndex(1)
        requestAnimationFrame(() => {
          setEnableTransition(true)
          isResettingRef.current = false
        })
      })
    } else if (currentIndex <= 0) {
      isResettingRef.current = true
      setEnableTransition(false)

      // Use immediate state update
      requestAnimationFrame(() => {
        setCurrentIndex(slides.length)
        requestAnimationFrame(() => {
          setEnableTransition(true)
          isResettingRef.current = false
        })
      })
    }
  }

  const handlePrevious = () => {
    if (isResettingRef.current) return
    setCurrentIndex((prev) => Math.max(0, prev - 1))
    resetTimer()
  }

  const handleNext = () => {
    if (isResettingRef.current) return
    setCurrentIndex((prev) => Math.min(extendedSlides.length - 1, prev + 1))
    resetTimer()
  }

  const handleDotClick = (idx) => {
    if (isResettingRef.current) return
    const targetIndex = idx + 1
    if (targetIndex === currentIndex) return
    setCurrentIndex(targetIndex)
    resetTimer()
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext()
      } else {
        handlePrevious()
      }
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  const activeDotIndex =
    currentIndex === 0 ? slides.length - 1 : currentIndex === extendedSlides.length - 1 ? 0 : currentIndex - 1

  return (
    <div className="text-white flex  items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ">
      <div className="pointer-events-none right-0 absolute w-full h-full hidden lg:block overflow-hidden">
        <div className="right-[-10rem] absolute top-[-15rem] opacity-50 lg:opacity-100">
          <img src="/img/Ava/wireframes.png" alt="" className="w-auto h-auto max-w-[1338px] " />
        </div>
      </div>
      <div className="w-full max-w-[1400px] relative z-10 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[10.1rem]">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-balance px-4">
            The Future of Scalable
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 text-balance px-4">
            Customer Conversations
          </h2>
        </div>

        {/* Slides */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_610px] gap-3 sm:gap-4 md:gap-6">
            {/* ACTIVE (large) */}
            <div
              className="relative w-full overflow-hidden touch-pan-y"
              style={{ backfaceVisibility: "hidden", perspective: "1000px" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={cn(
                  "flex h-full",
                  enableTransition && "transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                )}
                style={{
                  transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                  willChange: enableTransition ? "transform" : "auto",
                  backfaceVisibility: "hidden",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, idx) => (
                  <div
                    key={`${slide.id}-${idx}`}
                    className="w-full h-full shrink-0"
                    style={{ backfaceVisibility: "hidden", transform: "translate3d(0, 0, 0)" }}
                  >
                    <CardSpotlight className="flex animated-border bg-[#0C0C0C] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                      <div className="flex flex-col justify-center w-full" style={{ transform: "translateZ(0)" }}>
                        <div className="flex mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                          <span
                            className="px-2.5 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] sm:text-xs font-semibold
                                                uppercase tracking-wider bg-cyan-500/20 text-cyan-400
                                                border border-cyan-500/30 rounded-3xl"
                            style={{ transform: "translateZ(0)" }}
                          >
                            {slide.badge}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                          <div style={{ transform: "translateZ(0)" }} className="flex-1">
                            <h3
                              className="text-xl sm:text-2xl lg:text-3xl max-w-full md:max-w-[28rem] font-bold mb-3 sm:mb-4 text-balance leading-tight"
                              style={{ transform: "translateZ(0)" }}
                            >
                              {slide.title}
                            </h3>
                            <p
                              className="text-xs sm:text-sm lg:text-base max-w-full md:max-w-[26rem] text-gray-400 leading-relaxed text-pretty"
                              style={{ transform: "translateZ(0)" }}
                            >
                              {slide.description}
                            </p>
                          </div>
                          <div className="sm:flex w-full md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[400px] xl:h-[400px] max-w-[600px] mx-auto md:mx-0 shrink-0 items-center justify-center md:translate-x-4 lg:translate-x-9 md:translate-y-4 lg:translate-y-9 hidden">
                            <img
                              src={slide.image || "/placeholder.svg"}
                              alt={slide.title}
                              className="w-full h-full"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </CardSpotlight>
                  </div>
                ))}
              </div>
            </div>

            {/* NEXT (small) */}
            <div
              className="hidden lg:block w-full relative overflow-hidden"
              style={{ backfaceVisibility: "hidden", perspective: "100px" }}
            >
              <div
                className={cn(
                  "flex h-full",
                  enableTransition && "transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                )}
                style={{
                  transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                  willChange: enableTransition ? "transform" : "auto",
                  backfaceVisibility: "hidden",
                }}
              >
                {extendedSlides.map((slide, idx) => {
                  const nextIdx = (idx + 1) % extendedSlides.length
                  const nextSlideData = extendedSlides[nextIdx]
                  return (
                    <div
                      key={`${slide.id}-${idx}-next`}
                      className="w-full h-full shrink-0"
                      style={{ backfaceVisibility: "hidden", transform: "translate3d(0, 0, 0)" }}
                    >
                      <CardSpotlight className="w-full flex items-center h-full animated-border p-6 lg:p-8 xl:p-10 bg-[#0C0C0C]">
                        <div className="flex flex-col justify-evenly" style={{ transform: "translateZ(0)" }}>
                          <div className="flex items-center mb-3 sm:mb-4">
                            <span
                              className="px-2.5 sm:px-3 md:px-4 py-1 md:py-1.5 text-[10px] sm:text-xs font-semibold
                                                uppercase tracking-wider bg-cyan-500/20 text-cyan-400
                                                border border-cyan-500/30 rounded-3xl"
                              style={{ transform: "translateZ(0)" }}
                            >
                              {slide.badge}
                            </span>
                          </div>
                          <div className="flex-1 flex items-center">
                            <div style={{ transform: "translateZ(0)" }}>
                              <h3
                                className="text-xl lg:text-2xl xl:text-3xl max-w-full font-bold mb-3 lg:mb-4 text-balance leading-tight"
                                style={{ transform: "translateZ(0)" }}
                              >
                                {nextSlideData.title}
                              </h3>
                              <p
                                className="text-xs lg:text-sm xl:text-base max-w-full text-gray-400 leading-relaxed text-pretty"
                                style={{ transform: "translateZ(0)" }}
                              >
                                {nextSlideData.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardSpotlight>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-3 md:left-4 lg:left-0 top-1/2 lg:-translate-x-16 -translate-y-1/2
                       grid place-items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full
                       bg-gray-800/90 hover:bg-gray-700 transition-all duration-200 backdrop-blur-sm
                       active:scale-90 hover:scale-105 z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-3 md:right-4 lg:right-0 top-1/2 lg:translate-x-16 -translate-y-1/2
                       grid place-items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full
                       bg-gray-800/90 hover:bg-gray-700 transition-all duration-200 backdrop-blur-sm
                       active:scale-90 hover:scale-105 z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={cn(
                "h-1.5 sm:h-2 rounded-full transition-all duration-300 ease-out",
                "hover:scale-110 active:scale-95",
                idx === activeDotIndex ? "bg-cyan-400 w-5 sm:w-6 md:w-8" : "bg-gray-600 hover:bg-gray-500 w-1.5 sm:w-2",
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
