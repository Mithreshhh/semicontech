"use client";

import { motion } from "framer-motion";
import { Handshake, Newspaper, Award, ExternalLink } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/351px-Nvidia_logo.svg.png",
    description: "Strategic partnership for AI accelerator development",
    category: "Technology Partner",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/220px-Intel_logo_%282006-2020%29.svg.png",
    description: "Collaboration on advanced node process development",
    category: "Manufacturing Partner",
  },
  {
    name: "TSMC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Tsmc.svg/150px-Tsmc.svg.png",
    description: "Foundry partner for leading-edge semiconductor fabrication",
    category: "Foundry Partner",
  },
  {
    name: "AMD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/200px-AMD_Logo.svg.png",
    description: "Joint ventures in high-performance computing solutions",
    category: "Technology Partner",
  },
  {
    name: "Qualcomm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/220px-Qualcomm-Logo.svg.png",
    description: "Partnership in mobile SoC design and verification",
    category: "Design Partner",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/220px-Samsung_Logo.svg.png",
    description: "Collaborative R&D in memory solutions",
    category: "Manufacturing Partner",
  },
  {
    name: "ARM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/200px-Arm_logo_2017.svg.png",
    description: "Licensed architecture partner for custom cores",
    category: "IP Partner",
  },
  {
    name: "Synopsys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Synopsys_Logo.svg/200px-Synopsys_Logo.svg.png",
    description: "EDA tools and verification IP provider",
    category: "Tool Partner",
  },
];

const mediaFeatures = [
  {
    publication: "TechCrunch",
    title: "SemicoreTech Leads Innovation in 3nm Chip Design",
    date: "November 2025",
    link: "#",
  },
  {
    publication: "IEEE Spectrum",
    title: "How SemicoreTech is Revolutionizing AI Hardware",
    date: "October 2025",
    link: "#",
  },
  {
    publication: "Bloomberg",
    title: "Semiconductor Startup Raises $500M in Series D",
    date: "September 2025",
    link: "#",
  },
  {
    publication: "Wired",
    title: "The Future of Computing: Inside SemicoreTech's Labs",
    date: "August 2025",
    link: "#",
  },
];

const awards = [
  { title: "Best Semiconductor Innovation 2025", org: "Global Tech Awards" },
  { title: "Excellence in Engineering", org: "IEEE" },
  { title: "Top 50 Tech Companies", org: "Forbes" },
  { title: "Sustainability Leader", org: "GreenTech Council" },
];

export default function MediaPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-lite-blue to-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 bg-electric/10 text-electric text-sm font-semibold rounded-full mb-6"
            >
              Partners & Press
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
              Media & <span className="text-gradient">Partners</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We collaborate with industry leaders and have been featured in leading publications 
              worldwide. Discover our partnerships and media presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake className="w-8 h-8 text-electric" />
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Partners</h2>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Trusted by the world&apos;s leading technology companies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-electric/10 hover:border-electric/30 transition-all duration-300"
              >
                <div className="relative h-16 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-12"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold text-electric/70 uppercase tracking-wider">
                    {partner.category}
                  </span>
                  <h3 className="font-bold text-navy mt-1">{partner.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="py-12 bg-lite-blue overflow-hidden">
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={50}
                  className="object-contain h-8"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Newspaper className="w-8 h-8 text-electric" />
              <h2 className="text-3xl md:text-4xl font-bold text-navy">In The News</h2>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Featured in leading technology and business publications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.a
                key={feature.title}
                href={feature.link}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-start gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-lg shadow-gray-100/50 hover:shadow-xl hover:border-electric/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-electric to-cyan rounded-xl flex items-center justify-center shadow-lg shadow-electric/20">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-electric font-semibold text-sm">{feature.publication}</span>
                  <h3 className="font-bold text-navy text-lg mt-1 group-hover:text-electric transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{feature.date}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-electric transition-colors flex-shrink-0 mt-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-gradient-to-b from-white to-lite-blue">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-electric" />
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Awards & Recognition</h2>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Recognized for excellence in innovation and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-navy text-sm">{award.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-lite-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Interested in Partnership?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We&apos;re always looking to collaborate with innovative companies and organizations. 
              Let&apos;s build the future of semiconductors together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-electric text-white font-semibold rounded-full shadow-lg shadow-electric/30 hover:shadow-xl hover:shadow-electric/40 transition-shadow"
            >
              Contact Our Partnership Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

