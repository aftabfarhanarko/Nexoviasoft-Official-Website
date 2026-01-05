"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Settings, Layout, FileText } from "lucide-react";

// Card Data
const processSteps = [
    {
        icon: <MessageSquare className="w-8 h-8 text-black" />,
        title: "Discover Insights",
        description:
            "We analyze your goals, challenges, and vision to craft a tailored AI strategy.",
        color: "bg-[#EFFC76]",
    },
    {
        icon: <Settings className="w-8 h-8 text-black" />,
        title: "Develop Solutions",
        description:
            "Our experts design and build cutting-edge AI solutions that drive results.",
        color: "bg-[#EFFC76]",
    },
    {
        icon: <Layout className="w-8 h-8 text-black" />,
        title: "Deploy Success",
        description:
            "We implement, optimize, and scale your AI-powered success for long-term impact.",
        color: "bg-[#EFFC76]",
    },
];

const OurProccess = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#EFFC76]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#EFFC76]/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#EFFC76]/20 backdrop-blur-sm mb-6"
                    >
                        <div className="p-1 bg-[#EFFC76] rounded-full">
                            <FileText className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">Our Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our Proven Process <br />
                        <span className="text-gray-500">for AI-Driven Success</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="inline-block"
                    >
                        <div className="border border-[#EFFC76]/30 bg-[#EFFC76]/10 px-6 py-3 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
                            <p className="text-gray-400 text-sm md:text-base">
                                With a focus on innovation and efficiency, we help you stay ahead in an ever-evolving digital landscape.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[#EFFC76]/50 transition-all duration-300 hover:bg-neutral-900/80"
                        >
                            {/* Hover Gradient Border Effect - tailored implementation */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EFFC76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#EFFC76]/20 group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                                    {step.icon}
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProccess;
