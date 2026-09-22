import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About COLTECH | Pioneering Industrial Automation & Enterprise Solutions",
  description: "Learn about Circle of Life Technologies (COLTECH), established in 2024 to modernize enterprise infrastructure, fuel retail operations, and IT automation.",
  openGraph: {
    title: "About COLTECH | Pioneering Industrial Automation & Enterprise Solutions",
    description: "Learn about Circle of Life Technologies (COLTECH), established in 2024 to modernize enterprise infrastructure, fuel retail operations, and IT automation.",
    url: "https://coltech.co/about",
  },
  alternates: {
    canonical: "https://coltech.co/about",
  },
};

export default function AboutLayout({
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
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Circle of Life (COL) Technologies (COLTECH)",
                "alternateName": "Circle of Life Technologies",
                "description": "Pioneering industrial automation, smart forecourt telemetry, custom enterprise ERPs, and mission-critical physical infrastructure.",
                "url": "https://coltech.co"
              }
            })
          }}
        />
      {children}
    </>
  );
}
