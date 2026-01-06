"use client";

import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  date: string;
  image: string;
  mode: string;
  benefits: string[];
  buttonText: string;
  delay?: number;
}

export function CourseCard({
  title,
  date,
  image,
  mode,
  benefits,
  buttonText,
  delay = 0,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
        <CardHeader className="pb-3">
          <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-navy/60 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          {/* Course Image */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Mode Badge */}
          <div className="flex items-center">
            <span className="text-orange-500 font-semibold text-sm">{mode}</span>
          </div>

          {/* Benefits List */}
          <div className="space-y-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy/70">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-auto pt-2">
            <Button
              className="w-full bg-electric text-white hover:bg-electric/90 font-semibold rounded-lg"
              size="lg"
            >
              {buttonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

