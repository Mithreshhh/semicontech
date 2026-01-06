"use client";

import { motion } from "framer-motion";

interface ProvideItem {
  title: string;
  description: string;
  image: string;
}

const provideItems: ProvideItem[] = [
  {
    title: "Industry-Standard Tools Access",
    description:
      "Get 24/7 access to the latest EDA tools used by top semiconductor companies. Master industry-standard software including Cadence, Synopsys, and Mentor Graphics tools. Our students practice on the same tools professionals use in real-world projects, ensuring seamless transition to industry roles.",
    image: "/images/undraw_electricity_iu6d.svg",
  },
  {
    title: "Expert-Led Training Programs",
    description:
      "Learn from industry veterans with 15+ years of experience in semiconductor design. Our instructors have worked at leading tech companies and bring real-world insights to the classroom. Benefit from personalized mentorship and hands-on guidance throughout your learning journey.",
    image: "/images/undraw_physics_8tvl.svg",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our courses cover everything from fundamentals to advanced topics in VLSI design. Structured learning paths ensure you build strong foundations before moving to complex concepts. Stay updated with the latest industry trends and cutting-edge technologies in semiconductor engineering.",
    image: "/images/undraw_projections_fhch.svg",
  },
  {
    title: "100% Placement Assistance",
    description:
      "We're committed to your career success. Our dedicated placement team works tirelessly to connect you with top semiconductor companies. From resume building to interview preparation, we provide comprehensive support until you secure your dream job in the industry.",
    image: "/images/undraw_project-complete_1zw5.svg",
  },
];

export function WhatWeProvide() {
  return (
    <section className="py-24 bg-lite-blue/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            What We <span className="text-electric">Provide</span>
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Comprehensive resources and support to help you succeed in your VLSI career journey.
          </p>
        </motion.div>

        {/* Alternating Content Items */}
        <div className="space-y-24">
          {provideItems.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content Section */}
                <div
                  className={`flex flex-col justify-center ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                      {item.title}
                    </h3>
                    <p className="text-navy/70 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Image Section */}
                <div
                  className={`flex items-center justify-center ${
                    !isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="w-full max-w-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

