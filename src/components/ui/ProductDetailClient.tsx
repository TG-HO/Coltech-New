"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Maximize2,
  Layers,
  MapPin,
  Truck,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Product, ProductImage } from "@/data/products";
import ContactModal from "./ContactModal";
import ImageLightboxModal from "./ImageLightboxModal";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getProductIcon = (id: string) => {
    switch (id) {
      case "fieldsense360":
        return Layers;
      case "col-track":
        return MapPin;
      case "col-tms":
        return Truck;
      default:
        return Sparkles;
    }
  };

  const Icon = getProductIcon(product.id);
  const heroImage = product.gallery[0];
  const featureImages = product.gallery.slice(1);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#001a39] pt-28 pb-20 selection:bg-[#1CB08F] selection:text-white">
      {/* Breadcrumb & Navigation Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-6">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold text-[#44474e]"
        >
          <Link href="/" className="hover:text-[#1CB08F] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#1CB08F]" />
          <Link href="/products" className="hover:text-[#1CB08F] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#1CB08F]" />
          <span className="text-[#001a39] font-bold">{product.shortName || product.name}</span>
        </motion.nav>
      </div>

      {/* Hero Header Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#F1F5F9]">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase font-mono">
                {product.categoryTag}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#001a39] leading-[1.15]"
            >
              {product.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg md:text-xl font-semibold text-[#1CB08F] italic"
            >
              &ldquo;{product.tagline}&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#44474e] leading-relaxed"
            >
              {product.shortDescription}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 shrink-0"
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] hover:bg-[#159376] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(28,176,143,0.39)] transition-all cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              Schedule Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/products"
              className="bg-white hover:bg-[#F1F5F9] text-[#001a39] font-bold text-sm px-6 py-4 rounded-full border border-[#F1F5F9] shadow-xs transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FULL-WIDTH HERO IMAGE (As requested) */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl overflow-hidden border border-[#F1F5F9] shadow-2xl bg-[#001a39] group cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          {/* Main Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[460px] md:h-[580px] lg:h-[660px]">
            <Image
              src={heroImage.src}
              alt={heroImage.title}
              fill
              className="object-contain md:object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Overlay Bar with Title, Caption & Zoom Button */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-none">
            <div className="bg-[#001a39]/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 text-white max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#79f9d4] font-bold block mb-1">
                HERO PREVIEW • {heroImage.title}
              </span>
              <p className="text-xs sm:text-sm text-white/80">{heroImage.caption}</p>
            </div>

            <div className="pointer-events-auto self-end sm:self-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(0);
                }}
                className="bg-[#1CB08F] hover:bg-[#159376] text-white p-3 rounded-xl shadow-lg transition-transform group-hover:scale-110 flex items-center gap-2 text-xs font-bold cursor-pointer"
                aria-label="View full resolution image"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Expand High-Res</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content: Deep-Dive Description & Operational Stages */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Long Narrative Description (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-[#F1F5F9] rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F1F5F9]">
                <div className="w-10 h-10 rounded-xl bg-[#001a39] text-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#1CB08F]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#001a39]">
                    Detailed Architecture & Workflow
                  </h2>
                  <p className="text-xs font-mono text-[#1CB08F]">Platform Technical Narrative</p>
                </div>
              </div>

              {/* Long Description Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#44474e] leading-relaxed">
                {product.longDescription.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Stage Progression Pipeline (If available) */}
            {product.stages && product.stages.length > 0 && (
              <div className="bg-white border border-[#F1F5F9] rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#1CB08F]">
                    LIFECYCLE PIPELINE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001a39]">
                    Standardized Operational Progression
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474e]">
                    Every unit moves through auditable stage gates with automated alerts, timestamping, and authorization rules.
                  </p>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#1CB08F]/30">
                  {product.stages.map((stage, sIdx) => (
                    <div key={sIdx} className="relative flex items-center gap-4">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-white border-2 border-[#1CB08F] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#1CB08F]" />
                      </div>
                      <div className="bg-[#f7f9fb] border border-[#F1F5F9] px-4 py-2.5 rounded-xl flex-1 flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-[#001a39]">
                          Stage 0{sIdx + 1}: {stage}
                        </span>
                        <span className="text-[11px] font-mono text-[#1CB08F] font-semibold">
                          Audited Milestone
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Features & Technical Specifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Key Features Card */}
            <div className="bg-white border border-[#F1F5F9] rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#1CB08F]">
                  CAPABILITY MATRIX
                </span>
                <h3 className="text-xl font-bold text-[#001a39]">Key Features & Capabilities</h3>
              </div>

              <div className="space-y-3.5">
                {product.keyFeatures.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-[#f7f9fb] border border-[#F1F5F9] hover:border-[#1CB08F]/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#1CB08F]/15 text-[#1CB08F] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#001a39] leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Deployment Ready Card */}
            <div className="bg-[#001a39] text-white rounded-3xl p-8 shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1CB08F]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-2 relative z-10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1CB08F] font-bold">
                  INTEGRATION & SECURITY
                </span>
                <h4 className="text-lg font-bold">Enterprise Architecture Ready</h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Engineered with isolated microservices, high-throughput database sync, automated backup failovers, and REST/WebSocket APIs for seamless integration with your current SAP/Oracle ERPs.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#1CB08F]" />
                  <span>Granular Role-Based Access Control (RBAC)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <Zap className="w-4 h-4 text-[#1CB08F]" />
                  <span>Offline-First SQLite / IndexedDB Local Sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                  <Clock className="w-4 h-4 text-[#1CB08F]" />
                  <span>Sub-Second Telemetry Verification</span>
                </div>
              </div>

              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full bg-[#1CB08F] hover:bg-[#159376] text-white font-bold text-xs sm:text-sm py-3.5 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md relative z-10"
              >
                Request Deployment Proposal
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE GALLERY SECTION (As requested: "below the description in a grid or carousel") */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#F1F5F9]">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#1CB08F]">
                COMPLETE PLATFORM SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001a39] tracking-tight mt-1">
                Visual Gallery & Feature Breakdown
              </h2>
              <p className="text-xs sm:text-sm text-[#44474e] mt-1">
                Click any screenshot below to inspect the interface in full resolution.
              </p>
            </div>

            <div className="text-xs font-mono text-[#1CB08F] bg-[#1CB08F]/10 px-3.5 py-1.5 rounded-full self-start sm:self-auto font-bold">
              {product.gallery.length} High-Definition Screens
            </div>
          </div>

          {/* Grid of All Gallery Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.gallery.map((img: ProductImage, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => openLightbox(idx)}
                className="bg-white border border-[#F1F5F9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="relative w-full h-56 sm:h-64 bg-[#001a39]/5 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#001a39]/0 group-hover:bg-[#001a39]/30 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#001a39] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100">
                      <Maximize2 className="w-5 h-5 text-[#1CB08F]" />
                    </div>
                  </div>

                  {img.isHero && (
                    <span className="absolute top-3 left-3 bg-[#001a39]/80 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-0.5 rounded-md border border-white/10">
                      Hero Screen
                    </span>
                  )}
                </div>

                {/* Caption Bar */}
                <div className="p-4 sm:p-5 space-y-1.5 border-t border-[#F1F5F9]">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors truncate">
                      {img.title}
                    </h4>
                    <span className="text-[11px] font-mono text-[#1CB08F] shrink-0">
                      Screen {idx + 1}
                    </span>
                  </div>
                  {img.caption && (
                    <p className="text-xs text-[#44474e] line-clamp-2 leading-relaxed">
                      {img.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products Discovery Strip */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-white border border-[#F1F5F9] rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#1CB08F]">
                DISCOVER MORE
              </span>
              <h3 className="text-xl font-bold text-[#001a39]">Explore Other COLTECH Products</h3>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-bold text-[#1CB08F] hover:underline flex items-center gap-1"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.id !== "fieldsense360" && (
              <Link
                href="/products/fieldsense360"
                className="p-5 rounded-2xl bg-[#f7f9fb] border border-[#F1F5F9] hover:border-[#1CB08F]/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-base font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                    FieldSense360
                  </h4>
                  <p className="text-xs text-[#44474e] mt-1">
                    End-to-end site development lifecycle, live pipeline & audits.
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1CB08F] group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {product.id !== "col-track" && (
              <Link
                href="/products/col-track"
                className="p-5 rounded-2xl bg-[#f7f9fb] border border-[#F1F5F9] hover:border-[#1CB08F]/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-base font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                    COL Track
                  </h4>
                  <p className="text-xs text-[#44474e] mt-1">
                    GPS-verified field attendance, selfie verification & journey tracking.
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1CB08F] group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {product.id !== "col-tms" && (
              <Link
                href="/products/col-tms"
                className="p-5 rounded-2xl bg-[#f7f9fb] border border-[#F1F5F9] hover:border-[#1CB08F]/40 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-base font-bold text-[#001a39] group-hover:text-[#1CB08F] transition-colors">
                    COL TMS — Transport Management System
                  </h4>
                  <p className="text-xs text-[#44474e] mt-1">
                    From depot to delivery — fuel logistics, trip tracking & built-in P&L.
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#1CB08F] group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        images={product.gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Contact / Consultation Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
