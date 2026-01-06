"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="h-full bg-white backdrop-blur-md border-electric/10 hover:border-electric/50 transition-all duration-300 overflow-hidden relative shadow-sm hover:shadow-xl hover:shadow-electric/5">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="w-24 h-24 text-navy" />
        </div>
        
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6 text-electric group-hover:text-white transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl font-heading text-navy group-hover:text-electric transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-navy/60 text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </Card>
    </motion.div>
  );
}
