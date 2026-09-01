"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fuel,
  Activity,
  ShieldCheck,
  Zap,
  RefreshCw,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Database,
  Radio,
  Gauge,
  Layers,
  ArrowUpRight,
  HardDrive,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

export default function AutomationPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activePump, setActivePump] = useState<1 | 2 | 3>(1);

  const features = [
    {
      title: "Direct Electronic Register Coupling",
      desc: "Hardware-level interfacing with major dispenser manufacturers (Wayne, Gilbarco, Tokheim, Tatsuno) via isolated RS-485/current loop bus.",
      icon: Cpu,
    },
    {
      title: "Live Underground Tank Density & Wetstock",
      desc: "Precision magnetostrictive probe telemetry delivering continuous volume, water ingress detection, and automated leak alerting.",
      icon: Gauge,
    },
    {
      title: "Automated Ledger & POS Synchronization",
      desc: "Zero manual intervention. Every dispensing transaction logs directly to centralized ERP ledgers with microsecond timestamps.",
      icon: Database,
    },
    {
      title: "Offline-Resilient Edge Storage",
      desc: "Local embedded gateways maintain a continuous transaction queue during internet cuts, automatically syncing upon network recovery.",
      icon: HardDrive,
    },
  ];

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
            <Link href="/services" className="hover:text-[#1CB08F] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1CB08F]" />
            <span className="text-[#001a39] font-bold">Smart Pump Automation</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              INDUSTRIAL EDGE TELEMETRY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Smart Pump & <br />
            <span className="text-[#1CB08F] relative inline-block">
              Forecourt Automation
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
            Hardware-to-software integration protocols designed specifically for fuel station pump control loops, retail POS synchronization, and automated wetstock reconciliation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(28,176,143,0.39)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Forecourt Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Telemetry Dashboard Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mb-16">
        <div className="bento-card bg-[#001a39] text-white p-7 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#1CB08F] animate-ping" />
              <div>
                <span className="text-xs font-mono font-bold text-white tracking-widest uppercase block">
                  LIVE OPERATIONAL NODE TELEMETRY
                </span>
                <span className="text-[11px] text-white/50 font-mono">TAJ GASOLINE CENTRAL HUB • NODE #4092</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl self-start sm:self-auto">
              {([1, 2, 3] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePump(p)}
                  className={`px-4 py-1.5 text-xs font-mono rounded-lg cursor-pointer transition-all ${
                    activePump === p
                      ? "bg-[#1CB08F] text-white font-bold shadow-xs"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  DISPENSER 0{p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">DISPENSER STATUS</span>
              <span className="text-2xl font-bold font-mono text-[#1CB08F] mt-2">
                {activePump === 3 ? "STANDBY" : "ACTIVE"}
              </span>
              <span className="text-[11px] text-emerald-400 font-mono mt-1">Voltage: 228V (Stable)</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">FLOW RATE</span>
              <span className="text-2xl font-bold font-mono text-white mt-2">
                {activePump === 1 ? "98.4" : activePump === 2 ? "104.2" : "0.0"} <span className="text-sm text-[#1CB08F]">L/min</span>
              </span>
              <span className="text-[11px] text-white/40 font-mono mt-1">Pulse Ratio: 1:100</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">CURRENT SALE</span>
              <span className="text-2xl font-bold font-mono text-white mt-2">
                {activePump === 1 ? "42.8" : activePump === 2 ? "118.0" : "0.0"} <span className="text-sm text-[#1CB08F]">L</span>
              </span>
              <span className="text-[11px] text-emerald-400 font-mono mt-1">Encrypted Ledger Synced</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">TANK DENSITY</span>
              <span className="text-2xl font-bold font-mono text-white mt-2">
                0.742 <span className="text-sm text-[#1CB08F]">kg/L</span>
              </span>
              <span className="text-[11px] text-[#1CB08F] font-mono mt-1">Tolerance: Normal</span>
            </div>
          </div>

          {/* Waveform Telemetry Chart */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-4">
              <span className="flex items-center gap-2 text-white">
                <Activity className="w-4 h-4 text-[#1CB08F]" />
                REAL-TIME PULSE OSCILLATION TELEMETRY
              </span>
              <span className="text-[#1CB08F] font-bold">2.4 GHz LoRa Mesh • Latency: 12ms</span>
            </div>
            <svg className="w-full h-24 text-[#1CB08F]" viewBox="0 0 500 80" fill="none">
              <path
                d={
                  activePump === 1
                    ? "M0 45 Q 60 15 125 45 T 250 35 T 375 55 T 500 40"
                    : activePump === 2
                    ? "M0 55 Q 75 10 150 50 T 300 25 T 450 45 T 500 30"
                    : "M0 65 L 500 65"
                }
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d={
                  activePump === 1
                    ? "M0 45 Q 60 15 125 45 T 250 35 T 375 55 T 500 40 L 500 80 L 0 80 Z"
                    : activePump === 2
                    ? "M0 55 Q 75 10 150 50 T 300 25 T 450 45 T 500 30 L 500 80 L 0 80 Z"
                    : "M0 65 L 500 65 L 500 80 L 0 80 Z"
                }
                fill="currentColor"
                fillOpacity="0.15"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Key Automation Capabilities
          </h2>
          <p className="text-base sm:text-lg text-[#44474e]">
            Robust edge integration engineered for fuel station pump control loops, retail POS synchronization, and automated wetstock management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bento-card bg-white p-8 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#1CB08F]">
                <span>Active Telemetry Protocol</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global CTA Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-8">
        <div className="relative bg-[#001a39] text-white rounded-3xl p-8 sm:p-14 md:p-18 overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1CB08F]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1CB08F] block">
                MODERNIZE FORECOURT OPERATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Upgrade Your Fuel Dispensing Operations.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Connect with our forecourt automation specialists to plan your hardware retrofit or new station deployment.
              </p>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0"
            >
              Initiate Forecourt Deployment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
