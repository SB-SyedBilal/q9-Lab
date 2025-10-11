"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileAutoSlider({
  children,
  className = "",
  ariaLabel = "Auto Slider",
  intervalMs = 3000,
  pause = false,
}) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(0);
  const interactingRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const childArray = useMemo(() => {
    const arr = [];
    React.Children.forEach(children, (child) => {
      arr.push(child);
    });
    return arr;
  }, [children]);

  // ✅ Measure positions with proper centering
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const items = Array.from(el.children);
      if (items.length === 0) {
        setPositions([]);
        return;
      }

      const containerWidth = el.offsetWidth;

      const pos = items.map((it) => {
        const itemWidth = it.offsetWidth;
        // 👇 scrollLeft value to center the card
        return it.offsetLeft - (containerWidth / 2 - itemWidth / 2);
      });

      setPositions(pos);
      indexRef.current = Math.min(indexRef.current, pos.length - 1);
    };

    measure();
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [childArray.length]);

  // ✅ Auto slide
  useEffect(() => {
    const el = containerRef.current;
    if (!el || positions.length <= 1 || pause) return;

    const id = setInterval(() => {
      if (interactingRef.current) return;

      const next = (indexRef.current + 1) % positions.length;
      indexRef.current = next;
      setActiveIndex(next);

      const left = positions[next];
      el.scrollTo({ left, behavior: "smooth" });
    }, intervalMs);

    return () => clearInterval(id);
  }, [positions, intervalMs, pause]);

  // ✅ Bullet click
  const handleBulletClick = (index) => {
    const el = containerRef.current;
    if (!el) return;
    const left = positions[index];
    el.scrollTo({ left, behavior: "smooth" });
    indexRef.current = index;
    setActiveIndex(index);
  };

  // ✅ Touch / Swipe support
  const handleTouchStart = (e) => {
    interactingRef.current = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance for a swipe

    if (Math.abs(diff) > threshold) {
      const el = containerRef.current;
      if (!el) return;

      let newIndex = indexRef.current;
      if (diff > 0) {
        // swipe left → next
        newIndex = (indexRef.current + 1) % positions.length;
      } else {
        // swipe right → previous
        newIndex =
          (indexRef.current - 1 + positions.length) % positions.length;
      }

      indexRef.current = newIndex;
      setActiveIndex(newIndex);
      el.scrollTo({ left: positions[newIndex], behavior: "smooth" });
    }

    // small delay to re-enable auto-slide after swipe
    setTimeout(() => {
      interactingRef.current = false;
    }, 400);
  };

  return (
    <div className="space-y-4">
      {/* Slider */}
      <div
        ref={containerRef}
        className={cn(
          "overflow-x-hidden flex gap-4 hide-scrollbar touch-pan-x", // ✅ added touch-pan-x
          className
        )}
        role="region"
        aria-label={ariaLabel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>

      {/* Bullets */}
      <div className="flex justify-center gap-2 mt-2">
        {positions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleBulletClick(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeIndex === idx
                ? "bg-[#06CBDE] scale-110"
                : "bg-gray-600 hover:bg-[#06CBDE]"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
