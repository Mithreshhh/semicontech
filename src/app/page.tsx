"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Microchip, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Users, 
  Trophy, 
  Globe2,
  ArrowRight
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Banner } from "@/components/Banner";
import { TopCourses } from "@/components/TopCourses";
import { ServiceCard } from "@/components/ServiceCard";
import { ExpertCard } from "@/components/ExpertCard";
import { StatCounter } from "@/components/StatCounter";
import { Testimonials } from "@/components/Testimonials";
import { WhatWeProvide } from "@/components/WhatWeProvide";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Semiconductor Solutions",
    description: "End-to-end chip design from concept to tape-out, focusing on performance, power, and area (PPA) optimization.",
    icon: Microchip,
  },
  {
    title: "VLSI Design & Verification",
    description: "Cutting-edge RTL design, functional verification, and physical implementation for complex digital systems.",
    icon: Layers,
  },
  {
    title: "Embedded Systems",
    description: "Robust firmware and driver development for IoT, automotive, and industrial automation platforms.",
    icon: Cpu,
  },
  {
    title: "Software Development",
    description: "High-performance software engineering for hardware-software co-design and system integration.",
    icon: Code2,
  },
  {
    title: "Testing & Validation",
    description: "Rigorous post-silicon validation and compliance testing to ensure zero-defect quality.",
    icon: ShieldCheck,
  },
];

const reasons = [
  {
    title: "Expertise",
    description: "Decades of collective experience in advanced node technologies (7nm, 5nm, 3nm).",
    icon: Trophy,
  },
  {
    title: "Innovation",
    description: "Proprietary methodologies that reduce time-to-market by up to 30%.",
    icon: Zap,
  },
  {
    title: "Global Scale",
    description: "Serving tier-1 semiconductor giants across North America, Europe, and Asia.",
    icon: Globe2,
  },
  {
    title: "Client-Centric",
    description: "Customized engagement models tailored to your specific project needs and timelines.",
    icon: Users,
  },
];

const experts = [
  {
    name: "Dr. amarnath",
    role: "Head of VLSI Design",
    expertise: "7nm/5nm FinFET Optimization",
    image: "/images/profile-boy.svg",
    linkedin: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Verification Engineer",
    expertise: "UVM & Formal Verification",
    image: "/images/profile-girls.svg",
    linkedin: "#",
  },
  {
    name: "Dr. James Wilson",
    role: "Embedded Systems Architect",
    expertise: "RTOS & Automotive Safety",
    image: "/images/profile-boy.svg",
    linkedin: "#",
  },
  {
    name: "Elena Petrova",
    role: "Physical Design Manager",
    expertise: "STA & Clock Tree Synthesis",
    image: "/images/profile-girls.svg",
    linkedin: "#",
  },
];

const stats = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 500, label: "Engineers", suffix: "+" },
  { value: 200, label: "Projects Delivered", suffix: "+" },
  { value: 50, label: "Global Clients", suffix: "+" },
];

const partners = [
  { name: "AMD", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/200px-AMD_Logo.svg.png" },
  { name: "Qualcomm", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/220px-Qualcomm-Logo.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/220px-Samsung_Logo.svg.png" },
  { name: "arm", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/200px-Arm_logo_2017.svg.png" },
  { name: "Synopsys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Synopsys_Logo.svg/200px-Synopsys_Logo.svg.png" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/351px-Nvidia_logo.svg.png" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/220px-Intel_logo_%282006-2020%29.svg.png" },
  { name: "TSMC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Tsmc.svg/150px-Tsmc.svg.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <Banner />

      {/* Top Courses Section */}
      <TopCourses />

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
        <div className="absolute top-20 right-0 w-64 h-64 opacity-15 pointer-events-none">
          <img src="/images/undraw_electricity_iu6d.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-navy mb-4"
            >
              Our Core <span className="text-electric">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-navy/60 max-w-2xl mx-auto"
            >
              Comprehensive engineering solutions spanning the entire semiconductor lifecycle.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <WhatWeProvide />

      {/* Why Choose Us */}
      <section className="py-24 bg-background relative">
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none">
          <img src="/images/undraw_team-up_qeem.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6 w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 opacity-5 pointer-events-none">
          <img src="/images/undraw_select-option_6wly.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Our VLSI <span className="text-electric">Experts</span></h2>
            <p className="text-navy/60 max-w-2xl mx-auto">Meet the visionaries engineering the next generation of semiconductor technology.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <ExpertCard 
                key={expert.name} 
                {...expert} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-lite-blue/30 relative">
        <div className="absolute top-10 right-10 w-56 h-56 opacity-20 pointer-events-none">
          <img src="/images/undraw_project-complete_1zw5.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter 
                key={stat.label} 
                {...stat} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Rotating Partners strip (matches Media page) */}
      <section className="py-12 bg-lite-blue overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="object-contain max-h-12"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-electric/5 blur-3xl rounded-full translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-15 pointer-events-none">
          <img src="/images/undraw_projections_fhch.svg" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-white backdrop-blur-xl border border-electric/10 rounded-[2.5rem] shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">
              Let&apos;s Build the <span className="text-electric">Next Generation</span> of Semiconductor Solutions
            </h2>
            <Button size="lg" className="bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-12 h-16 text-xl shadow-[0_10px_30px_rgba(0,102,255,0.2)]">
              Contact Our Team <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
