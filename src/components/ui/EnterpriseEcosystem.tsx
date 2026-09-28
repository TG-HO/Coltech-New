"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Fuel, Code2, Cpu, Video, Network, ArrowUpRight } from "lucide-react";

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

            {/* Forecourt Image */}
            <div className="z-10 mt-6 pt-4 border-t border-[#F1F5F9]">
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-[#F1F5F9] shadow-md group-hover:border-[#1CB08F]/40 transition-colors">
                <Image
                  src="/Fuel Station.jpg"
                  alt="Smart Pump Automation & Forecourt Systems"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/70 via-transparent to-transparent pointer-events-none" />
                {/* <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                  <span className="flex items-center gap-1.5 bg-[#001a39]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse" />
                    Forecourt Edge Telemetry
                  </span>
                  <span className="bg-[#001a39]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 text-[11px] text-[#1CB08F]">
                    Live Operations
                  </span>
                </div> */}
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

        {/* 3. AI & Edge Computer Vision (Entire Card Clickable)
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
        </motion.div> */}

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

        {/* 5. Physical Infrastructure & Networking (Full Width Bento Card - Entire Card Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="col-span-1 md:col-span-3"
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
              <p className="text-xs sm:text-sm text-[#44474e] max-w-xl leading-relaxed">
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

            <div className="w-full md:w-80 lg:w-96 h-52 md:h-auto md:self-stretch rounded-xl overflow-hidden border border-[#F1F5F9] shadow-xs relative shrink-0 group-hover:border-[#1CB08F]/40 transition-colors min-h-[170px]">
              <Image
                src="/Physical Infrastructure.png"
                alt="Physical Infrastructure & Networking"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
