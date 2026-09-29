"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Fuel,
  Code2,
  Cpu,
  Network,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Layers,
  ShieldCheck,
  Zap,
  Server,
  Terminal,
  Database,
  Radio,
  Eye,
  ChevronRight,
  RefreshCw,
  HardDrive,
  CpuIcon,
  Wifi,
  Lock,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  // Temporarily commented for restoration when interactive widgets are re-enabled:
  // const [activePump, setActivePump] = useState<1 | 2 | 3>(1);
  // const [selectedTechCategory, setSelectedTechCategory] = useState<"frontend" | "backend" | "devops">("frontend");

  /*
  const techStack = {
    frontend: [
      { name: "Next.js 16 (App Router)", type: "Framework" },
      { name: "React 19", type: "Library" },
      { name: "TypeScript", type: "Language" },
      { name: "Tailwind CSS v4", type: "Styling" },
      { name: "Framer Motion", type: "Animations" },
      { name: "Three.js / WebGL", type: "3D Telemetry" },
    ],
    backend: [
      { name: "Node.js Microservices", type: "Runtime" },
      { name: "PostgreSQL & Prisma", type: "Database" },
      { name: "Redis Cache Layer", type: "In-Memory" },
      { name: "MQTT Broker", type: "IoT Protocol" },
      { name: "GraphQL & REST APIs", type: "Data Gateway" },
      { name: "WebSockets", type: "Real-Time Telemetry" },
    ],
    devops: [
      { name: "Docker Containers", type: "Isolation" },
      { name: "Edge Gateways", type: "Hardware OS" },
      { name: "Cloudflare Zero Trust", type: "Security" },
      { name: "CI/CD Automated Pipelines", type: "Automation" },
      { name: "Prometheus & Grafana", type: "Observability" },
      { name: "VLAN Network Isolation", type: "Infrastructure" },
    ],
  };
  */

  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "Comprehensive on-site physical evaluation of forecourt dispensers, network topography, and operational software pain-points.",
      badge: "Week 01",
    },
    {
      num: "02",
      title: "Custom Architecture",
      desc: "Engineered schematics mapping hardware I/O loops, secure database schemas, ERP API contracts, and edge telemetry failovers.",
      badge: "Weeks 02-03",
    },
    {
      num: "03",
      title: "Edge Deployment",
      desc: "Physical installation of IoT controllers, structured cabling, edge servers, and end-to-end POS system synchronization.",
      badge: "Weeks 04-05",
    },
    {
      num: "04",
      title: "Active Telemetry & SLA",
      desc: "24/7 continuous health monitoring, automated predictive maintenance algorithms, firmware OTA updates, and tier-1 engineer support.",
      badge: "Continuous",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f7f9fb] text-[#001a39] flex flex-col selection:bg-[#1CB08F] selection:text-white">
      {/* ------------------------------------------------------------------------ */}
      {/* 1. SUB-HERO BANNER */}
      {/* ------------------------------------------------------------------------ */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#1CB08F]/10 via-[#152F52]/5 to-[#1CB08F]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-start max-w-4xl">
          {/* Breadcrumb Navigation */}
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
            <span className="text-[#001a39] font-bold">Services & Solutions</span>
          </motion.nav>

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              B E Y O N D &nbsp; T H E &nbsp; D I G I T A L
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            End-to-End Enterprise Automation &{" "}
            <span className="text-[#1CB08F] relative inline-block">
              IT Infrastructure
              <svg
                className="absolute w-full h-3 -bottom-1.5 left-0 text-[#1CB08F]/25 pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheader */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#44474e] font-medium leading-relaxed max-w-3xl mb-10"
          >
            Architecting bespoke software, edge telemetry, and high-performance physical networking for modern operations.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(28,176,143,0.39)] hover:shadow-[0_6px_20px_rgba(28,176,143,0.3)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              Consult an Engineer
              <ArrowRight className="w-4 h-4" />
            </button>
            {/* <Link
              href="/#trust-bar"
              className="bg-white text-[#001a39] border border-[#152F52]/20 hover:border-[#1CB08F] hover:text-[#1CB08F] font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center justify-center shadow-xs active:scale-95 text-center"
            >
              View Case Studies
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* 2. CORE CAPABILITY DEEP DIVES (ALTERNATING 2-COLUMN SECTIONS) */}
      {/* ------------------------------------------------------------------------ */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col gap-24 md:gap-32">

        {/* ==================================================================== */}
        {/* DEEP DIVE 1: Smart Pump & Forecourt Automation */}
        {/* ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
              <Fuel className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                01 • Industrial Edge Telemetry
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001a39] tracking-tight">
                Smart Pump & Forecourt Automation
              </h2>
            </div>
            <p className="text-base text-[#44474e] leading-relaxed">
              Industrial forecourt operations demand millisecond synchronization between pump nozzles, electronic registers, automated density sensors, and enterprise accounting ledgers. COLTECH eliminates leakage, fuel variance, and manual logbook delays.
            </p>
            <ul className="space-y-3 text-sm text-[#001a39] font-medium">
              {[
                "Direct electronic register coupling with high-accuracy pulse meters",
                "Automated wetstock reconciliation & underground tank leak alerts",
                "Real-time integration with centralized retail POS and Taj Gasoline ledger loops",
                "Self-healing edge communication protocol operating seamlessly during internet outages",
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/automation"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1CB08F] hover:text-[#159376] group"
              >
                Explore Forecourt Architectures
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual: Smart Pump Automation (Replaced with Fuel Station image, original dashboard preserved below) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 w-full"
          >
            {/* Forecourt Image */}
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden border border-[#F1F5F9] shadow-xl group">
              <Image
                src="/Fuel Station.jpg"
                alt="Smart Pump & Forecourt Automation"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/70 via-transparent to-transparent pointer-events-none" />
              {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="flex items-center gap-1.5 bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse" />
                  Forecourt Edge Telemetry
                </span>
                <span className="bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-[#1CB08F]">
                  Live Operations
                </span>
              </div> */}
            </div>

            {/* PREVIOUS DASHBOARD WIDGET (Preserved for restoration):
            <div className="bento-card bg-[#001a39] text-white p-6 sm:p-7 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#1CB08F]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#1CB08F] animate-ping" />
                  <div>
                    <div className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                      FORECOURT TELEMETRY HUB
                    </div>
                    <div className="text-[11px] text-white/50 font-mono">NODE #TJ-4092 • TAJ GASOLINE</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-lg">
                  {([1, 2, 3] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setActivePump(p)}
                      className={`px-2.5 py-1 text-xs font-mono rounded cursor-pointer transition-all ${
                        activePump === p
                          ? "bg-[#1CB08F] text-white font-bold shadow-xs"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      PUMP 0{p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col">
                  <span className="text-[10px] font-mono text-white/50 uppercase">FLOW RATE</span>
                  <span className="text-xl font-bold font-mono text-[#1CB08F] mt-1">
                    {activePump === 1 ? "98.4" : activePump === 2 ? "104.2" : "0.0"} <span className="text-xs text-white/70">L/m</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1">Status: Normal</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col">
                  <span className="text-[10px] font-mono text-white/50 uppercase">CURRENT SALE</span>
                  <span className="text-xl font-bold font-mono text-white mt-1">
                    {activePump === 1 ? "42.8" : activePump === 2 ? "118.0" : "0.0"} <span className="text-xs text-white/70">L</span>
                  </span>
                  <span className="text-[10px] text-white/40 font-mono mt-1">Auto-logged</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col">
                  <span className="text-[10px] font-mono text-white/50 uppercase">PRESSURE</span>
                  <span className="text-xl font-bold font-mono text-white mt-1">
                    {activePump === 3 ? "0.0" : "3.4"} <span className="text-xs text-white/70">BAR</span>
                  </span>
                  <span className="text-[10px] text-[#1CB08F] font-mono mt-1">Calibrated</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-5 relative z-10 space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs text-white/60 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-white">
                    <Activity className="w-3.5 h-3.5 text-[#1CB08F]" />
                    FORECOURT NOZZLE & ATG STATUS
                  </span>
                  <span className="text-[#1CB08F] font-bold">RS-485 • TAJ-KHI-04</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-black/30 p-2.5 rounded-lg border border-white/5">
                    <div className="flex justify-between text-[10px] text-white/50">
                      <span>PUMP 01</span>
                      <span className="text-[#1CB08F]">SUPER 92</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">41.5 L/min</div>
                    <span className="text-[10px] text-emerald-400">PKR 14,905 Synced</span>
                  </div>

                  <div className="bg-black/30 p-2.5 rounded-lg border border-white/5">
                    <div className="flex justify-between text-[10px] text-white/50">
                      <span>ATG TANK 01</span>
                      <span className="text-cyan-400">84.6% FILL</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">42,300 L</div>
                    <span className="text-[10px] text-cyan-300">Water Ingress: 2.1mm</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-[11px] text-emerald-400 w-full justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Underground Leak Sentry: Nominal
                  </span>
                  <span className="text-white/40">24.2°C Density Ok</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-2 border-t border-white/10 relative z-10">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1CB08F]" />
                  <span>Hardware Encryption: 256-bit AES</span>
                </span>
                <span>Latency: 14ms</span>
              </div>
            </div>
            */}
          </motion.div>
        </section>

        {/* ==================================================================== */}
        {/* DEEP DIVE 2: Custom Software & ERP Architecture (Reverse Layout) */}
        {/* ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Custom ERP & Logistics Platform (Replaced interactive matrix with col-tms-hero image, original preserved below) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1 w-full"
          >
            {/* Custom ERP & Transport Management Hero Image */}
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden border border-[#F1F5F9] shadow-xl group bg-[#001a39]">
              <Image
                src="/projects-images/col-tms-hero.png"
                alt="Custom Enterprise Software & Logistics ERP"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/60 via-transparent to-transparent pointer-events-none" />
              {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="flex items-center gap-1.5 bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse" />
                  Enterprise ERP Architecture
                </span>
                <span className="bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-[#1CB08F]">
                  COL TMS & POS Core
                </span>
              </div> */}
            </div>

            {/* PREVIOUS INTERACTIVE SOFTWARE CARD (Preserved for restoration):
            <div className="bento-card bg-white p-6 sm:p-8 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#001a39]">Engineered Software Stack</h3>
                    <p className="text-xs text-[#44474e]">Scalable, production-ready enterprise primitives</p>
                  </div>
                </div>
                <div className="flex gap-1 bg-[#F1F5F9] p-1 rounded-lg text-xs font-semibold">
                  {(["frontend", "backend", "devops"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedTechCategory(cat)}
                      className={`px-3 py-1 rounded-md capitalize cursor-pointer transition-all ${
                        selectedTechCategory === cat
                          ? "bg-[#001a39] text-white shadow-xs"
                          : "text-[#44474e] hover:text-[#001a39]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techStack[selectedTechCategory].map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3.5 rounded-xl bg-[#f7f9fb] border border-[#F1F5F9] hover:border-[#1CB08F]/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#44474e] uppercase">{tech.type}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
                  </motion.div>
                ))}
              </div>

              <div className="bg-[#001a39] text-white p-4 rounded-xl font-mono text-xs border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-white/40 pb-2 border-b border-white/10 text-[11px]">
                  <span className="flex items-center gap-1.5 text-white">
                    <Zap className="w-3.5 h-3.5 text-[#1CB08F]" />
                    EVENT INGESTION PIPELINE
                  </span>
                  <span className="text-[#1CB08F]">12,500 req/s • P99: 14ms</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[#1CB08F] block text-[9px]">STAGE 01</span>
                    <strong className="text-white">Edge Ingestion</strong>
                    <span className="text-white/50 block text-[10px] mt-0.5">RS-485 & POS Registers</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[#1CB08F] block text-[9px]">STAGE 02</span>
                    <strong className="text-white">HMAC Validation</strong>
                    <span className="text-white/50 block text-[10px] mt-0.5">SHA-256 Tamper Proof</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[#1CB08F] block text-[9px]">STAGE 03</span>
                    <strong className="text-white">Message Broker</strong>
                    <span className="text-white/50 block text-[10px] mt-0.5">Offline-Resilient Queue</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-emerald-400 block text-[9px]">STAGE 04</span>
                    <strong className="text-white">ERP Ledger Sync</strong>
                    <span className="text-white/50 block text-[10px] mt-0.5">Sub-Second Atomic Settlement</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-white/50 pt-1 border-t border-white/10">
                  <span className="text-emerald-400">Data Integrity: 100% Guaranteed</span>
                  <span>Zero-Loss SLA</span>
                </div>
              </div>
            </div>
            */}
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                02 • Application Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001a39] tracking-tight">
                Custom Software & ERP Architecture
              </h2>
            </div>
            <p className="text-base text-[#44474e] leading-relaxed">
              We design custom enterprise web applications, point-of-sale systems, and high-concurrency microservices specifically tailored to corporate business models where generic off-the-shelf software falls short.
            </p>
            <ul className="space-y-3 text-sm text-[#001a39] font-medium">
              {[
                "Multi-location retail point-of-sale (POS) systems with offline-first caching",
                "Full-stack Next.js dashboards with granular Role-Based Access Control (RBAC)",
                "Automated invoicing, tax clearance, and multi-tier auditing modules",
                "High-throughput transactional database architectures supporting 100k+ daily events",
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/software"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1CB08F] hover:text-[#159376] group"
              >
                View Software Capabilities
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ==================================================================== */}
        {/* DEEP DIVE 3: AI & Computer Vision (TEMPORARILY COMMENTED - Preserved for restoration) */}
        {/* ==================================================================== */}
        {/*
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                03 • Edge Intelligence & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001a39] tracking-tight">
                AI & Computer Vision Systems
              </h2>
            </div>
            <p className="text-base text-[#44474e] leading-relaxed">
              Transforming standard camera streams into actionable intelligence. COLTECH deploys edge AI inference models that track vehicle license plates, detect forecourt security anomalies, analyze queue wait times, and verify compliance in real time.
            </p>
            <ul className="space-y-3 text-sm text-[#001a39] font-medium">
              {[
                "Automatic Number Plate Recognition (ANPR) synchronized with fueling records",
                "Automated fire, hazard, and perimeter breach detection alerts",
                "Queue density profiling and customer dwell-time operational analytics",
                "On-premise edge neural processing with zero external cloud bandwidth dependency",
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1CB08F] hover:text-[#159376] group cursor-pointer"
              >
                Schedule an AI Vision Demo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 w-full"
          >
            <div className="bento-card bg-[#001a39] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#1CB08F] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                    AI VISION INFERENCE ENGINE
                  </span>
                </div>
                <span className="bg-[#1CB08F]/20 text-[#1CB08F] text-[11px] font-mono px-2.5 py-0.5 rounded border border-[#1CB08F]/30">
                  FPS: 60 • LATENCY: 8ms
                </span>
              </div>

              <div className="relative w-full aspect-video bg-[#0f172a] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="absolute top-6 left-8 w-44 h-28 border-2 border-[#1CB08F] rounded-md bg-[#1CB08F]/10 flex flex-col justify-between p-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#1CB08F] text-[#001a39] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                      VEHICLE #01
                    </span>
                    <span className="text-[10px] font-mono text-[#1CB08F]">99.4%</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/80">ANPR: ABC-9482</span>
                </div>

                <div className="absolute bottom-6 right-8 w-48 h-24 border border-amber-400/80 rounded-md bg-amber-400/10 flex flex-col justify-between p-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-400 text-[#001a39] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                      NOZZLE SENSOR
                    </span>
                    <span className="text-[10px] font-mono text-amber-400">98.1%</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/80">DISPENSING #02</span>
                </div>

                <div className="w-16 h-16 border border-dashed border-[#1CB08F]/40 rounded-full flex items-center justify-center pointer-events-none animate-spin [animation-duration:16s]">
                  <div className="w-2 h-2 rounded-full bg-[#1CB08F]" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div>
                  <span className="text-white/40 block text-[10px]">OBJECT DETECTIONS</span>
                  <span className="text-white font-bold text-sm">14 Tracked</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px]">NEURAL MODEL</span>
                  <span className="text-[#1CB08F] font-bold text-sm">YOLOv11-Edge</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px]">SAFETY AUDIT</span>
                  <span className="text-emerald-400 font-bold text-sm">100% SECURE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        */}

        {/* ==================================================================== */}
        {/* DEEP DIVE 4: Physical Infrastructure & High-Density Networking (Reverse) */}
        {/* ==================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Physical Infrastructure & Networking (Replaced dashboard look with Physical Infrastructure image, original preserved below) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1 w-full"
          >
            {/* Physical Infrastructure Image */}
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden border border-[#F1F5F9] shadow-xl group">
              <Image
                src="/Physical Infrastructure.png"
                alt="Physical Infrastructure & High-Density Networking"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/70 via-transparent to-transparent pointer-events-none" />
              {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="flex items-center gap-1.5 bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse" />
                  Turnkey Server Infrastructure
                </span>
                <span className="bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-[#1CB08F]">
                  OTDR & Cat6A Certified
                </span>
              </div> */}
            </div>

            {/* PREVIOUS DASHBOARD LOOK (Preserved for restoration):
            <div className="bento-card bg-white p-6 sm:p-8 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F]">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#001a39]">High-Density Server Environment</h3>
                    <p className="text-xs text-[#44474e]">Zero-downtime physical & logical topography</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  99.99% UPTIME
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#001a39] text-white flex flex-col justify-between font-mono">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                    <span className="text-[#1CB08F] font-bold">LAYER 01 • DUAL-WAN</span>
                    <span className="text-emerald-400">FAILOVER: &lt;180ms</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                      <span className="text-white/80">Primary Fiber</span>
                      <span className="text-[#1CB08F] font-bold">1.0 Gbps • 4ms</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                      <span className="text-white/80">LTE/5G Hot-Spare</span>
                      <span className="text-amber-400 font-bold">Standby BGP</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#F1F5F9] flex flex-col justify-between font-mono">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-[#001a39]">ENVIRONMENTAL TELEMETRY</span>
                      <span className="text-[#1CB08F] text-[10px]">CRAC DUAL N+1</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#44474e]">
                        <span>Rack Temp:</span>
                        <strong className="text-[#001a39]">21.4°C (Climate-Controlled)</strong>
                      </div>
                      <div className="flex justify-between text-[#44474e]">
                        <span>UPS Battery:</span>
                        <strong className="text-emerald-600">4.2 hrs remaining</strong>
                      </div>
                      <div className="flex justify-between text-[#44474e]">
                        <span>OTDR Attenuation:</span>
                        <strong className="text-emerald-600">Verified (0.18 dB/km)</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F1F5F9] text-xs font-mono text-[#001a39]">
                <span className="px-3 py-1.5 bg-[#f7f9fb] border border-[#F1F5F9] rounded-lg">Cat6A 10Gbps Structured Cabling</span>
                <span className="px-3 py-1.5 bg-[#f7f9fb] border border-[#F1F5F9] rounded-lg">Firewall Segmentation</span>
                <span className="px-3 py-1.5 bg-[#f7f9fb] border border-[#F1F5F9] rounded-lg">CCTV NVR RAID Storage</span>
              </div>
            </div>
            */}
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                04 • Physical Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001a39] tracking-tight">
                Physical Infrastructure & High-Density Networking
              </h2>
            </div>
            <p className="text-base text-[#44474e] leading-relaxed">
              Software reliability is only as robust as the underlying copper, fiber, server chassis, and power redundancy. COLTECH engineers turnkey server rooms, managed switch topologies, and enterprise surveillance networks.
            </p>
            <ul className="space-y-3 text-sm text-[#001a39] font-medium">
              {[
                "Certified Cat6A / Fiber Optic structured cabling installations with OTDR verification",
                "Server rack assembly, climate-controlled airflow design, and clean UPS backup banks",
                "Managed Layer-3 switching with VLAN network isolation for POS, Guest, and Surveillance",
                "Multi-WAN SD-WAN gateway setup ensuring automatic failover to LTE in under 200ms",
              ].map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1CB08F] hover:text-[#159376] group"
              >
                Explore Infrastructure Engineering
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>

      {/* ------------------------------------------------------------------------ */}
      {/* 3. TECHNICAL METHODOLOGY / 4-STEP CONNECTED TIMELINE */}
      {/* ------------------------------------------------------------------------ */}
      <section className="w-full bg-white py-20 md:py-28 border-y border-[#F1F5F9] my-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
              EXECUTION BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
              Our 4-Step Technical Methodology
            </h2>
            <p className="text-base sm:text-lg text-[#44474e]">
              A disciplined, engineering-first delivery framework designed for zero-downtime integration and verifiable operational performance.
            </p>
          </div>

          {/* Connected 4-Column Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bento-card bg-[#f7f9fb] p-7 rounded-2xl border border-[#F1F5F9] flex flex-col justify-between relative group hover:border-[#1CB08F] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-[#1CB08F]/80 group-hover:text-[#1CB08F] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#001a39] bg-white px-3 py-1 rounded-full border border-[#F1F5F9]">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#001a39] mb-3 group-hover:text-[#1CB08F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#1CB08F]">
                  <span>Stage Verified</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* 4. GLOBAL CTA & CONTACT BANNER */}
      {/* ------------------------------------------------------------------------ */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 mb-8">
        <div className="relative bg-[#001a39] text-white rounded-3xl p-8 sm:p-14 md:p-20 overflow-hidden shadow-2xl border border-white/10">
          {/* Ambient Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1CB08F]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#152F52]/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1CB08F] block">
                READY FOR ENTERPRISE INTEGRATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Architect Your Infrastructure With COLTECH Engineers.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Consult with our senior technical leads to audit your forecourts, plan custom POS software, or deploy high-density server networks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] hover:shadow-[0_6px_25px_rgba(28,176,143,0.5)] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                Initiate Deployment
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/about"
                className="bg-transparent border border-white/30 text-white hover:border-[#1CB08F] hover:text-[#1CB08F] font-bold text-sm px-8 py-4 rounded-full transition-all text-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
