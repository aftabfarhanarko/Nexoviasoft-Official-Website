"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Gift } from "lucide-react";

const ElevateBrands = () => {
  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto mt-10 py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <div className="p-1.5 rounded-full bg-[#EFFC76] flex items-center justify-center">
              <Gift size={16} className="text-black" />
            </div>
            <span className="text-gray-200 text-sm font-medium">
              Why teams choose SquadLog
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Elevate your brand with
            <br />
            <span className="text-gray-400">a product-ready workflow.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            SquadLog brings strategy, design, and engineering into one place so
            every release feels on-brand, on-time, and confidently shipped to
            your customers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
              <div className="mt-1 rounded-full bg-[#EFFC76]/20 text-[#EFFC76] w-7 h-7 flex items-center justify-center">
                <Star size={16} />
              </div>
              <div>
                <p className="text-sm text-gray-200 font-medium">
                  Consistent launches
                </p>
                <p className="text-xs text-gray-400">
                  Standard checklists and approvals keep every brand moment aligned.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
              <div className="mt-1 rounded-full bg-[#EFFC76]/20 text-[#EFFC76] w-7 h-7 flex items-center justify-center">
                <Star size={16} />
              </div>
              <div>
                <p className="text-sm text-gray-200 font-medium">
                  Clear client visibility
                </p>
                <p className="text-xs text-gray-400">
                  Share a live SquadLog view instead of scattered chats and sheets.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EFFC76]/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-black/40 border border-white/10 p-5 flex flex-col justify-between min-h-[160px]">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                SquadLog Snapshot
              </p>
              <p className="text-2xl font-semibold text-white mb-2">
                12 active launches
              </p>
              <p className="text-sm text-gray-400">
                All tracked in one unified delivery board.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-5 flex flex-col justify-between min-h-[160px]">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                Brand consistency
              </p>
              <p className="text-2xl font-semibold text-[#EFFC76] mb-2">
                98% on-guideline
              </p>
              <p className="text-sm text-gray-400">
                Templates keep every new page and release on-brand.
              </p>
            </div>
            <div className="sm:col-span-2 rounded-3xl bg-gradient-to-r from-[#EFFC76]/20 to-transparent border border-[#EFFC76]/40 p-5 flex items-center justify-between gap-6">
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wide mb-1">
                  Inside SquadLog
                </p>
                <p className="text-lg font-semibold text-white">
                  One place to plan, approve, and ship your next launch.
                </p>
              </div>
              <div className="hidden sm:flex items-center justify-center rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-[#EFFC76]">
                SquadLog in action
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ElevateBrands;
