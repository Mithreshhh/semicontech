"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  course: string;
  image: string;
  rating: number;
  testimonial: string;
  delay?: number;
}

export function TestimonialCard({
  name,
  role,
  course,
  image,
  rating,
  testimonial,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-electric/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white border border-electric/10 rounded-2xl p-6 hover:border-electric/50 transition-all duration-300 shadow-sm group-hover:shadow-lg h-full flex flex-col">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-electric/30" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating
                  ? "text-electric fill-electric"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-navy/70 text-sm leading-relaxed mb-6 flex-1">
          {testimonial}
        </p>

        {/* Student Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-electric/5">
          <Avatar className="w-12 h-12 border-2 border-electric/20">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="bg-electric/5 text-electric">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-semibold text-navy text-sm">{name}</h4>
            <p className="text-xs text-navy/60">{role}</p>
            <p className="text-xs text-electric font-medium mt-0.5">{course}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

