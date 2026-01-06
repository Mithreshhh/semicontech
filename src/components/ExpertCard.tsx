"use client";

import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ExpertCardProps {
  name: string;
  role: string;
  expertise: string;
  image: string;
  linkedin?: string;
  delay?: number;
}

export function ExpertCard({ name, role, expertise, image, linkedin, delay = 0 }: ExpertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-electric/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white border border-electric/10 rounded-2xl p-6 hover:border-electric/50 transition-all duration-300 shadow-sm group-hover:shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <Avatar className="w-24 h-24 border-2 border-electric/20 group-hover:border-electric transition-colors">
              <AvatarImage src={image} alt={name} className="object-cover" />
              <AvatarFallback className="bg-electric/5 text-electric">{name[0]}</AvatarFallback>
            </Avatar>
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-0 right-0 p-1.5 bg-electric rounded-full text-white shadow-lg transform translate-x-2 translate-y-2 hover:scale-110 transition-transform"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
          
          <h3 className="text-xl font-heading font-bold text-navy mb-1 group-hover:text-electric transition-colors">{name}</h3>
          <p className="text-electric text-sm font-medium mb-3">{role}</p>
          <p className="text-navy/60 text-xs leading-relaxed italic">{expertise}</p>
          
          <div className="mt-6 pt-6 border-t border-electric/5 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="flex items-center gap-2 text-xs text-navy/40 hover:text-electric transition-colors">
              View Profile <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
