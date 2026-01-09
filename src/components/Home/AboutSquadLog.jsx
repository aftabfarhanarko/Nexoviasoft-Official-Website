"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  Zap,
  ArrowRight,
  Settings,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import AboutSquadLogCard from "./AboutSquadLogCard";
import SmoothButton from "@/Share/SmoothButton";

const AboutSquadLog = () => {
  return (
    <section className="bg-transparent py-24 px-4 relative overflow-hidden">
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
              <Bot size={14} className="text-[#EFFC76]" />
              <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                About SquadLog
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
              <AboutSquadLogCard
                delay={0.3}
                icon={Bot}
                title="Advanced AI, Streamlined Design"
                description="SquadLog blends technical expertise with creative innovation. We build solutions that showcase sophistication and drive results."
                tags={["AI Design", "Tech Innovation"]}
              />
              <AboutSquadLogCard
                delay={0.4}
                icon={Settings}
                title="Tailored Solutions"
                description="We adapt our strategies to your unique vision. From custom development to brand identity, we fine-tune every detail."
                tags={["Easy Customization", "Brand Identity"]}
              />
              <AboutSquadLogCard
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
            <Bot size={14} className="text-[#EFFC76]" />
            <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
              About SquadLog
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

          {/* Cards Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Card 1 with Image */}
            <AboutSquadLogCard
              delay={0.2}
              icon={Bot}
              title="Advanced AI, Streamlined Design"
              description="SquadLog blends technical expertise with creative innovation."
              tags={["AI Design"]}
              imageUrl="https://i.ibb.co.com/q38fff6X/image.png"
              isMobile={true}
            />

            {/* Card 2 with Image */}
            <AboutSquadLogCard
              delay={0.3}
              icon={Settings}
              title="Tailored Solutions"
              description="We adapt our strategies to your unique vision and brand identity."
              tags={["Customization"]}
              imageUrl="https://i.ibb.co.com/9kd6gtfh/image.png"
              isMobile={true}
            />
          </div>

          {/* Full Width Card */}
          <AboutSquadLogCard
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

export default AboutSquadLog;
