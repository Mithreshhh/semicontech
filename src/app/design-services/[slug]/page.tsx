"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ServiceDetail = {
  id: string;
  title: string;
  heroImage: string;
  detailImage: string;
  summary: string;
  details: string[];
  specs: string[];
};

const serviceDetails: ServiceDetail[] = [
  {
    id: "analog-layout",
    title: "Analog Layout",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=2000&auto=format&fit=crop",
    summary: "Precision layout for amplifiers, ADC/DAC blocks, and PMICs focused on matching, reliability, and manufacturability.",
    details: [
      "Device matching with common-centroid, interdigitation, and guard ring strategies tuned per block topology.",
      "Routing balanced for parasitics, EM/IR safety, and ESD structures across sensitive analog paths.",
      "Tight designer-layout collaboration for rapid iterations and silicon-correlated signoff.",
    ],
    specs: ["Mismatch aware", "Latch-up safe", "IR/EM verified", "Tape-out ready"],
  },
  {
    id: "physical-design",
    title: "Physical Design",
    heroImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    summary: "Floorplanning, PnR, CTS, STA, and signoff closure for frequency, power, and area targets on advanced nodes.",
    details: [
      "Hierarchical and flat flows with congestion-aware placement, routability improvements, and IR-safe power grids.",
      "Timing ECOs, OCV-aware signoff, and power optimization to meet PPA on schedule.",
      "DFM checks and tape-out packages coordinated with foundry requirements.",
    ],
    specs: ["PnR & CTS", "IR drop analysis", "Timing ECOs", "DFM signoff"],
  },
  {
    id: "analog-circuit-design",
    title: "Analog Circuit Design",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop",
    summary: "High-performance data converters, PLLs, LDOs, and sensor interfaces tuned for noise, linearity, and yield.",
    details: [
      "Transistor-level schematics with corners, Monte Carlo, and noise/jitter characterization for silicon confidence.",
      "Behavioral models and integration guides to accelerate SoC and firmware bring-up.",
      "Low-power and low-noise modes with calibration strategies for production robustness.",
    ],
    specs: ["Noise & jitter optimized", "Monte Carlo signoff", "Low-power modes", "Silicon correlation"],
  },
  {
    id: "asic-verification",
    title: "ASIC Verification",
    heroImage: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2000&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    summary: "Coverage-driven UVM, formal, and emulation flows to de-risk tape-out and accelerate coverage closure.",
    details: [
      "Reusable UVM environments with scoreboards, assertions, and constrained-random stimulus.",
      "Formal apps for protocol compliance, CDC/RDC, and targeted corner-case closure.",
      "Acceleration and emulation-ready benches for software-driven tests and system scenarios.",
    ],
    specs: ["UVM benches", "Formal apps", "Emulation ready", "Coverage analytics"],
  },
  {
    id: "design-for-test",
    title: "Design for Test",
    heroImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
    summary: "Scan insertion, MBIST/LBIST, ATPG, and boundary scan to ensure predictable yield and tester efficiency.",
    details: [
      "Clock/reset-friendly scan architectures with compression to minimize pattern count and tester time.",
      "MBIST/LBIST integration, JTAG/Boundary scan, and repair flows aligned with product test plans.",
      "Pattern generation, diagnostics, and bring-up support through silicon ramp.",
    ],
    specs: ["Scan/Compression", "MBIST/LBIST", "JTAG/Boundary scan", "ATPG vectors"],
  },
];

function getService(slug: string) {
  return serviceDetails.find((svc) => svc.id === slug);
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const service = getService(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 text-sm text-electric font-semibold uppercase tracking-[0.2em]">
            <Link href="/design-services" className="hover:underline">
              Design Services
            </Link>
            <span className="text-navy/40">/</span>
            <span>{service.title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-6 items-center">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-navy"
              >
                {service.title}
              </motion.h1>
              <p className="text-lg text-navy/70">{service.summary}</p>
              <div className="flex flex-wrap gap-2">
                {service.specs.map((spec) => (
                  <Badge key={spec} variant="secondary" className="bg-electric/10 text-electric">
                    {spec}
                  </Badge>
                ))}
              </div>
              <Button asChild className="bg-electric text-white hover:bg-electric/90">
                <Link href="/contact">Talk to our team</Link>
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-electric/10 shadow-2xl"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-[340px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {service.details.map((detail) => (
              <div key={detail} className="p-4 rounded-xl bg-electric/5 border border-electric/10 text-navy/80">
                {detail}
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden border border-electric/10 shadow-xl">
            <img
              src={service.detailImage}
              alt={`${service.title} detail`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

