"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatCounter({ value, label, suffix = "", delay = 0 }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center justify-center p-8 bg-white border border-electric/10 rounded-2xl shadow-sm hover:shadow-md hover:border-electric/30 transition-all"
    >
      <div className="flex items-baseline gap-1 mb-2">
        <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-navy">0</span>
        <span className="text-3xl md:text-4xl font-heading font-bold text-electric">{suffix}</span>
      </div>
      <span className="text-navy/50 text-[10px] font-bold uppercase tracking-[0.2em] text-center">{label}</span>
    </motion.div>
  );
}
