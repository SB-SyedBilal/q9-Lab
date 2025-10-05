"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

function CardSpotlight({ children, className, ...rest }) {
  return (
    <div className={cn("relative p-10 rounded-2xl bg-[#0C0C0C] dark:border-neutral-800", className)} {...rest}>
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
    <div className="text-white flex items-center justify-center p-4 md:p-8">
      <div className="pointer-events-none h-[1000px] right-0 absolute">
        <img src="/img/Ava/wireframes.png" alt="" className="" height={1000} />
      </div>
      <div className="w-full max-w-[1400px] relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-balance">
            The Future of Scalable
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 text-balance">
            Customer Conversations
          </h2>
        </div>

        {/* Slides */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_610px] gap-4 md:gap-6">
            {/* ACTIVE (large) */}
            <div
              className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[651px] overflow-hidden touch-pan-y"
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
                  backfaceVisibility: "hidden"
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, idx) => (
                  <div key={`${slide.id}-${idx}`} className="w-full h-full shrink-0" style={{ backfaceVisibility: "hidden", transform: "translate3d(0, 0, 0)" }}>
                    <CardSpotlight className="w-full h-full flex items-end animated-border p-4 sm:p-6 md:p-8 lg:p-10">
                      <div className="w-full" style={{ transform: "translateZ(0)" }}>
                        <div className="flex items-center mb-3 sm:mb-4">
                          <span
                            className="px-2.5 sm:px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold
                                                uppercase tracking-wider bg-cyan-500/20 text-cyan-400
                                                border border-cyan-500/30"
                            style={{ transform: "translateZ(0)" }}
                          >
                            {slide.badge}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8">
                          <div className="flex-1 w-full" style={{ transform: "translateZ(0)" }}>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance leading-tight" style={{ transform: "translateZ(0)" }}>
                              {slide.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed text-pretty" style={{ transform: "translateZ(0)" }}>
                              {slide.description}
                            </p>
                          </div>

                          <div className="hidden md:flex w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] shrink-0 items-center justify-center lg:translate-x-22 lg:translate-y-9">
                            <img
                              src={slide.image || "/placeholder.svg"}
                              alt={slide.title}
                              className="w-full h-full object-contain"
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
            <div className="hidden lg:block relative w-[610px] h-[651px] overflow-hidden" style={{ backfaceVisibility: "hidden", perspective: "1000px" }}>
              <div
                className={cn(
                  "flex h-full",
                  enableTransition && "transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                )}
                style={{ 
                  transform: `translate3d(-${currentIndex * 100}%, 0, 0)`, 
                  willChange: enableTransition ? "transform" : "auto",
                  backfaceVisibility: "hidden"
                }}
              >
                {extendedSlides.map((slide, idx) => {
                  const nextIdx = (idx + 1) % extendedSlides.length
                  const nextSlideData = extendedSlides[nextIdx]
                  return (
                    <div key={`${slide.id}-${idx}-next`} className="w-full h-full shrink-0" style={{ backfaceVisibility: "hidden", transform: "translate3d(0, 0, 0)" }}>
                      <CardSpotlight className="w-full h-full bg-[#0C0C0C] border border-gray-800 animated-border p-8 lg:p-10">
                        <div className="h-full flex flex-col justify-between" style={{ transform: "translateZ(0)" }}>
                          <span
                            className="px-4 py-1.5 rounded-full text-xs font-semibold
                                                    uppercase tracking-wider bg-cyan-500/20 text-cyan-400"
                            style={{ transform: "translateZ(0)" }}
                          >
                            {nextSlideData.badge}
                          </span>

                          <div className="flex-1 flex items-center">
                            <div style={{ transform: "translateZ(0)" }}>
                              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-balance leading-tight" style={{ transform: "translateZ(0)" }}>
                                {nextSlideData.title}
                              </h3>
                              <p className="text-sm lg:text-base text-gray-400 leading-relaxed text-pretty" style={{ transform: "translateZ(0)" }}>
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
            className="absolute left-1 sm:left-2 md:left-0 top-1/2 md:-translate-x-16 -translate-y-1/2
                       grid place-items-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full
                       bg-gray-800/90 hover:bg-gray-700 transition-all duration-200 backdrop-blur-sm
                       active:scale-90 hover:scale-105 z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-2 md:right-0 top-1/2 md:translate-x-16 -translate-y-1/2
                       grid place-items-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full
                       bg-gray-800/90 hover:bg-gray-700 transition-all duration-200 backdrop-blur-sm
                       active:scale-90 hover:scale-105 z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 md:mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 ease-out",
                "hover:scale-110 active:scale-95",
                idx === activeDotIndex 
                  ? "bg-cyan-400 w-6 sm:w-8" 
                  : "bg-gray-600 hover:bg-gray-500 w-2",
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
