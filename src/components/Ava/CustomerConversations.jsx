"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Pause, Play, Clock } from "lucide-react"
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils" // <-- change path if necessary
function CardSpotlight({
    children,
    radius = 350,
    color = "#16D1EF",
    className,
    ...rest
}) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            className={cn(
                "group/spotlight relative p-10 rounded-2xl bg-[#0C0C0C] dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            {...rest}
        >
            {/* spotlight layer */}
            <motion.div
                className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0
                   transition-opacity duration-300 group-hover/spotlight:opacity-100 hidden lg:block"
                style={{
                    backgroundColor: color,
                    maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 70%
            )
          `,
                }}
            />
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
            "Any scalable, natural, human-like conversations with sub-200ms latency, ensuring smooth customer interactions. Seamlessly integrated with CRMs and telephony systems, it fits directly into existing workflows without disruption.",
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
    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
    const [isAutoPlay, setIsAutoPlay] = useState(true)
    const [autoPlaySpeed, setAutoPlaySpeed] = useState(5000) // 5 seconds default
    const [showSpeedControls, setShowSpeedControls] = useState(false)
    
    const autoPlayRef = useRef(null)

    // Handle automatic slide transition
    useEffect(() => {
        if (isAutoPlay) {
            autoPlayRef.current = setTimeout(() => {
                handleNext()
            }, autoPlaySpeed)
        }
        
        return () => {
            if (autoPlayRef.current) {
                clearTimeout(autoPlayRef.current)
            }
        }
    }, [activeIndex, isAutoPlay, autoPlaySpeed])

    const handlePrevious = () => {
        if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current)
        }
        setDirection(-1)
        setActiveIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
    }
    
    const handleNext = () => {
        if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current)
        }
        setDirection(1)
        setActiveIndex((i) => (i === slides.length - 1 ? 0 : i + 1))
    }
    
    const handleDotClick = (idx) => {
        if (autoPlayRef.current) {
            clearTimeout(autoPlayRef.current)
        }
        setDirection(idx > activeIndex ? 1 : -1)
        setActiveIndex(idx)
    }
    
    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay)
    }
    
    const changeSpeed = (newSpeed) => {
        setAutoPlaySpeed(newSpeed)
    }

    const activeSlide = slides[activeIndex]
    const nextSlide = slides[(activeIndex + 1) % slides.length]

    return (
        <div className="text-white flex items-center justify-center p-8 min-h-screen">
            <div className="absolute">
            <img src="/img/Ava/wireframes.png" alt="" className="absolute right-0" height={1949}/>
            </div>
            <div className="w-full max-w-[1400px]">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                        The Future of Scalable
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-balance">
                        Customer Conversations
                    </h2>
                </div>

                {/* Slides */}
                <div className="relative">
                    <div className="flex gap-6 overflow-hidden">
                        {/* ACTIVE (large) */}
                        <div className="relative w-full">
                            <AnimatePresence mode="wait" initial={false} custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    initial={(direction) => ({
                                        x: direction > 0 ? 1000 : -1000,
                                        opacity: 0,
                                    })}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={(direction) => ({
                                        x: direction > 0 ? -1000 : 1000,
                                        opacity: 0,
                                    })}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0"
                                >
                                    <CardSpotlight
                                        className="w-full h-[651px] flex items-end animated-border"
                                        color="#16D1EF"
                                    >
                                        <div className=""> 
                                            <div className="flex items-center">
                                            <span
                                                className="self-start px-4 py-1.5 rounded-full text-xs font-semibold
                                            uppercase tracking-wider bg-cyan-500/20 text-cyan-400
                                            border border-cyan-500/30"
                                            >
                                                {activeSlide.badge}
                                            </span>
                                            </div>
                                            <div className="flex items-center gap-8">
                                                <div className="flex-1">
                                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                                                        {activeSlide.title}
                                                    </h3>
                                                    <p className="text-gray-400 leading-relaxed text-pretty">
                                                        {activeSlide.description}
                                                    </p>
                                                </div>

                                                <div className="w-[400px] h-[400px] shrink-0 flex items-center justify-center translate-x-22 translate-y-9">
                                                    <img
                                                        src={activeSlide.image || "/placeholder.svg"}
                                                        alt={activeSlide.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardSpotlight>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* NEXT (small) */}
                        <div className="relative w-[610px] h-[651px]">
                            <AnimatePresence mode="wait" initial={false} custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    initial={(direction) => ({
                                        x: direction > 0 ? 300 : -300,
                                        opacity: 0,
                                    })}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={(direction) => ({
                                        x: direction > 0 ? -300 : 300,
                                        opacity: 0,
                                    })}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0"
                                >
                                    <CardSpotlight
                                        className="w-full h-full bg-[#0C0C0C] border border-gray-800 animated-border"
                                        color="#16D1EF"
                                    >
                                        <div className="h-full flex flex-col justify-between">
                                            <span
                                                className="self-start px-4 py-1.5 rounded-full text-xs font-semibold
                                            uppercase tracking-wider bg-cyan-500/20 text-cyan-400"
                                            >
                                                {nextSlide.badge}
                                            </span>

                                            <div className="flex-1 flex items-center">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                                                        {nextSlide.title}
                                                    </h3>
                                                    <p className="text-gray-400 leading-relaxed text-pretty">
                                                        {nextSlide.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardSpotlight>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Nav arrows */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2
                       grid place-items-center w-12 h-12 rounded-full
                       bg-gray-800/50 hover:bg-gray-700 transition"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2
                       grid place-items-center w-12 h-12 rounded-full
                       bg-gray-800/50 hover:bg-gray-700 transition"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots and Controls */}
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="flex justify-center gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    idx === activeIndex ? "bg-cyan-400 w-8" : "bg-gray-600 hover:bg-gray-500 w-2"
                                )}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    
                    {/* Autoplay Controls */}
                    <div className="flex items-center gap-4 mt-2">
                        <button 
                            onClick={toggleAutoPlay}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                            aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
                        >
                            {isAutoPlay ? (
                                <>
                                    <Pause className="w-4 h-4" />
                                    <span className="text-sm">Pause</span>
                                </>
                            ) : (
                                <>
                                    <Play className="w-4 h-4" />
                                    <span className="text-sm">Play</span>
                                </>
                            )}
                        </button>
                        
                        <div className="relative">
                            <button 
                                onClick={() => setShowSpeedControls(!showSpeedControls)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                                aria-label="Change speed"
                            >
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{autoPlaySpeed / 1000}s</span>
                            </button>
                            
                            {showSpeedControls && (
                                <div className="absolute bottom-full mb-2 left-0 bg-gray-800 rounded-md p-2 shadow-lg z-10">
                                    <div className="flex flex-col gap-1">
                                        {[2000, 3000, 5000, 7000, 10000].map((speed) => (
                                            <button
                                                key={speed}
                                                onClick={() => {
                                                    changeSpeed(speed)
                                                    setShowSpeedControls(false)
                                                }}
                                                className={cn(
                                                    "px-3 py-1 text-sm rounded hover:bg-gray-700 transition",
                                                    autoPlaySpeed === speed ? "bg-cyan-500/20 text-cyan-400" : ""
                                                )}
                                            >
                                                {speed / 1000}s
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}