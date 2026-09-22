"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Fuel,
  Activity,
  ShieldCheck,
  Zap,
  Gauge,
  Thermometer,
  Droplets,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

interface NozzleData {
  id: number;
  bayName: string;
  grade: string;
  gradeColor: string;
  flowRate: number; // L/min
  dispensedLiters: number;
  pricePerLiter: number;
  status: "DISPENSING" | "STANDBY" | "LATCHED";
}

interface TankData {
  id: number;
  name: string;
  product: string;
  capacityLiters: number;
  currentLiters: number;
  levelPercent: number;
  waterBottomMm: number;
  temperatureC: number;
  density: number;
  status: string;
}

const initialNozzles: NozzleData[] = [
  {
    id: 1,
    bayName: "Bay 01 • Lane A",
    grade: "Super 92",
    gradeColor: "#1CB08F",
    flowRate: 41.5,
    dispensedLiters: 48.2,
    pricePerLiter: 268.5,
    status: "DISPENSING",
  },
  {
    id: 2,
    bayName: "Bay 02 • Lane A",
    grade: "Hi-Octane 97",
    gradeColor: "#38bdf8",
    flowRate: 38.0,
    dispensedLiters: 65.4,
    pricePerLiter: 295.0,
    status: "DISPENSING",
  },
  {
    id: 3,
    bayName: "Bay 03 • Lane B",
    grade: "High-Speed Diesel",
    gradeColor: "#fbbf24",
    flowRate: 52.8,
    dispensedLiters: 110.0,
    pricePerLiter: 275.2,
    status: "DISPENSING",
  },
  {
    id: 4,
    bayName: "Bay 04 • Lane B",
    grade: "Super 92",
    gradeColor: "#1CB08F",
    flowRate: 0.0,
    dispensedLiters: 0.0,
    pricePerLiter: 268.5,
    status: "STANDBY",
  },
];

const tanks: TankData[] = [
  {
    id: 1,
    name: "Underground Tank 01",
    product: "Super 92 Octane",
    capacityLiters: 50000,
    currentLiters: 42300,
    levelPercent: 84.6,
    waterBottomMm: 2.1,
    temperatureC: 24.2,
    density: 0.742,
    status: "Nominal",
  },
  {
    id: 2,
    name: "Underground Tank 02",
    product: "Hi-Octane 97",
    capacityLiters: 30000,
    currentLiters: 21800,
    levelPercent: 72.7,
    waterBottomMm: 1.4,
    temperatureC: 23.8,
    density: 0.755,
    status: "Nominal",
  },
  {
    id: 3,
    name: "Underground Tank 03",
    product: "High-Speed Diesel",
    capacityLiters: 60000,
    currentLiters: 51200,
    levelPercent: 85.3,
    waterBottomMm: 3.2,
    temperatureC: 24.5,
    density: 0.835,
    status: "Nominal",
  },
];

