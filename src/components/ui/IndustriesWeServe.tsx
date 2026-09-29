"use client";

import { motion } from "framer-motion";
import { Fuel, Store, Building2, Hotel, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface IndustryItem {
  id: string;
  name: string;
  tag: string;
  icon: typeof Fuel;
  description: string;
  features: string[];
  referenceDeployment: string;
  link: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "fuel-energy",
    name: "Fuel & Energy Retailing",
    tag: "FORECOURT AUTOMATION & ATG",
    icon: Fuel,
    description:
      "Direct electronic register coupling with fuel dispensers (Wayne, Gilbarco, Tatsuno), automated underground tank gauging (ATG), and instant wetstock ledger reconciliation to eliminate fuel loss.",
    features: [
      "Nozzle pulse to ledger synchronization",
      "Real-time ATG density & water ingress",
      "Bulk tanker dispatch & P&L tracking",
    ],
    referenceDeployment: "Taj Gasoline Network (100+ Retail Nodes)",
    link: "/automation",
  },
  {
    id: "retail-chains",
    name: "Retail Chains & Franchises",
    tag: "HIGH-CONCURRENCY POS & TILLS",
    icon: Store,
    description:
      "Offline-first point of sale platforms engineered for rapid checkout lines. Maintains continuous multi-till operation during network outages with automated daily cash/credit reconciliation.",
    features: [
      "Sub-second barcode scanning & billing",
      "Centralized multi-branch price books",
      "Automated tax auditing & fiscal sales",
    ],
    referenceDeployment: "Multi-Location Retail Marts & Supermarkets",
    link: "/software",
  },
  {
    id: "corporate-commercial",
    name: "Corporate & Commercial Offices",
    tag: "FACILITIES & WORKFORCE IT",
    icon: Building2,
    description:
      "Enterprise structured IT cabling, climate-controlled server rooms, zero-trust VLAN segmentation, and GPS-verified employee attendance with live camera selfie verification.",
    features: [
      "Certified Cat6A & fiber backbones",
      "COL Track GPS-verified field attendance",
      "SD-WAN multi-carrier automated failover",
    ],
    referenceDeployment: "Corporate Headquarters & Commercial Towers",
    link: "/infrastructure",
  },
  /* PRESERVED FOR RESTORATION:
  {
    id: "hospitality-hotels",
    name: "Hospitality & Hotels",
    tag: "TURNKEY NETWORKING & GUEST IT",
    icon: Hotel,
    description: "High-density guest Wi-Fi architectures, premise CCTV security arrays, multi-station banquet and restaurant POS terminals...",
    features: ["Isolated high-speed guest & admin Wi-Fi", "Multi-outlet restaurant & banquet billing", "24/7 premise optical security"],
    referenceDeployment: "RT Hotels & Executive Commercial Properties",
    link: "/infrastructure",
  },
  */
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full py-6 md:py-10 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
          Industries We Serve
        </h2>
        <p className="text-base sm:text-lg text-[#44474e] leading-relaxed">
          Tailored engineering primitives designed for the exact operational risks, regulatory standards, and uptime requirements of each sector.
        </p>
      </div>

      {/* 3 Wide, Shorter Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INDUSTRIES.map((industry, idx) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F1F5F9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                {/* Icon & Direct Link */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#001a39] text-[#1CB08F] group-hover:bg-[#1CB08F] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <Link
                    href={industry.link}
                    className="w-8 h-8 rounded-full bg-[#F8FAFC] text-[#001a39] flex items-center justify-center hover:bg-[#1CB08F] hover:text-white transition-colors"
                    aria-label={`Learn about ${industry.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1CB08F] block">
                    {industry.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#001a39] tracking-tight mt-0.5 group-hover:text-[#1CB08F] transition-colors">
                    {industry.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed">
                  {industry.description}
                </p>

                {/* Compact Feature Pills */}
                <div className="pt-2.5 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                  {industry.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#001a39] bg-[#f7f9fb] px-2.5 py-1 rounded-lg border border-[#F1F5F9]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#1CB08F] shrink-0" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reference Anchor Badge */}
              <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                  Verified Client
                </span>
                <span className="font-semibold text-[#001a39] truncate max-w-[200px]">
                  {industry.referenceDeployment}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
