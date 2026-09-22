"use client";

import { motion } from "framer-motion";
import {
  Fuel,
  Gauge,
  Camera,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
  CheckCircle2,
  Lock,
  Activity,
  Award,
} from "lucide-react";

export default function ArchitectureInfographic() {
  return (
    <div className="w-full bg-[#001a39] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1CB08F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_10px_#1CB08F]" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1CB08F] uppercase">
              SYSTEM ARCHITECTURE INFOGRAPHIC
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            The COLTECH Closed-Loop Industrial Architecture
          </h3>
        </div>

        <span className="bg-emerald-500/20 text-emerald-400 font-mono text-xs px-3 py-1.5 rounded-lg border border-emerald-500/30 self-start sm:self-auto flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>CLOSED-LOOP VERIFIED</span>
        </span>
      </div>

      {/* 3-Stage Visual Diagram Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 mb-8">
        {/* Node 1: Edge Hardware (Nozzles, Tank Probes, ANPR Cameras) (4 cols) */}
        <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[220px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <span className="text-xs font-mono font-bold text-[#1CB08F] uppercase">
              STEP 01 • PHYSICAL EDGE
            </span>
            <span className="text-[10px] font-mono text-white/50">ON-SITE FORECOURT</span>
          </div>

          <h4 className="text-base font-bold text-white mb-3">
            Edge Hardware Layer
          </h4>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2.5 bg-black/30 p-2 rounded-lg border border-white/5">
              <Fuel className="w-4 h-4 text-[#1CB08F] shrink-0" />
              <span>Dispenser Nozzles & Pulsers (Wayne, Gilbarco)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-black/30 p-2 rounded-lg border border-white/5">
              <Gauge className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Magnetostrictive Tank Probes (ATG Telemetry)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-black/30 p-2 rounded-lg border border-white/5">
              <Camera className="w-4 h-4 text-amber-400 shrink-0" />
              <span>High-Speed Optical ANPR Security Cameras</span>
            </div>
          </div>
        </div>

        {/* Connector 1 (1 col on desktop, arrow on mobile) */}
        <div className="lg:col-span-1 flex items-center justify-center text-[#1CB08F]">
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#1CB08F] to-[#79f9d4]" />
            <ArrowRight className="w-5 h-5 text-[#1CB08F] -ml-2" />
          </div>
          <div className="lg:hidden flex items-center justify-center py-2">
            <ArrowRight className="w-5 h-5 text-[#1CB08F] rotate-90" />
          </div>
        </div>

        {/* Node 2: Secure Layer-3 SD-WAN Gateway (3 cols) */}
        <div className="lg:col-span-3 bg-white/5 border border-[#1CB08F]/40 rounded-2xl p-5 flex flex-col justify-between min-h-[220px] shadow-[0_0_20px_rgba(28,176,143,0.15)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <span className="text-xs font-mono font-bold text-[#79f9d4] uppercase">
              STEP 02 • SECURE TUNNEL
            </span>
            <Lock className="w-3.5 h-3.5 text-[#1CB08F]" />
          </div>

          <h4 className="text-base font-bold text-white mb-2">
            Secure Layer-3 SD-WAN Gateway
          </h4>

          <p className="text-xs text-white/70 leading-relaxed mb-3">
            Hardware-enclave signing with HMAC-SHA256, isolated VLAN tag routing, and automated LTE/5G dynamic failover under 180ms.
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#1CB08F]">
            <span>TLS 1.3 / IPsec</span>
            <span>Zero-Trust SLA</span>
          </div>
        </div>

        {/* Connector 2 (1 col on desktop, arrow on mobile) */}
        <div className="lg:col-span-1 flex items-center justify-center text-[#1CB08F]">
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#1CB08F] to-[#79f9d4]" />
            <ArrowRight className="w-5 h-5 text-[#1CB08F] -ml-2" />
          </div>
          <div className="lg:hidden flex items-center justify-center py-2">
            <ArrowRight className="w-5 h-5 text-[#1CB08F] rotate-90" />
          </div>
        </div>

        {/* Node 3: Central Enterprise ERP & Reconciliation (3 cols) */}
        <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[220px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              STEP 03 • CORE ERP
            </span>
            <Server className="w-3.5 h-3.5 text-emerald-400" />
          </div>

          <h4 className="text-base font-bold text-white mb-2">
            Central Taj Gasoline Enterprise ERP
          </h4>

          <p className="text-xs text-white/70 leading-relaxed mb-3">
            Immediate wetstock ledger balance, automated corporate audit loops, real-time inventory tracking, and synchronized accounting entries.
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>Sub-Second Balance</span>
            <span>Zero Revenue Leak</span>
          </div>
        </div>
      </div>

      {/* Strategic Callout Card */}
      <div className="bg-gradient-to-r from-white/10 to-white/5 border border-[#1CB08F]/40 rounded-2xl p-6 sm:p-7 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1CB08F]/20 text-[#1CB08F] flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-[#1CB08F]" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1CB08F]">
                NATIONWIDE BENCHMARK DEPLOYMENT
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Strategic Anchor Deployment: Taj Gasoline
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              Standardized forecourt automation, real-time wetstock telemetry, and zero-loss financial auditing deployed across multi-tier retail networks.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 text-xs font-mono shrink-0">
          <div className="bg-black/30 border border-white/10 px-4 py-2.5 rounded-xl text-center">
            <span className="text-base font-bold text-[#1CB08F] block">200+</span>
            <span className="text-[10px] text-white/60">Active Forecourts</span>
          </div>
          <div className="bg-black/30 border border-white/10 px-4 py-2.5 rounded-xl text-center">
            <span className="text-base font-bold text-emerald-400 block">0.00%</span>
            <span className="text-[10px] text-white/60">Fuel Variance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
