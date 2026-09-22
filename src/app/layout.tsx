import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coltech.co"),
  title: "COLTECH | Industrial Automation, Enterprise ERP & Infrastructure Engineering",
  description: "COLTECH delivers end-to-end mission-critical digital systems, smart fuel pump automation, custom enterprise software, and robust physical IT infrastructure.",
  keywords: [
    "fuel pump automation Pakistan",
    "forecourt automation systems",
    "enterprise ERP software",
    "IT infrastructure Karachi",
    "industrial IoT solutions",
    "retail POS systems",
    "Taj Gasoline technology partner"
  ],
  authors: [{ name: "Circle of Life (COL) Technologies" }],
  creator: "COLTECH",
  publisher: "Circle of Life (COL) Technologies",
  icons: {
    icon: [
      { url: "/Col Logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/Col Logo.svg",
    apple: "/Col Logo.svg",
  },
  openGraph: {
    title: "COLTECH | Industrial Automation, Enterprise ERP & Infrastructure Engineering",
    description: "Engineering the future of industrial automation, smart pump forecourts, custom enterprise ERPs, and high-density networking.",
    images: ["/Col Logo.svg"],
    url: "https://coltech.co",
    siteName: "COLTECH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLTECH | Industrial Automation, Enterprise ERP & Infrastructure Engineering",
    description: "Mission-critical digital infrastructure, smart pump automation, and enterprise ERP architectures.",
  },
  alternates: {
    canonical: "https://coltech.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Circle of Life (COL) Technologies",
              "alternateName": ["COLTECH", "Circle of Life Technologies"],
              "legalName": "Circle of Life (COL) Technologies",
              "url": "https://coltech.co",
              "foundingDate": "2024",
              "logo": "https://coltech.co/Col Logo.svg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office # 1, 1st Floor, Bahria Complex 4, Left Wing, Clifton",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92 301 1184219",
                "email": "info@coltech.co",
                "contactType": "corporate sales and technical support"
              },
              "knowsAbout": [
                "Smart Fuel Pump & Forecourt Automation Systems",
                "Automated Tank Gauging ATG Wetstock Reconciliation",
                "Enterprise Resource Planning ERP Architecture",
                "High-Throughput Offline-First Retail POS Platforms",
                "Certified Cat6A and Fiber Optic Physical Infrastructure",
                "Zero-Trust Layer-3 Network Security & SD-WAN Failover",
                "Edge Computer Vision and ANPR Optical Telemetry"
              ],
              "customer": {
                "@type": "Organization",
                "name": "Taj Gasoline"
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.className} font-sans bg-brand-light text-brand-navy antialiased selection:bg-brand-turquoise selection:text-white overflow-x-hidden min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" richColors theme="light" />
      </body>
    </html>
  );
}
