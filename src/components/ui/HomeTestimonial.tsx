"use client";

import { motion } from "framer-motion";
import { Quote, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";

export default function HomeTestimonial() {
  return (
    <section className="w-full py-8 md:py-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#001a39] text-white rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CB08F]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#152F52]/50 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8 max-w-5xl">
          {/* Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1CB08F]/20 text-[#1CB08F] text-xs font-mono font-bold uppercase tracking-wider border border-[#1CB08F]/30">
              <ShieldCheck className="w-4 h-4" />
              VERIFIED STRATEGIC ENTERPRISE PARTNER
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white/60">
              <Building2 className="w-4 h-4 text-[#1CB08F]" />
              <span>Retail Petroleum Infrastructure</span>
            </div>
          </div>

          {/* Quote Mark & Body */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#1CB08F]/20 text-[#1CB08F] flex items-center justify-center shrink-0 border border-[#1CB08F]/30">
              <Quote className="w-7 h-7" />
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed tracking-tight">
                &ldquo;COLTECH bridged the operational gap between our physical forecourts and corporate ERP. By coupling directly with dispenser electronic registers and ATG tank probes, we eliminated daily fuel variance across our retail network. Simultaneously, COL Track verified attendance for hundreds of field personnel with absolute transparency. They don&apos;t just deliver software—they engineer for real-world ground conditions.&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Director of Retail Operations & Technology
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1CB08F] font-semibold mt-0.5">
                    Taj Gasoline Forecourt Network
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/70">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
                    Nationwide Forecourts
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
                    Zero Fuel Variance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1CB08F]" />
                    Active 24/7 SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
