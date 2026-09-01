import HeroSection from "@/components/ui/HeroSection";
import TrustBar from "@/components/ui/TrustBar";
import EnterpriseEcosystem from "@/components/ui/EnterpriseEcosystem";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col gap-12 md:gap-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      {/* 1. Hero Section with 3D Mini Robot and Decrypt Text */}
      <HeroSection />

      {/* 2. Enterprise Trust Bar */}
      <TrustBar />

      {/* 3. Bento Grid: Enterprise Ecosystem */}
      <EnterpriseEcosystem />
    </main>
  );
}
