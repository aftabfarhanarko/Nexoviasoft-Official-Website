"use client"
import React from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyAlytics = () => {
    const otherTools = [
        "Data lives in too many places",
        "Reporting eats up hours",
        "Insights are too generic",
        "No smart guidance for decisions",
        "Hard to see what's really working"
    ];

    const alyticsFeatures = [
        "All your metrics, one platform",
        "Reports generate instantly",
        "Insights tailored to your goals",
        "AI suggests your next move",
        "Clear path to consistent growth"
    ];

    return (
        <section className="py-24 ">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] text-sm font-medium mb-6 backdrop-blur-sm">
                        Why Alytics
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        A Smarter Way To<br />Grow With Data
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Turn complex metrics into clear insights that<br className="hidden md:block" />
                        help you make better decisions, faster.
                    </p>
                </div>

                {/* Comparison Card */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-17 items-center">
                        {/* Other Tools - Left Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-neutral-900/30 rounded-[2.5rem] p-8 md:p-12 border border-white/5"
                        >
                            <h3 className="text-2xl font-bold text-gray-400 mb-8">Other Tools</h3>
                            <div className="space-y-6">
                                {otherTools.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 text-gray-500">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center">
                                            <X size={14} className="text-gray-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg text-gray-500">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Alytics - Right Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative bg-neutral-900/80 rounded-[2.5rem] p-8 md:p-12 border border-[#d946ef]/50 shadow-[0_0_50px_-12px_rgba(217,70,239,0.2)] scale-105 md:-ml-8 z-10 backdrop-blur-xl"
                        >
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#d946ef]/10 to-transparent pointer-events-none" />
                            <div className="flex items-center gap-3 mb-8 relative z-10">
                                <div className="bg-[#d946ef] p-2 rounded-lg">
                                    <Sparkles className="text-black w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Alytics</h3>
                            </div>
                            
                            <div className="space-y-6 relative z-10">
                                {alyticsFeatures.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 text-gray-300">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d946ef] flex items-center justify-center">
                                            <Check size={14} className="text-black" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg font-medium text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAlytics;
