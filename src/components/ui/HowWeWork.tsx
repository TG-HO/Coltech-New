"use client";

import { motion } from "framer-motion";
import { Search, Compass, Hammer, Headphones, ArrowRight, ShieldCheck } from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Search;
  deliverables: string[];
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discover & Audit",
    subtitle: "Ground-Level Needs Assessment",
    description:
      "We walk your physical sites, inspect dispenser registers, evaluate existing network lines, and identify manual points of friction and financial loss.",
    icon: Search,
    deliverables: [
      "Physical forecourt & IT infrastructure audit",
      "Identification of revenue leakage vectors",
      "Transparent feasibility & scope report",
    ],
  },
  {
    number: "02",
    title: "Design & Blueprint",
    subtitle: "Fail-Safe Architecture",
    description:
      "We engineer custom hardware schematics, resilient database structures, offline-first syncing protocols, and SLA definitions with zero vendor lock-in.",
    icon: Compass,
    deliverables: [
      "Hardware interfacing & network schematics",
      "Data schema & offline synchronization plan",
      "Fixed milestone budget & deployment timeline",
    ],
  },
  {
    number: "03",
    title: "Build & Deploy",
    subtitle: "Turnkey Implementation",
    description:
      "Our field engineers handle on-site cabling, microcontroller wiring, software deployment, and hands-on staff training with zero disruption to daily trade.",
    icon: Hammer,
    deliverables: [
      "Hardware installation & structured cabling",
      "Zero-downtime ledger & POS system cutover",
      "Staff onboarding & operating SOP handbooks",
    ],
  },
  {
    number: "04",
    title: "Support & Scale",
    subtitle: "Active SLA & 24/7 NOC",
    description:
      "Continuous system health monitoring, automated edge telemetry alerts, regular firmware upgrades, and guaranteed rapid on-ground response times.",
    icon: Headphones,
    deliverables: [
      "24/7 centralized NOC uptime monitoring",
      "Guaranteed on-site field engineer response",
      "Scheduled preventive maintenance & backups",
    ],
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-6 md:py-10 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F1F5F9] pb-5">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-[#44474e] mt-2 max-w-2xl leading-relaxed">
            A structured, 4-phase methodology ensuring smooth implementation, predictable milestones, and zero disruption to your daily operations.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#1CB08F] bg-[#1CB08F]/10 px-4 py-2 rounded-full self-start md:self-auto font-bold">
          <span>Discover</span>
          <ArrowRight className="w-3 h-3" />
          <span>Design</span>
          <ArrowRight className="w-3 h-3" />
          <span>Build</span>
          <ArrowRight className="w-3 h-3" />
          <span>Support</span>
        </div>
      </div>

      {/* 4 Steps Horizontal Progression */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F1F5F9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Step Number in background */}
              <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-[#001a39]/5 font-mono select-none pointer-events-none">
                {step.number}
              </span>

              <div className="space-y-4 relative z-10">
                {/* Step Pill & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#001a39] text-[#1CB08F] group-hover:bg-[#1CB08F] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#f7f9fb] border border-[#F1F5F9] text-[#001a39]">
                    Step {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#001a39] tracking-tight group-hover:text-[#1CB08F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1CB08F] mt-0.5">{step.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-[#F1F5F9] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block font-semibold">
                    Key Outcomes:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-xs text-[#001a39] flex items-start gap-1.5">
                      <span className="text-[#1CB08F] font-bold">•</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>Phase {step.number} of 04</span>
                <span className="text-[#1CB08F] font-bold">Low Risk</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
