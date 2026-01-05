"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Brain, MessageSquare, LineChart, ScanFace, Mic, LayoutGrid, PenTool, Shield, Monitor, BarChart, Database, UserPen, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Service = () => {
    const services = [
        {
            icon: Brain,
            title: "AI-Powered Development",
            subtitle: "Smart Websites",
            description: "We Build AI-driven websites that adapt to users and automation.",
            image: null, // Placeholder will be used
        },
        {
            icon: MessageSquare,
            title: "AI Chatbots",
            subtitle: "24/7 Customer Support",
            description: "Instant AI-powered chatbots that automate responses.",
            image: null,
        },
        {
            icon: LineChart,
            title: "Predictive Analytics",
            subtitle: "Driven Decisions",
            description: "Leverage AI to analyze trends and predict outcomes for smarter ways.",
            image: null,
        },
        {
            icon: ScanFace,
            title: "Computer Vision Solutions",
            subtitle: "World Through AI",
            description: "AI-based facial recognition, image analysis, and automation solutions.",
            image: null,
        },
        {
            icon: Mic,
            title: "Speech Recognition",
            subtitle: "Smart Actions",
            description: "Develop voice assistants, transcriptions, and speech with AI.",
            image: null,
        },
        {
            icon: LayoutGrid,
            title: "AI-Driven Automation",
            subtitle: "Driven Decisions",
            description: "Automate tasks, reduce costs, and improve productivity with solutions.",
            image: null,
        },
    ];

    const bottomTags = [
        { name: "AI Content Generation", icon: PenTool },
        { name: "Cybersecurity", icon: Shield },
        { name: "UX/UI Optimization", icon: Monitor },
        { name: "Data Insight", icon: BarChart },
        { name: "Analytics", icon: LineChart },
        { name: "Personalization", icon: UserPen },
        { name: "Data Analysis", icon: Database },
        { name: "Lead Generation", icon: Globe },
    ];

    return (
        <section className="bg-black py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#EFFC76]/20 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <div className="w-5 h-5 rounded-full bg-[#EFFC76] flex items-center justify-center">
                            <Brain size={12} className="text-black" />
                        </div>
                        <span className="text-gray-300 text-sm">Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight"
                    >
                        AI-Powered Services for<br />
                        <span className="text-gray-400">Future-Driven Businesses</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base"
                    >
                        Our cutting-edge AI solutions are designed to transform businesses,<br />
                        enhance efficiency, and drive innovation.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#EFFC76] hover:bg-[#EFFC76] text-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                    >
                        Book a Terminal
                    </motion.button>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Bottom Tags */}
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {bottomTags.map((tag, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + (index * 0.05) }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#EFFC76]/50 hover:bg-white/10 transition-all cursor-default"
                        >
                            <div className="p-1 rounded-full bg-[#EFFC76]/20 text-[#EFFC76]">
                                <tag.icon size={14} />
                            </div>
                            <span className="text-gray-300 text-sm">{tag.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
