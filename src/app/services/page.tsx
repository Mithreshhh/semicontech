"use client";

import { motion } from "framer-motion";
import { 
  Microchip, 
  Layers, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Search, 
  Settings, 
  Workflow
} from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const detailedServices = [
  {
    title: "Semiconductor Solutions",
    description: "Full-spectrum ASIC and SoC design services. We handle everything from architectural specification and RTL design to physical implementation and tape-out on advanced process nodes.",
    icon: Microchip,
  },
  {
    title: "VLSI Verification",
    description: "Comprehensive functional verification using UVM, formal methods, and hardware acceleration. We ensure your silicon is bug-free and meets all architectural specifications.",
    icon: Layers,
  },
  {
    title: "Physical Design",
    description: "Expert floorplanning, placement, routing, and timing closure for high-performance chips. Specializing in low-power design and advanced signal integrity analysis.",
    icon: Settings,
  },
  {
    title: "Embedded Software",
    description: "Custom firmware development, RTOS integration, and device driver optimization. We bridge the gap between hardware and software with high-efficiency code.",
    icon: Cpu,
  },
  {
    title: "Systems Integration",
    description: "Complex system-level design and integration for automotive, industrial, and consumer electronics. We handle hardware-software co-design challenges.",
    icon: Workflow,
  },
  {
    title: "Post-Silicon Validation",
    description: "Rigorous testing and debugging of hardware in real-world scenarios. We provide comprehensive characterization and compliance testing services.",
    icon: ShieldCheck,
  },
  {
    title: "Analog & Mixed-Signal",
    description: "Design and layout of precision analog circuits, data converters, and power management units. Integrated seamlessly with digital cores.",
    icon: Search,
  },
  {
    title: "Software Tools",
    description: "Development of custom EDA tools and automation scripts to accelerate design workflows and improve productivity across teams.",
    icon: Code2,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Sub-page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
              Our Engineering <span className="text-electric">Expertise</span>
            </h1>
            <p className="text-navy/60 text-lg max-w-2xl">
              From initial concept to final silicon, we provide comprehensive semiconductor and VLSI solutions that push the boundaries of what's possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
                delay={index * 0.05} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities section */}
      <section className="py-24 bg-lite-blue/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
                Advanced Node <span className="text-electric">Capabilities</span>
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Process Nodes", value: "3nm, 5nm, 7nm, 12nm, 16nm, 28nm" },
                  { label: "IP Domains", value: "PCIe, DDR, USB, Ethernet, MIPI" },
                  { label: "Design Tools", value: "Cadence, Synopsys, Siemens EDA" },
                  { label: "Sectors", value: "AI/ML, Automotive, IoT, 5G, Data Center" }
                ].map((item) => (
                  <div key={item.label} className="border-b border-electric/10 pb-4">
                    <span className="text-electric text-xs font-bold uppercase tracking-widest block mb-1">{item.label}</span>
                    <span className="text-navy text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-electric/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1591444072345-b79e7bbbb308?q=80&w=2070&auto=format&fit=crop" 
                alt="Semiconductor Clean Room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-electric/5" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
