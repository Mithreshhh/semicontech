"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AnimatedHero } from "@/components/ui/animated-hero";

// Dynamically import the modal with SSR disabled to prevent hydration issues
const EnrollmentModal = dynamic(
  () => import("@/components/EnrollmentModal").then((mod) => ({ default: mod.EnrollmentModal })),
  { ssr: false }
);

export function Hero() {
  return (
    <>
      <EnrollmentModal />
      <section className="relative min-h-screen w-full flex items-start justify-center overflow-hidden pt-8 md:pt-12 pb-12">
        {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
          <div className="absolute inset-0 bg-black/50" />
      </div>

        {/* Animated Hero Content */}
        <div className="relative z-10 w-full flex justify-center">
          <AnimatedHero
            titles={["Advanced", "Innovative", "Cutting-Edge", "Next-Gen", "Revolutionary"]}
            subtitle="Advanced Semiconductor, VLSI, Embedded & Software Engineering solutions for the next generation of technology."
            primaryButtonText="Talk to Our Experts"
            secondaryButtonText="Explore Our Services"
            badgeText="Next-Gen VLSI Solutions"
          />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-navy/40 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-electric to-transparent" />
      </motion.div>
    </section>
    </>
  );
}
