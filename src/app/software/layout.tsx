import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Enterprise Software & High-Throughput POS Systems | COLTECH",
  description: "Scalable, high-reliability enterprise software, custom ERP platforms, and offline-first POS solutions engineered for high concurrency and zero downtime.",
  openGraph: {
    title: "Bespoke Enterprise Software & High-Throughput POS Systems | COLTECH",
    description: "Scalable, high-reliability enterprise software, custom ERP platforms, and offline-first POS solutions engineered for high concurrency and zero downtime.",
    url: "https://coltech.co/software",
  },
  alternates: {
    canonical: "https://coltech.co/software",
  },
};

export default function SoftwareLayout({
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
            "name": "Bespoke Enterprise Software & High-Throughput POS Systems",
            "provider": {
              "@type": "Organization",
              "name": "Circle of Life (COL) Technologies (COLTECH)"
            },
            "description": "Scalable, high-reliability enterprise software, custom ERP platforms, and offline-first POS solutions engineered for high concurrency and zero downtime."
          })
        }}
      />
      {children}
    </>
  );
}
