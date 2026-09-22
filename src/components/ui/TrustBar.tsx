"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  return (
    <motion.section
      id="trust-bar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-2xl md:rounded-full px-6 sm:px-10 py-4 sm:py-5 border border-[#F1F5F9] shadow-[0px_8px_30px_rgba(21,47,82,0.04)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-7xl mx-auto my-2"
    >
      {/* Left: Verified partner highlight (single lined) */}
      <div className="flex items-center gap-3.5 text-[#44474e] shrink-0">
        <div className="w-9 h-9 rounded-full bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5 text-[#1CB08F]" />
        </div>
        <p className="text-sm sm:text-base font-medium text-[#44474e] whitespace-normal sm:whitespace-nowrap">
          Automating systems for industry giants including{" "}
          <span className="font-bold text-[#001a39]">Taj Gasoline.</span>
        </p>
      </div>

      {/* Right: Pill metrics (single lined) */}
      <div className="flex items-center gap-8 sm:gap-12 shrink-0">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-[#001a39] tracking-tight leading-none">
            99.9%
          </p>
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#44474e] mt-1 whitespace-nowrap">
            UPTIME
          </p>
        </div>
        <div className="w-px h-8 bg-[#F1F5F9] hidden sm:block"></div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-[#001a39] tracking-tight leading-none">
            50k+
          </p>
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#44474e] mt-1 whitespace-nowrap">
            MONITORED DATA POINTS
          </p>
        </div>
      </div>
    </motion.section>
  );
}
