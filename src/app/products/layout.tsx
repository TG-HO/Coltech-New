import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Products & Platforms | COLTECH",
  description:
    "Explore COLTECH's suite of proprietary enterprise platforms: FieldSense360 for site lifecycle management, COL Track for GPS-verified workforce tracking, and COL TMS for petroleum fleet logistics.",
  openGraph: {
    title: "Enterprise Software Products & Platforms | COLTECH",
    description:
      "Explore COLTECH's suite of proprietary enterprise platforms: FieldSense360 for site lifecycle management, COL Track for GPS-verified workforce tracking, and COL TMS for petroleum fleet logistics.",
    url: "https://coltech.co/products",
  },
  alternates: {
    canonical: "https://coltech.co/products",
  },
};

export default function ProductsLayout({
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
            "@type": "ItemList",
            "name": "COLTECH Enterprise Products",
            "description":
              "Proprietary enterprise platforms for site development lifecycle, GPS-verified attendance, and petroleum logistics.",
            "itemListElement": [
              {
                "@type": "SoftwareApplication",
                "position": 1,
                "name": "FieldSense360",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "description":
                  "All-in-one platform for managing the entire site development lifecycle with field audits and offline-first mobile app."
              },
              {
                "@type": "SoftwareApplication",
                "position": 2,
                "name": "COL Track",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, Android",
                "description":
                  "GPS-verified field attendance and visit-tracking solution with live-location selfies and manager approvals."
              },
              {
                "@type": "SoftwareApplication",
                "position": 3,
                "name": "COL TMS — Fuel & Fleet Transport Management System",
                "applicationCategory": "LogisticsApplication",
                "operatingSystem": "Web, Android",
                "description":
                  "End-to-end transport management system for fuel and tanker logistics connecting dispatch, drivers, and financial ledgers."
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
