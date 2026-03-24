"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  Settings,
} from "lucide-react";
import AboutNexoviaSoftCard from "./AboutNexoviaSoftCard";

const AboutNexoviaSoft = () => {
  return (
    <section className=" -mt-25 md:-mt-15 py-24 px-4 relative overflow-hidden">
      {/* Desktop Version - No Changes */}
      <div className=" hidden md:block">
        <div className="max-w-7xl  mx-auto flex  flex-row gap-16 items-center relative z-10">
          {/* Left Column: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Bot size={14} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
              <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                About NexoviaSoft
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl font-sans text-white mb-6 leading-tight font-medium"
            >
              AI Meets Design,
              <br />
              <span className="text-gray-400">Purpose Into Ideas!</span>
            </motion.h2>

            <div className="space-y-6">
              <AboutNexoviaSoftCard
                delay={0.3}
                icon={Bot}
                title="Advanced AI, Streamlined Design"
                description="NexoviaSoft blends technical expertise with creative innovation. We build solutions that showcase sophistication and drive results."
                tags={["AI Design", "Tech Innovation"]}
              />
              <AboutNexoviaSoftCard
                delay={0.4}
                icon={Settings}
                title="Tailored Solutions & Smart Strategies"
                description="We adapt our strategies to your unique vision. From custom development to brand identity, we fine-tune every detail."
                tags={["Easy Customization", "Brand Identity"]}
              />
              <AboutNexoviaSoftCard
                delay={0.5}
                icon={Zap}
                title="Strategic Growth Partner"
                description="We are built to grow with your business. Whether you're launching new products or expanding markets, we scale with you."
                hasButton
              />
            </div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-[770px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            {/* Image Overlay/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            <img
              src="https://i.ibb.co.com/q38fff6X/image.png"
              className=" h-full object-cover"
            ></img>
          </motion.div>
        </div>
      </div>

      {/* Mobile Version - Updated */}
      <div className="md:hidden block">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Bot size={14} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
            <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
              About NexoviaSoft
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-sans text-white mb-8 leading-tight font-medium"
          >
            AI Meets Design,
            <br />
            <span className="text-gray-400">Purpose Into Ideas!</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden group hover:border-[#d946ef]/30 transition-colors duration-500"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
              <img
                src="https://i.ibb.co.com/q38fff6X/image.png"
                alt="About NexoviaSoft"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-5 flex gap-4 relative z-20 bg-[#0A0A0A]">
              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mb-3">
                  <h3 className="text-white font-semibold text-sm leading-snug">
                    Advanced AI, Streamlined Design
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    NexoviaSoft blends technical expertise with creative
                    innovation.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="px-2 py-1 rounded-md text-[10px] font-medium bg-gradient-to-r from-[#d946ef] to-[#f97316] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] border border-[#d946ef]/20">
                    AI Design
                  </span>
                </div>
              </div>

              <div className="w-[1px] bg-white/10"></div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mb-3">
                  <h3 className="text-white font-semibold text-sm leading-snug">
                    Tailored Solutions & Smart Strategies
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    We adapt our strategies to your unique vision. From custom
                    development to brand identity, we fine-tune every detail.
                  </p>
                </div>
                <div className="pt-1">
                  <span className="px-2 py-1 rounded-md text-[10px] font-medium bg-gradient-to-r from-[#d946ef] to-[#f97316] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] border border-[#d946ef]/20">
                    Easy Customization
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Full Width Card */}
          <AboutNexoviaSoftCard
            delay={0.4}
            icon={Zap}
            title="Strategic Growth Partner"
            description="We are built to grow with your business. Whether you're launching new products or expanding markets, we scale with you."
            hasButton
            isMobile={true}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutNexoviaSoft;
