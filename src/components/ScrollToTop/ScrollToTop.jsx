"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // You'll need react-icons installed

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 active:scale-95"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 md:w-5 md:h-5" />
        </button>
      )}
    </>
  );
}
