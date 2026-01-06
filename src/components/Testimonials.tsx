"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "VLSI Design Engineer",
    course: "Physical Design Course",
    image: "/images/profile-boy.svg",
    rating: 5,
    testimonial:
      "The Physical Design course at Semicon transformed my career. The hands-on training with industry-standard tools and expert guidance helped me land my dream job at a top semiconductor company. The 24/7 tool access was invaluable!",
  },
  {
    name: "Priya Sharma",
    role: "Verification Engineer",
    course: "Design & Verification Course",
    image: "/images/profile-girls.svg",
    rating: 5,
    testimonial:
      "Excellent curriculum and experienced trainers! The Design & Verification course gave me a deep understanding of UVM and SystemVerilog. The placement assistance is outstanding - I received multiple job offers even before completing the course.",
  },
  {
    name: "Amit Patel",
    role: "Analog Layout Designer",
    course: "Analog Layout Design Course",
    image: "/images/profile-boy.svg",
    rating: 5,
    testimonial:
      "Coming from a different background, I was worried about transitioning to VLSI. But Semicon's structured approach and supportive mentors made the learning journey smooth. The practical projects helped me build a strong portfolio.",
  },
  {
    name: "Sneha Reddy",
    role: "DFT Engineer",
    course: "Design For Test Course",
    image: "/images/profile-girls.svg",
    rating: 5,
    testimonial:
      "The DFT course is comprehensive and industry-relevant. The trainers have real-world experience and share practical insights. The certification and continuous support even after placement make Semicon stand out from other institutes.",
  },
  {
    name: "Vikram Singh",
    role: "Senior VLSI Engineer",
    course: "Physical Design Course",
    image: "/images/profile-boy.svg",
    rating: 5,
    testimonial:
      "After 3 years of experience, I wanted to upskill in advanced physical design techniques. Semicon's course exceeded my expectations with its focus on cutting-edge methodologies and latest industry trends.",
  },
  {
    name: "Ananya Das",
    role: "RTL Design Engineer",
    course: "Design & Verification Course",
    image: "/images/profile-girls.svg",
    rating: 5,
    testimonial:
      "The hybrid learning model was perfect for me. I could attend live sessions and also access recorded lectures. The course material is well-structured, and the trainers are always available to clarify doubts. Highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 opacity-15 pointer-events-none">
        <img src="/images/undraw_team-up_qeem.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            What Our Students Say About <span className="text-electric">Semicon</span>
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            Hear from our successful students who transformed their careers with our comprehensive VLSI training programs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  {...testimonial}
                  delay={0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white border-electric/20 hover:bg-electric/5 hover:border-electric text-electric shadow-lg" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white border-electric/20 hover:bg-electric/5 hover:border-electric text-electric shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
}

