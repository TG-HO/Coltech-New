import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Services & Solutions | COLTECH",
  description: "End-to-End Enterprise Automation & IT Infrastructure. Architecting bespoke software, edge telemetry, smart forecourt loops, AI vision, and high-density networking.",
  openGraph: {
    title: "Enterprise Services & Solutions | COLTECH",
    description: "Architecting bespoke software, edge telemetry, smart pump automation, AI computer vision, and high-density physical networking.",
    url: "https://coltech.co/services",
  },
};

export default function ServicesLayout({
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
            "name": "Enterprise Services & Solutions",
            "provider": {
              "@type": "Organization",
              "name": "COLTECH"
            },
            "description": "End-to-End Enterprise Automation & IT Infrastructure. Architecting bespoke software, edge telemetry, smart forecourt loops, AI vision, and high-density networking.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "COLTECH Core Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Smart Pump & Forecourt Automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software & ERP Architecture"
                  }
                },
                // Temporarily commented for restoration:
                // {
                //   "@type": "Offer",
                //   "itemOffered": {
                //     "@type": "Service",
                //     "name": "AI & Computer Vision Systems"
                //   }
                // },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Physical Infrastructure & High-Density Networking"
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
}
