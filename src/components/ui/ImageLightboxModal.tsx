"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductImage } from "@/data/products";

interface ImageLightboxModalProps {
  isOpen: boolean;
  images: ProductImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxModalProps) {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#001a39]/90 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-4 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#1CB08F] text-white transition-all backdrop-blur-sm cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Navigation Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % images.length);
              }}
              className="absolute right-4 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#1CB08F] text-white transition-all backdrop-blur-sm cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image & Caption Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                className="object-contain p-2"
                priority
                sizes="100vw"
              />
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-4 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center max-w-2xl">
              <div className="text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                <span>{currentImage.title}</span>
                <span className="text-[#1CB08F] text-xs font-mono">
                  ({currentIndex + 1} / {images.length})
                </span>
              </div>
              {currentImage.caption && (
                <p className="text-white/70 text-xs sm:text-sm mt-1">{currentImage.caption}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
