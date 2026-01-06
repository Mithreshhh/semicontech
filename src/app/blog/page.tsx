"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of 3nm Chip Technology",
    excerpt: "Exploring the next frontier in semiconductor manufacturing and how 3nm technology is revolutionizing the industry. Our team has been at the forefront of developing cutting-edge solutions that push the boundaries of what's possible in chip design.",
    content: "As we move towards smaller and more efficient chip architectures, the challenges grow exponentially. Our engineers are tackling issues like heat dissipation, quantum tunneling effects, and manufacturing precision at scales previously thought impossible.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    date: "December 15, 2025",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    id: 2,
    title: "AI-Driven Verification: A New Era",
    excerpt: "How artificial intelligence is transforming the chip verification process, reducing time-to-market while improving quality. Machine learning algorithms are now capable of identifying potential issues before they become costly problems.",
    content: "Traditional verification methods are being augmented with AI-powered tools that can analyze millions of test scenarios in a fraction of the time. This paradigm shift is enabling faster iteration cycles and more robust final products.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    date: "December 10, 2025",
    readTime: "6 min read",
    category: "Innovation",
  },
  {
    id: 3,
    title: "Sustainable Semiconductor Manufacturing",
    excerpt: "Our commitment to environmental responsibility in chip production. Learn about our green initiatives and how we're reducing the carbon footprint of semiconductor manufacturing without compromising on quality or performance.",
    content: "From water recycling systems to renewable energy adoption, we're pioneering sustainable practices that are setting new industry standards. Our facilities now operate with 40% less energy consumption compared to traditional fabs.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    date: "December 5, 2025",
    readTime: "5 min read",
    category: "Sustainability",
  },
  {
    id: 4,
    title: "Building the Next Generation Workforce",
    excerpt: "Investing in talent development and creating opportunities for the semiconductor engineers of tomorrow. Our internship and mentorship programs are shaping the future leaders of the industry.",
    content: "We believe that nurturing young talent is essential for continued innovation. Our comprehensive training programs combine theoretical knowledge with hands-on experience in state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    date: "November 28, 2025",
    readTime: "7 min read",
    category: "Culture",
  },
  {
    id: 5,
    title: "Quantum Computing Hardware Breakthroughs",
    excerpt: "Pioneering advances in quantum chip architecture that bring us closer to practical quantum computing. Our research team has achieved significant milestones in qubit stability and error correction.",
    content: "The race to quantum supremacy requires innovation at every level - from materials science to system architecture. We're developing novel approaches that address the fundamental challenges of quantum coherence and scalability.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    date: "November 20, 2025",
    readTime: "10 min read",
    category: "Research",
  },
];

function BlogSection({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          style={{ scale }}
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 bg-electric/10 text-electric text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              {post.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {post.excerpt}
            </p>

            <p className="text-gray-500 leading-relaxed">
              {post.content}
            </p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-electric font-semibold group"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-electric/10 group">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Border */}
              <div className={`absolute ${isEven ? "-right-4 -bottom-4" : "-left-4 -bottom-4"} w-full h-full border-2 border-electric/30 rounded-3xl -z-10`} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-lite-blue to-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 bg-electric/10 text-electric text-sm font-semibold rounded-full mb-6"
            >
              Insights & Updates
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover the latest insights, innovations, and stories from the world of 
              semiconductor technology and engineering excellence.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-electric/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-electric rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Posts */}
      <div className="relative">
        {/* Decorative Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric/20 to-transparent hidden lg:block" />
        
        {blogPosts.map((post, index) => (
          <BlogSection key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-lite-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Subscribe to receive the latest articles, industry insights, and company updates 
              directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-electric text-white font-semibold rounded-full shadow-lg shadow-electric/30 hover:shadow-xl hover:shadow-electric/40 transition-shadow"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

