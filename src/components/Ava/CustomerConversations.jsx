"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function CarouselPage() {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const handleDotClick = (index) => {
        setActiveIndex(index)
    }

    const nextIndex = (activeIndex + 1) % slides.length
    const activeSlide = slides[activeIndex]
    const nextSlide = slides[nextIndex]

    return (
        <div className="bg-[#0a0a0a] text-white flex items-center justify-center p-8">
            <div className="w-full max-w-[1400px]">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Future of Scalable</h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-balance">Customer Conversations</h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="flex gap-6 items-center justify-center">
                        {/* Active Slide - 1058px with image + text */}
                        <div
                            className="w-[1058px] h-[651px] transition-all duration-500 ease-in-out rounded-2xl
                bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30"
                        >
                            <div className="h-full p-8 flex flex-col justify-between">
                                {/* Badge */}
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        {activeSlide.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex items-center justify-between gap-8">
                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{activeSlide.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-pretty">{activeSlide.description}</p>
                                    </div>

                                    {/* Image - Visible on active slide */}
                                    <div className="flex-shrink-0 w-[400px] h-[400px] flex items-center justify-center">
                                        <img
                                            src={activeSlide.image || "/placeholder.svg"}
                                            alt={activeSlide.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Next Slide - 610px with text only */}
                        <div
                            className="w-[610px] h-[651px] transition-all duration-500 ease-in-out rounded-2xl
                bg-[#1a1a1a] border border-gray-800"
                        >
                            <div className="h-full p-8 flex flex-col justify-between">
                                {/* Badge */}
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-400">
                                        {nextSlide.badge}
                                    </span>
                                </div>

                                {/* Content - Text only */}
                                <div className="flex-1 flex items-center">
                                    <div className="w-full">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">{nextSlide.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-pretty">{nextSlide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        variant="ghost"
                        size="icon"
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === activeIndex ? "bg-cyan-400 w-8" : "bg-gray-600 hover:bg-gray-500"}
              `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
