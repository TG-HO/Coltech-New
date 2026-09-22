"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, Globe, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#001a39] text-white border-t border-[#152f52] mt-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Grid: 4 Enterprise Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
            {/* Column 1: Brand & Strategic Anchor (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="bg-white p-1.5 rounded-full flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                  <Image
                    src="/Col Logo.svg"
                    alt="COLTECH Logo"
                    width={26}
                    height={26}
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">
                  COL<span className="text-[#1CB08F]">TECH</span>
                </span>
              </Link>

              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-[#1CB08F]">
                <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse" />
                <span>ESTABLISHED 2024 • ENTERPRISE B2B</span>
              </div>

              <p className="text-sm text-[#8097c0] leading-relaxed max-w-sm">
                Circle of Life (COL) Technologies bridges physical operational machinery with intelligent enterprise software. We engineer zero-downtime ecosystems across fuel networks, retail franchises, and corporate enterprises.
              </p>

              {/* Strategic Anchor Callout */}
              <div className="w-full max-w-sm bg-white/5 border border-[#1CB08F]/30 rounded-xl p-3.5 flex items-start gap-3 mt-1">
                <div className="w-8 h-8 rounded-lg bg-[#1CB08F]/20 text-[#1CB08F] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">Key Anchor Client: Taj Gasoline</span>
                  <span className="text-[#8097c0]">Standardized forecourt telemetry & ERP sync nationwide.</span>
                </div>
              </div>
            </div>

            {/* Column 2: Core Solutions (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                Core Solutions
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-[#8097c0]">
                <li>
                  <Link href="/automation" className="hover:text-[#79f9d4] transition-colors flex items-center justify-between group">
                    <span>Smart Pump Automation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#1CB08F]" />
                  </Link>
                </li>
                <li>
                  <Link href="/software" className="hover:text-[#79f9d4] transition-colors flex items-center justify-between group">
                    <span>Custom Software & ERP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#1CB08F]" />
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure" className="hover:text-[#79f9d4] transition-colors flex items-center justify-between group">
                    <span>Physical Infrastructure & NOC</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#1CB08F]" />
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#79f9d4] transition-colors flex items-center justify-between group">
                    <span>Edge Computer Vision & ANPR</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#1CB08F]" />
                  </Link>
                </li>
                <li>
                  <Link href="/automation#wetstock" className="hover:text-[#79f9d4] transition-colors flex items-center justify-between group">
                    <span>Automated Tank Gauging (ATG)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#1CB08F]" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Corporate & Governance (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                Governance
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-[#8097c0]">
                <li>
                  <Link href="/about" className="hover:text-[#79f9d4] transition-colors">
                    About COLTECH
                  </Link>
                </li>
                <li>
                  <Link href="/vision-mission" className="hover:text-[#79f9d4] transition-colors">
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link href="/core-values" className="hover:text-[#79f9d4] transition-colors">
                    Core Values
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-[#79f9d4] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-[#79f9d4] transition-colors">
                    Compliance & Security
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#79f9d4] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#79f9d4] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Corporate Headquarters & Engagement (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F]">
                Headquarters & Contact
              </h4>
              <div className="flex flex-col gap-3 text-xs text-[#8097c0]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1CB08F] shrink-0 mt-0.5" />
                  <span>Office # 1, 1st Floor, Bahria Complex 4, Left Wing, Clifton, Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#1CB08F] shrink-0" />
                  <a href="tel:+923011184219" className="hover:text-white transition-colors">
                    +92 301 1184219
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#1CB08F] shrink-0" />
                  <a href="mailto:info@coltech.co" className="hover:text-white transition-colors">
                    info@coltech.co
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#1CB08F] shrink-0" />
                  <span className="text-white font-medium">www.coltech.co</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full bg-[#1CB08F] hover:bg-[#159376] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  Schedule Consultation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8097c0]">
            <p>
              &copy; {new Date().getFullYear()} Circle of Life (COL) Technologies (COLTECH). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero-Loss Forecourt Telemetry SLA</span>
              </span>
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
