"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/923011184219?text=Hello%20COLTECH,%20I%20would%20like%20to%20inquire%20about%20your%20automation%20and%20engineering%20services.";

  return (
    <motion.aside
      aria-label="Contact options"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover for desktop */}
      <span className="hidden md:inline-flex items-center gap-1.5 mr-3 px-3 py-1.5 bg-[#001a39] text-white text-xs font-semibold rounded-full shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        Chat with an Engineer
      </span>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with COLTECH engineers on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Pulsing ambient ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        <FaWhatsapp className="w-7 h-7" />
      </a>
    </motion.aside>
  );
}
