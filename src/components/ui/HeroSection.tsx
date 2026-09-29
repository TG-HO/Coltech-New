"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";
import HeroText from "./HeroText";

// Dynamic import of 3D Mini Robot to ensure smooth client-side WebGL rendering
const MiniRobotCanvas = dynamic(
  () => import("./robot-hero").then((mod) => mod.MiniRobotCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-[#1CB08F] border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("solutions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-28 pb-4 md:pt-36 md:pb-8 max-w-7xl mx-auto flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-8 z-10">
        {/* Left Column: Fixed-Height Stabilized Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 w-full">
          {/* Smooth Kinetic Hero Text */}
          <HeroText />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(28,176,143,0.39)] hover:shadow-[0_6px_20px_rgba(28,176,143,0.3)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToSolutions}
              className="bg-white text-[#001a39] border border-[#F1F5F9] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#F1F5F9] active:scale-95 transition-colors flex items-center justify-center shadow-xs cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Column: Full-width, uncropped 3D Mini Robot Hero */}
        <div className="lg:col-span-5 w-full relative flex items-center justify-center overflow-visible">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1CB08F]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Full-width 3D Robot Canvas */}
          <div className="w-full h-[440px] sm:h-[480px] md:h-[520px] relative flex items-center justify-center overflow-visible">
            <MiniRobotCanvas
              scale={1.3}
              color="#ffffff"
              pantallaColor="#1CB08F"
              pantallaBrillo={1.4}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
