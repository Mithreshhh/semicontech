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
  ArrowRight,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trainingCategories, internshipInfo } from "@/data/trainingData";

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;

  const category = trainingCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Category Not Found</h1>
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
            <Link href="/training">
              <Button variant="ghost" className="mb-8 text-slate-600 hover:text-slate-900 -ml-2">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${colorScheme.badge}`}>
                {category.title}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {category.title} Training Programs
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-16 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, label: "Courses", value: category.courses.length.toString() },
              { icon: Clock, label: "Flexible", value: "Duration" },
              { icon: Users, label: "Small", value: "Batches" },
              { icon: Award, label: "Industry", value: "Certified" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center border-slate-200 hover:border-electric/30 hover:shadow-sm transition-all">
                  <CardContent className="pt-6 pb-6">
                    <stat.icon className="w-5 h-5 text-electric mx-auto mb-2" />
                    <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Available Courses
            </h2>
            <p className="text-slate-600">
              Choose from {category.courses.length} specialized training programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {category.courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Link href={`/training/${categoryId}/${course.id}`}>
                  <Card className="group h-full border border-slate-200 hover:border-electric/30 hover:shadow-lg transition-all cursor-pointer">
                    <CardHeader className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-electric transition-colors line-clamp-2">
                          {course.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200 shrink-0">
                          {course.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm text-slate-600 line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Key Topics</p>
                        <div className="grid grid-cols-1 gap-2">
                          {course.highlights.slice(0, 4).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <div className="w-1 h-1 rounded-full bg-electric mt-2 flex-shrink-0" />
                              <span className="line-clamp-1">{highlight}</span>
                            </div>
                          ))}
                          {course.highlights.length > 4 && (
                            <p className="text-xs text-electric font-medium mt-1">
                              +{course.highlights.length - 4} more topics
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <div className="flex items-center justify-between text-sm font-medium text-slate-700 group-hover:text-electric transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section - Only for Students and Freshers */}
      {(categoryId === "students" || categoryId === "freshers") && (
        <section className="px-6 py-20 bg-slate-50">
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
                <span className="text-sm font-medium text-green-700">Internship Programs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Gain Industry Experience
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Choose from flexible duration options designed for {category.title.toLowerCase()}
              </p>
            </motion.div>

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
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${badges[index]} w-fit`}>
                          {program.timeline}
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
      )}

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-slate-200 shadow-sm">
            <CardContent className="pt-12 pb-12 text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Connect with our experts to choose the right course
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
                  Download Syllabus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
