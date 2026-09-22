"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  Globe,
  Zap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

export default function VisionMissionPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f7f9fb] text-[#001a39] flex flex-col selection:bg-[#1CB08F] selection:text-white">
      {/* Header Banner */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-gradient-to-r from-[#1CB08F]/10 via-[#152F52]/5 to-[#1CB08F]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-start max-w-4xl">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-[#44474e] mb-6"
          >
            <Link href="/" className="hover:text-[#1CB08F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1CB08F]" />
            <Link href="/about" className="hover:text-[#1CB08F] transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1CB08F]" />
            <span className="text-[#001a39] font-bold">Vision & Mission</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              STRATEGIC DIRECTIVES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Architecting the <br />
            <span className="text-[#1CB08F] relative inline-block">
              Operational Backbone
              <svg
                className="absolute w-full h-3 -bottom-1.5 left-0 text-[#1CB08F]/25 pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#44474e] font-medium leading-relaxed max-w-3xl mb-8"
          >
            Our vision is a future where critical physical operations run with the agility, transparency, and precision of modern cloud software platforms.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card bg-white p-8 sm:p-10 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
                LONG-TERM HORIZON
              </span>
              <h2 className="text-3xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Corporate Vision
              </h2>
              <p className="text-base text-[#44474e] leading-relaxed">
                To be the benchmark technology partner across emerging and regional markets, creating interconnected, automated digital nervous systems for modern enterprises.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#001a39]">
              <Globe className="w-4 h-4 text-[#1CB08F]" />
              <span>National & Regional Benchmark</span>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card bg-[#001a39] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#1CB08F]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#1CB08F] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
                CORE OBJECTIVE
              </span>
              <h2 className="text-3xl font-bold text-white group-hover:text-[#1CB08F] transition-colors">
                Corporate Mission
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                To design, deploy, and manage secure, scalable, and fail-safe IT solutions that eliminate operational friction, maximize capital efficiency, and deliver verified enterprise growth.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/90 relative z-10">
              <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
              <span>Verified Enterprise Growth</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global CTA Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-8">
        <div className="relative bg-[#001a39] text-white rounded-3xl p-8 sm:p-14 md:p-18 overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1CB08F]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1CB08F] block">
                TRANSFORM YOUR OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Align With Future-Ready Engineering.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Let’s collaborate to build reliable automations and IT systems that support your business growth.
              </p>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0"
            >
              Consult an Engineer
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
