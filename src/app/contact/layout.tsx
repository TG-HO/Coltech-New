import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Enterprise Engineering Desk | COLTECH",
  description: "Direct engineering consultation for industrial automation, fuel forecourt telemetry, and enterprise ERP infrastructure. Karachi HQ: Bahria Complex 4, Clifton.",
  openGraph: {
    title: "Contact Enterprise Engineering Desk | COLTECH",
    description: "Direct engineering consultation for industrial automation, fuel forecourt telemetry, and enterprise ERP infrastructure. Karachi HQ: Bahria Complex 4, Clifton.",
    url: "https://coltech.co/contact",
  },
  alternates: {
    canonical: "https://coltech.co/contact",
  },
};

export default function ContactLayout({
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
            "@type": "ContactPage",
            "name": "COLTECH Enterprise Contact Desk",
            "mainEntity": {
              "@type": "Organization",
              "name": "Circle of Life (COL) Technologies (COLTECH)",
              "telephone": "+92-301-1184219",
              "email": "info@coltech.co",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office # 1, 1st Floor, Bahria Complex 4, Left Wing, Clifton",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
