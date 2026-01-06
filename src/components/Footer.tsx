"use client";

import Link from "next/link";
import { Cpu, Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-navy pt-16 pb-8 border-t border-electric/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Mission */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-electric p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-electric/20">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tighter text-navy">
              SEMICORE<span className="text-electric">TECH</span>
            </span>
          </Link>
          <p className="text-navy/60 text-sm leading-relaxed">
            Pioneering the future of semiconductor innovation with advanced VLSI, embedded systems, and software engineering solutions.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-electric/5 rounded-full hover:bg-electric hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="p-2 bg-electric/5 rounded-full hover:bg-electric hover:text-white transition-all">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="p-2 bg-electric/5 rounded-full hover:bg-electric hover:text-white transition-all">
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-navy">Services</h4>
          <ul className="space-y-4 text-navy/60 text-sm">
            <li><Link href="/services" className="hover:text-electric transition-colors">Semiconductor Solutions</Link></li>
            <li><Link href="/services" className="hover:text-electric transition-colors">VLSI Design & Verification</Link></li>
            <li><Link href="/services" className="hover:text-electric transition-colors">Embedded Systems</Link></li>
            <li><Link href="/services" className="hover:text-electric transition-colors">Software Development</Link></li>
            <li><Link href="/services" className="hover:text-electric transition-colors">Testing & Validation</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-navy">Company</h4>
          <ul className="space-y-4 text-navy/60 text-sm">
            <li><Link href="/about" className="hover:text-electric transition-colors">About Us</Link></li>
            <li><Link href="/management" className="hover:text-electric transition-colors">Our Leadership</Link></li>
            <li><Link href="/contact" className="hover:text-electric transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-electric transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-electric transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="font-heading font-bold text-lg mb-6 text-navy">Get in Touch</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-navy/60 text-sm">
              <MapPin className="w-5 h-5 text-electric shrink-0" />
              <span>123 Silicon Valley Way, San Jose, CA 95134, USA</span>
            </div>
            <div className="flex items-center gap-3 text-navy/60 text-sm">
              <Phone className="w-5 h-5 text-electric shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-navy/60 text-sm">
              <Mail className="w-5 h-5 text-electric shrink-0" />
              <span>contact@semicoretech.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-electric/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-navy/40 text-xs text-center md:text-left">
          © {new Date().getFullYear()} SemicoreTech Engineering Solutions. All rights reserved.
        </p>
        <p className="text-navy/40 text-xs">
          Engineered for Excellence.
        </p>
      </div>
    </footer>
  );
}
