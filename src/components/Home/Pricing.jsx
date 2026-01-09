"use client";
import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { Rocket, Bell, Layout } from "lucide-react";

const pricingPlans = [
  {
    plan: "Starter",
    price: "1,499",
    description: "Perfect for small businesses establishing a web presence.",
    tag: "Most Pick",
    icon: Rocket,
    stats: {
      projects: "2-3",
      revisions: "Weeks",
    },
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "SEO Optimization",
      "1 Month Support",
      "CMS Integration",
    ],
  },
  {
    plan: "Professional",
    price: "3,999",
    description: "Ideal for growing startups needing robust applications.",
    tag: "Advanced",
    icon: Bell,
    stats: {
      projects: "1-2",
      revisions: "Months",
    },
    features: [
      "Advanced Web Application",
      "Database Integration",
      "Performance Optimization",
      "3 Months Support",
      "Analytics Dashboard",
    ],
  },
  {
    plan: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large organizations.",
    tag: "Recommended",
    icon: Layout,
    stats: {
      projects: "3-6+",
      revisions: "Months",
    },
    features: [
      "Full-Stack Solution",
      "Cloud Infrastructure",
      "Security Audits",
      "Dedicated Team",
      "Priority Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Gradients - Removed for global theme */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#EFFC76]/10 blur-[100px] rounded-full pointer-events-none" /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-[#EFFC76]" />
            <span className="text-[#EFFC76] font-medium tracking-wide uppercase text-sm">
              Engagement Models
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Flexible Plans for Every Need— <br />
            <span className="text-gray-400">
              Perfect for Startups and Enterprises.
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our pricing plans are designed to make getting started as effortless
            as possible. With flexible options tailored to suit a variety of
            needs and budgets.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
