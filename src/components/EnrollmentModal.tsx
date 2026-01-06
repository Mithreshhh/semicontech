"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export function EnrollmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "",
    courses: "",
    location: "",
    passingYear: "",
  });

  useEffect(() => {
    // Set mounted to true after component mounts (client-side only)
    setMounted(true);
    
    // Show modal after a small delay on every page load/refresh
    setTimeout(() => {
      setIsOpen(true);
    }, 500);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
    handleClose();
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-electric/20 shadow-2xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-navy mb-2">
            Enroll in Our Courses
          </DialogTitle>
          <DialogDescription className="text-navy/60">
            Fill in your details to get started with our semiconductor courses
          </DialogDescription>
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 p-2 rounded-full hover:bg-navy/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-navy" />
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-navy font-semibold">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-navy font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-navy font-semibold">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full"
            />
          </div>

          {/* Mode of Course */}
          <div className="space-y-2">
            <Label htmlFor="mode" className="text-navy font-semibold">
              Mode of Course <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.mode}
              onValueChange={(value) => handleSelectChange("mode", value)}
              required
            >
              <SelectTrigger id="mode" className="w-full">
                <SelectValue placeholder="Select course mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Courses */}
          <div className="space-y-2">
            <Label htmlFor="courses" className="text-navy font-semibold">
              Courses <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.courses}
              onValueChange={(value) => handleSelectChange("courses", value)}
              required
            >
              <SelectTrigger id="courses" className="w-full">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vlsi-design">VLSI Design</SelectItem>
                <SelectItem value="semiconductor-design">Semiconductor Design</SelectItem>
                <SelectItem value="embedded-systems">Embedded Systems</SelectItem>
                <SelectItem value="physical-design">Physical Design & Verification</SelectItem>
                <SelectItem value="rtl-design">RTL Design</SelectItem>
                <SelectItem value="asic-fpga">ASIC & FPGA Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-navy font-semibold">
              Location <span className="text-red-500">*</span>
            </Label>
            <Input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your location"
              className="w-full"
            />
          </div>

          {/* Passing Year */}
          <div className="space-y-2">
            <Label htmlFor="passingYear" className="text-navy font-semibold">
              Passing Year <span className="text-red-500">*</span>
            </Label>
            <Input
              id="passingYear"
              name="passingYear"
              type="number"
              required
              value={formData.passingYear}
              onChange={handleInputChange}
              placeholder="Enter your passing year"
              min="1990"
              max="2030"
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-navy/20 text-navy hover:bg-navy/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-electric text-white hover:bg-electric/90 font-bold"
            >
              Submit Enrollment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

