"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const BecomePart = () => {
  return (
    <div className="w-11/12 md:max-w-[880px] mx-auto py-20">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#d946ef] via-[#f43f5e]/20 to-transparent border border-white/10 p-10 md:p-20 text-center">
        {/* Top Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-r from-[#d946ef] to-[#f97316] blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Badge  oijwfi9oj weui9jhtgui9e*/ }
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <div className="p-1 rounded-full bg-[#d946ef] flex items-center justify-center">
              <Sparkles size={14} className="text-black" />
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Partner With Us
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
            Ready to Build Something <br className="hidden md:block" />
            <span className="text-gray-400">Extraordinary?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-md  max-w-2xl leading-relaxed"
          >
            Don't settle for average. Let's collaborate to create digital experiences 
            that define your industry and drive real results.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-8 py-4 rounded-xl bg-[#d946ef] hover:bg-[#d946ef] text-white font-medium transition-all shadow-lg shadow-[#d946ef]/25 mt-4"
          >
            Start Your Project
          </motion.button>
        </div>

        {/* Background Grid Pattern (Optional subtle texture) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default BecomePart;
