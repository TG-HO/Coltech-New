"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

export default function HomeContactAndCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceInterest: "Smart Pump Automation & Forecourt ERP",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappUrl =
    "https://wa.me/923011184219?text=Hello%20COLTECH,%20I%20have%20an%20operations%20problem%20I%20would%20like%20to%20automate.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Homepage Quick Consultation Form",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to dispatch consultation inquiry.");
      }

      setIsSubmitted(true);
      toast.success(
        "Consultation request dispatched! Our engineering desk will contact you within 4 business hours."
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to dispatch email. Please try again.";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="w-full py-8 md:py-12 max-w-7xl mx-auto flex flex-col gap-10">
      {/* 1. FINAL CTA BAND ABOVE FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-[#001a39] via-[#072448] to-[#001a39] text-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#1CB08F]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an operations problem? <br className="hidden sm:inline" />
            <span className="text-[#1CB08F]">Let&apos;s automate it.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            From dispenser telemetry and fuel variance elimination to custom ERP and turnkey server room cabling, our senior engineering leadership is ready to evaluate your scope.
          </p>
        </div>

        {/* Action Buttons: Button + WhatsApp Link */}
        <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
          {/* Direct WhatsApp Link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.6)] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Jump to Form Button */}
          <a
            href="#inquiry-form"
            className="bg-white hover:bg-[#F8FAFC] text-[#001a39] font-bold text-sm px-6 py-4 rounded-full shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>Inquire Below</span>
            <ArrowRight className="w-4 h-4 text-[#1CB08F]" />
          </a>
        </div>
      </motion.div>

      {/* 2. SHORT INLINE CONTACT FORM ON HOME PAGE */}
      <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        {/* Left Column: Direct Engineering Contact Info (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-[#F1F5F9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1CB08F] block mb-1">
              DIRECT ENGINEERING DESK
            </span>
            <h3 className="text-2xl font-bold text-[#001a39] tracking-tight">
              Get in Touch with Systems Architects
            </h3>
            <p className="text-sm text-[#44474e] mt-2 leading-relaxed">
              We provide upfront technical evaluations and transparent feasibility reviews. All inquiries are answered within 4 business hours.
            </p>
          </div>

          <div className="space-y-4 text-sm text-[#44474e] border-t border-[#F1F5F9] pt-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#001a39] block text-xs uppercase tracking-wider">
                  Corporate Headquarters
                </span>
                Office # 1, 1st Floor, Bahria Complex 4, Left Wing, Clifton, Karachi, Pakistan
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#001a39] block text-xs uppercase tracking-wider">
                  Engineering Hotline & WhatsApp
                </span>
                <a href="tel:+923011184219" className="text-[#001a39] hover:text-[#1CB08F] font-mono font-medium">
                  +92 301 1184219
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#001a39] block text-xs uppercase tracking-wider">
                  Official Email
                </span>
                <a href="mailto:info@coltech.co" className="text-[#001a39] hover:text-[#1CB08F] font-mono font-medium">
                  info@coltech.co
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-[#F1F5F9]">
              <Clock className="w-5 h-5 text-[#1CB08F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#001a39] block text-xs uppercase tracking-wider">
                  Operations Desk SLA
                </span>
                Monday – Saturday: 09:00 - 18:00 PKT
                <span className="block text-xs text-[#64748B] mt-0.5">24/7 Field NOC for Active SLA Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Short Inquiry Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-[#F1F5F9] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#1CB08F]/10 border border-[#1CB08F]/30 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#1CB08F] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#1CB08F]/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#001a39] mb-2">
                Consultation Request Dispatched
              </h3>
              <p className="text-sm text-[#44474e] max-w-md leading-relaxed mb-6">
                Your specifications have been routed to the COLTECH Systems Architecture desk. An engineer will contact you via email or WhatsApp within 4 business hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    organization: "",
                    serviceInterest: "Smart Pump Automation & Forecourt ERP",
                    message: "",
                  });
                }}
                className="text-xs font-mono uppercase font-bold text-[#1CB08F] hover:underline cursor-pointer"
              >
                Submit another inquiry →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#F1F5F9] pb-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#001a39] tracking-tight">
                  Request an Architecture Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Fill in your project parameters below to initiate a technical discussion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001a39] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001a39] mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001a39] mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001a39] mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Retail Enterprise"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001a39] mb-1.5">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all"
                >
                  <option value="Smart Pump Automation & Forecourt ERP">Smart Pump Automation & Forecourt ERP</option>
                  <option value="Custom Enterprise Software & POS">Custom Enterprise Software & Offline-First POS</option>
                  <option value="Physical IT Infrastructure & Server Rooms">Physical IT Infrastructure & Server Rooms</option>
                  <option value="COL Track Workforce Attendance">COL Track Workforce Attendance Automation</option>
                  <option value="General Operations Automation">General Operations Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001a39] mb-1.5">
                  Deployment Scope / Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your number of sites, dispenser brands, field team size, or IT requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#001a39] placeholder-[#94A3B8] focus:outline-none focus:border-[#1CB08F] focus:ring-2 focus:ring-[#1CB08F]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#1CB08F] text-white font-bold text-sm tracking-wide uppercase hover:bg-[#159376] active:scale-[0.99] transition-all shadow-md shadow-[#1CB08F]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Transmitting to Engineering Desk...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Consultation Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