export default function ForecourtTelemetryWidget() {
  const [nozzles, setNozzles] = useState<NozzleData[]>(initialNozzles);
  const [selectedTank, setSelectedTank] = useState<TankData>(tanks[0]);
  const [activeNozzleId, setActiveNozzleId] = useState<number>(1);

  // Subtle real-time flow rate fluctuation for live telemetry feel
  useEffect(() => {
    const timer = setInterval(() => {
      setNozzles((prev) =>
        prev.map((n) => {
          if (n.status === "DISPENSING") {
            const jitter = (Math.random() - 0.5) * 1.5;
            const newFlow = Math.max(25, Math.min(55, Number((n.flowRate + jitter).toFixed(1))));
            const newLiters = Number((n.dispensedLiters + 0.35).toFixed(1));
            return {
              ...n,
              flowRate: newFlow,
              dispensedLiters: newLiters,
            };
          }
          return n;
        })
      );
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#001a39] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#1CB08F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#1CB08F]/20 text-[#1CB08F] flex items-center justify-center shrink-0">
            <Fuel className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#1CB08F] uppercase">
                FORECOURT TELEMETRY & WETSTOCK CONTROL CENTER
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Real-Time Dispenser Bus & Automatic Tank Gauging (ATG)
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
          <span className="bg-[#1CB08F]/20 text-[#79f9d4] px-3 py-1 rounded-lg border border-[#1CB08F]/30">
            STATION ID: TAJ-KHI-04
          </span>
          <span className="bg-white/10 text-white/70 px-3 py-1 rounded-lg">
            RS-485 BUS: 115.2 KBPS
          </span>
        </div>
      </div>

      {/* Dual-Pane Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* LEFT PANEL: 4-Bay Nozzle Telemetry Grid (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-white/70 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#1CB08F]" />
              Nozzle Dispenser Status (Pumps 01–04)
            </span>
            <span className="text-[11px] font-mono text-[#1CB08F]">
              Direct Pulser Coupling
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nozzles.map((nozzle) => {
              const isSelected = activeNozzleId === nozzle.id;
              const totalPkr = Math.round(nozzle.dispensedLiters * nozzle.pricePerLiter);

              return (
                <div
                  key={nozzle.id}
                  onClick={() => setActiveNozzleId(nozzle.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-white/10 border-[#1CB08F] shadow-[0_0_20px_rgba(28,176,143,0.2)]"
                      : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                  }`}
                >
                  {/* Top: Nozzle Header & Fuel Grade */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-white block">
                        PUMP 0{nozzle.id}
                      </span>
                      <span className="text-[10px] text-white/50 font-sans">
                        {nozzle.bayName}
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
                      style={{
                        color: nozzle.gradeColor,
                        borderColor: `${nozzle.gradeColor}40`,
                        backgroundColor: `${nozzle.gradeColor}15`,
                      }}
                    >
                      {nozzle.grade}
                    </span>
                  </div>

                  {/* Flow Rate Meter */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/60 text-[11px]">FLOW RATE</span>
                      <span className="font-bold text-white">
                        {nozzle.flowRate}{" "}
                        <span className="text-[10px] text-[#1CB08F]">L/min</span>
                      </span>
                    </div>
                    {/* Animated Flow Bar */}
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: nozzle.gradeColor }}
                        animate={{
                          width: `${(nozzle.flowRate / 60) * 100}%`,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Active Dispensing Value in PKR & Liters */}
                  <div className="pt-2 border-t border-white/10 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-white/40 block uppercase">
                        Active Dispensed
                      </span>
                      <span className="text-base font-bold font-mono text-white">
                        {nozzle.dispensedLiters}{" "}
                        <span className="text-xs text-white/60">L</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-white/40 block uppercase">
                        Current Value
                      </span>
                      <span className="text-sm font-bold font-mono text-emerald-400">
                        PKR {totalPkr.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="flex items-center justify-between text-[10px] font-mono pt-1">
                    <span
                      className={`flex items-center gap-1.5 ${
                        nozzle.status === "DISPENSING"
                          ? "text-emerald-400"
                          : "text-white/40"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          nozzle.status === "DISPENSING"
                            ? "bg-emerald-400 animate-pulse"
                            : "bg-white/30"
                        }`}
                      />
                      {nozzle.status}
                    </span>
                    <span className="text-white/40 font-mono">
                      PKR {nozzle.pricePerLiter}/L
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL: Automatic Tank Gauging (ATG) Underground Tank (5 cols) */}
        <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            {/* ATG Header & Tank Selector */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-[#1CB08F]" />
                  Automatic Tank Gauging (ATG)
                </span>
                <span className="text-[10px] font-mono text-white/50">
                  MAGNETOSTRICTIVE PROBE TELEMETRY
                </span>
              </div>
              <div className="flex gap-1">
                {tanks.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTank(t)}
                    className={`px-2 py-1 text-[10px] font-mono rounded cursor-pointer transition-all ${
                      selectedTank.id === t.id
                        ? "bg-[#1CB08F] text-[#001a39] font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    T{t.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Cylindrical Underground Tank Graphic */}
            <div className="relative w-full h-36 bg-[#0a1829] border border-white/15 rounded-2xl p-3 mb-4 overflow-hidden flex flex-col justify-between">
              {/* Tank Outline Markers */}
              <div className="flex items-center justify-between text-[10px] font-mono text-white/40 z-10">
                <span>{selectedTank.name}</span>
                <span>CAPACITY: {selectedTank.capacityLiters.toLocaleString()} L</span>
              </div>

              {/* Cylindrical Tank Liquid Level Fill Visualization */}
              <div className="absolute inset-x-3 bottom-3 top-7 rounded-xl bg-black/40 border border-white/10 overflow-hidden flex flex-col justify-end">
                {/* Fuel Volume */}
                <motion.div
                  className="w-full bg-gradient-to-t from-[#1CB08F]/80 via-[#1CB08F]/50 to-[#1CB08F]/30 relative flex items-center justify-center border-t border-[#79f9d4]"
                  animate={{ height: `${selectedTank.levelPercent}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-xs font-mono font-bold text-white drop-shadow">
                    {selectedTank.levelPercent}% • {selectedTank.currentLiters.toLocaleString()} L
                  </span>
                </motion.div>

                {/* Subtle Water-Bottom Layer at Tank Ingress Baseline */}
                <div className="w-full h-1.5 bg-cyan-400/90 border-t border-cyan-200" title="Water-Bottom Ingress Level" />
              </div>
            </div>

            {/* ATG Precision Telemetry Data Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-[10px] text-white/50 block flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-cyan-400" />
                  WATER INGRESS
                </span>
                <span className="text-base font-bold text-white mt-1 block">
                  {selectedTank.waterBottomMm} <span className="text-xs text-cyan-400">mm</span>
                </span>
                <span className="text-[10px] text-emerald-400">Normal (&lt; 6.0 mm)</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-[10px] text-white/50 block flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-amber-400" />
                  PRODUCT TEMP
                </span>
                <span className="text-base font-bold text-white mt-1 block">
                  {selectedTank.temperatureC} <span className="text-xs text-amber-400">°C</span>
                </span>
                <span className="text-[10px] text-white/60">Density: {selectedTank.density} kg/L</span>
              </div>
            </div>
          </div>

          {/* Green Status Pill: Underground Leak Sentry: Nominal */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold">Underground Leak Sentry: Nominal</span>
            </div>
            <span className="text-[10px] font-mono text-white/40">
              PROBE #ATG-904
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
