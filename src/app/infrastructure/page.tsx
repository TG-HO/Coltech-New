"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Server,
  Network,
  ShieldCheck,
  HardDrive,
  Cpu,
  Wifi,
  Lock,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Activity,
  Zap,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

export default function InfrastructurePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pillars = [
    {
      title: "High-Density Server Configuration",
      desc: "Turnkey bare-metal rack architecture, multi-blade cluster virtualization, climate-controlled airflow optimization, and industrial UPS power banks.",
      icon: Server,
    },
    {
      title: "Structured Cabling & Fiber Optics",
      desc: "Certified Cat6A 10Gbps Ethernet and multi-mode fiber optic backbone runs with OTDR attenuation validation and standardized patch field mapping.",
      icon: Network,
    },
    {
      title: "Zero-Trust & VLAN Segmentation",
      desc: "Granular Layer-3 firewall topology isolating retail POS terminals, guest access, CCTV cameras, and internal administrative backbones.",
      icon: Lock,
    },
    {
      title: "AI CCTV & Optical Security Networks",
      desc: "Enterprise NVR storage arrays configured in RAID 10 with on-premise neural inference streams for license plate tracking and perimeter breach alerts.",
      icon: ShieldCheck,
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
            <span className="text-[#001a39] font-bold">Physical Infrastructure</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              MISSION-CRITICAL SYSTEMS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Managed IT Systems & <br />
            <span className="text-[#1CB08F] relative inline-block">
              Security Architectures
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
            High-performance physical layer networking, structural server configuration, edge computing virtualization, and continuous network health assessments.
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
              Consult an Infrastructure Engineer
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Server Rack Telemetry Widget */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mb-16">
        <div className="bento-card bg-[#001a39] text-white p-7 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#1CB08F] animate-ping" />
              <div>
                <span className="text-xs font-mono font-bold text-white tracking-widest uppercase block">
                  PHYSICAL TOPOLOGY & RACK TELEMETRY
                </span>
                <span className="text-[11px] text-white/50 font-mono">PRIMARY DATACENTER ALPHA • 99.99% UPTIME</span>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-md border border-emerald-500/30 self-start sm:self-auto">
              ALL POWER BANKS OPERATIONAL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">RACK TEMPERATURE</span>
              <span className="text-3xl font-bold font-mono text-[#1CB08F] mt-2">
                38.2 <span className="text-base text-white/70">°C</span>
              </span>
              <span className="text-[11px] text-emerald-400 font-mono mt-1">Airflow: 420 CFM (Optimal)</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">SD-WAN LATENCY</span>
              <span className="text-3xl font-bold font-mono text-white mt-2">
                8 <span className="text-base text-[#1CB08F]">ms</span>
              </span>
              <span className="text-[11px] text-white/40 font-mono mt-1">Dual 1Gbps Fiber + LTE Standby</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <span className="text-xs font-mono text-white/50 uppercase">PACKET INTEGRITY</span>
              <span className="text-3xl font-bold font-mono text-white mt-2">
                0.00 <span className="text-base text-[#1CB08F]">% Loss</span>
              </span>
              <span className="text-[11px] text-emerald-400 font-mono mt-1">CRC Error Count: 0</span>
            </div>
          </div>

          {/* Blade Units Visualization */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <span className="text-xs font-mono text-white/70 uppercase block mb-4">
              CHASSIS ENCLOSURE #01 — 42U MANAGED BLADES
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "CORE_GATEWAY_01", load: "18%", status: "Active" },
                { name: "ERP_DB_CLUSTER", load: "42%", status: "Active" },
                { name: "AI_INFERENCE_NVR", load: "64%", status: "Active" },
                { name: "SDWAN_FAILOVER", load: "04%", status: "Standby" },
              ].map((blade, idx) => (
                <div key={idx} className="bg-black/30 border border-white/10 p-3.5 rounded-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className="text-white/60">{blade.name}</span>
                    <div className="w-2 h-2 rounded-full bg-[#1CB08F]" />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white/40">Load: {blade.load}</span>
                    <span className="text-[#1CB08F] font-bold">{blade.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Comprehensive Infrastructure Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#44474e]">
            From structured physical cabling to redundant cloud gateways, we design systems that never compromise on uptime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
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
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#1CB08F]">
                <span>Certified Standard</span>
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
                BUILD RESILIENT IT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Plan Your Enterprise Server Architecture.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Connect with our certified network and server architects to audit your existing environment or construct a new turnkey facility.
              </p>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0"
            >
              Deploy Infrastructure
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
