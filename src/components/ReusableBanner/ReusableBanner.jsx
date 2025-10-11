"use client";
import React from "react";
import TransButton from "../TransButton/TransButton";

export default function ReusableBanner({ 
  heading, 
  highlights = [], // 👈 multiple highlights supported
  buttonText = "Book A Demo", 
  buttonLink = "#form" 
}) {
  // agar highlights array empty nahi hai
  let modifiedHeading = heading;

  highlights.forEach((word) => {
    // har highlight word ko wrap kar do span me
    const regex = new RegExp(`(${word})`, "gi");
    modifiedHeading = modifiedHeading.replace(
      regex,
      `<span class='text-[#06CBDE]'>$1</span>`
    );
  });

  return (
    <section className="flex justify-center py-10 sm:py-14 bg-black max-w-[1700px] px-6 mx-auto overflow-hidden">
      <div
        className="relative w-full text-center rounded-lg animated-border 
        bg-gradient-to-b from-[#0b0b0b] to-[#001f20] px-6 py-10 lg:py-16 xl:py-20 
        transition-all duration-500 items-center flex flex-col"
      >
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-[#06CBDE]/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <h2
          className="text-white text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold leading-snug mb-6 max-w-lg xl:max-w-3xl"
          dangerouslySetInnerHTML={{ __html: modifiedHeading }}
        />

        {/* Button */}
        <TransButton text={buttonText} link={buttonLink} />
      </div>
    </section>
  );
}
