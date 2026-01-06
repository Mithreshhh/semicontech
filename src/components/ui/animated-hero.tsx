"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedHeroProps {
  titles?: string[];
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  badgeText?: string;
}

export function AnimatedHero({
  titles = ["amazing", "new", "wonderful", "beautiful", "smart"],
  subtitle = "Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.",
  primaryButtonText = "Sign up here",
  secondaryButtonText = "Jump on a call",
  badgeText = "Read our launch article",
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2500); // 2.5 seconds for smooth transitions
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length, isMounted]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-12 pt-16 pb-32 lg:pt-20 lg:pb-40 items-center justify-center flex-col">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button variant="secondary" size="sm" className="gap-4 bg-electric/10 border border-electric/20 text-electric hover:bg-electric/20">
                {badgeText} <MoveRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
          <div className="flex gap-6 flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-5xl tracking-tighter text-center font-bold leading-[1.1]">
              <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 gap-y-2">
                <span className="text-white">Engineering</span>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="w-[2px] h-12 md:h-16 lg:h-20 bg-electric rounded-full" />
                  <span className="relative inline-flex items-center justify-center overflow-hidden h-[1.2em] min-w-[280px] md:min-w-[400px] lg:min-w-[500px] px-1">
                    {titles.map((title, index) => {
                      const isActive = titleNumber === index;
                      const isBefore = titleNumber > index;
                      
                      return (
                        <motion.span
                          key={`${title}-${index}`}
                          className="absolute font-bold text-electric whitespace-nowrap left-1/2 -translate-x-1/2 px-1"
                          initial={index === 0 ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.9 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300,
                            damping: 30,
                            mass: 0.3
                          }}
                          animate={
                            isActive
                              ? {
                                  y: 0,
                                  opacity: 1,
                                  scale: 1,
                                }
                              : {
                                  y: isBefore ? -100 : 100,
                                  opacity: 0,
                                  scale: 0.9,
                                }
                          }
                        >
                          {title}
                        </motion.span>
                      );
                    })}
                  </span>
                  <span className="w-[2px] h-12 md:h-16 lg:h-20 bg-electric rounded-full" />
                </div>
                <span className="text-white">Future</span>
              </div>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base md:text-lg leading-relaxed tracking-tight text-white/90 max-w-2xl text-center mx-auto"
            >
              {subtitle}
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button size="lg" className="gap-4 border-electric/20 text-electric hover:bg-electric/5 font-bold rounded-full px-8 h-14 text-lg" variant="outline">
              {secondaryButtonText} <PhoneCall className="w-5 h-5" />
            </Button>
            <Button size="lg" className="gap-4 bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-8 h-14 text-lg shadow-lg shadow-electric/20">
              {primaryButtonText} <MoveRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

