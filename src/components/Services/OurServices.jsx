"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const OurServices = () => {
  const steps = [
    {
      number: 1,
      title: "Discover & Prepare",
      description: "We analyze your challenges and organize your data to create the perfect foundation for AI transformation.",
      rayCount: 5,
    },
    {
      number: 2,
      title: "Develop & Test",
      description: "Our team builds and validates custom AI solutions precisely matched to your business goals.",
      rayCount: 11,
    },
    {
      number: 3,
      title: "Deploy & Optimize",
      description: "We seamlessly integrate your AI solutions and continuously optimize them to deliver lasting value.",
      rayCount: 20,
    },
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
          >
            <div className="w-5 h-5 flex items-center justify-center">
               <Sparkles className="w-4 h-4 text-[#EFFC76] fill-[#EFFC76]" />
            </div>
            <span className="text-gray-300 text-sm font-medium">Our process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight"
          >
            Simple steps, powerful results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            We've simplified AI transformation into three clear steps that take you from concept to real-world results.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Rays Visual */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none flex items-end justify-center">
                 <Rays count={step.rayCount} />
              </div>

              {/* Card Container */}
              <div className="relative z-10">
                {/* Yellow Header Pill */}
                <div className="bg-[#EFFC76] rounded-full p-2 pl-3 flex items-center gap-4 shadow-lg relative z-20 w-full transform transition-transform duration-300 group-hover:-translate-y-1">
                   <div className="w-8 h-8 bg-[#111] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner flex-shrink-0">
                      {step.number}
                   </div>
                   <span className="text-[#111] font-semibold text-lg tracking-tight">
                      {step.title}
                   </span>
                </div>

                {/* Dark Body */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 pt-12 -mt-6 relative z-10 h-full min-h-[180px] flex flex-col justify-center group-hover:border-[#EFFC76]/30 transition-colors duration-300">
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {step.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom Rays Component
const Rays = ({ count }) => {
    // Generate rays
    const rays = Array.from({ length: count }).map((_, i) => {
        // Calculate angle: distribute across -70 to 70 degrees
        const angle = -70 + (140 / (count - 1 || 1)) * i;
        // Randomize length slightly
        const height = 60 + Math.random() * 40; 
        
        return (
            <motion.div
                key={i}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${height}%`, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                    duration: 1, 
                    delay: 0.5 + Math.random() * 0.5,
                    type: "spring"
                }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: '2px',
                    height: `${height}%`,
                    background: 'linear-gradient(to top, #EFFC76, transparent)',
                    transformOrigin: 'bottom center',
                    transform: `translateX(-50%) rotate(${angle}deg)`,
                    opacity: 0.8,
                }}
            />
        );
    });

    return (
        <div className="w-full h-full relative overflow-visible">
            {/* Center glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#EFFC76]/20 blur-2xl rounded-full" />
            {rays}
        </div>
    );
};

export default OurServices;
