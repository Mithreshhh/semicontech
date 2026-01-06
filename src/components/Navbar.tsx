"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Placement", href: "/placement" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const aboutUsDropdownItems = [
  { name: "Directors", href: "/directors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Media", href: "/media" },
];

const designServicesDropdownItems = [
  { name: "Analog Layout", href: "/design-services/analog-layout" },
  { name: "Physical Design", href: "/design-services/physical-design" },
  { name: "Analog Circuit Design", href: "/design-services/analog-circuit-design" },
  { name: "ASIC Verification", href: "/design-services/asic-verification" },
  { name: "Design for Test", href: "/design-services/design-for-test" },
];

const trainingDropdownItems = [
  { name: "College Students", href: "/training/students" },
  { name: "Freshers", href: "/training/freshers" },
  { name: "Corporate", href: "/training/corporate" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = React.useState(false);
  const [designMobileDropdownOpen, setDesignMobileDropdownOpen] = React.useState(false);
  const [designDesktopDropdownOpen, setDesignDesktopDropdownOpen] = React.useState(false);
  const [trainingMobileDropdownOpen, setTrainingMobileDropdownOpen] = React.useState(false);
  const [trainingDesktopDropdownOpen, setTrainingDesktopDropdownOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-electric/10 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-electric p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-electric/20">
          </div>
          <span
            className={cn(
              "font-heading font-bold text-xl tracking-tighter transition-colors",
              scrolled ? "text-electric" : "text-electric"
            )}
          >
            SEMICONTECH<span className="text-white"></span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-electric",
                pathname === item.href ? "text-electric" : "text-electric/80"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Design Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDesignDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesignDesktopDropdownOpen(false)}
          >
            <Link
              href="/design-services"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-electric flex items-center gap-1",
                designServicesDropdownItems.some(item => pathname.startsWith(item.href)) || pathname === "/design-services"
                  ? "text-electric"
                  : "text-electric/80"
              )}
            >
              Design Services
              <ChevronDown className={cn("h-4 w-4 transition-transform", designDesktopDropdownOpen && "rotate-180")} />
            </Link>
            
            <AnimatePresence>
              {designDesktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-white border border-electric/20 shadow-xl rounded-xl py-2 min-w-[220px]">
                    {designServicesDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm font-medium transition-colors hover:text-electric hover:bg-electric/5",
                          pathname.startsWith(item.href) ? "text-electric bg-electric/10" : "text-electric/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Training Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setTrainingDesktopDropdownOpen(true)}
            onMouseLeave={() => setTrainingDesktopDropdownOpen(false)}
          >
            <Link
              href="/training"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-electric flex items-center gap-1",
                trainingDropdownItems.some(item => pathname.startsWith(item.href)) || pathname === "/training"
                  ? "text-electric"
                  : "text-electric/80"
              )}
            >
              Training
              <ChevronDown className={cn("h-4 w-4 transition-transform", trainingDesktopDropdownOpen && "rotate-180")} />
            </Link>
            
            <AnimatePresence>
              {trainingDesktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-white border border-electric/20 shadow-xl rounded-xl py-2 min-w-[180px]">
                    {trainingDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm font-medium transition-colors hover:text-electric hover:bg-electric/5",
                          pathname.startsWith(item.href) ? "text-electric bg-electric/10" : "text-electric/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Us Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <Link
              href="/about"
              className={cn(
                "text-sm font-semibold transition-colors hover:text-electric flex items-center gap-1",
                aboutUsDropdownItems.some(item => pathname === item.href) || pathname === "/about" ? "text-electric" : "text-electric/80"
              )}
            >
              About Us
              <ChevronDown className={cn("h-4 w-4 transition-transform", desktopDropdownOpen && "rotate-180")} />
            </Link>
            
            <AnimatePresence>
              {desktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                >
                  <div className="bg-white border border-electric/20 shadow-xl rounded-xl py-2 min-w-[160px]">
                    {aboutUsDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-4 py-2 text-sm font-medium transition-colors hover:text-electric hover:bg-electric/5",
                          pathname === item.href ? "text-electric bg-electric/10" : "text-electric/80"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-electric",
                pathname === item.href ? "text-electric" : "text-electric/80"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-6 shadow-md shadow-electric/10">
            Apply/Register
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-electric"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-electric/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-bold py-2 border-b border-slate-100",
                  pathname === item.href ? "text-electric" : "text-electric/80"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Design Services Dropdown */}
            <div className="border-b border-slate-100 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/design-services"
                  className={cn(
                    "text-lg font-bold py-2 flex-1",
                    pathname === "/design-services" || pathname.startsWith("/design-services/")
                      ? "text-electric"
                      : "text-electric/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Design Services
                </Link>
                <button
                  onClick={() => setDesignMobileDropdownOpen(!designMobileDropdownOpen)}
                  className="p-2 text-electric/80 hover:text-electric"
                >
                  <ChevronDown className={cn("h-5 w-5 transition-transform", designMobileDropdownOpen && "rotate-180")} />
                </button>
              </div>
              <AnimatePresence>
                {designMobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col gap-2 pt-2">
                      {designServicesDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-base font-semibold py-1.5 transition-colors",
                            pathname.startsWith(item.href) ? "text-electric" : "text-electric/70"
                          )}
                          onClick={() => {
                            setIsOpen(false);
                            setDesignMobileDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile Training Dropdown */}
            <div className="border-b border-slate-100 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/training"
                  className={cn(
                    "text-lg font-bold py-2 flex-1",
                    pathname === "/training" || pathname.startsWith("/training/")
                      ? "text-electric"
                      : "text-electric/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Training
                </Link>
                <button
                  onClick={() => setTrainingMobileDropdownOpen(!trainingMobileDropdownOpen)}
                  className="p-2 text-electric/80 hover:text-electric"
                >
                  <ChevronDown className={cn("h-5 w-5 transition-transform", trainingMobileDropdownOpen && "rotate-180")} />
                </button>
              </div>
              <AnimatePresence>
                {trainingMobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col gap-2 pt-2">
                      {trainingDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-base font-semibold py-1.5 transition-colors",
                            pathname.startsWith(item.href) ? "text-electric" : "text-electric/70"
                          )}
                          onClick={() => {
                            setIsOpen(false);
                            setTrainingMobileDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile About Us Dropdown */}
            <div className="border-b border-slate-100 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/about"
                  className={cn(
                    "text-lg font-bold py-2 flex-1",
                    pathname === "/about" ? "text-electric" : "text-electric/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="p-2 text-electric/80 hover:text-electric"
                >
                  <ChevronDown className={cn("h-5 w-5 transition-transform", mobileDropdownOpen && "rotate-180")} />
                </button>
              </div>
              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col gap-2 pt-2">
                      {aboutUsDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-base font-semibold py-1.5 transition-colors",
                            pathname === item.href ? "text-electric" : "text-electric/70"
                          )}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-bold py-2 border-b border-slate-100",
                  pathname === item.href ? "text-electric" : "text-electric/80"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-electric text-white hover:bg-electric/90 font-bold w-full mt-2 rounded-full py-6">
              Apply/Register
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
