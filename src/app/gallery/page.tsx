"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Filter } from "lucide-react";
import Image from "next/image";

const categories = [
  { id: "all", label: "All" },
  { id: "lab", label: "Lab & Facilities" },
  { id: "team", label: "Team & Events" },
  { id: "tech", label: "Technology" },
  { id: "projects", label: "Projects" },
];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    title: "Advanced Chip Architecture",
    category: "tech",
    description: "Our cutting-edge processor design showcasing next-gen architecture.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    title: "Research & Development Lab",
    category: "lab",
    description: "State-of-the-art R&D facilities for semiconductor innovation.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    title: "Leadership Summit 2024",
    category: "team",
    description: "Annual leadership gathering to strategize future innovations.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    title: "Server Infrastructure",
    category: "projects",
    description: "High-performance server systems powered by our chips.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop",
    title: "Silicon Wafer Production",
    category: "tech",
    description: "Precision manufacturing of advanced silicon wafers.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
    title: "AI Hardware Demo",
    category: "projects",
    description: "Demonstrating our AI-optimized hardware solutions.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop",
    title: "Cleanroom Facility",
    category: "lab",
    description: "ISO Class 1 cleanroom for wafer fabrication.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    title: "Engineering Team Collaboration",
    category: "team",
    description: "Cross-functional teams driving innovation together.",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=800&auto=format&fit=crop",
    title: "Circuit Board Design",
    category: "tech",
    description: "Intricate PCB designs for high-frequency applications.",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    title: "Global Tech Conference",
    category: "team",
    description: "Presenting breakthrough research at industry conferences.",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    title: "Data Analytics Center",
    category: "projects",
    description: "Real-time performance monitoring and analytics.",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?q=80&w=800&auto=format&fit=crop",
    title: "Microscopy Analysis",
    category: "lab",
    description: "Nanoscale inspection using electron microscopy.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-lite-blue to-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our world-class facilities, innovative projects, and the talented team 
              driving semiconductor excellence at SemicoreTech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <Filter className="w-5 h-5 text-electric mr-2 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-electric text-white shadow-lg shadow-electric/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-navy border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-lg shadow-gray-200/50"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-cyan text-xs font-semibold uppercase tracking-wider mb-2">
                      {categories.find(c => c.id === image.category)?.label}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/60 text-sm line-clamp-2">{image.description}</p>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-gray-200 group-hover:border-electric/50 transition-colors duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-lite-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "10", label: "Global Locations" },
              { value: "500+", label: "Team Members" },
              { value: "15+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-electric mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/95 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy/10 hover:bg-navy/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-navy" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative aspect-video md:aspect-auto md:w-2/3">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>

                {/* Details */}
                <div className="p-8 md:w-1/3 flex flex-col justify-center bg-white">
                  <span className="text-electric text-xs font-semibold uppercase tracking-wider mb-3">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </span>
                  <h2 className="text-2xl font-bold text-navy mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-400 text-sm">
                      Click outside or press the X button to close
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
