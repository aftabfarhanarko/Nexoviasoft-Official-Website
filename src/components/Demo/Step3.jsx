"use client";
import React from "react";
import { Share2, BarChart3, Mail, Zap, Layout, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Step3 = () => {
  const steps = [
    {
      title: "Connect your product",
      description:
        "Integrate in minutes with your existing stack—no engineering lift required.",
      icon: <Share2 className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      graphic: (
        <div className="relative w-full h-32 flex items-center justify-center">
          <div className="absolute w-24 h-24 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
            </div>
          </div>
          {/* Orbiting dots */}
          <div className="absolute w-full h-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#d946ef] rounded-full shadow-[0_0_10px_#d946ef]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Track User Behavior",
      description:
        "See what's used, what's dropped, and what keeps users engaged.",
      icon: <BarChart3 className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      graphic: (
        <div className="relative w-full h-32 flex items-end justify-center px-8 pb-4">
          <div className="w-full h-24 bg-white/5 rounded-t-full overflow-hidden relative border border-white/5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-16 bg-[#d946ef] origin-bottom transform -rotate-45 transition-transform duration-1000 animate-[wiggle_3s_ease-in-out_infinite] shadow-[0_0_15px_#d946ef]"></div>
            <div className="absolute bottom-0 w-full border-t border-white/10"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Turn Insights Into Action",
      description:
        "Get clear, actionable recommendations to boost retention and grow MRR.",
      icon: <Mail className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      graphic: (
        <div className="relative w-full h-32 flex items-center justify-center">
          <div className="w-24 h-16 bg-gradient-to-r from-[#d946ef] to-[#f97316] border border-[#d946ef]/20 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 translate-x-full group-hover:animate-shimmer"></div>
            <Mail className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] font-medium text-sm mb-6 shadow-sm backdrop-blur-sm">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Get Clear Answers <br /> In 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From data to clarity—uncover insights, take action, and grow smarter
            in three simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
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

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-8 h-12">{step.description}</p>

                {/* Graphic Area */}
                <div className="bg-white/5 rounded-2xl p-6 flex items-center justify-center h-48 overflow-hidden border border-white/5 group-hover:border-[#d946ef]/20 transition-all duration-300">
                  {step.graphic}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Step3;
