"use client";
import React from "react";
import InnovationCard from "./InnovationCard";
import { Clock, Eye, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SmoothButton from "@/Share/SmoothButton";

const Innovation = () => {
  return (
    <section className="  px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Top Section - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
          {/* Background decorative elements */}

          <InnovationCard
            title="Custom Software Solutions"
            description="SquadLog builds robust, scalable applications tailored to your business needs."
            type="integrations"
            delay={0}
          />
          <InnovationCard
            title="Secure Cloud Infrastructure"
            description="Reliable and secure cloud deployment for optimal performance."
            type="authentication"
            delay={0.2}
          />
          <InnovationCard
            title="Advanced AI Integration"
            description="Leverage the power of AI to automate and enhance your business processes."
            type="speech"
            delay={0.4}
          />
        </div>

        {/* Bottom Section - Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-16">
          <FeatureItem
            icon={Clock}
            title="Agile Development"
            description="Rapid iteration and delivery for faster time-to-market."
            delay={0.5}
          />
          <FeatureItem
            icon={Eye}
            title="Strategic Consulting"
            description="Expert guidance to navigate the digital landscape."
            delay={0.6}
          />
          <FeatureItem
            icon={Layers}
            title="Optimized UX/UI"
            description="Smart design that enhances user experience."
            delay={0.7}
          />
          <FeatureItem
            icon={TrendingUp}
            title="Scalable Architecture"
            description="Future-proof solutions built for growth."
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center space-x-3 mb-3">
        <Icon className="w-5 h-5 text-[#EFFC76]" />
        <h4 className="text-white font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default Innovation;
