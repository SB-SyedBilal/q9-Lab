"use client";

import { useState, useEffect } from "react";
// import Navbar from "../NavBar/Navbar";
import BlueBgButton from "@/components/BlueBgButton/BlueBgButton";
import Image from "next/image";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        if (isHovering) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHovering]);

    return (
        <div
            id="home"
            className="overflow-hidden "
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Curved Overlay Image */}
            <div className="w-full h-[896.88px] z-0 opacity-100 flex justify-center">
                <img
                    src="/img/Ava/hero.png"
                    alt="Curved design overlay"
                />
            </div>

            {/* Mouse-following gradient (only on desktop) */}
            {isHovering && (
                <div
                    className="fixed hidden md:block pointer-events-none z-0 transition-opacity duration-300"
                />
            )}


            {/* Main Content */}
            <div className="flex justify-center">
            <div className="absolute top-[10rem] items-center justify-center text-center">
                <div className="m-auto">
                    <h1 className="font-AmpleSoftPro text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug">
                        The Future of Customer{"  "}
                        <span className="text-cyan-300">Engagement</span>
                    </h1>

                    <p className="text-[14px] sm:text-base md:text-sm lg:text-md xl:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                        Ava replaces costly call centers with a scalable AI voice agent that delivers smarter, faster, and more affordable customer conversations.
                    </p>
                    <div className="flex justify-center">
                        <div className="w-full sm:w-auto">
                            <BlueBgButton text="Get Started" />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex justify-center ">
                        <Image
                            src="/img/Ava/avahero.png"
                            alt="Remote Image"
                            width={1110}
                            height={650}
                        />
                    </div>
                    <div className="absolute translate-x-[47rem] -translate-y-[10rem] ">
                        <Image
                            src="/img/Ava/unique.png"
                            alt="Remote Image"
                            width={570.65}
                            height={283.56}
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
