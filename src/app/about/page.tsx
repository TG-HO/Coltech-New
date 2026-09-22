"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Compass,
  Zap,
  Activity,
  Server,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Layers,
  Fuel,
  Users,
  Award,
  Globe,
  Lock,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";
import ArchitectureInfographic from "@/components/ui/ArchitectureInfographic";

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const stats = [
    { value: "99.9%", label: "Uptime SLA", sub: "Enterprise Guarantee" },
    { value: "50,000+", label: "Active Edge Data Points", sub: "Live Telemetry Monitored" },
    { value: "Zero-Downtime", label: "Migration SLA", sub: "Seamless Forecourt Transitions" },
    { value: "24/7/365", label: "Enterprise Support", sub: "Dedicated Field & Tier-1 NOC" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f7f9fb] text-[#001a39] flex flex-col selection:bg-[#1CB08F] selection:text-white">
      {/* ------------------------------------------------------------------------ */}
      {/* 1. PAGE HEADER */}
      {/* ------------------------------------------------------------------------ */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-gradient-to-r from-[#1CB08F]/10 via-[#152F52]/5 to-[#1CB08F]/10 blur-3xl pointer-events-none rounded-full" />

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
            <span className="text-[#001a39] font-bold">About Us</span>
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
              ESTABLISHED 2024
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Bridging Physical Hardware with <br />
            <span className="text-[#1CB08F] relative inline-block">
              Intelligent Enterprise Software
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
            className="text-lg md:text-xl text-[#44474e] font-medium leading-relaxed max-w-3xl mb-8"
          >
            Founded in 2024 in Karachi, Circle of Life Technologies (COLTECH) was established to solve a critical operational vulnerability: the disconnect between physical mechanical assets and corporate enterprise systems. From our flagship deployment with Taj Gasoline to multi-industry implementations across retail, manufacturing, and commercial real estate, we build technology that functions with total reliability.
          </motion.p>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* 2. MISSION & VISION BENTO-GRID */}
      {/* ------------------------------------------------------------------------ */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card bg-white p-8 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#1CB08F]/10 rounded-full blur-2xl group-hover:bg-[#1CB08F]/20 transition-all duration-500 pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
                PURPOSE
              </span>
              <h3 className="text-2xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
                Bridging physical infrastructure with intelligent digital automation. We eliminate the friction between mechanical hardware and high-level enterprise software.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#001a39]">
              <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
              <span>Zero-Loss Telemetry Protocols</span>
            </div>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card bg-white p-8 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#152F52]/10 rounded-full blur-2xl group-hover:bg-[#1CB08F]/15 transition-all duration-500 pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#001a39] text-white flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#1CB08F]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
                HORIZON
              </span>
              <h3 className="text-2xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
                Setting the standard for industrial IoT and end-to-end IT reliability across emerging markets, creating unified digital nervous systems for modern enterprises.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#001a39]">
              <Globe className="w-4 h-4 text-[#1CB08F]" />
              <span>National & Regional Scale</span>
            </div>
          </motion.div>

          {/* Card 3: Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card bg-white p-8 rounded-2xl border border-[#F1F5F9] shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#1CB08F]/10 rounded-full blur-2xl group-hover:bg-[#1CB08F]/20 transition-all duration-500 pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
                FOUNDATIONS
              </span>
              <h3 className="text-2xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                Core Values
              </h3>
              <div className="space-y-2 pt-1 text-sm text-[#44474e]">
                <div className="flex items-center gap-2 font-semibold text-[#001a39]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CB08F]" />
                  <span>Engineering Precision</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#001a39]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CB08F]" />
                  <span>99.99% Reliability Guarantee</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#001a39]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CB08F]" />
                  <span>Scalable, Modular Architectures</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#001a39]">
              <Lock className="w-4 h-4 text-[#1CB08F]" />
              <span>Zero Black-Box Dependencies</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* 3. IMPACT & ENTERPRISE SCALE METRICS */}
      {/* ------------------------------------------------------------------------ */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-16">
        <div className="bg-[#001a39] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#1CB08F]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2 relative z-10">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1CB08F] uppercase">
              OPERATIONAL BENCHMARKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Enterprise Scale By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center group hover:border-[#1CB08F]/40 transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#1CB08F] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                  {item.value}
                </span>
                <span className="text-sm font-bold text-white mb-1">
                  {item.label}
                </span>
                <span className="text-xs font-mono text-white/50">
                  {item.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* 4. OPERATIONAL HERITAGE & ARCHITECTURE INFOGRAPHIC */}
      {/* ------------------------------------------------------------------------ */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            OUR HERITAGE & TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Architecting Mission-Critical Systems for Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-[#44474e] leading-relaxed">
            Founded in 2024, Circle of Life Technologies (COLTECH) originated to address a critical industry vulnerability: the fragmentation between industrial forecourt machinery, server rooms, and software platforms.
          </p>
        </div>

        {/* The COLTECH Closed-Loop Industrial Architecture Component */}
        <ArchitectureInfographic />
      </section>

      {/* ------------------------------------------------------------------------ */}
      {/* 5. GLOBAL CTA BANNER */}
      {/* ------------------------------------------------------------------------ */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-8">
        <div className="relative bg-[#001a39] text-white rounded-3xl p-8 sm:p-14 md:p-18 overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1CB08F]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#152F52]/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1CB08F] block">
                COLLABORATE & GROW
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Join Our Journey or Partner With Us.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Connect with our team to discover how our engineering principles can elevate your organization’s operational resilience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] hover:shadow-[0_6px_25px_rgba(28,176,143,0.5)] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/services"
                className="bg-transparent border border-white/30 text-white hover:border-[#1CB08F] hover:text-[#1CB08F] font-bold text-sm px-8 py-4 rounded-full transition-all text-center"
              >
                Explore All Services
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
