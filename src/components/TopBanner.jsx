"use client";

import React from "react";

export default function TopBanner() {
  return (
    <div className="w-full bg-[#2b2b2b] text-white overflow-hidden">
      <div className="whitespace-nowrap py-2">
        <p className="inline-block text-[12px] sm:text-base font-semibold text-center w-full">
          Meet us live at <span className="font-bold">Expand North Star 2025</span> – Hall 4, Booth C46–47 
          {/* Meet us live at <span className="font-bold">Expand North Star 2025</span> – Hall 4, Booth C46–47 &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
          Meet us live at <span className="font-bold">Expand North Star 2025</span> – Hall 4, Booth C46–47 */}
        </p>
      </div>
    </div>
  );
}
