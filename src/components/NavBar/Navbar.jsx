"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const timeoutRef = useRef(null);

  // Inside your component
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="max-w-[1400px] 2xl:max-w-[1800px] mx-auto relative z-50 w-full px-8 py-4 pt-8 sm:pt-8 md:pt-11 md:px-8 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img
              src="/img/q9logo.png"
              alt="Q9 Labs Logo"
              className="w-[90px] sm:w-[90px] md:w-[140px] 2xl:w-[170px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center text-sm xl:text-lg 2xl:text-2xl space-x-6 xl:space-x-14 2xl:space-x-16">
          <a
            href="#"
            className="text-white hover:text-cyan-300 transition-colors"
          >
            Home
          </a>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
              setIsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              timeoutRef.current = setTimeout(() => {
                setIsDropdownOpen(false);
              }, 200); // 200ms delay before closing
            }}
          >
            <button className="text-white hover:text-cyan-300 flex items-center">
              Our Products
              <svg
                className={`ml-3 w-6 h-6 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#080808] backdrop-blur-sm rounded-md shadow-lg z-50 border border-white/10">
                {[
                  { label: "AVA", href: "/" },
                  { label: "ATOR", href: "/ator" },
                  { label: "HIRM", href: "/hirm" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#industries-section"
            className="text-white hover:text-cyan-300 transition-colors"
          >
            About Us
          </a>
          <a
            href="#how-it-works"
            className="text-white hover:text-cyan-300 transition-colors"
          >
            Blogs
          </a>
          <a
            href="#form"
            className="text-white hover:text-cyan-300 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* CTA - Desktop */}
        <div className="hidden lg:flex lg:gap-4">
          <a
            className="bg-white/10 border border-white text-white px-4 xl:px-8 py-2 xl:py-3 rounded-full hover:bg-white hover:text-black transition-colors text-sm xl:text-base 2xl:text-xl"
            href="#form"
          >
            Request A Demo
          </a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-8 h-8 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* Mobile Menu Overlay (optional) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
      {/* Mobile Navigation - Right Drawer Style */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black/90 backdrop-blur-lg border-l border-white/10 p-6 z-60 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-md"
          aria-label="Close mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu Links */}
        <div className="mt-12 space-y-4 text-white text-base">
          <a
            href="#"
            onClick={closeMobileMenu}
            className="block hover:text-cyan-300 border-b border-white/30 pb-3"
          >
            Home
          </a>

          {/* Products Dropdown */}
          <div className="border-b border-white/30 pb-3">
            <button
              onClick={() => setIsProductMenuOpen((prev) => !prev)}
              className="w-full text-left flex items-center justify-between hover:text-cyan-300 font-medium"
            >
              Our Products
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isProductMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isProductMenuOpen && (
              <div className="pl-3 mt-3 space-y-3 text-sm text-gray-300">
                {[
                  { label: "Ava", href: "/" },
                  { label: "Ator", href: "/ator" },
                  { label: "Hirm", href: "/hirm" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#industries-section"
            onClick={closeMobileMenu}
            className="block hover:text-cyan-300 border-b border-white/30 pb-3"
          >
            About Us
          </a>

          <a
            href="#how-it-works"
            onClick={closeMobileMenu}
            className="block hover:text-cyan-300 border-b border-white/30 pb-3"
          >
            Blogs
          </a>

          <a
            href="#form"
            onClick={closeMobileMenu}
            className="block hover:text-cyan-300 border-b border-white/30 pb-3"
          >
            Contact Us
          </a>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#form"
              onClick={closeMobileMenu}
              className="block text-center bg-white text-black font-medium py-3 rounded-full hover:bg-cyan-400 transition"
            >
              Request A Demo
            </a>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
}
