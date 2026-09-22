import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physical IT Infrastructure, High-Density Networking & AI CCTV | COLTECH",
  description: "Turnkey enterprise server room design, certified structured cabling, zero-trust VLAN segmentation, and AI-powered optical surveillance networks.",
  openGraph: {
    title: "Physical IT Infrastructure, High-Density Networking & AI CCTV | COLTECH",
    description: "Turnkey enterprise server room design, certified structured cabling, zero-trust VLAN segmentation, and AI-powered optical surveillance networks.",
    url: "https://coltech.co/infrastructure",
  },
  alternates: {
    canonical: "https://coltech.co/infrastructure",
  },
};

export default function InfrastructureLayout({
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
            "name": "Physical IT Infrastructure, High-Density Networking & AI CCTV",
            "provider": {
              "@type": "Organization",
              "name": "Circle of Life (COL) Technologies (COLTECH)"
            },
            "description": "Turnkey enterprise server room design, certified structured cabling, zero-trust VLAN segmentation, and AI-powered optical surveillance networks."
          })
        }}
      />
      {children}
    </>
  );
}
