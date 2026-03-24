"use client";
import React from "react";
import {
  Clock,
  Smartphone,
  Zap,
  Shield,
  FileText,
  Layout,
  MessageCircle,
} from "lucide-react";

import { motion } from "framer-motion";

const Beifect = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Tracking",
      description:
        "Monitor user activity instantly for smarter decision-making.",
      color: "bg-[#d946ef]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]",
    },
    {
      icon: <Smartphone className="w-8 h-8" />, // Using Smartphone as a proxy for "All-in-One" or "Device"
      title: "All-in-One View",
      description:
        "Keep all your analytics in one place, without jumping between tools.",
      color: "bg-[#d946ef]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Actionable Insights",
      description:
        "Track the metrics that matter most for sustainable business growth.",
      color: "bg-[#d946ef]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Data",
      description:
        "Keep your analytics safe with advanced security and strong encryption.",
      color: "bg-[#d946ef]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Custom Reports",
      description:
        "Create tailored reports that fit your needs and highlight key insights.",
      color: "bg-[#d946ef]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Simple to Use",
      description:
        "Navigate easily—no steep learning curve, start making better decisions quickly.",
      color: "bg-[#d946ef]/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]",
    },
  ];

  return (
    <section id="benefits" className="py-24 -mt-30 md:-mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#d946ef] text-white text-xs font-bold px-3 py-1 rounded-full">
              <MessageCircle size={15} className="text-black" />
            </span>
            <span className="text-gray-300 text-sm font-medium">
              24/7 Collaborate With Us
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Benefits That Truly <br /> Matter To You
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Monitor metrics as they happen, so you can respond quickly and keep
            your goals on track.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[#d946ef]/50 transition-all duration-300 hover:bg-neutral-900/80"
            >
              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d946ef]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#d946ef]/20 group-hover:scale-110 transition-transform duration-300 ${benefit.color}`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beifect;
