"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Video,
  Slack,
  Calculator,
  Activity,
  Accessibility,
  DollarSign,
  GitBranch,
  Check,
  Mail,
  Github,
  Puzzle,
} from "lucide-react";

const Intregration = () => {
  // Icon data mimicking the image sequence
  // Using Lucide icons to approximate the brands
  const integrationIcons = [
    { icon: Video, color: "bg-[#EFFC76]", iconColor: "text-[#EFFC76]" }, // Zoom-ish
    { icon: Slack, color: "bg-white", iconColor: "text-red-500" }, // Slack (using multicolor fallback later if needed, simple for now)
    { icon: Calculator, color: "bg-green-700", iconColor: "text-green-200" }, // Sheets/Excel
    { icon: Activity, color: "bg-yellow-400", iconColor: "text-yellow-900" }, // Sport/Activity
    { icon: Accessibility, color: "bg-white", iconColor: "text-black" }, // Access
    { icon: DollarSign, color: "bg-orange-600", iconColor: "text-white" }, // Money
    { icon: GitBranch, color: "bg-[#EFFC76]", iconColor: "text-black" }, // Bitbucket-ish
    {
      icon: Check,
      color: "bg-[#EFFC76]",
      iconColor: "text-black",
      isMain: true,
    }, // Main Active
    { icon: Mail, color: "bg-yellow-500", iconColor: "text-black" }, // Mailchimp
    { icon: Github, color: "bg-white", iconColor: "text-black" }, // Github
  ];

  return (
    <section className="bg-black py-24 px-4 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#EFFC76]/20 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#EFFC76]/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <Puzzle className="w-4 h-4 text-[#EFFC76]" />
            <span className="text-sm font-medium text-gray-300">
              Integrations
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Seamless Integrations for
          <br />
          <span className="text-gray-400">Maximum Efficiency.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto"
        >
          Nubien seamlessly integrates with leading tools and platforms,
          ensuring a smooth and efficient workflow.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <button className="bg-[#EFFC76] hover:bg-[#EFFC76] text-black px-8 py-3 rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(239,252,118,0.5)]">
            View About Reboot
          </button>
        </motion.div>

        {/* Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
        >
          {integrationIcons.map((item, index) => {
            const Icon = item.icon;
            const isMain = item.isMain;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5 + index * 0.05,
                }}
                whileHover={{ scale: 1.1 }}
                className={`
                                    relative rounded-full flex items-center justify-center transition-all duration-300
                                    ${
                                      isMain
                                        ? "w-20 h-20 shadow-[0_0_40px_rgba(79,70,229,0.6)] z-20 scale-110"
                                        : "w-12 h-12 md:w-14 md:h-14 opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                                    }
                                    ${item.color}
                                `}
              >
                {/* Main Icon Ring Effect */}
                {isMain && (
                  <div className="absolute inset-0 rounded-full border-4 border-[#EFFC76]/30 animate-pulse" />
                )}

                <Icon
                  className={`${isMain ? "w-8 h-8" : "w-6 h-6"} ${
                    item.iconColor
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Intregration;
