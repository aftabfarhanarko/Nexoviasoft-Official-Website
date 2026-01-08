"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import SmoothButton from "@/Share/SmoothButton";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO",
    company: "Innovate Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    text: "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    company: "Nexus Digital",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    text: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Founder",
    company: "GreenLeaf Enterprises",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    text: "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    role: "Creative Director",
    company: "PixelWorks Studio",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    text: "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning website.",
    rating: 5,
  },
  {
    name: "Brian Clark",
    role: "Team Lead",
    company: "Mandro Designs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brian",
    text: "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.",
    rating: 5,
  },
  {
    name: "Daniel Carter",
    role: "Founder",
    company: "Fusion Studios",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    text: "The team's dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#EFFC76]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#EFFC76]/30 bg-[#EFFC76]/10 mb-6"
                    >
                        <div className="w-5 h-5 rounded-full bg-[#EFFC76] flex items-center justify-center mr-2">
                            <MessageSquare size={12} className="text-black" fill="currentColor" />
                        </div>
                        <span className="text-gray-300 text-sm font-medium">Testimonial</span>
                    </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white mb-4 tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-medium text-gray-500 mb-6 tracking-tight"
          >
            About Reboot's Excellence
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Hear from our happy clients! See how we've helped them achieve their
            goals and create lasting impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <SmoothButton>Book An Appointment </SmoothButton>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} delay={0.2 + index * 0.1} />
          ))}
        </div>

        {/* Footer Logos Placeholder (as per design) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8 mt-20 opacity-30 grayscale"
        >
          {/* Replace with actual logo SVGs if available, otherwise placeholders */}
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-20 bg-white/20 rounded"></div>
          <div className="h-8 w-20 bg-white/20 rounded"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
