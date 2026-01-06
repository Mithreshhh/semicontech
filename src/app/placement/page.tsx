"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Award,
  Users,
  Building2,
  MessageSquare,
  FileText,
  CheckCircle,
  TrendingUp,
  GraduationCap,
  Briefcase,
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlacementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Our Placements</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                100% Placement Record
                <br />
                <span className="text-electric">in Semiconductor Industry</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Leading VLSI Institute in Hyderabad with consistent placement record and industry-focused learning approach.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-electric text-white hover:bg-electric/90 font-medium"
                >
                  Get Placed
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  View Success Stories
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Placement illustration */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 p-8">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Background */}
                  <circle cx="200" cy="200" r="180" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="200" cy="200" r="140" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" strokeDasharray="4 4"/>
                  
                  {/* Building/Company */}
                  <g transform="translate(220, 80)">
                    <rect x="0" y="30" width="120" height="160" fill="#3b82f6" rx="6"/>
                    {/* Windows */}
                    {[0, 1, 2].map((row) => (
                      [0, 1, 2].map((col) => (
                        <rect key={`${row}-${col}`} x={15 + col * 35} y={50 + row * 40} width="25" height="25" fill="#93c5fd" rx="3"/>
                      ))
                    ))}
                    <rect x="40" y="150" width="40" height="40" fill="#1e40af" rx="3"/>
                    {/* Company sign */}
                    <rect x="25" y="10" width="70" height="18" fill="#10b981" rx="4"/>
                    <text x="60" y="23" fill="white" fontSize="10" textAnchor="middle" fontWeight="bold">SUCCESS</text>
                  </g>
                  
                  {/* Happy student with certificate */}
                  <g transform="translate(40, 120)">
                    <circle cx="60" cy="50" r="40" fill="#10b981" opacity="0.9"/>
                    <circle cx="60" cy="38" r="28" fill="#fcd34d"/>
                    {/* Happy face */}
                    <circle cx="50" cy="35" r="4" fill="#1e293b"/>
                    <circle cx="70" cy="35" r="4" fill="#1e293b"/>
                    <path d="M45 48 Q60 62 75 48" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <rect x="30" y="85" width="60" height="70" rx="10" fill="#10b981" opacity="0.9"/>
                    
                    {/* Certificate in hand */}
                    <g transform="translate(90, 95)">
                      <rect x="0" y="0" width="50" height="65" fill="white" stroke="#fbbf24" strokeWidth="3" rx="4"/>
                      <rect x="10" y="10" width="30" height="5" fill="#fbbf24" rx="2"/>
                      <rect x="8" y="22" width="34" height="3" fill="#94a3b8" rx="1"/>
                      <rect x="8" y="30" width="34" height="3" fill="#94a3b8" rx="1"/>
                      <rect x="8" y="38" width="28" height="3" fill="#94a3b8" rx="1"/>
                      {/* Star */}
                      <polygon points="25,50 27,56 34,56 29,60 31,66 25,62 19,66 21,60 16,56 23,56" fill="#fbbf24"/>
                    </g>
                  </g>
                  
                  {/* Arrow from student to company */}
                  <g transform="translate(170, 200)">
                    <path d="M0 0 L40 -30" stroke="#10b981" strokeWidth="4" strokeDasharray="8 4"/>
                    <polygon points="40,-30 30,-38 30,-22" fill="#10b981"/>
                  </g>
                  
                  {/* Floating success elements */}
                  <g className="animate-pulse">
                    <circle cx="180" cy="80" r="10" fill="#fbbf24" opacity="0.7"/>
                    <circle cx="100" cy="320" r="8" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="350" cy="300" r="6" fill="#10b981" opacity="0.6"/>
                  </g>
                  
                  {/* Stars */}
                  <g fill="#fbbf24">
                    <polygon points="50,50 53,58 62,58 55,63 58,72 50,66 42,72 45,63 38,58 47,58" transform="scale(0.5) translate(60, 40)"/>
                    <polygon points="50,50 53,58 62,58 55,63 58,72 50,66 42,72 45,63 38,58 47,58" transform="scale(0.4) translate(800, 120)"/>
                    <polygon points="50,50 53,58 62,58 55,63 58,72 50,66 42,72 45,63 38,58 47,58" transform="scale(0.45) translate(700, 600)"/>
                  </g>
                  
                  {/* Text */}
                  <text x="200" y="380" fill="#10b981" fontSize="16" textAnchor="middle" fontWeight="bold">Your Success Story Starts Here</text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
              Overall Statistics
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "600+", label: "No. Students Trained", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", icon: GraduationCap },
              { number: "550+", label: "Total No. Of Placement", color: "text-green-600", bg: "bg-green-50", border: "border-green-100", icon: Briefcase },
              { number: "25+", label: "No. of Companies Visiting", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", icon: Building2 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`text-center border-2 ${stat.border} ${stat.bg} hover:shadow-lg transition-shadow`}>
                  <CardContent className="pt-8 pb-8">
                    <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 border ${stat.border}`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <p className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</p>
                    <p className="text-slate-700 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Institute Section */}
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
                Leading VLSI Training Institute
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Semicon Technolabs is a leading VLSI training institute known for its consistent placement record and industry-focused learning approach. We help students and professionals build successful careers in the semiconductor and VLSI domain through practical, job-oriented training.
                </p>
                <p>
                  With training centers in <span className="font-semibold text-electric">Bangalore</span> and <span className="font-semibold text-electric">Hyderabad</span>, we offer hands-on programs in RTL design, verification, physical design, STA, DFT, and UVM, using real-time projects and industry-standard EDA tools.
                </p>
                <p>
                  Our trainers are experienced industry professionals who prepare learners for real-world VLSI roles. Recognized as one of the best VLSI training institutes in Bangalore and a top VLSI institute in Hyderabad.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                { icon: CheckCircle, text: "Industry-focused curriculum with real projects" },
                { icon: CheckCircle, text: "Experienced trainers from top companies" },
                { icon: CheckCircle, text: "State-of-the-art EDA tools access" },
                { icon: CheckCircle, text: "Resume preparation & mock interviews" },
                { icon: CheckCircle, text: "Direct connections with hiring companies" },
                { icon: CheckCircle, text: "100% placement assistance guarantee" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
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
              Hiring Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our structured approach to connect talented students with top companies
            </p>
          </motion.div>

          {/* Hiring Process Steps */}
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-28 left-[10%] right-[10%] h-0.5 bg-slate-200">
              <div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-3 h-3 rotate-45 border-t-2 border-r-2 border-slate-300" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-3 h-3 rotate-45 border-t-2 border-r-2 border-slate-300" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[62%] w-3 h-3 rotate-45 border-t-2 border-r-2 border-slate-300" />
              <div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-3 h-3 rotate-45 border-t-2 border-r-2 border-slate-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  step: 1,
                  title: "MARKET",
                  description: "Get Requirement from our clients",
                  color: "#f59e0b",
                  bgColor: "bg-amber-50",
                  borderColor: "border-amber-200",
                  icon: (
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <rect x="5" y="15" width="50" height="50" rx="8" fill="#fbbf24"/>
                      <path d="M55 30 L75 15 L75 25 L55 40 Z" fill="#fcd34d"/>
                      <path d="M55 40 L75 25 L75 35 L55 50 Z" fill="#f59e0b"/>
                      <circle cx="30" cy="40" r="12" fill="white" opacity="0.4"/>
                      <path d="M25 38 L28 42 L35 35" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  step: 2,
                  title: "PERSONNEL RESEARCH",
                  description: "Assist Students in preparation of resume as per requirement",
                  color: "#06b6d4",
                  bgColor: "bg-cyan-50",
                  borderColor: "border-cyan-200",
                  icon: (
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <circle cx="40" cy="38" r="28" fill="#22d3ee"/>
                      <circle cx="40" cy="30" r="16" fill="#fcd34d"/>
                      <circle cx="35" cy="28" r="2.5" fill="#1e293b"/>
                      <circle cx="45" cy="28" r="2.5" fill="#1e293b"/>
                      <path d="M35 36 Q40 40 45 36" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <rect x="25" y="58" width="30" height="18" rx="5" fill="#22d3ee"/>
                    </svg>
                  )
                },
                {
                  step: 3,
                  title: "HEADHUNTING",
                  description: "Send Students resume to prospective clients who are hiring",
                  color: "#1e40af",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  icon: (
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <rect x="15" y="8" width="50" height="64" rx="5" fill="#1e40af"/>
                      <circle cx="40" cy="26" r="12" fill="#e2e8f0"/>
                      <rect x="28" y="42" width="24" height="5" fill="#e2e8f0" rx="2"/>
                      <rect x="25" y="52" width="30" height="3" fill="#94a3b8" rx="1"/>
                      <rect x="25" y="58" width="30" height="3" fill="#94a3b8" rx="1"/>
                      <rect x="25" y="64" width="20" height="3" fill="#94a3b8" rx="1"/>
                    </svg>
                  )
                },
                {
                  step: 4,
                  title: "JOB INTERVIEW",
                  description: "Shortlisted Candidates to attend written test and Interview",
                  color: "#16a34a",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  icon: (
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <rect x="8" y="22" width="64" height="48" rx="6" fill="#22c55e"/>
                      <circle cx="32" cy="42" r="14" fill="#fcd34d"/>
                      <circle cx="27" cy="39" r="2" fill="#1e293b"/>
                      <circle cx="37" cy="39" r="2" fill="#1e293b"/>
                      <path d="M27 47 Q32 51 37 47" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      <rect x="52" y="34" width="16" height="16" rx="4" fill="white"/>
                      <circle cx="56" cy="42" r="2" fill="#1e293b"/>
                      <circle cx="60" cy="42" r="2" fill="#1e293b"/>
                      <circle cx="64" cy="42" r="2" fill="#1e293b"/>
                    </svg>
                  )
                },
                {
                  step: 5,
                  title: "RECRUITMENT",
                  description: "Announcement of Final Selections",
                  color: "#9333ea",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  icon: (
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <rect x="8" y="12" width="64" height="56" rx="6" fill="#a855f7"/>
                      <path d="M25 50 L40 35 L55 50" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M30 60 L40 50 L50 60" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                    </svg>
                  )
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className={`text-center border-2 ${item.borderColor} ${item.bgColor} h-full hover:shadow-lg transition-shadow`}>
                    <CardContent className="pt-6 pb-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-bold mb-3 uppercase tracking-wide" style={{ color: item.color }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: item.color }} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
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
                Who Can Join?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We welcome B.Tech and M.Tech graduates from ECE, EEE, instrumentation, and related backgrounds, including freshers and working professionals.
              </p>
              
              <div className="bg-electric/5 border border-electric/20 rounded-xl p-6 mb-8">
                <p className="text-slate-700 italic text-lg">
                  "At Semicon Technolabs, <span className="font-bold text-electric">skills matter more than college names</span>, and our focus is on transforming potential into performance."
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "B.Tech / M.Tech (ECE, EEE, Instrumentation)",
                  "Fresh graduates looking to start career",
                  "Working professionals seeking upskilling",
                  "Career changers interested in VLSI",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
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
              {/* Eligibility illustration */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-electric/5 to-green-50 p-8">
                <svg viewBox="0 0 400 300" className="w-full">
                  <rect x="0" y="0" width="400" height="300" fill="#f8fafc" rx="12"/>
                  
                  {/* Group of diverse students */}
                  <g transform="translate(50, 60)">
                    <circle cx="50" cy="40" r="35" fill="#3b82f6"/>
                    <circle cx="50" cy="28" r="22" fill="#fcd34d"/>
                    <circle cx="43" cy="25" r="3" fill="#1e293b"/>
                    <circle cx="57" cy="25" r="3" fill="#1e293b"/>
                    <path d="M43 35 Q50 40 57 35" stroke="#1e293b" strokeWidth="2" fill="none"/>
                    <rect x="30" y="70" width="40" height="50" rx="8" fill="#3b82f6"/>
                  </g>
                  
                  <g transform="translate(150, 80)">
                    <circle cx="50" cy="40" r="32" fill="#10b981"/>
                    <circle cx="50" cy="30" r="20" fill="#fde68a"/>
                    <circle cx="44" cy="28" r="2.5" fill="#1e293b"/>
                    <circle cx="56" cy="28" r="2.5" fill="#1e293b"/>
                    <path d="M44 36 Q50 40 56 36" stroke="#1e293b" strokeWidth="2" fill="none"/>
                    <rect x="32" y="68" width="36" height="45" rx="7" fill="#10b981"/>
                  </g>
                  
                  <g transform="translate(250, 60)">
                    <circle cx="50" cy="40" r="35" fill="#8b5cf6"/>
                    <circle cx="50" cy="28" r="22" fill="#fcd34d"/>
                    <circle cx="43" cy="25" r="3" fill="#1e293b"/>
                    <circle cx="57" cy="25" r="3" fill="#1e293b"/>
                    <path d="M43 35 Q50 40 57 35" stroke="#1e293b" strokeWidth="2" fill="none"/>
                    <rect x="30" y="70" width="40" height="50" rx="8" fill="#8b5cf6"/>
                  </g>
                  
                  {/* Skills badge */}
                  <g transform="translate(140, 200)">
                    <rect x="0" y="0" width="120" height="50" rx="25" fill="#10b981"/>
                    <text x="60" y="32" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">SKILLS MATTER</text>
                  </g>
                  
                  {/* Stars */}
                  <g fill="#fbbf24">
                    <polygon points="50,20 52,26 58,26 53,30 55,36 50,32 45,36 47,30 42,26 48,26" transform="scale(0.6)"/>
                    <polygon points="50,20 52,26 58,26 53,30 55,36 50,32 45,36 47,30 42,26 48,26" transform="scale(0.5) translate(680, 20)"/>
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mock Interview Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              {/* Interview illustration */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <svg viewBox="0 0 400 300" className="w-full">
                  <rect x="0" y="0" width="400" height="300" fill="#f8fafc" rx="12"/>
                  
                  {/* Interviewer */}
                  <g transform="translate(60, 80)">
                    <rect x="10" y="60" width="80" height="100" rx="8" fill="#e2e8f0"/>
                    <circle cx="50" cy="40" r="30" fill="#3b82f6"/>
                    <circle cx="50" cy="32" r="20" fill="#fcd34d"/>
                    <circle cx="44" cy="30" r="2.5" fill="#1e293b"/>
                    <circle cx="56" cy="30" r="2.5" fill="#1e293b"/>
                    <path d="M44 38 Q50 42 56 38" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <rect x="20" y="95" width="60" height="40" rx="4" fill="#1e293b"/>
                    <rect x="25" y="100" width="50" height="30" rx="2" fill="#3b82f6"/>
                  </g>
                  
                  {/* Candidate */}
                  <g transform="translate(260, 80)">
                    <rect x="10" y="60" width="80" height="100" rx="8" fill="#e2e8f0"/>
                    <circle cx="50" cy="40" r="30" fill="#10b981"/>
                    <circle cx="50" cy="32" r="20" fill="#fde68a"/>
                    <circle cx="44" cy="30" r="2.5" fill="#1e293b"/>
                    <circle cx="56" cy="30" r="2.5" fill="#1e293b"/>
                    <path d="M44 38 Q50 42 56 38" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <rect x="65" y="80" width="30" height="40" rx="3" fill="white" stroke="#10b981" strokeWidth="2"/>
                    <line x1="72" y1="90" x2="88" y2="90" stroke="#94a3b8" strokeWidth="2"/>
                    <line x1="72" y1="98" x2="88" y2="98" stroke="#94a3b8" strokeWidth="1"/>
                    <line x1="72" y1="104" x2="85" y2="104" stroke="#94a3b8" strokeWidth="1"/>
                  </g>
                  
                  {/* Q&A bubble */}
                  <g transform="translate(165, 50)">
                    <ellipse cx="35" cy="25" rx="40" ry="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                    <text x="35" y="30" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">1000+ Q&A</text>
                  </g>
                  
                  {/* Checklist */}
                  <g transform="translate(160, 220)">
                    <rect x="0" y="0" width="80" height="60" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
                    {[0, 1, 2].map((i) => (
                      <g key={i}>
                        <circle cx="15" cy={15 + i * 17} r="5" fill="#10b981"/>
                        <path d={`M12 ${15 + i * 17} L14 ${17 + i * 17} L18 ${13 + i * 17}`} stroke="white" strokeWidth="1.5" fill="none"/>
                        <rect x="28" y={12 + i * 17} width={35 - i * 5} height="6" rx="2" fill="#e2e8f0"/>
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Interview Preparation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mock Interview Q&A
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                More than <span className="font-bold text-electric">1000+ Mock interview questions and answers</span> to equip students for cracking any job interviews, along with Cover-letter and Resume preparation, Soft-Skills Development.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FileText, text: "1000+ Interview Questions & Answers" },
                  { icon: FileText, text: "Resume & Cover Letter Preparation" },
                  { icon: Users, text: "Soft-Skills Development Training" },
                  { icon: MessageSquare, text: "Mock Interview Practice Sessions" },
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
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              If you are looking for result-oriented VLSI training with real placement support
            </p>
            <p className="text-xl font-semibold text-electric mb-8">
              Semicon Technolabs — where skills build careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-electric text-white hover:bg-electric/90 font-medium px-8"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8"
              >
                Contact Us
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-electric" />
                <span className="text-sm">info@semicontechnolabs.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-electric" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-electric" />
                <span className="text-sm">Hyderabad & Bangalore</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

