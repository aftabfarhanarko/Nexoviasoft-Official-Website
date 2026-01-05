"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PortfolioReady = () => {
  return (
    <div className="w-11/12 md:max-w-[880px] mx-auto py-20">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#EFFC76] via-[#EFFC76]/20 to-black border border-white/10 p-10 md:p-20 text-center">
        {/* Top Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#EFFC76]/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <div className="p-1 rounded-full bg-[#EFFC76] flex items-center justify-center">
              <Sparkles size={14} className="text-black" />
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Become a Part of Us
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-5xl  font-medium text-white leading-tight"
          >
            Ready to Elevate Your Brand <br className="hidden md:block" />
            <span className="text-gray-400">with Next-Gen Innovation?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-md  max-w-2xl leading-relaxed"
          >
            Ready to take the next step? Join us now and start transforming your
            vision into reality with expert support.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-8 py-4 rounded-xl bg-[#EFFC76] hover:bg-[#EFFC76] text-black font-medium transition-all shadow-lg shadow-[#EFFC76]/25 mt-4"
          >
            Book an Appointment
          </motion.button>
        </div>

        {/* Background Grid Pattern (Optional subtle texture) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default PortfolioReady;