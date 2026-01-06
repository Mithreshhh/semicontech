"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@semicontechnolabs.com",
    subDetails: "support@semicontechnolabs.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 9876543210",
    subDetails: "Mon-Fri, 9am - 6pm IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Hyderabad & Bangalore",
    subDetails: "India",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-8">
              <Mail className="w-4 h-4 text-electric" />
              <span className="text-sm font-medium text-electric">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Contact <span className="text-electric">Us</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Ready to start your journey in semiconductor design? Our team of experts is here to help you achieve your career goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 md:p-12 bg-white border border-slate-200 rounded-2xl shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-white border-slate-300 h-12 rounded-lg focus:border-electric focus:ring-1 focus:ring-electric text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white border-slate-300 h-12 rounded-lg focus:border-electric focus:ring-1 focus:ring-electric text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">Phone</Label>
                    <Input 
                      id="phone" 
                      placeholder="+91 9876543210" 
                      className="bg-white border-slate-300 h-12 rounded-lg focus:border-electric focus:ring-1 focus:ring-electric text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-slate-700">Interested In</Label>
                    <select 
                      id="service"
                      className="w-full bg-white border border-slate-300 h-12 rounded-lg focus:border-electric focus:outline-none focus:ring-1 focus:ring-electric text-slate-900 px-4"
                    >
                      <option value="training">Training Programs</option>
                      <option value="placement">Placement Support</option>
                      <option value="internship">Internship</option>
                      <option value="corporate">Corporate Training</option>
                      <option value="career">Career at Semicon</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements..." 
                    className="bg-white border-slate-300 min-h-[140px] rounded-lg focus:border-electric focus:ring-1 focus:ring-electric text-slate-900 resize-none"
                  />
                </div>

                <Button className="w-full md:w-auto px-8 h-12 bg-electric text-white hover:bg-electric/90 font-medium rounded-lg">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-6">
               {contactInfo.map((info, index) => (
                 <motion.div
                   key={info.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-6 bg-white border border-slate-200 rounded-xl hover:border-electric/30 hover:shadow-md transition-all group"
                 >
                   <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric transition-all">
                     <info.icon className="w-6 h-6 text-electric group-hover:text-white" />
                   </div>
                   <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h3>
                   <p className="text-electric text-sm mb-1">{info.details}</p>
                   <p className="text-slate-500 text-xs">{info.subDetails}</p>
                 </motion.div>
               ))}

               {/* Map Placeholder */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative h-48 bg-slate-100 border border-slate-200 rounded-xl overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-blue-50" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <MapPin className="w-8 h-8 text-electric mx-auto mb-2" />
                      <span className="text-slate-700 text-sm font-medium">View on Google Maps</span>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-12">Our <span className="text-electric">Locations</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { city: "Hyderabad", region: "Telangana" },
                { city: "Bangalore", region: "Karnataka" },
                { city: "Chennai", region: "Tamil Nadu" },
                { city: "Pune", region: "Maharashtra" }
              ].map((location) => (
                <div key={location.city} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-electric/30 hover:shadow-md transition-all">
                  <p className="text-slate-900 font-semibold text-lg">{location.city}</p>
                  <p className="text-slate-500 text-sm">{location.region}</p>
                </div>
              ))}
           </div>
         </div>
      </section>
    </div>
  );
}
