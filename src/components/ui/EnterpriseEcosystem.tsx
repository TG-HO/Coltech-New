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
                Smart Pump Automation & Forecourt ERP
              </h3>
              <p className="text-sm sm:text-base text-[#44474e] max-w-xl leading-relaxed">
                Millisecond synchronization between dispensing nozzles, underground tank telemetry, and centralized finance ledgers.
              </p>
            </div>

            {/* Live Forecourt & ATG Telemetry Preview */}
            <div className="z-10 mt-6 pt-4 border-t border-[#F1F5F9]">
              <div className="w-full bg-[#001a39] text-white rounded-xl p-4 sm:p-5 border border-[#F1F5F9] shadow-md relative overflow-hidden group-hover:border-[#1CB08F]/40 transition-colors">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#1CB08F] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">
                      FORECOURT TELEMETRY & ATG CONTROL
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-[#1CB08F] bg-[#1CB08F]/20 px-2 py-0.5 rounded">
                      LIVE RS-485
                    </span>
                    <span className="text-[11px] font-mono text-white/50">TAJ-KHI-04</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  {/* Bay 01 */}
                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <div className="flex justify-between text-[10px] font-mono text-white/60 mb-1">
                      <span>PUMP 01</span>
                      <span className="text-[#1CB08F] font-bold">SUPER 92</span>
                    </div>
                    <div className="text-sm font-bold font-mono text-white">41.5 <span className="text-[10px] text-[#1CB08F]">L/m</span></div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Dispensing • PKR 14,905</div>
                  </div>

                  {/* Bay 02 */}
                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <div className="flex justify-between text-[10px] font-mono text-white/60 mb-1">
                      <span>PUMP 02</span>
                      <span className="text-cyan-400 font-bold">HI-OCTANE</span>
                    </div>
                    <div className="text-sm font-bold font-mono text-white">38.0 <span className="text-[10px] text-cyan-400">L/m</span></div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Dispensing • PKR 9,240</div>
                  </div>

                  {/* ATG Tank Status */}
                  <div className="bg-white/5 rounded-lg p-2.5 border border-[#1CB08F]/30">
                    <div className="flex justify-between text-[10px] font-mono text-white/60 mb-1">
                      <span>ATG TANK 01</span>
                      <span className="text-[#1CB08F] font-bold">84.6%</span>
                    </div>
                    <div className="text-xs font-bold font-mono text-white">42,300 L</div>
                    <div className="text-[10px] text-cyan-300 font-mono mt-0.5">Water: 2.1mm • 24.2°C</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Underground Leak Sentry: Nominal
                  </span>
                  <span>Taj Gasoline Network Synced (14ms)</span>
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
                Custom Enterprise Software
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                Bespoke, offline-first applications and high-throughput enterprise systems built to eliminate operational bottlenecks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#001a39]/60">
              <span>Next.js • React • Node</span>
              <span className="text-[#1CB08F] font-bold">POS Ready</span>
            </div>
          </Link>
        </motion.div>

        {/* 3. AI & Edge Computer Vision (Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/services"
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
                AI & Edge Computer Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                On-premise neural inference for real-time license plate recognition (ANPR), security verification, and forecourt safety.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#001a39]/60">
              <span>ANPR & Safety Vision</span>
              <span className="text-[#1CB08F] font-bold">YOLOv11-Edge</span>
            </div>
          </Link>
        </motion.div>

        {/* 4. Scalable Retail POS Solutions (Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/software"
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
                Scalable Retail POS Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                Resilient, multi-branch point-of-sale systems engineered for uninterrupted billing and automated tax auditing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#001a39]/60">
              <span>Offline-First Core</span>
              <span className="text-[#1CB08F] font-bold">Sub-Second Sync</span>
            </div>
          </Link>
        </motion.div>

        {/* 5. Physical Infrastructure & Networking (2 Columns Bento Card - Entire Card Clickable) */}
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
                Physical Infrastructure & Networking
              </h3>
              <p className="text-xs sm:text-sm text-[#44474e] max-w-md leading-relaxed">
                Structured Cat6A/fiber optic backbones, climate-controlled server racks, and redundant failover topologies.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#001a39]/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F]" /> SD-WAN Failover
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F]" /> VLAN Segmentation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F]" /> OTDR Tested
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
