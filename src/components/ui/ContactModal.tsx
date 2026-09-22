"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    toast.success("Inquiry received. A senior systems engineer will contact you shortly.");
    
    // Reset and close
    setFormData({ name: "", email: "", company: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/70 backdrop-blur-xs z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] overflow-y-auto border-l border-brand-navy/10 flex flex-col"
          >
            {/* Header */}
            <div className="p-8 pb-6 border-b border-brand-navy/10 flex items-center justify-between bg-brand-light">
              <div>
                <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-1">
                  Connect With Engineers
                </span>
                <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                  Initiate Project
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-navy/5 rounded-full transition-colors group cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6 text-brand-navy group-hover:text-brand-turquoise transition-colors" />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-brand-navy/80 text-sm leading-relaxed mb-5">
                Consult directly with our engineering architects regarding enterprise software, IoT pump telemetry, or network security infrastructure.
              </p>

              {/* Verified Direct Contact Callout */}
              <div className="bg-[#f7f9fb] border border-[#F1F5F9] rounded-xl p-3.5 mb-6 text-xs text-[#44474e] space-y-1.5 font-mono">
                <div className="flex items-center justify-between text-[#001a39] font-bold pb-1 border-b border-[#F1F5F9]">
                  <span>DIRECT ENGINEERING DESK</span>
                  <span className="text-[#1CB08F]">EST. 2024</span>
                </div>
                <div className="text-[11px] text-[#001a39]">
                  <strong>Hotline:</strong> +92 301 1184219
                </div>
                <div className="text-[11px] text-[#001a39]">
                  <strong>Email:</strong> info@coltech.co
                </div>
                <div className="text-[10px] text-[#8097c0] leading-snug pt-1">
                  HQ: Office # 1, 1st Floor, Bahria Complex 4, Left Wing, Clifton, Karachi
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-brand-navy tracking-wider uppercase">
                    Full Name <span className="text-brand-turquoise">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-navy/15 py-2.5 bg-transparent text-brand-navy focus:outline-none focus:border-brand-turquoise transition-colors rounded-none placeholder:text-brand-navy/30 text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-brand-navy tracking-wider uppercase">
                    Corporate Email <span className="text-brand-turquoise">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-navy/15 py-2.5 bg-transparent text-brand-navy focus:outline-none focus:border-brand-turquoise transition-colors rounded-none placeholder:text-brand-navy/30 text-sm"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-bold text-brand-navy tracking-wider uppercase">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-navy/15 py-2.5 bg-transparent text-brand-navy focus:outline-none focus:border-brand-turquoise transition-colors rounded-none placeholder:text-brand-navy/30 text-sm"
                    placeholder="Acme Industrial Corp"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="message" className="text-xs font-bold text-brand-navy tracking-wider uppercase">
                    Project Scope <span className="text-brand-turquoise">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b-2 border-brand-navy/15 py-2.5 bg-transparent text-brand-navy focus:outline-none focus:border-brand-turquoise transition-colors resize-none rounded-none placeholder:text-brand-navy/30 text-sm"
                    placeholder="Briefly outline your deployment timeline and requirements..."
                  ></textarea>
                </div>

                {/* Footer Submit */}
                <div className="pt-6 mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-turquoise text-white py-4 font-bold text-sm tracking-wider uppercase hover:bg-brand-navy hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Submit Deployment Request
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-brand-navy/50 text-center mt-4 uppercase tracking-widest font-mono">
                    Secured via 256-bit SSL Encryption
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
