"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type DesignService = {
  id: string;
  title: string;
  summary: string;
  image: string;
  detailImage: string;
  details: string;
  specs: string[];
};

const designServices: DesignService[] = [
  {
    id: "analog-layout",
    title: "Analog Layout",
    summary: "Precision layout for amplifiers, ADC/DAC blocks, and power management IP with reliability and mismatch in mind.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1600&auto=format&fit=crop",
    details: "Device matching, common-centroid strategies, and EM/IR-safe routing ensure robust silicon. We partner closely with circuit designers to iterate rapidly and meet tight performance targets.",
    specs: ["Mismatch aware layout", "Latch-up safe", "IR/EM verified", "Tape-out ready"],
  },
  {
    id: "physical-design",
    title: "Physical Design",
    summary: "Floorplanning, PnR, CTS, STA, and signoff closure for high-frequency and low-power SoCs.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    details: "From block-level implementation to full-chip assembly, we drive congestion-free layouts, robust power delivery, and repeatable timing/power closure on advanced nodes.",
    specs: ["PnR & CTS", "IR drop analysis", "Timing ECOs", "DFM signoff"],
  },
  {
    id: "analog-circuit-design",
    title: "Analog Circuit Design",
    summary: "High-performance data converters, PLLs, LDOs, and sensor interfaces optimized for noise, linearity, and yield.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    details: "We deliver transistor-level schematics, simulation collateral, and silicon-correlated models with corners/Monte Carlo signoff for production-ready analog IP.",
    specs: ["Noise & jitter optimized", "Monte Carlo signoff", "Low-power modes", "Silicon correlation"],
  },
  {
    id: "asic-verification",
    title: "ASIC Verification",
    summary: "Coverage-driven UVM, formal, and emulation flows to de-risk tape-out and accelerate coverage closure.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    details: "We build reusable verification IP, assertions, and scoreboards with constrained-random and directed test strategies to achieve measurable coverage and bug-find rates.",
    specs: ["UVM testbenches", "Formal apps", "Emulation ready", "Coverage analytics"],
  },
  {
    id: "design-for-test",
    title: "Design for Test",
    summary: "Scan insertion, MBIST/LBIST, ATPG, and boundary scan to guarantee manufacturability and predictable yield.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop",
    details: "We integrate DFT early with clock/reset strategies, compression, and pattern generation to cut tester time while preserving performance.",
    specs: ["Scan/Compression", "MBIST/LBIST", "JTAG/Boundary scan", "ATPG vectors"],
  },
];

export default function DesignServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric mb-4">
              Design Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
              Specialized VLSI & ASIC <span className="text-electric">Design Services</span>
            </h1>
            <p className="text-lg text-navy/70 max-w-3xl">
              Explore our core silicon design offerings. Each domain comes with deep expertise, reference collateral, and a rapid engagement model. Click any service to see detailed capabilities and specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="h-full overflow-hidden border-electric/10 shadow-sm hover:shadow-xl hover:shadow-electric/10 transition-all duration-300">
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                    <CardDescription className="text-navy/70">{service.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.specs.map((spec) => (
                        <Badge key={spec} variant="secondary" className="bg-electric/10 text-electric">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-electric text-white hover:bg-electric/90">
                      <Link href={`/design-services/${service.id}`}>
                        View detailed info
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

