"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  Receipt,
  ClipboardCheck,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";

interface ProductCard {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  icon: typeof MapPin;
  highlights: string[];
  link: string;
  accent: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: "col-track",
    name: "COL Track",
    badge: "GPS-Verified Workforce",
    subtitle: "Field Attendance, Geofencing & Live Selfie Verification",
    description:
      "A location-aware workforce attendance and audit platform built for multi-site operations. Eliminates manual logbook fraud with tamper-resistant GPS matching, live-location selfie captures, and instant payroll export.",
    image: "/projects-images/col-track-dashboard-redacted.png",
    alt: "COL Track Web Administration Dashboard and Attendance Register",
    icon: MapPin,
    highlights: [
      "GPS geofenced check-in & check-out validation",
      "Live camera selfie capture at assigned site",
      "One-click payroll export (Excel, CSV, API)",
    ],
    link: "/products/col-track",
    accent: "#1CB08F",
  },
  {
    id: "fieldsense360",
    name: "FieldSense360",
    badge: "Site Lifecycle & Audits",
    subtitle: "Physical Site Feasibility, CAPA & Operational Audits",
    description:
      "Gives enterprise leadership a single command center for every retail asset. Manages the lifecycle from site screening through government NOC approvals to guided inspections with geo-tagged photographic evidence.",
    image: "/projects-images/FieldSense360-web-dashboard.png",
    alt: "FieldSense360 Site Lifecycle & Audits Dashboard",
    icon: ClipboardCheck,
    highlights: [
      "End-to-end 7-stage site governance pipeline",
      "Offline mobile audit app with tamper-proof photos",
      "Maker-checker verification & automated scoring",
    ],
    link: "/products/fieldsense360",
    accent: "#1CB08F",
  },
  /* PREVIOUSLY INCLUDED PROJECTS (Preserved for restoration):
  {
    id: "possuite",
    name: "POSSuite",
    badge: "Offline-First Engine",
    subtitle: "High-Throughput Retail Point of Sale & ERP Accounting",
    description: "Engineered for high-concurrency retail environments and fuel forecourts...",
    image: "/projects-images/col-tms-hero.png",
    alt: "POSSuite Retail & ERP Accounting Command Dashboard",
    icon: Receipt,
    highlights: ["Zero-downtime offline-first sales transaction engine", "Multi-till float tracking"],
    link: "/products/col-tms",
    accent: "#001a39",
  },
  {
    id: "complaints-portal",
    name: "Complaints & SLA Portal",
    badge: "Sub-Second Dispatch",
    subtitle: "Forecourt Maintenance, Ticketing & Asset Escalation",
    description: "A centralized operations helpdesk for retail fuel networks and multi-branch enterprises...",
    image: "/projects-images/col-tms-feature-2-tripboard.png",
    alt: "Operations Helpdesk and Complaints Management Board",
    icon: LifeBuoy,
    highlights: ["Automated technician dispatch & route scheduling", "Real-time ticket lifecycle tracking with SLA alerts"],
    link: "/products",
    accent: "#001a39",
  },
  */
];

export default function HomeProductsShowcase() {
  return (
    <section className="w-full py-6 md:py-10 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F1F5F9] pb-5">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001a39] tracking-tight">
            Real Working Products
          </h2>
          <p className="text-base sm:text-lg text-[#44474e] mt-2 max-w-2xl leading-relaxed">
            Our field-tested enterprise software platforms. Engineered for zero downtime, audited financial integrity, and heavy daily operational volume.
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#001a39] hover:text-[#1CB08F] transition-colors py-2 group shrink-0"
        >
          View Complete Portfolio & Gallery
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 4 Cards Grid - 2x2 on desktop, clean stacking on phones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {PRODUCTS.map((product, idx) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-[#F1F5F9] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Screenshot Frame */}
              <div className="relative w-full h-[220px] sm:h-[280px] bg-[#001a39] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#001a39]/80 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/10">
                    {product.badge}
                  </span>
                </div>

                {/* Bottom Overlay Link Indicator */}
                <Link
                  href={product.link}
                  className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#1CB08F] transition-colors shadow-sm"
                  aria-label={`Inspect ${product.name}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#001a39] tracking-tight group-hover:text-[#1CB08F] transition-colors">
                        <Link href={product.link}>{product.name}</Link>
                      </h3>
                      <p className="text-xs font-semibold text-[#1CB08F]">{product.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#44474e] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-2 border-t border-[#F1F5F9]">
                    {product.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#001a39] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1CB08F] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors"
                  >
                    <span>View System Specs & Gallery</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[11px] font-mono text-[#44474e]">Production Ready</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
