"use client";

import { motion } from "framer-motion";
import { ExpertCard } from "@/components/ExpertCard";

const leadership = [
  {
    name: "Dr. Robert Vance",
    role: "Chief Executive Officer",
    expertise: "30+ years in Semiconductor Strategic Planning",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Anita Desai",
    role: "Chief Technology Officer",
    expertise: "Former Lead Architect at NVIDIA | Processor Design",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Dr. Kevin Zhang",
    role: "VP of Engineering",
    expertise: "Specialist in 3nm Gate-All-Around (GAA) Tech",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Sarah Williams",
    role: "Director of Operations",
    expertise: "Global Supply Chain & Logistics Expert",
    image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c906?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Dr. Marcus Thorne",
    role: "Head of R&D",
    expertise: "Quantum Computing Hardware Research",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Linda Geng",
    role: "Director of Quality Assurance",
    expertise: "Zero-Defect Methodology Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
];

export default function DirectorsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-lite-blue to-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
              Our <span className="text-gradient">Leadership</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto lg:mx-0">
              Guided by industry veterans and visionary engineers, SemicoreTech is committed to excellence in every dimension of semiconductor engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {leadership.map((member, index) => (
              <ExpertCard 
                key={member.name} 
                {...member} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lite-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">Our Visionary Approach</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            "At SemicoreTech, we don't just design chips; we architect the foundation of the digital world. Our leadership team brings together decades of experience from the world's leading semiconductor firms to solve the most complex engineering challenges of tomorrow."
          </p>
          <div className="mt-8 flex justify-center">
             <div className="w-16 h-1 bg-electric rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
