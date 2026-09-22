export default function HeroText() {
  return (
    <div className="flex flex-col items-start gap-5 w-full">
      {/* Badge: BEYOND THE DIGITAL */}
      <div className="inline-flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] shrink-0" />
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#001a39] uppercase">
          BEYOND THE DIGITAL
        </span>
      </div>

      {/* Primary H1 Headline */}
      <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] text-[#001a39] max-w-xl leading-[1.18] tracking-tight">
        Future-Ready Technology <br className="hidden sm:inline" />
        for Scalable Growth.
      </h1>

      {/* Lead Paragraph */}
      <p className="text-sm sm:text-base md:text-base text-[#44474e] font-normal leading-relaxed max-w-lg">
        Empowering businesses through custom software, smart pump automation, and secure end-to-end IT infrastructure.
      </p>
    </div>
  );
}

