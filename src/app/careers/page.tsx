"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Sparkles,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
  Send,
  GraduationCap,
  Award,
  Briefcase,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-8">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">Join Our Team</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Career at
                <br />
                <span className="text-electric">Semicon Technolabs</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Welcome to the Careers page of Semicon Technolabs. We are a leading training institute in the semiconductor industry and always on the lookout for passionate individuals who are committed to excellence and eager to learn.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-electric text-white hover:bg-electric/90 font-medium"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Learn About Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-electric/5 to-amber-50 p-8">
                <div className="aspect-square relative">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="200" cy="200" r="180" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                    <circle cx="200" cy="200" r="140" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4"/>
                    
                    <g transform="translate(160, 140)">
                      <circle cx="40" cy="30" r="28" fill="#3b82f6" opacity="0.9"/>
                      <circle cx="40" cy="20" r="18" fill="#fbbf24"/>
                      <rect x="20" y="55" width="40" height="50" rx="8" fill="#3b82f6" opacity="0.9"/>
                      <circle cx="34" cy="18" r="2" fill="#1e293b"/>
                      <circle cx="46" cy="18" r="2" fill="#1e293b"/>
                      <path d="M35 26 Q40 30 45 26" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </g>
                    
                    <g transform="translate(60, 180)">
                      <circle cx="35" cy="25" r="24" fill="#10b981" opacity="0.9"/>
                      <circle cx="35" cy="17" r="15" fill="#fcd34d"/>
                      <rect x="17" y="45" width="36" height="45" rx="6" fill="#10b981" opacity="0.9"/>
                      <circle cx="30" cy="15" r="2" fill="#1e293b"/>
                      <circle cx="40" cy="15" r="2" fill="#1e293b"/>
                      <path d="M30 22 Q35 25 40 22" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </g>
                    
                    <g transform="translate(280, 180)">
                      <circle cx="35" cy="25" r="24" fill="#8b5cf6" opacity="0.9"/>
                      <circle cx="35" cy="17" r="15" fill="#fde68a"/>
                      <rect x="17" y="45" width="36" height="45" rx="6" fill="#8b5cf6" opacity="0.9"/>
                      <circle cx="30" cy="15" r="2" fill="#1e293b"/>
                      <circle cx="40" cy="15" r="2" fill="#1e293b"/>
                      <path d="M30 22 Q35 25 40 22" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </g>
                    
                    <path d="M140 200 Q200 170 260 200" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="6 4"/>
                    <path d="M100 240 Q200 280 300 240" stroke="#e2e8f0" strokeWidth="2" fill="none" strokeDasharray="6 4"/>
                    
                    <g className="animate-pulse">
                      <circle cx="320" cy="100" r="8" fill="#fbbf24" opacity="0.6"/>
                      <circle cx="80" cy="120" r="6" fill="#3b82f6" opacity="0.6"/>
                      <circle cx="340" cy="280" r="5" fill="#10b981" opacity="0.6"/>
                      <circle cx="60" cy="300" r="7" fill="#8b5cf6" opacity="0.6"/>
                    </g>
                    
                    <g fill="#fbbf24">
                      <polygon points="130,80 133,88 142,88 135,93 138,102 130,96 122,102 125,93 118,88 127,88" transform="scale(0.6) translate(100, 60)"/>
                      <polygon points="130,80 133,88 142,88 135,93 138,102 130,96 122,102 125,93 118,88 127,88" transform="scale(0.5) translate(520, 100)"/>
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Join Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our dynamic work environment encourages innovation and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Work on cutting-edge semiconductor technologies and shape the future",
                color: "bg-amber-50 text-amber-600"
              },
              {
                icon: TrendingUp,
                title: "Growth",
                description: "Clear career paths with training programs and mentorship",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Join an experienced team of passionate professionals",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Heart,
                title: "Culture",
                description: "Supportive environment that values work-life balance",
                color: "bg-purple-50 text-purple-600"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Opportunities for Growth
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We offer opportunities for growth and advancement through training programs, mentorship, and coaching. Our commitment to your professional development means you'll never stop learning.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: GraduationCap, text: "Continuous learning programs" },
                  { icon: Award, text: "Industry certifications support" },
                  { icon: Users, text: "Mentorship from experts" },
                  { icon: Briefcase, text: "Career advancement paths" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-electric" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-8">
                <svg viewBox="0 0 400 300" className="w-full">
                  <rect x="40" y="20" width="320" height="240" fill="#f8fafc" rx="8"/>
                  
                  <g stroke="#e2e8f0" strokeWidth="1">
                    <line x1="40" y1="80" x2="360" y2="80" strokeDasharray="4 4"/>
                    <line x1="40" y1="140" x2="360" y2="140" strokeDasharray="4 4"/>
                    <line x1="40" y1="200" x2="360" y2="200" strokeDasharray="4 4"/>
                  </g>
                  
                  <path 
                    d="M60 220 Q120 200 160 180 Q200 160 240 120 Q280 80 340 50" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  
                  <path 
                    d="M60 220 Q120 200 160 180 Q200 160 240 120 Q280 80 340 50 L340 260 L60 260 Z" 
                    fill="url(#gradient)"
                    opacity="0.3"
                  />
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  <circle cx="60" cy="220" r="6" fill="#3b82f6"/>
                  <circle cx="160" cy="180" r="6" fill="#3b82f6"/>
                  <circle cx="240" cy="120" r="6" fill="#3b82f6"/>
                  <circle cx="340" cy="50" r="8" fill="#fbbf24" stroke="#3b82f6" strokeWidth="2"/>
                  
                  <text x="55" y="245" fill="#64748b" fontSize="10" fontFamily="system-ui">Start</text>
                  <text x="320" y="45" fill="#3b82f6" fontSize="12" fontFamily="system-ui" fontWeight="600">Your Growth</text>
                  
                  <g transform="translate(350, 30) rotate(45)">
                    <path d="M0 0 L-8 12 L0 8 L8 12 Z" fill="#fbbf24"/>
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                If you are driven, innovative, and have a passion for excellence, we invite you to submit your resume and cover letter to our HR department. Join our experienced team of professionals and contribute to the development of the semiconductor industry.
              </p>

              <div className="bg-electric/5 border border-electric/20 rounded-xl p-6 mb-8">
                <p className="text-slate-700 italic">
                  "At Semicon Technolabs, we believe in nurturing talent and providing the best environment for growth."
                </p>
                <p className="text-electric font-semibold mt-3">
                  Semicon Technolabs — where skills build careers.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email us at</p>
                    <p className="text-slate-900 font-medium">hr@semicontechnolabs.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call us</p>
                    <p className="text-slate-900 font-medium">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-900 font-medium">Hyderabad & Bangalore, India</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br flex items-center justify-center text-white text-sm font-semibold"
                      style={{
                        background: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'][i]
                      }}
                    >
                      {['A', 'R', 'S', 'M', 'K'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-600 ml-2">Join 50+ professionals</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Submit Your Application</CardTitle>
                  <CardDescription>We'll get back to you within 3-5 business days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Interested In</Label>
                    <Input id="position" placeholder="e.g., VLSI Design Engineer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Cover Letter / Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about yourself and why you want to join..."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume (PDF)</Label>
                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="cursor-pointer" />
                  </div>
                  <Button className="w-full bg-electric text-white hover:bg-electric/90 font-medium mt-2">
                    <Send className="mr-2 w-4 h-4" />
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Shape the Future with Us
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Be part of a team that's driving innovation in the semiconductor industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-electric text-white hover:bg-electric/90 font-medium px-8"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8"
              >
                Contact HR
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
