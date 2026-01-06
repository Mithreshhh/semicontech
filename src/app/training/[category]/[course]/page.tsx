"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  Award,
  Users,
  BookOpen,
  Download,
  Briefcase,
  Code,
  Target,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { trainingCategories } from "@/data/trainingData";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;
  const courseId = params.course as string;

  const category = trainingCategories.find((cat) => cat.id === categoryId);
  const course = category?.courses.find((c) => c.id === courseId);

  if (!category || !course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <Button onClick={() => router.push("/training")} variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Training
          </Button>
        </div>
      </div>
    );
  }

  const colorSchemes = {
    "from-blue-500 to-cyan-500": { bg: "bg-blue-50", badge: "bg-blue-50 text-blue-700 border-blue-100" },
    "from-green-500 to-emerald-500": { bg: "bg-green-50", badge: "bg-green-50 text-green-700 border-green-100" },
    "from-purple-500 to-pink-500": { bg: "bg-purple-50", badge: "bg-purple-50 text-purple-700 border-purple-100" },
  };
  const colorScheme = colorSchemes[category.color as keyof typeof colorSchemes];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/training/${categoryId}`}>
              <Button variant="ghost" className="mb-8 text-slate-600 hover:text-slate-900 -ml-2">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to {category.title}
              </Button>
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${colorScheme.badge} mb-6`}>
                  {category.title}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                  {course.name}
                </h1>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-slate-200">
                    <Clock className="w-5 h-5 text-electric" />
                    <div>
                      <p className="text-xs text-slate-500">Duration</p>
                      <p className="font-semibold text-slate-900">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-slate-200">
                    <Target className="w-5 h-5 text-electric" />
                    <div>
                      <p className="text-xs text-slate-500">Level</p>
                      <p className="font-semibold text-slate-900">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-slate-200">
                    <Users className="w-5 h-5 text-electric" />
                    <div>
                      <p className="text-xs text-slate-500">Batch</p>
                      <p className="font-semibold text-slate-900">10-15</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24 border border-slate-200 shadow-sm">
                  <CardContent className="pt-6 space-y-4">
                    <div className="text-center pb-4 border-b border-slate-100">
                      <p className="text-sm text-slate-600 mb-1">Course Fee</p>
                      <p className="text-2xl font-bold text-slate-900">Contact Us</p>
                      <p className="text-xs text-slate-500 mt-1">for pricing details</p>
                    </div>
                    
                    <Button 
                      size="lg"
                      className="w-full bg-electric text-white hover:bg-electric/90 font-medium"
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Download Brochure
                    </Button>

                    <Separator />

                    <div className="space-y-3 text-sm">
                      {[
                        "Industry Certification",
                        "Placement Support",
                        "Hands-on Projects",
                        "Expert Mentorship",
                        "Lifetime Resources"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              What You'll Learn
            </h2>
            <p className="text-slate-600 mb-10">
              Comprehensive curriculum covering all essential topics
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-start gap-3 p-4 rounded-lg border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
                >
                  <div className="w-6 h-6 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-electric" />
                  </div>
                  <p className="font-medium text-slate-800">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Features */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Course Features
            </h2>
            <p className="text-slate-600">
              Everything included to ensure your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Hands-on Labs",
                description: "Industry-standard EDA tools access",
              },
              {
                icon: Briefcase,
                title: "Real Projects",
                description: "Build professional portfolio",
              },
              {
                icon: Users,
                title: "Expert Mentors",
                description: "15+ years industry experience",
              },
              {
                icon: Award,
                title: "Certification",
                description: "Industry-recognized certificate",
              },
              {
                icon: Target,
                title: "Job-Ready",
                description: "Industry-aligned curriculum",
              },
              {
                icon: Zap,
                title: "Fast-Track",
                description: "Intensive training program",
              },
              {
                icon: BookOpen,
                title: "Resources",
                description: "Lifetime learning materials",
              },
              {
                icon: Clock,
                title: "Flexible",
                description: "Weekend/weekday batches",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              Career Opportunities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Job Roles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "VLSI Design Engineer",
                      "Physical Design Engineer",
                      "Verification Engineer",
                      "DFT Engineer",
                      "CAD Engineer",
                      "Layout Design Engineer",
                    ].map((role, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                        <span className="text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Top Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Intel Corporation",
                      "Qualcomm",
                      "NVIDIA",
                      "AMD",
                      "Texas Instruments",
                      "Broadcom",
                    ].map((company, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                        <span className="text-sm">{company}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
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
            <p className="text-lg text-slate-600 mb-8">
              Join hundreds of successful students who transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-electric text-white hover:bg-electric/90 font-medium px-8"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8"
              >
                Talk to Counselor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
