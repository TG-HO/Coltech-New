"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import ForecourtTelemetryWidget from "@/components/ui/ForecourtTelemetryWidget";

export default function AutomationPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const features = [
    {
      title: "Direct Electronic Register Coupling",
      desc: "Hardware-level interfacing with Wayne, Gilbarco, Tokheim, and Tatsuno dispensers via isolated RS-485/current loop interfaces. Zero-delay capture of exact volume, transaction total, nozzle ID, and unit pricing.",
      icon: Cpu,
    },
    {
      title: "Automated Tank Gauging (ATG) & Wetstock Reconciliation",
      desc: "Continuous underground tank volume tracking via precision magnetostrictive probes with real-time density detection, water ingress warnings, and automated leak detection alerts.",
      icon: Gauge,
    },
    {
      title: "Offline-Resilient Forecourt Edge Gateways",
      desc: "Local on-site computing gateways that store all dispensing records during internet disruptions, executing automatic background reconciliation with the centralized ERP immediately upon network restoration.",
      icon: HardDrive,
    },
    {
      title: "Automated Ledger & POS Synchronization",
      desc: "Instant conversion of dispenser pulses into audited sales ledger entries. Eliminates cash discrepancies, prevents unauthorized fuel dispensing, and ensures complete tax compliance.",
      icon: Database,
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
              01 • INDUSTRIAL EDGE TELEMETRY
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
              Forecourt Automation Systems
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
            Eliminate fuel variance, manual register lags, and unauthorized transactions. COLTECH delivers hardware-level coupling with major fuel dispenser registers, automated ATG wetstock reconciliation, and continuous offline-first ledger synchronization.
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
              Consult Forecourt Specialist
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Dual-Pane Forecourt Telemetry & Wetstock Control Center */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 mb-12">
        {/* Forecourt Telemetry & ATG Control Interface Screenshot */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden border border-[#F1F5F9] shadow-2xl bg-[#001a39] group">
          <Image
            src="/Pump Automation.jpeg"
            alt="Forecourt Pump Automation & ATG Live Measurement Interface"
            fill
            className="object-contain p-2 md:p-4 group-hover:scale-[1.01] transition-transform duration-500"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
            <div className="bg-[#001a39]/85 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl border border-white/10 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#79f9d4] font-bold block">
                LIVE RS-485 TELEMETRY & ATG PROBE INTERFACE
              </span>
              <p className="text-xs text-white/70 hidden sm:block">
                Multi-pump electronic register coupling and automated underground tank wetstock telemetry.
              </p>
            </div>
            <span className="bg-[#001a39]/80 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono text-[#1CB08F]">
              Live Production
            </span>
          </div>
        </div>

        {/* PREVIOUS INTERACTIVE TELEMETRY WIDGET (Preserved for restoration):
        <ForecourtTelemetryWidget />
        */}
      </section>

      {/* Enterprise Case Study Callout */}
      {/* <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 mb-12">
        <div className="bg-white border border-[#F1F5F9] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1CB08F]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
              ENTERPRISE CASE STUDY
            </span>
            <h3 className="text-2xl font-bold text-[#001a39] tracking-tight">
              Proven at Scale: Taj Gasoline Forecourt Network
            </h3>
            <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
              Deployed across multi-location forecourts, standardizing edge-to-ledger telemetry, eliminating manual variance, and synchronizing thousands of daily fuel transactions.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <div className="bg-[#f7f9fb] border border-[#F1F5F9] p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold font-mono text-[#001a39] block">0.00%</span>
              <span className="text-[11px] font-mono text-[#44474e]">Variance SLA</span>
            </div>
            <div className="bg-[#1CB08F]/10 border border-[#1CB08F]/20 p-4 rounded-2xl text-center">
              <span className="text-2xl font-bold font-mono text-[#1CB08F] block">24/7</span>
              <span className="text-[11px] font-mono text-[#001a39]">Live Reconciliation</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Feature Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            CORE CAPABILITIES
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
