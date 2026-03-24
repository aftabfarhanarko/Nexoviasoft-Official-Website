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
import { servicesData } from "@/constants/services";
import { useQuery } from "@/hooks/useApi";

const Service = () => {
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

  const { data, isLoading, isError } = useQuery(`/our-service`);
  console.log("Services", data);

  return (
    <section className="bg-transparent py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center  mb-10">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-[#d946ef] text-white text-xs font-bold px-3 py-1 rounded-full">
                <Code size={15} className="text-black" />
              </span>
              <span className="text-gray-300 text-sm font-medium">
                Our Expertise
              </span>
            </motion.div>
          </div>

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

          <SmoothButton>Book an Appointment</SmoothButton>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {servicesData.map((service, index) => (
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#d946ef]/50 hover:bg-white/10 transition-all cursor-default"
            >
              <div className="p-1 rounded-full bg-gradient-to-r from-[#d946ef] to-[#f97316] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">
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
