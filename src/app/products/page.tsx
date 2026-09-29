"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Layers,
  MapPin,
  Truck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import ContactModal from "@/components/ui/ContactModal";

export default function ProductsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeThumbIndex, setActiveThumbIndex] = useState<{ [key: string]: number }>({});

  const handleThumbClick = (e: React.MouseEvent, productId: string, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveThumbIndex((prev) => ({ ...prev, [productId]: index }));
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

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#001a39] pt-28 pb-20 selection:bg-[#1CB08F] selection:text-white">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-12">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-[#44474e] mb-6"
          >
            <Link href="/" className="hover:text-[#1CB08F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1CB08F]" />
            <span className="text-[#001a39] font-bold">Products</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#F1F5F9] shadow-xs mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#44474e] uppercase">
              PROPRIETARY ENTERPRISE SUITE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#001a39] leading-[1.12] mb-6"
          >
            Purpose-Built Platforms for <br />
            <span className="text-[#1CB08F] relative inline-block">
              Industrial Scale Operations
              <svg
                className="absolute w-full h-3 -bottom-1.5 left-0 text-[#1CB08F]/25 pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#44474e] font-medium leading-relaxed max-w-3xl mb-8"
          >
            Explore COLTECH&apos;s ecosystem of field-tested enterprise software. Engineered to eliminate manual friction across site lifecycle development, verified workforce attendance, and petroleum fleet logistics.
          </motion.p>
        </div>

        {/* Value Proposition Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#F1F5F9]"
        >
          <div className="bg-white p-5 rounded-2xl border border-[#F1F5F9] shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001a39]">Offline-First Core</h4>
              <p className="text-xs text-[#44474e]">Zero downtime in zero-signal environments</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#F1F5F9] shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001a39]">GPS & Geofence Verified</h4>
              <p className="text-xs text-[#44474e]">Tamper-resistant location proof on ground</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#F1F5F9] shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1CB08F]/10 text-[#1CB08F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001a39]">Audited Ledger Sync</h4>
              <p className="text-xs text-[#44474e]">Instant reconciliation with central finance ERP</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Products Showcase Cards */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-12">
        {PRODUCTS.map((product: Product, index: number) => {
          const Icon = getProductIcon(product.id);
          const currentImageIndex = activeThumbIndex[product.id] ?? 0;
          const currentImage = product.gallery[currentImageIndex] || product.gallery[0];
          const isPortraitScreen =
            (product.id === "col-track" && currentImageIndex > 0) ||
            currentImage.src.includes("WhatsApp");

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#F1F5F9] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10">
                {/* Left Column: Product Information (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Category Tag & Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono tracking-wider text-[#1CB08F] uppercase">
                        {product.categoryTag}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#1CB08F]/10 text-[#159376] text-xs font-bold">
                        {product.badgeText}
                      </span>
                    </div>

                    {/* Product Name & Icon */}
                    <div className="flex items-start gap-3.5 pt-1">
                      <div className="w-12 h-12 rounded-2xl bg-[#001a39] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#1CB08F] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#001a39] tracking-tight group-hover:text-[#1CB08F] transition-colors">
                          <Link href={`/products/${product.slug}`} className="hover:underline">
                            {product.name}
                          </Link>
                        </h2>
                        <p className="text-sm font-semibold text-[#1CB08F] mt-1 italic">
                          &ldquo;{product.tagline}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-[#44474e] leading-relaxed pt-2">
                      {product.shortDescription}
                    </p>

                    {/* Feature Bullets (Preview of top 3) */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#001a39]">
                        Core Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#44474e]">
                            <CheckCircle2 className="w-4 h-4 text-[#1CB08F] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-[#F1F5F9] flex flex-wrap items-center gap-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="bg-[#001a39] hover:bg-[#1CB08F] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm group/btn cursor-pointer"
                    >
                      View Product & Complete Gallery
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="text-xs sm:text-sm font-bold text-[#152F52] hover:text-[#1CB08F] transition-colors flex items-center gap-1 cursor-pointer py-2 px-1"
                    >
                      Request Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Main Showcase & Small Gallery Strip (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  {/* Clickable Main Image Frame with Smooth Aspect Ratio */}
                  <Link
                    href={`/products/${product.slug}`}
                    className={`relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden border border-[#F1F5F9] shadow-inner group/img block cursor-pointer transition-colors duration-300 ${
                      isPortraitScreen
                        ? "bg-gradient-to-br from-[#001429] via-[#001a39] to-[#04244a]"
                        : "bg-[#001a39]/5"
                    }`}
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.title}
                      fill
                      className={`transition-transform duration-700 ease-out group-hover/img:scale-105 ${
                        isPortraitScreen
                          ? "object-contain p-3 sm:p-5 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                          : "object-cover object-top"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                      priority={index === 0}
                    />
                    {!isPortraitScreen && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001a39]/70 via-transparent to-transparent pointer-events-none" />
                    )}

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="bg-[#001a39]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-white max-w-[80%] shadow-lg">
                        <p className="text-xs font-semibold truncate">{currentImage.title}</p>
                        <p className="text-[11px] text-[#79f9d4] font-mono">
                          Image {currentImageIndex + 1} of {product.gallery.length} • Click to open product
                        </p>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-sm">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>

                  {/* Small Gallery Strip at the Bottom */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#44474e]">
                      <span className="font-bold tracking-wider uppercase text-[11px] text-[#001a39]">
                        Interactive Gallery Preview ({product.gallery.length} Screens)
                      </span>
                      <span className="text-[#1CB08F] font-medium">Click thumbnail to switch preview</span>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                      {product.gallery.map((img, imgIdx) => {
                        const isSelected = imgIdx === currentImageIndex;
                        const isThumbPortrait =
                          img.src.includes("WhatsApp") ||
                          (product.id === "col-track" && imgIdx > 0);

                        return (
                          <button
                            key={imgIdx}
                            onClick={(e) => handleThumbClick(e, product.id, imgIdx)}
                            className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#1CB08F] ring-2 ring-[#1CB08F]/30 scale-102 shadow-sm"
                                : "border-[#F1F5F9] hover:border-[#1CB08F]/50 opacity-70 hover:opacity-100"
                            } ${isThumbPortrait ? "bg-[#001a39]" : "bg-white"}`}
                            title={img.title}
                            aria-label={`View ${img.title}`}
                          >
                            <Image
                              src={img.src}
                              alt={img.title}
                              fill
                              className={isThumbPortrait ? "object-contain p-1" : "object-cover object-center"}
                              sizes="120px"
                            />
                            {isSelected && (
                              <div className="absolute inset-0 bg-[#1CB08F]/15 pointer-events-none" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Enterprise CTA Banner */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-[#001a39] text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CB08F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CB08F] block">
              ENTERPRISE SOFTWARE DEPLOYMENT
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Looking for a custom solution or enterprise pilot?
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Our engineering team integrates FieldSense360, COL Track, and COL TMS with your current ERP, tracker providers, and on-ground operational hardware.
            </p>
          </div>
          <div className="shrink-0 relative z-10">
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-[#1CB08F] hover:bg-[#159376] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
