"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Brain,
  MessageSquare,
  LineChart,
  ScanFace,
  Mic,
  LayoutGrid,
  PenTool,
  Shield,
  Monitor,
  BarChart,
  Database,
  UserPen,
  Globe,
  Code,
  Cloud,
  Smartphone,
  TrendingUp,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import SmoothButton from "@/Share/SmoothButton";

const Service = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Robust Solutions",
      description:
        "Building scalable, high-performance websites tailored to your business needs.",
      image: null,
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      subtitle: "Scalable Infrastructure",
      description:
        "Secure and scalable cloud solutions to power your enterprise applications.",
      image: null,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      image: null,
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      subtitle: "User-Centric Design",
      description:
        "Creating intuitive and engaging interfaces that users love and trust.",
      image: null,
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      subtitle: "Growth & Reach",
      description:
        "Data-driven marketing strategies to grow your brand and reach your audience.",
      image: null,
    },
    {
      icon: Palette,
      title: "Graphic Design",
      subtitle: "Visual Identity",
      description:
        "Stunning visuals and branding materials that make a lasting impression.",
      image: null,
    },
    {
      icon: Globe,
      title: "WordPress Development",
      subtitle: "Custom Themes",
      description:
        "Expert WordPress development for flexible and easy-to-manage websites.",
      image: null,
    },
    {
      icon: Monitor,
      title: "Custom Software Development",
      subtitle: "Tailored Solutions",
      description:
        "Bespoke software solutions designed to solve your specific business challenges.",
      image: null,
    },
  ];

  const bottomTags = [
    { name: "Content Strategy", icon: PenTool },
    { name: "Cybersecurity", icon: Shield },
    { name: "SEO Optimization", icon: Monitor },
    { name: "Data Insight", icon: BarChart },
    { name: "Analytics", icon: LineChart },
    { name: "Branding", icon: UserPen },
    { name: "Database Design", icon: Database },
    { name: "Lead Generation", icon: Globe },
  ];

  return (
    <section className="bg-transparent py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-5 h-5 rounded-full bg-[#EFFC76] flex items-center justify-center">
              <Code size={12} className="text-black" />
            </div>
            <span className="text-gray-300 text-sm">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight"
          >
            Comprehensive Services for
            <br />
            <span className="text-gray-400">Digital Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base"
          >
            Our cutting-edge solutions are designed to transform businesses,
            <br />
            enhance efficiency, and drive innovation.
          </motion.p>

          <SmoothButton>Book a Terminal</SmoothButton>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>

        {/* Bottom Tags */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {bottomTags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#EFFC76]/50 hover:bg-white/10 transition-all cursor-default"
            >
              <div className="p-1 rounded-full bg-[#EFFC76]/20 text-[#EFFC76]">
                <tag.icon size={14} />
              </div>
              <span className="text-gray-300 text-sm">{tag.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
