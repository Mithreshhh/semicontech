"use client";

import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";

const courses = [
  {
    title: "Physical Design",
    date: "7th January 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    mode: "Offline / Online / Hybrid",
    benefits: [
      "15+ Yrs Experienced Trainers",
      "Industry Standard Tools",
      "24x7 EDA Tool Access",
      "Certification On Completion",
      "Tool Access Until You Get Placed",
      "100% Placement Assistance",
    ],
    buttonText: "Explore Physical Design Course",
  },
  {
    title: "Design & Verification",
    date: "7th January 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    mode: "Offline / Online / Hybrid",
    benefits: [
      "15+ Yrs Experienced Trainers",
      "Industry Standard Tools",
      "24x7 EDA Tool Access",
      "Certification On Completion",
      "Tool Access Until You Get Placed",
      "100% Placement Assistance",
    ],
    buttonText: "Explore Design and Verification Course",
  },
  {
    title: "Analog Layout Design",
    date: "7th January 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    mode: "Offline / Online / Hybrid",
    benefits: [
      "12+ Yrs Experienced Trainers",
      "Industry Standard Tools",
      "24x7 EDA Tool Access",
      "Certification On Completion",
      "Tool Access Until You Get Placed",
      "100% Placement Assistance",
    ],
    buttonText: "Explore Analog Layout Design Course",
  },
  {
    title: "Design For Test",
    date: "7th January 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    mode: "Offline / Online / Hybrid",
    benefits: [
      "10+ Yrs Experienced Trainers",
      "Industry Standard Tools",
      "24x7 EDA Tool Access",
      "Certification On Completion",
      "Tool Access Until You Get Placed",
      "100% Placement Assistance",
    ],
    buttonText: "Explore Design For Test Course",
  },
];

export function TopCourses() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none">
        <img src="/images/undraw_articles_visl.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
            Top Courses
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              {...course}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

