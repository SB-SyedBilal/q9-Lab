"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappWidget() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP; // ✅ change this to your WhatsApp number (with country code)
  const message = "Hi, I’d like to know more about your services!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-3 rounded-full shadow-lg transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaWhatsapp className="text-2xl" />
        
      </a>
    </div>
  );
}
