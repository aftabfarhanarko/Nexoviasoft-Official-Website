"use client";
import React from "react";
import { CreditCard, Activity, BarChart2, Hexagon } from "lucide-react";
import { motion } from "framer-motion";

const Banners = () => {
  return (
    <section className="max-w-7xl  mx-auto relative text-white pt-10 md:pt-20 pb-32 overflow-hidden">
      {/* Floating Icons Background Elements - Positioned absolutely */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-20 left-20"
      >
        <div className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(217,70,239,0.1)] transform -rotate-6">
          <Activity className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="hidden lg:block absolute bottom-20 left-40"
      >
        <div className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(217,70,239,0.1)] transform rotate-3">
          <div className="w-12 h-12 bg-[#d946ef] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">N</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="hidden lg:block absolute top-32 right-20"
      >
        <div className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(217,70,239,0.1)] transform rotate-6">
          <BarChart2 className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [25, -25, 25] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="hidden lg:block absolute bottom-32 right-40"
      >
        <div className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(217,70,239,0.1)] transform -rotate-3">
          <Hexagon className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] fill-current opacity-80" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Trusted Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
          >
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-neutral-900"></div>
              <div className="w-6 h-6 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
              <div className="w-6 h-6 rounded-full bg-[#d946ef] border-2 border-neutral-900"></div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] font-medium text-sm">
              Trusted by 1M+ users
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight"
          >
            Turn Scattered Data Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Smart Decisions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            One simple dashboard to track your SaaS growth, MRR, churn and user
            behavior—without the chaos.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <button className="bg-[#d946ef] hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] text-white text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_30px_-10px_rgba(217,70,239,0.3)] hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.5)] transform hover:-translate-y-1">
              Get Started For Free
            </button>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <CreditCard size={16} />
              <span>No credit card required</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
