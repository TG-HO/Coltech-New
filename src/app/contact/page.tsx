"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  MapPin,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    serviceInterest: "Pump Automation & Forecourt ERP",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Consultation request logged. Our engineering desk will respond within 4 business hours.");
    }, 900);
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f9fb] text-[#001a39] flex flex-col selection:bg-[#1CB08F] selection:text-white">
      {/* Header Banner */}
      <section className="relative w-full pt-32 pb-14 md:pt-40 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[300px] bg-gradient-to-r from-[#1CB08F]/10 via-[#152F52]/5 to-[#1CB08F]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1CB08F]/10 border border-[#1CB08F]/25 text-[#1CB08F] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-[#1CB08F] animate-pulse" />
            CORPORATE ENGAGEMENT & FIELD ENGINEERING
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001a39] tracking-tight leading-tight mb-5">
            Connect With Our Systems Architecture Desk.
          </h1>
          <p className="text-base sm:text-lg text-[#44474e] leading-relaxed">
            Directly engage COLTECH senior engineering leadership to evaluate fuel forecourt automation, bespoke enterprise ERP deployments, and high-density datacenter infrastructure.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Interactive Form */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Verified Corporate Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary HQ Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#001a39] text-[#1CB08F] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#001a39]">Principal Headquarters</h2>
                  <span className="text-xs font-mono text-[#1CB08F] uppercase font-semibold tracking-wider">
                    Established 2024 • Karachi, Pakistan
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#44474e]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#001a39] block">Corporate Office</span>
                    Office # 1, 1st Floor, Bahria Complex 4, Left Wing, Clifton, Karachi, Pakistan
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#001a39] block">Engineering & Deployment Hotline</span>
                    <a href="tel:+923011184219" className="text-[#001a39] hover:text-[#1CB08F] font-mono font-medium transition-colors">
                      +92 301 1184219
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#001a39] block">Official Email Dispatch</span>
                    <a href="mailto:info@coltech.co" className="text-[#001a39] hover:text-[#1CB08F] font-mono font-medium transition-colors">
                      info@coltech.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#001a39] block">Enterprise Web Portal</span>
                    <a href="https://www.coltech.co" target="_blank" rel="noopener noreferrer" className="text-[#001a39] hover:text-[#1CB08F] font-mono font-medium transition-colors">
                      www.coltech.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#F1F5F9]">
                  <Clock className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#001a39] block">Operational Support Hours</span>
                    Monday – Saturday: 09:00 - 18:00 PKT
                    <span className="block text-xs text-[#64748B] mt-0.5">24/7 Field NOC Support for Active SLA Partners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Anchor Deployment Card */}
            <div className="bg-[#001a39] text-white border border-white/10 rounded-3xl p-7 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#1CB08F]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1CB08F]/20 text-[#1CB08F] text-[11px] font-mono font-semibold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  STRATEGIC ANCHOR CLIENT
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Taj Gasoline Forecourt Network</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Active forecourt automation, real-time wetstock telemetry, and zero-loss financial reconciliation deployed across nationwide retail fuel stations.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Engineering Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-7 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1CB08F] block mb-2">
                  PROJECT SPECIFICATION INTAKE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#001a39] tracking-tight">
                  Schedule an Enterprise Technical Consultation
                </h2>
                <p className="text-sm text-[#64748B] mt-1.5">
                  Submit your technical scope or forecourt specifications to receive an initial architecture overview and deployment timeline.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-10 rounded-2xl bg-[#1CB08F]/10 border border-[#1CB08F]/30 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1CB08F] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#1CB08F]/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001a39] mb-2">
                    Consultation Request Dispatched
                  </h3>
                  <p className="text-sm text-[#44474e] max-w-md leading-relaxed mb-6">
                    Your request has been routed to the COLTECH Systems Architecture team. A solutions director will contact you via email or phone within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        organization: "",
                        email: "",
                        phone: "",
                        serviceInterest: "Pump Automation & Forecourt ERP",
                        message: "",
                      });
                    }}
                    className="text-xs font-mono uppercase font-bold text-[#1CB08F] hover:underline"
                  >
                    Submit another inquiry →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#001a39] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Khan"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#001a39] mb-2">
                        Enterprise / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Taj Gasoline / Retail Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#001a39] mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#001a39] mb-2">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#001a39] mb-2">
                      Primary Engineering Discipline
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                    >
                      <option value="Pump Automation & Forecourt ERP">Pump Automation & Forecourt ERP (Nozzles, ATG Probes)</option>
                      <option value="Custom Enterprise Software">Custom Enterprise Software & High-Concurrency POS</option>
                      <option value="Physical IT Infrastructure">Physical IT Infrastructure & Server Room Cabling</option>
                      <option value="AI CCTV & Forecourt Vision">AI CCTV & Optical Security Arrays (ANPR)</option>
                      <option value="Turnkey Multi-Site Architecture">Turnkey Multi-Site Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#001a39] mb-2">
                      Deployment Scope / Requirements Summary
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify number of forecourts, dispenser brands (Wayne, Gilbarco, Tatsuno), ERP integration requirements, or datacenter footprint..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#1CB08F] text-white font-bold text-sm tracking-wide uppercase hover:bg-[#159376] active:scale-[0.99] transition-all shadow-md shadow-[#1CB08F]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting to Engineering Desk...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Schedule Technical Review
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
