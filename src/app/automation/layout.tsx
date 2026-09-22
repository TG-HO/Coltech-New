import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Forecourt & Fuel Pump Automation Systems | COLTECH",
  description: "Eliminate fuel variance, manual logbook errors, and revenue leakage with COLTECH's real-time fuel dispenser telemetry and automated wetstock ERP.",
  openGraph: {
    title: "Smart Forecourt & Fuel Pump Automation Systems | COLTECH",
    description: "Eliminate fuel variance, manual logbook errors, and revenue leakage with COLTECH's real-time fuel dispenser telemetry and automated wetstock ERP.",
    url: "https://coltech.co/automation",
  },
  alternates: {
    canonical: "https://coltech.co/automation",
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Smart Forecourt & Fuel Pump Automation Systems",
            "provider": {
              "@type": "Organization",
              "name": "Circle of Life (COL) Technologies (COLTECH)"
            },
            "description": "Eliminate fuel variance, manual logbook errors, and revenue leakage with COLTECH's real-time fuel dispenser telemetry and automated wetstock ERP."
          })
        }}
      />
      {children}
    </>
  );
}
