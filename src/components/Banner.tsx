"use client";

import Marquee from "react-fast-marquee";

const bannerItems = [
  "Semiconductor Design Services",
  "VLSI Engineering Expertise",
  "Embedded Systems Solutions",
  "ASIC & FPGA Design",
  "System-on-Chip (SoC) Innovation",
  "Physical Design & Verification",
  "Custom Analog Layout",
];

export function Banner() {
  return (
    <div className="bg-cyan py-4 overflow-hidden border-y border-navy/10 relative z-20">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="/images/undraw_physics_8tvl.svg" alt="" className="w-full h-full object-cover" />
      </div>
      <Marquee speed={50} gradient={false}>
        {bannerItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 px-12">
            <span className="text-navy font-heading font-bold uppercase tracking-widest text-sm md:text-base">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-navy/30" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
