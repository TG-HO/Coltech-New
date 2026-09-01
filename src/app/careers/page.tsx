"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Users,
  Code2,
  Award,
  Sparkles,
  Inbox,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";

interface JobPosition {
  role: string;
  dept: string;
  type: string;
  location: string;
  desc: string;
}

export default function CareersPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const perks = [
    {
      title: "Deep Technical Craftsmanship",
      desc: "Minimal meetings and zero bureaucracy. Maximum uninterrupted time dedicated to architecture, hardware prototyping, and production code.",
      icon: Terminal,
    },
    {
      title: "Direct Hardware & IoT Access",
      desc: "Work directly with bare-metal server clusters, LoRa mesh controllers, optical computer vision pipelines, and forecourt machinery.",
      icon: Cpu,
    },
    {
      title: "Enterprise Impact",
      desc: "Your code and architectures directly manage mission-critical operations for national fuel networks and enterprise supply chains.",
      icon: Award,
    },
    {
      title: "Competitive Compensation & Growth",
      desc: "Top-tier compensation packages, health coverage, workstation hardware allowances, and direct mentorship from industry veteran engineers.",
      icon: Sparkles,
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* JOB POSITIONS PROVISION                                                   */
  /* Add or uncomment job objects below to immediately publish open positions.  */
  /* When this array is empty ([]), the page automatically displays the clean   */
  /* "No Current Openings" card with a general talent intake workflow.          */
  /* -------------------------------------------------------------------------- */
  const positions: JobPosition[] = [
    /*
    {
      role: "Senior Embedded IoT & Firmware Engineer",
      dept: "Hardware Automation",
      type: "Full-Time • On-Site / Hybrid",
      location: "Karachi / Regional",
      desc: "Lead the design of edge IoT gateway firmware, RS-485 serial communication with industrial dispensers, and secure MQTT sync engines.",
    },
    {
      role: "Lead Full-Stack Next.js / Node Architect",
      dept: "Software Engineering",
      type: "Full-Time • Remote / Hybrid",
      location: "Karachi / Remote",
      desc: "Architect high-concurrency enterprise ERP portals, POS transaction engines, and PostgreSQL/Prisma ACID database layers.",
    },
    {
      role: "Enterprise Systems & Network Infrastructure Engineer",
      dept: "Physical Infrastructure",
      type: "Full-Time • Field Engineering",
      location: "Regional Rollouts",
      desc: "Deploy structured Cat6A/Fiber optic backbones, configure Layer-3 VLAN network segmentation, and manage 42U datacenter server racks.",
    },
    */
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
            <span className="text-[#001a39] font-bold">Careers</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              JOIN THE ENGINEERING TEAM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Build Systems That <br />
            <span className="text-[#1CB08F] relative inline-block">
              Power Critical Industries
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
            We are an elite team of architects, developers, and hardware systems engineers building high-concurrency telemetry, automated ERPs, and secure physical infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Engineering Culture / Perks Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            OUR ETHOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Why Engineers Join COLTECH
          </h2>
          <p className="text-base sm:text-lg text-[#44474e]">
            We value high-agency problem solvers who take pride in robust architectures, verifiable uptime, and zero bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {perks.map((perk, idx) => (
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
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
                  {perk.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#1CB08F]">
                <span>Engineering Standard</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions / No Openings Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            OPPORTUNITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Current Open Roles
          </h2>
          <p className="text-base sm:text-lg text-[#44474e]">
            {positions.length > 0
              ? "Join our core technical team as we deploy systems nationwide."
              : "Review current team openings or submit a general application for upcoming positions."}
          </p>
        </div>

        {positions.length > 0 ? (
          <div className="space-y-4">
            {positions.map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bento-card bg-white p-7 sm:p-8 rounded-2xl border border-[#F1F5F9] shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#1CB08F] transition-all"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#1CB08F] bg-[#1CB08F]/10 px-2.5 py-0.5 rounded-full">
                      {pos.dept}
                    </span>
                    <span className="text-xs font-mono text-[#44474e]">
                      {pos.type} • {pos.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001a39]">
                    {pos.role}
                  </h3>
                  <p className="text-sm text-[#44474e] leading-relaxed">
                    {pos.desc}
                  </p>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#001a39] text-white hover:bg-[#1CB08F] text-sm font-bold px-7 py-3.5 rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shrink-0 self-start lg:self-auto"
                >
                  Apply for Role
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Elegant "No Current Openings" State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card bg-white border border-[#F1F5F9] p-10 sm:p-14 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center mb-6 shadow-xs">
              <Inbox className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1CB08F] mb-2">
              TALENT PIPELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#001a39] mb-4">
              No Open Roles at Present
            </h3>
            <p className="text-base text-[#44474e] leading-relaxed max-w-lg mb-8">
              We do not have active public vacancies at this moment. However, we are always eager to connect with exceptional systems architects, embedded IoT engineers, and full-stack developers for upcoming rollouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#1CB08F] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(28,176,143,0.39)] hover:bg-[#159376] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                Submit General Application
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/about"
                className="bg-[#f7f9fb] text-[#001a39] hover:bg-[#F1F5F9] font-bold text-sm px-7 py-3.5 rounded-full border border-[#F1F5F9] transition-all"
              >
                Explore About COLTECH
              </Link>
            </div>
          </motion.div>
        )}
      </section>

      {/* Global CTA Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-8">
        <div className="relative bg-[#001a39] text-white rounded-3xl p-8 sm:p-14 md:p-18 overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1CB08F]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1CB08F] block">
                GENERAL TALENT INQUIRY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Connect Directly With Engineering Leadership.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                If you specialize in high-concurrency systems, forecourt hardware protocols, or bare-metal server infrastructure, introduce yourself.
              </p>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0"
            >
              Submit Resume
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
