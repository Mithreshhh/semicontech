"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Rocket, 
  Building2, 
  ArrowRight, 
  Clock,
  Award,
  Briefcase,
  Users,
  TrendingUp,
  CheckCircle,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trainingCategories, internshipInfo } from "@/data/trainingData";

const iconMap = {
  GraduationCap: GraduationCap,
  Rocket: Rocket,
  Building2: Building2,
  Briefcase: Briefcase,
  Users: Users,
  Award: Award,
  TrendingUp: TrendingUp,
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/5 border border-electric/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="text-sm font-medium text-electric">Professional Training Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Master Semiconductor Design
              <br />
              <span className="text-electric">at Your Own Pace</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Industry-aligned training programs for students, freshers, and professionals. 
              Learn from experts and build real-world projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Categories Cards */}
      <section className="px-6 py-20 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingCategories.map((category, index) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              const colors = {
                "from-blue-500 to-cyan-500": { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600", hover: "hover:border-blue-200" },
                "from-green-500 to-emerald-500": { bg: "bg-green-50", border: "border-green-100", text: "text-green-600", hover: "hover:border-green-200" },
                "from-purple-500 to-pink-500": { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-600", hover: "hover:border-purple-200" },
              };
              const colorScheme = colors[category.color as keyof typeof colors];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={`/training/${category.id}`}>
                    <Card className={`group h-full border ${colorScheme.border} ${colorScheme.hover} hover:shadow-lg transition-all duration-300 cursor-pointer bg-white`}>
                      <CardHeader className="space-y-4">
                        <div className={`w-14 h-14 rounded-xl ${colorScheme.bg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                          <Icon className={`w-7 h-7 ${colorScheme.text}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-electric transition-colors">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-slate-600 leading-relaxed">
                            {category.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className={`flex items-center gap-2 text-sm ${colorScheme.text} font-medium`}>
                          <BookOpen className="w-4 h-4" />
                          <span>{category.courses.length} Courses</span>
                        </div>
                        
                        <div className="pt-2 border-t border-slate-100">
                          <div className="flex items-center justify-between text-sm font-medium text-slate-700 group-hover:text-electric transition-colors">
                            <span>View All Programs</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-aligned curriculum with hands-on experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Instructors",
                description: "15+ years industry experience",
              },
              {
                icon: Briefcase,
                title: "Real Projects",
                description: "Hands-on semiconductor design",
              },
              {
                icon: Users,
                title: "Small Batches",
                description: "Personalized attention guaranteed",
              },
              {
                icon: TrendingUp,
                title: "Placement Support",
                description: "Dedicated career guidance",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internships" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
              <Briefcase className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">For Students & Freshers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Internship Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Gain hands-on industry experience with flexible duration options
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                4 Months
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-100">
                8 Months
              </span>
              <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium border border-orange-100">
                16 Months
              </span>
            </div>
          </motion.div>

          {/* Internship Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {internshipInfo.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Internship Programs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipInfo.programs.map((program, index) => {
              const badges = ["bg-blue-50 text-blue-700 border-blue-100", "bg-purple-50 text-purple-700 border-purple-100", "bg-orange-50 text-orange-700 border-orange-100"];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-slate-200 hover:border-electric/30 hover:shadow-lg transition-all">
                    <CardHeader className="space-y-3 pb-4">
                      <div className="flex items-start justify-between">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold border ${badges[index]}`}>
                          {program.timeline}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-600">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Topics Covered</p>
                        {program.domains.map((domain, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <div className="w-1 h-1 rounded-full bg-electric mt-2 flex-shrink-0" />
                            <span>{domain}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 transition-colors font-medium">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white border border-slate-200 rounded-2xl p-12 shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Begin?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Connect with our experts to find the perfect program for your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-electric text-white hover:bg-electric/90 font-medium px-8"
              >
                Talk to Experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

