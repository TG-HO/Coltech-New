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
  Video,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";
import NocTopologyWidget from "@/components/ui/NocTopologyWidget";
import Image from "next/image";

export default function InfrastructurePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pillars = [
    {
      title: "High-Density Server Environments & Power Redundancy",
      desc: "Complete server rack builds, airflow management, and industrial UPS backup arrays for mission-critical continuity. Active rack-level thermal and environmental telemetry sensors.",
      icon: Server,
    },
    {
      title: "Certified Structured Cabling & Fiber Optic Backbones",
      desc: "Cat6A 10Gbps structured copper cabling and multi-mode fiber runs with comprehensive OTDR attenuation testing. Professional patch panel layout, color-coded cable hierarchy, and permanent port labeling.",
      icon: Network,
    },
    {
      title: "Zero-Trust Segmentation & Layer-3 Network Security",
      desc: "Advanced network switching isolating POS transaction data, enterprise back-office management, guest access, and security streams. Multi-WAN SD-WAN gateways with automated carrier failover under 200ms.",
      icon: ShieldCheck,
    },
    {
      title: "AI-Enabled CCTV & Optical Security Arrays",
      desc: "Turnkey surveillance deployments with local RAID 10 NVR storage arrays. Edge AI computer vision integration: automated license plate recognition (ANPR), perimeter breach alerts, and forecourt safety zone monitoring.",
      icon: Video,
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
              04 • PHYSICAL INFRASTRUCTURE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Turnkey Infrastructure & <br />
            <span className="text-[#1CB08F] relative inline-block">
              High-Density Networking
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
            Software reliability depends on the underlying physical cabling, thermal management, and power redundancy. COLTECH designs certified Cat6A/fiber optic backbones, climate-controlled server rooms, and zero-trust switching fabrics.
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

      {/* Enterprise Physical Infrastructure Showcase Collage */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 mb-12">
        <div className="space-y-6">
          {/* Collage Header / Context */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1 rounded-full border border-[#F1F5F9] shadow-2xs mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse"></span>
                <span className="text-[11px] font-bold font-mono tracking-wider text-[#44474e] uppercase">
                  ENTERPRISE SITE DEPLOYMENTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001a39] tracking-tight">
                Industrial Server Enclosures, Structured Cabling & Optical Networks
              </h2>
              <p className="text-xs sm:text-sm text-[#44474e] mt-1 max-w-2xl">
                Real-world turnkey infrastructure engineered and commissioned by COLTECH — ensuring 99.999% uptime for enterprise data centers, retail forecourts, and corporate headquarters.
              </p>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-xs sm:text-sm font-bold text-[#152F52] hover:text-[#1CB08F] flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0 cursor-pointer"
            >
              Request Site Assessment <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bento Collage Grid: 3 Images */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Primary Hero Showcase - 8 Cols */}
            <div className="lg:col-span-8 bg-[#001a39] rounded-3xl overflow-hidden border border-[#F1F5F9] shadow-2xl relative group flex flex-col justify-between min-h-[360px] sm:min-h-[460px]">
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px]">
                <Image
                  src="/Infra-1.jpg"
                  alt="High-Density Enterprise Server Enclosure & Rack Cable Management"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39] via-[#001a39]/20 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Info Bar */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-[#001a39] to-[#001a39]/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1CB08F]/20 text-[#79f9d4] text-[10px] font-mono font-bold uppercase tracking-wider">
                      HIGH-DENSITY DATA CENTERS
                    </span>
                    <span className="text-white/60 text-xs font-mono">• Turnkey Rack Builds</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Server Enclosures & Precision Cable Management
                  </h3>
                  <p className="text-xs text-white/70 max-w-xl">
                    High-density server racks featuring airflow containment, redundant power delivery, and permanent port labeling for enterprise operational continuity.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#79f9d4] bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-ping" />
                  <span>Tier-3 Standard</span>
                </div>
              </div>
            </div>

            {/* Stacked Right Column - 4 Cols (Infra-2 and Infra-3) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Card 2: Infra-2.jpg */}
              <div className="bg-[#001a39] rounded-3xl overflow-hidden border border-[#F1F5F9] shadow-lg relative group flex-1 flex flex-col justify-between">
                <div className="relative w-full h-[180px] sm:h-[200px]">
                  <Image
                    src="/Infra-2.jpg"
                    alt="Certified Structured Cabling & High-Speed Patch Panels"
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a39] via-[#001a39]/25 to-transparent pointer-events-none" />
                </div>
                <div className="p-5 bg-[#001a39] border-t border-white/10 space-y-1 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#79f9d4] uppercase tracking-wider">
                      STRUCTURED COPPER & FIBER
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">10Gbps Certified</span>
                  </div>
                  <h4 className="text-sm font-bold text-white truncate">
                    Patch Array & Backbone Termination
                  </h4>
                  <p className="text-[11px] text-white/70 line-clamp-2">
                    Professional Cat6A copper termination and high-throughput optical patch panels tested for zero packet attenuation.
                  </p>
                </div>
              </div>

              {/* Card 3: Infra-3.jpg */}
              <div className="bg-[#001a39] rounded-3xl overflow-hidden border border-[#F1F5F9] shadow-lg relative group flex-1 flex flex-col justify-between">
                <div className="relative w-full h-[180px] sm:h-[200px]">
                  <Image
                    src="/Infra-3.jpg"
                    alt="Zero-Trust Switching Fabrics & Carrier Failover Routing"
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a39] via-[#001a39]/25 to-transparent pointer-events-none" />
                </div>
                <div className="p-5 bg-[#001a39] border-t border-white/10 space-y-1 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#79f9d4] uppercase tracking-wider">
                      NETWORK FABRIC & ROUTING
                    </span>
                    <span className="text-[10px] text-white/50 font-mono">SD-WAN Multi-WAN</span>
                  </div>
                  <h4 className="text-sm font-bold text-white truncate">
                    Mission-Critical Routing Hardware
                  </h4>
                  <p className="text-[11px] text-white/70 line-clamp-2">
                    Enterprise Layer-3 switching fabrics, segmented VLAN topologies, and automatic sub-200ms failover routing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREVIOUS INTERACTIVE NOC TOPOLOGY WIDGET (Preserved for restoration):
        <NocTopologyWidget />
        */}
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
