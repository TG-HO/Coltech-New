"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  KeyRound,
  Layers,
  Database,
  CheckCircle2,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server,
} from "lucide-react";

interface PipelineStage {
  id: number;
  name: string;
  subtitle: string;
  protocol: string;
  latency: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  specDetails: { label: string; value: string }[];
}

const stages: PipelineStage[] = [
  {
    id: 1,
    name: "Edge Telemetry Ingestion",
    subtitle: "Direct RS-485 Forecourt & POS Registers",
    protocol: "RS-485 / Current Loop Bus",
    latency: "< 2ms",
    status: "ACTIVE INGESTION",
    icon: Cpu,
    description:
      "Hardware-level serial bus coupling directly interfaces with dispenser pulse encoders, electronic registers (Wayne, Gilbarco, Tatsuno), and local retail POS cash tills.",
    specDetails: [
      { label: "Baud Rate", value: "115,200 bps Isolated" },
      { label: "Hardware Bus", value: "Opto-Isolated RS-485" },
      { label: "Sample Frequency", value: "100 Hz Continuous" },
      { label: "Buffer Node", value: "Dual Cortex-M4 Flash" },
    ],
  },
  {
    id: 2,
    name: "Cryptographic Payload Validation",
    subtitle: "HMAC SHA-256 Tamper Verification",
    protocol: "Hardware Secure Element",
    latency: "< 1ms",
    status: "VERIFIED",
    icon: KeyRound,
    description:
      "Every dispense event packet is digitally signed at the edge micro-controller using a pre-shared hardware key to mathematically prevent telemetry spoofing or pulse interception.",
    specDetails: [
      { label: "Signature Algorithm", value: "HMAC-SHA256" },
      { label: "Nonce Protection", value: "Monotonic Counter" },
      { label: "Key Storage", value: "Hardware Secure Enclave" },
      { label: "Packet Rejection Rate", value: "0.000% False Rejects" },
    ],
  },
  {
    id: 3,
    name: "Distributed Message Broker",
    subtitle: "Offline-Resilient Buffering Queue",
    protocol: "MQTT / Kafka Cluster",
    latency: "< 5ms",
    status: "BUFFER HEALTHY",
    icon: Layers,
    description:
      "Guarantees delivery during complete network outages. Transactions are persistently queued locally in embedded WAL storage and stream automatically into distributed clusters once connectivity is restored.",
    specDetails: [
      { label: "Offline Durability", value: "72+ Hours Local WAL" },
      { label: "Queue Partitioning", value: "Per-Site Station ID" },
      { label: "Compression", value: "Snappy / Protobuf" },
      { label: "Delivery Semantics", value: "Exactly-Once (Idempotent)" },
    ],
  },
  {
    id: 4,
    name: "Central ERP Synchronization",
    subtitle: "Immediate Transactional Ledger Balance",
    protocol: "PostgreSQL & Prisma",
    latency: "< 6ms",
    status: "COMMITTED",
    icon: Database,
    description:
      "Atomic commitment directly to the enterprise core financial ledger, reconciling wetstock balances against dispensed liters and settling inventory tallies with zero manual auditing delay.",
    specDetails: [
      { label: "ACID Isolation", value: "Serializable Transactions" },
      { label: "Reconciliation Window", value: "Sub-Second Auto-Settlement" },
      { label: "Audit Trail", value: "Immutable Log with Hashes" },
      { label: "Central Sync SLA", value: "99.999% Consistency" },
    ],
  },
];

export default function SoftwarePipeline() {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [pulsingPacket, setPulsingPacket] = useState<number>(1);

  // Smooth periodic pulse travel across stages
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsingPacket((prev) => (prev % 4) + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <div className="w-full bg-[#001a39] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CB08F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_10px_#1CB08F]" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1CB08F] uppercase">
              ENTERPRISE EVENT PIPELINE
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Data Ingestion & Microservice Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            Zero-loss transactional pipeline from physical forecourt dispenser to central corporate ledger.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl text-xs font-mono self-start sm:self-auto">
          <Activity className="w-3.5 h-3.5 text-[#1CB08F] animate-pulse" />
          <span className="text-white/80">PIPELINE: OPTIMAL</span>
        </div>
      </div>

      {/* Horizontal Pipeline Visual (Stages 1-4) */}
      <div className="relative z-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-white/10 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1CB08F] to-[#79f9d4]"
              animate={{
                width: `${((pulsingPacket - 1) / 3) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {stages.map((stage) => {
            const isSelected = activeStage === stage.id;
            const isPulsing = pulsingPacket === stage.id;
            const Icon = stage.icon;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`relative z-10 p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between min-h-[160px] ${
                  isSelected
                    ? "bg-white/10 border-[#1CB08F] shadow-[0_0_24px_rgba(28,176,143,0.25)] scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#1CB08F] text-[#001a39] font-bold"
                        : "bg-white/10 text-[#1CB08F]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-white/50">
                    STAGE 0{stage.id}
                  </span>
                </div>

                {/* Stage Titles */}
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {stage.name}
                  </h4>
                  <p className="text-[11px] text-white/60 mt-1 line-clamp-2 leading-relaxed font-sans">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Bottom Status Pill */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#1CB08F] font-semibold">{stage.protocol}</span>
                  <span className="text-white/40">{stage.latency}</span>
                </div>

                {/* Packet Travel Indicator */}
                {isPulsing && (
                  <motion.span
                    layoutId="pulse-indicator"
                    className="absolute -top-1 -right-1 w-3 h-3 bg-[#1CB08F] rounded-full shadow-[0_0_12px_#1CB08F] animate-ping"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Deep-Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-black/30 border border-white/10 rounded-2xl p-6 mb-8 relative z-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1CB08F]/20 text-[#1CB08F] flex items-center justify-center">
                <current.icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#1CB08F] uppercase tracking-wider block">
                  STAGE 0{current.id} SPECIFICATION
                </span>
                <h4 className="text-base font-bold text-white">
                  {current.name}: {current.subtitle}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                {current.status}
              </span>
              <span className="text-[11px] font-mono bg-white/10 text-white/70 px-3 py-1 rounded-full">
                LATENCY: {current.latency}
              </span>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed mb-6">
            {current.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {current.specDetails.map((spec, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-white mt-1">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Metrics Bar Below with live stat pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-white/50 block">THROUGHPUT CAPACITY</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#1CB08F] mt-0.5 block">
              12,500 <span className="text-xs text-white/60 font-sans">req/s</span>
            </span>
          </div>
          <Zap className="w-5 h-5 text-[#1CB08F]" />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-white/50 block">P99 PIPELINE LATENCY</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5 block">
              14 <span className="text-xs text-[#1CB08F] font-sans">ms</span>
            </span>
          </div>
          <Activity className="w-5 h-5 text-white/50" />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-white/50 block">DATA INTEGRITY SLA</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-0.5 block">
              100% <span className="text-xs text-white/60 font-sans">Guaranteed</span>
            </span>
          </div>
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </div>
      </div>
    </div>
  );
}
