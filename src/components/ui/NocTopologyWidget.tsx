"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Network,
  Wifi,
  ShieldCheck,
  Zap,
  Server,
  Activity,
  CheckCircle2,
  Lock,
  Thermometer,
  BatteryCharging,
  Radio,
  ArrowRight,
  GitBranch,
} from "lucide-react";

export default function NocTopologyWidget() {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  return (
    <div className="w-full bg-[#001a39] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1CB08F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#1CB08F]/20 text-[#1CB08F] flex items-center justify-center shrink-0">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1CB08F] uppercase">
                ENTERPRISE NOC & REDUNDANCY TOPOLOGY
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              High-Density Switching Fabric & Multi-WAN Failover
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs self-start sm:self-auto">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg border border-emerald-500/30">
            99.999% CORE UPTIME
          </span>
          <span className="bg-white/10 text-white/70 px-3 py-1 rounded-lg">
            CRAC: DUAL N+1
          </span>
        </div>
      </div>

      {/* 3-Tier Structured Dashboard */}
      <div className="space-y-6 relative z-10">
        {/* ================================================================== */}
        {/* TIER 1: Link Redundancy (Dual Tunnel: Fiber Primary + LTE/5G Backup) */}
        {/* ================================================================== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#1CB08F] uppercase tracking-wider">
                LAYER 01 • DUAL-TUNNEL LINK REDUNDANCY
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">
              FAILOVER THRESHOLD: &lt; 180ms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary Fiber Tunnel */}
            <div className="bg-white/5 border border-[#1CB08F]/40 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse" />
                  <span className="text-sm font-bold text-white">Primary Fiber Backbone</span>
                </div>
                <span className="text-[10px] font-mono bg-[#1CB08F]/20 text-[#79f9d4] px-2 py-0.5 rounded">
                  ACTIVE ROUTE
                </span>
              </div>
              <p className="text-xs text-white/70 mb-3">
                1.0 Gbps symmetrical dedicated optical circuit with guaranteed CIR and SLA.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 font-mono text-[11px]">
                <div>
                  <span className="text-white/40 block text-[9px]">BANDWIDTH</span>
                  <span className="font-bold text-white">1.0 Gbps</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[9px]">LATENCY</span>
                  <span className="font-bold text-[#1CB08F]">4 ms</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[9px]">PACKET LOSS</span>
                  <span className="font-bold text-emerald-400">0.000%</span>
                </div>
              </div>
            </div>

            {/* LTE / 5G Failover Hot-Spare */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-sm font-bold text-white">LTE/5G Multi-Carrier Backup</span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 text-white/70 px-2 py-0.5 rounded">
                  HOT-STANDBY
                </span>
              </div>
              <p className="text-xs text-white/70 mb-3">
                Automated SD-WAN sub-second convergence with zero active session drops.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 font-mono text-[11px]">
                <div>
                  <span className="text-white/40 block text-[9px]">SWITCHOVER</span>
                  <span className="font-bold text-amber-300">&lt; 180 ms</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[9px]">CARRIER DIVERSITY</span>
                  <span className="font-bold text-white">Dual SIM BGP</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[9px]">TUNNEL PING</span>
                  <span className="font-bold text-emerald-400">18 ms ACK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TIER 2: Zero-Trust Logical Segmentation (VLAN Isolation Tree)      */}
        {/* ================================================================== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#1CB08F] uppercase tracking-wider flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-[#1CB08F]" />
              LAYER 02 • ZERO-TRUST SEGMENTATION TREE
            </span>
            <span className="text-[11px] font-mono text-white/60">
              802.1Q IEEE ENCAPSULATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* VLAN 10 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#1CB08F]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#1CB08F]">VLAN 10</span>
                <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                  PCI-DSS SECURE
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">POS / Financial Ledger</h4>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                Cryptographically isolated subnet dedicated exclusively to retail POS transactions, cash tills, and dispenser pulses.
              </p>
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                <span>Subnet: 10.10.0.0/24</span>
                <span className="text-emerald-400">Air-Gapped</span>
              </div>
            </div>

            {/* VLAN 20 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#1CB08F]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400">VLAN 20</span>
                <span className="text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                  MULTICAST STREAM
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">AI Security Video & ANPR</h4>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                High-throughput optical stream subnet connecting 4K NVR arrays, edge AI inference nodes, and automatic license plate cameras.
              </p>
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                <span>Subnet: 10.20.0.0/22</span>
                <span className="text-cyan-400">QoS High Priority</span>
              </div>
            </div>

            {/* VLAN 30 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#1CB08F]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-amber-400">VLAN 30</span>
                <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                  ISOLATED SANDBOX
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Guest / Operations</h4>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                Sandboxed corporate back-office network and restricted guest access points with hardware firewall boundary policing.
              </p>
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                <span>Subnet: 10.30.0.0/24</span>
                <span className="text-amber-400">Rate Limited</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TIER 3: Physical Environmental Telemetry Indicators                 */}
        {/* ================================================================== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#1CB08F] uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#1CB08F]" />
              LAYER 03 • PHYSICAL ENVIRONMENTAL TELEMETRY
            </span>
            <span className="text-[11px] font-mono text-white/60">
              DATACENTER ENCLOSURE ALPHA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            {/* Metric 1: Rack Temp: 21.4°C */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-white/50 text-[11px]">
                <span>RACK TEMPERATURE</span>
                <Thermometer className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="my-2">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  21.4 <span className="text-base text-[#1CB08F]">°C</span>
                </span>
              </div>
              <span className="text-[10px] text-emerald-400">
                CRAC Climate Controlled • Nominal
              </span>
            </div>

            {/* Metric 2: UPS Battery Run-time: 4.2 hrs remaining */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-white/50 text-[11px]">
                <span>UPS POWER RESERVE</span>
                <BatteryCharging className="w-4 h-4 text-[#1CB08F]" />
              </div>
              <div className="my-2">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  4.2 <span className="text-base text-[#1CB08F]">hrs</span>
                </span>
              </div>
              <span className="text-[10px] text-emerald-400">
                Online Inverters Active • 100% Float
              </span>
            </div>

            {/* Metric 3: OTDR Fiber Attenuation: Verified */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-white/50 text-[11px]">
                <span>OTDR ATTENUATION</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="my-2">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">
                  Verified
                </span>
              </div>
              <span className="text-[10px] text-white/70">
                0.18 dB/km Loss Margin • Pristine
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
