"use client";

import {
  SiFlutter,
  SiDotnet,
  SiLaravel,
  SiPhp,
  SiCisco,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import { Database, Cloud, Network, Server } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name: "Flutter",
    icon: <SiFlutter className="w-5 h-5 text-[#02569B]" />,
  },
  {
    name: ".NET Core",
    icon: <SiDotnet className="w-5 h-5 text-[#512BD4]" />,
  },
  {
    name: "Microsoft SQL Server",
    icon: <Database className="w-5 h-5 text-[#CC292B]" />,
  },
  {
    name: "Microsoft Azure",
    icon: <Cloud className="w-5 h-5 text-[#0078D4]" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-5 h-5 text-[#FF2D20]" />,
  },
  {
    name: "PHP 8+",
    icon: <SiPhp className="w-5 h-5 text-[#777BB4]" />,
  },
  {
    name: "Cisco Networking",
    icon: <SiCisco className="w-5 h-5 text-[#1BA0D7]" />,
  },
  {
    name: "Mikrotik RouterOS",
    icon: <Network className="w-5 h-5 text-[#2E3192]" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5 text-[#000000]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" />,
  },
  {
    name: "Edge IoT / RS-485",
    icon: <Server className="w-5 h-5 text-[#1CB08F]" />,
  },
];

export default function TechStackStrip() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="w-full py-6 md:py-8 max-w-7xl mx-auto flex flex-col gap-4 overflow-hidden">
      {/* Clean Header Without Badge Pill */}
      <div className="text-center space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-[#001a39] tracking-tight">
          Enterprise Technology Stack
        </h3>
        <p className="text-xs sm:text-sm text-[#44474e]">
          Built on proven frameworks engineered for offline resilience and zero downtime.
        </p>
      </div>

      {/* Marquee Strip Container */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#f7f9fb] via-[#f7f9fb]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#f7f9fb] via-[#f7f9fb]/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Infinite Ticker */}
        <div className="animate-marquee gap-4">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-full border border-[#F1F5F9] shadow-xs hover:border-[#1CB08F]/50 hover:shadow-sm transition-all shrink-0 cursor-default select-none"
            >
              <span className="shrink-0">{tech.icon}</span>
              <span className="text-xs font-bold text-[#001a39] whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
