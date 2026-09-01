"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Fuel, Code2, Cpu, Video, Network, ArrowUpRight, Activity } from "lucide-react";

export default function EnterpriseEcosystem() {
  return (
    <section id="solutions" className="w-full py-12 md:py-16 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight"
        >
          Enterprise Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg text-[#44474e] font-medium max-w-2xl mx-auto"
        >
          Integrated solutions designed for operational excellence.
        </motion.p>
      </div>

      {/* Bento Grid - Completely Clickable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1. Smart Pump Automation (Large Bento Card: 2 Cols, 2 Rows - Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2"
        >
          <Link
            href="/automation"
            className="bento-card w-full h-full flex flex-col justify-between group overflow-hidden relative min-h-[460px] p-6 sm:p-8 cursor-pointer block"
          >
            {/* Ambient Glow */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#1CB08F]/10 rounded-full blur-3xl group-hover:bg-[#1CB08F]/20 transition-all duration-500 pointer-events-none" />

            {/* Card Top Text */}
            <div className="space-y-4 z-10 relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#001a39] group-hover:text-[#1CB08F] group-hover:bg-[#1CB08F]/10 transition-colors">
                  <Fuel className="w-6 h-6" />
                </div>
                <span className="p-2 rounded-full hover:bg-[#F1F5F9] text-[#1CB08F] flex items-center gap-1 text-xs font-bold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Smart Pump Automation
              </h3>
              <p className="text-sm sm:text-base text-[#44474e] max-w-xl leading-relaxed">
                Revolutionizing fuel dispensing with real-time telemetry, automated billing integration, and predictive maintenance algorithms.
              </p>
            </div>

            {/* Live Dashboard UI Graphic */}
            <div className="z-10 mt-6 pt-4 border-t border-[#F1F5F9]">
              <div className="w-full bg-[#001a39] text-white rounded-xl p-4 sm:p-5 border border-[#F1F5F9] shadow-md relative overflow-hidden group-hover:border-[#1CB08F]/40 transition-colors">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#1CB08F] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      REAL-TIME FUEL FLOW ANALYTICS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#1CB08F] bg-[#1CB08F]/20 px-2 py-0.5 rounded">
                      LIVE STREAM
                    </span>
                    <span className="text-[11px] font-mono text-white/50">24 Hours</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="sm:col-span-2 bg-white/5 rounded-lg p-3 relative overflow-hidden">
                    <div className="flex justify-between text-[11px] font-mono text-white/60 mb-2">
                      <span>DISPENSING RATE</span>
                      <span className="text-[#1CB08F] font-bold">202 L/min TOTAL</span>
                    </div>
                    <svg className="w-full h-20 text-[#1CB08F]" viewBox="0 0 400 80" fill="none">
                      <path
                        d="M0 50 Q 40 20 80 45 T 160 30 T 240 60 T 320 25 T 400 35"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 50 Q 40 20 80 45 T 160 30 T 240 60 T 320 25 T 400 35 L 400 80 L 0 80 Z"
                        fill="currentColor"
                        fillOpacity="0.18"
                      />
                    </svg>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 flex flex-col justify-between gap-2">
                    <div className="text-[10px] font-mono text-white/50 uppercase">Pump Status</div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Pump 01</span>
                        <span className="text-[#1CB08F] font-mono font-bold">98 L/m</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Pump 02</span>
                        <span className="text-[#1CB08F] font-mono font-bold">104 L/m</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Pump 03</span>
                        <span className="text-amber-400 font-mono text-[10px]">Standby</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1CB08F]" />
                    Taj Gasoline Network Connected
                  </span>
                  <span>Latency: 14ms</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 2. Custom Software (Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/software"
            className="bento-card w-full h-full flex flex-col justify-between group p-6 sm:p-7 cursor-pointer block"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#001a39] group-hover:text-[#1CB08F] group-hover:bg-[#1CB08F]/10 transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[#1CB08F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Custom Software
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                Tailored applications engineered to solve specific operational bottlenecks with scalable architectures.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#001a39]/60">
              <span>Next.js • React • Node</span>
              <span className="text-[#1CB08F] font-bold">POS Ready</span>
            </div>
          </Link>
        </motion.div>

        {/* 3. AI & Machine Learning (Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/software"
            className="bento-card w-full h-full flex flex-col justify-between group p-6 sm:p-7 cursor-pointer block"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#001a39] group-hover:text-[#1CB08F] group-hover:bg-[#1CB08F]/10 transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[#1CB08F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                Actionable intelligence extracted from your data streams for predictive modeling.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#001a39]/60">
              <span>Predictive Telemetry</span>
              <span className="text-[#1CB08F] font-bold">99.8% Accuracy</span>
            </div>
          </Link>
        </motion.div>

        {/* 4. CCTV & Security (Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/infrastructure"
            className="bento-card w-full h-full flex flex-col justify-between group p-6 sm:p-7 cursor-pointer block"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#001a39] group-hover:text-[#1CB08F] group-hover:bg-[#1CB08F]/10 transition-colors">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-[#1CB08F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                CCTV & Security
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                Integrated surveillance networks with AI-driven threat detection and automated alerts.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#001a39]/60">
              <span>24/7 AI Vision Surveillance</span>
              <span className="text-[#1CB08F] font-bold">Zero Blindspots</span>
            </div>
          </Link>
        </motion.div>

        {/* 5. Enterprise Networking (2 Columns Bento Card - Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="md:col-span-2"
        >
          <Link
            href="/infrastructure"
            className="bento-card w-full h-full flex flex-col md:flex-row gap-6 group items-center justify-between p-6 sm:p-8 cursor-pointer block"
          >
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#001a39] group-hover:text-[#1CB08F] group-hover:bg-[#1CB08F]/10 transition-colors">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[#1CB08F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Enterprise Networking
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] max-w-md leading-relaxed">
                Robust, secure IT infrastructure design and deployment ensuring zero-downtime connectivity across distributed sites.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#001a39]/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F]" /> SD-WAN
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F]" /> VLAN Segmentation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F]" /> Failover Redundancy
                </span>
              </div>
            </div>

            <div className="w-full md:w-56 h-32 md:h-full rounded-xl bg-[#F1F5F9] border border-white/60 relative overflow-hidden flex items-center justify-center p-4">
              {/* Visual network topology preview */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#001a39] text-white flex items-center justify-center shadow-md z-10 group-hover:bg-[#1CB08F] transition-colors">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <div className="absolute w-28 h-28 border border-dashed border-[#1CB08F]/40 rounded-full animate-spin [animation-duration:12s]" />
                <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-[#1CB08F] shadow-[0_0_8px_#1CB08F]" />
                <div className="absolute bottom-2 right-6 w-3 h-3 rounded-full bg-[#1CB08F] shadow-[0_0_8px_#1CB08F]" />
                <div className="absolute top-6 right-8 w-2.5 h-2.5 rounded-full bg-[#001a39]" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
