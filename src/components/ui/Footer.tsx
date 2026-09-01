"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#001a39] text-white border-t border-[#152f52] flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 gap-8 mt-16">
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="bg-white p-1 rounded-full flex items-center justify-center">
              <Image
                src="/Col Logo.svg"
                alt="COLTECH Logo"
                width={22}
                height={22}
                className="h-4 w-auto object-contain"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              COL<span className="text-[#1CB08F]">TECH</span>
            </span>
          </Link>
          <p className="text-sm text-[#8097c0] max-w-md">
            &copy; {new Date().getFullYear()} COLTECH. All rights reserved. Engineering the Circle of Life Technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-[#8097c0]">
          <Link href="/privacy-policy" className="hover:text-[#79f9d4] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#79f9d4] transition-colors">
            Terms of Service
          </Link>
          <Link href="/compliance" className="hover:text-[#79f9d4] transition-colors">
            Compliance
          </Link>
          <button
            onClick={() => setIsContactOpen(true)}
            className="hover:text-[#79f9d4] transition-colors cursor-pointer"
          >
            Global Support
          </button>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
