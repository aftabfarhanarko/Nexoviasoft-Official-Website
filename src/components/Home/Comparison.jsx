"use client";
import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import ComparisonItem from "./ComparisonItem";

const Comparison = () => {
  return (
    <section className="bg-transparent py-20 md:-mt-22 -mt-25 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#EFFC76]/30 bg-[#EFFC76]/10 mb-8"
          >
            <div className="w-5 h-5 rounded-full bg-[#EFFC76] flex items-center justify-center mr-2">
              <span className="flex items-center justify-center w-full h-full">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
              </span>
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Comparison
            </span>
          </motion.div>

          <div className="relative block mx-auto mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-medium text-white mb-4 relative z-10 tracking-tight"
            >
              SquadLog Advantage
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-medium text-white/40 relative z-10 tracking-tight"
            >
              Let's See the Difference
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed"
          >
            SquadLog is designed to set your business apart with premium
            solutions that drive growth and engagement.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12 relative">
          {/* The Rest */}
          <div className="bg-[#111]  rounded-[22px] p-4 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none opacity-50"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="space-y-5 md:space-y-6 relative z-10 h-full flex flex-col justify-center"
            >
              <ComparisonItem
                icon={X}
                color="text-red-500"
                bg="bg-red-500/10"
                text="Generic Solutions"
              />
              <ComparisonItem
                icon={X}
                color="text-red-500"
                bg="bg-red-500/10"
                text="Cookie-cutter Designs"
              />
              <ComparisonItem
                icon={X}
                color="text-red-500"
                bg="bg-red-500/10"
                text="Lack of Support"
              />
              <ComparisonItem
                icon={X}
                color="text-red-500"
                bg="bg-red-500/10"
                text="Hidden Costs Squadlog"
              />
              <ComparisonItem
                icon={X}
                color="text-red-500"
                bg="bg-red-500/10"
                text="Short-Term Relevance"
              />
            </motion.div>
          </div>

          {/* SquadLog - Elevated Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#0A0A0A] rounded-[22px]   overflow-hidden group"
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#EFFC76]/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#EFFC76] to-transparent opacity-70"></div>

            {/* Inner Gradient */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#EFFC76]/5 to-transparent pointer-events-none"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4,
                  },
                },
              }}
              className="relative z-10  space-y-4 md:space-y-6  p-4 md:p-10 h-full f8ex flex-col justify-center"
            >
              <ComparisonItem
                icon={Check}
                color="text-white"
                iconColor="text-black"
                bg="bg-[#EFFC76]"
                text="AI-Driven Design"
                isPremium
              />
              <ComparisonItem
                icon={Check}
                color="text-white"
                iconColor="text-black"
                bg="bg-[#EFFC76]"
                text="Premium, Minimal Aesthetic"
                isPremium
              />
              <ComparisonItem
                icon={Check}
                color="text-white"
                iconColor="text-black"
                bg="bg-[#EFFC76]"
                text="Performance Optimized"
                isPremium
              />
              <ComparisonItem
                icon={Check}
                color="text-white"
                iconColor="text-black"
                bg="bg-[#EFFC76]"
                text="Future-Proof Technology"
                isPremium
              />
              <ComparisonItem
                icon={Check}
                color="text-white"
                iconColor="text-black"
                bg="bg-[#EFFC76]"
                text="Unmatched Flexibility"
                isPremium
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
