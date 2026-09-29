import HeroSection from "@/components/ui/HeroSection";
import EnterpriseEcosystem from "@/components/ui/EnterpriseEcosystem";
import HomeProductsShowcase from "@/components/ui/HomeProductsShowcase";
import IndustriesWeServe from "@/components/ui/IndustriesWeServe";
import HowWeWork from "@/components/ui/HowWeWork";
import TechStackStrip from "@/components/ui/TechStackStrip";
import HomeTestimonial from "@/components/ui/HomeTestimonial";
import HomeContactAndCTA from "@/components/ui/HomeContactAndCTA";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col gap-8 md:gap-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pb-10">
      {/* 1. Hero Section with 3D Mini Robot and Decrypt Text */}
      <HeroSection />

      {/* 2. Bento Grid: Enterprise Services Overview (Seamless transition with no gap) */}
      <div className="-mt-4 md:-mt-8">
        <EnterpriseEcosystem />
      </div>

      {/* 3. Products Showcase: Real Working Systems with Screenshots */}
      <HomeProductsShowcase />

      {/* 4. Industries We Serve (3 Wide, Short Cards) */}
      <IndustriesWeServe />

      {/* 5. How We Work: 4-Step Low-Risk Engagement */}
      <HowWeWork />

      {/* 6. Battle-Tested Tech Stack Animated Strip */}
      <TechStackStrip />

      {/* 7. Strategic Anchor Testimonial (Hidden as requested; preserved for restoration):
      <HomeTestimonial />
      */}

      {/* 8. Final CTA Band & Short Homepage Consultation Form */}
      <HomeContactAndCTA />
    </main>
  );
}
