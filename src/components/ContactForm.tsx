"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 bg-lite-blue/30 border-t border-electric/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-15 pointer-events-none">
        <img src="/images/undraw_project-complete_1zw5.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Get in <span className="text-electric">Touch</span>
              </h2>
              <p className="text-navy/60 text-sm leading-relaxed">
                Have questions or ready to start your next project? Reach out to our team of experts.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <p className="text-sm text-navy/60">contact@semicoretech.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Phone</p>
                  <p className="text-sm text-navy/60">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Address</p>
                  <p className="text-sm text-navy/60">123 Silicon Valley Way, San Jose, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-navy font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="h-12 bg-white border-gray-200 focus:border-electric focus:ring-electric/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-navy font-semibold">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="h-12 bg-white border-gray-200 focus:border-electric focus:ring-electric/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-navy font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="h-12 bg-white border-gray-200 focus:border-electric focus:ring-electric/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-navy font-semibold">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="min-h-32 bg-white border-gray-200 focus:border-electric focus:ring-electric/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-8 h-12 shadow-lg shadow-electric/20"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

