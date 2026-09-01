"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Pump Automation", href: "/automation" },
    { label: "Software", href: "/software" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl rounded-full bg-white/85 backdrop-blur-xl border border-white/60 shadow-lg shadow-[#001a39]/5 flex justify-between items-center px-6 md:px-8 py-3 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2.5" : ""
      }`}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-full bg-white border border-[#F1F5F9] shadow-xs flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/Col Logo.svg"
              alt="COLTECH Logo"
              width={24}
              height={24}
              className="h-5 w-auto object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl md:text-2xl text-[#001a39] tracking-tight leading-none">
            COL<span className="text-[#1CB08F]">TECH</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#44474e]">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 hover:text-[#1CB08F] relative py-1 ${
                  isActive ? "text-[#1CB08F] font-bold" : ""
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1CB08F] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block bg-[#001a39] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#152f52] active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#001a39] p-1.5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-[#F1F5F9] rounded-2xl p-6 shadow-2xl z-40 md:hidden flex flex-col gap-3"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                    isActive ? "text-[#1CB08F] bg-[#1CB08F]/10" : "text-[#001a39] hover:bg-[#F1F5F9]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-[#1CB08F] text-white py-3 rounded-xl font-bold text-center mt-2 shadow-md hover:bg-[#159376] transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
