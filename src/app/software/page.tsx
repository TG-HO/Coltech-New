"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Terminal,
  Activity,
  Server,
  Lock,
} from "lucide-react";
import ContactModal from "@/components/ui/ContactModal";
import SoftwarePipeline from "@/components/ui/SoftwarePipeline";

export default function SoftwarePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"frontend" | "backend" | "cloud">("frontend");

  const techDetails = {
    frontend: [
      { name: "Next.js 16 (App Router)", detail: "Server Components & Turbo Engine" },
      { name: "React 19 & TypeScript", detail: "End-to-End Type Safety" },
      { name: "Tailwind CSS v4", detail: "Custom Design Tokens & Responsive UI" },
      { name: "Framer Motion & WebGL", detail: "Interactive Telemetry Visualizations" },
    ],
    backend: [
      { name: "Node.js Microservices", detail: "High-Concurrency Event Loops" },
      { name: "PostgreSQL & Prisma ORM", detail: "ACID Transactional Ledgers" },
      { name: "Redis In-Memory Cache", detail: "Sub-Millisecond Read Latency" },
      { name: "MQTT & WebSockets", detail: "Real-Time Bi-Directional Streaming" },
    ],
    cloud: [
      { name: "Dockerized Containers", detail: "Isolated Deployment Units" },
      { name: "CI/CD Automated Pipelines", detail: "Zero-Downtime Blue/Green Rollouts" },
      { name: "Cloudflare Zero-Trust", detail: "Edge WAF & DDoS Mitigation" },
      { name: "Prometheus & Grafana", detail: "Full Observability & Alerting" },
    ],
  };

  const capabilities = [
    {
      title: "Bespoke Enterprise ERP Solutions",
      desc: "Modular architectures covering multi-facility inventory management, supply chain procurement, and cross-departmental approval chains with granular Role-Based Access Control (RBAC).",
      icon: Layers,
    },
    {
      title: "High-Throughput Retail POS Platforms",
      desc: "Offline-first architecture engineered for rapid retail checkout environments with sub-second receipt generation, barcode hardware integration, and multi-till float reconciliation.",
      icon: Zap,
    },
    {
      title: "Financial Reconciliation & Tax Auditing Modules",
      desc: "Automated end-of-day settlement loops, multi-tier tax computation, digital invoice verification, and direct automated export to corporate banking ledgers.",
      icon: ShieldCheck,
    },
    {
      title: "IoT & Hardware Interfacing APIs",
      desc: "Ultra-low latency communication gateways connecting on-site microcontrollers, industrial scales, forecourt dispensers, and barcode scanners to central cloud databases.",
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
            <span className="text-[#001a39] font-bold">Custom Software & ERP</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              02 • APPLICATION ENGINEERING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Software Engineered for <br />
            <span className="text-[#1CB08F] relative inline-block">
              High Reliability
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
            We build bespoke enterprise resource planning (ERP) suites, offline-first retail POS platforms, and high-concurrency microservices engineered specifically for corporate business models where off-the-shelf software falls short.
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
              Consult Software Architects
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Production Pipeline & Microservice Architecture */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 mb-12">
        <SoftwarePipeline />
      </section>

      {/* Interactive Tech Stack Matrix */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 mb-16">
        <div className="bento-card bg-white p-7 sm:p-10 rounded-3xl border border-[#F1F5F9] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#F1F5F9] pb-6 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F]">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#001a39]">Production Technology Primitives</h3>
                <p className="text-xs text-[#44474e]">Engineered for high concurrency, zero latency, and scale</p>
              </div>
            </div>
            <div className="flex gap-1.5 bg-[#f7f9fb] p-1.5 rounded-xl border border-[#F1F5F9] self-start sm:self-auto">
              {(["frontend", "backend", "cloud"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg capitalize cursor-pointer transition-all ${
                    selectedTab === tab
                      ? "bg-[#001a39] text-white shadow-xs"
                      : "text-[#44474e] hover:text-[#001a39]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techDetails[selectedTab].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-[#f7f9fb] border border-[#F1F5F9] flex items-center justify-between group hover:border-[#1CB08F]/40 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#44474e] font-mono">{item.detail}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Capabilities Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
            DEVELOPMENT DOMAINS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Software Engineered For High Reliability
          </h2>
          <p className="text-base sm:text-lg text-[#44474e]">
            Our software systems operate as the unified nervous system of your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
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
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#1CB08F]">
                <span>Zero Downtime SLA</span>
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
                CUSTOM ENTERPRISE SOFTWARE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Build Custom Applications Built For Your Scale.
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Schedule an architectural session with our lead full-stack engineers to map your ERP, POS, or microservice architecture.
              </p>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] text-white font-bold text-base px-10 py-5 rounded-full shadow-[0_4px_20px_rgba(28,176,143,0.4)] hover:bg-[#159376] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0"
            >
              Start Software Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
