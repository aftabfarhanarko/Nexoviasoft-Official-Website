"use client";
import React from "react";
import InnovationCard from "./InnovationCard";
import { Clock, Eye, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Innovation = () => {
    return (
        <section className="bg-black py-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Top Section - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative">
                    {/* Background decorative elements */}
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#EFFC76]/10 rounded-full blur-[100px]" />
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EFFC76]/10 rounded-full blur-[100px]" />

                    <InnovationCard
                        title="Seamless API Integrations"
                        description="Nubien supports a wide range of third-party integrations."
                        type="integrations"
                        delay={0}
                    />
                    <InnovationCard
                        title="Trusted Authentication"
                        description="Quickly integrate with major platforms workflows."
                        type="authentication"
                        delay={0.2}
                    />
                    <InnovationCard
                        title="AI-Speech Recognition"
                        description="Enable your user to control or navigate your site using speech."
                        type="speech"
                        delay={0.4}
                    />
                </div>

                {/* Bottom Section - Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-16">
                    <FeatureItem
                        icon={Clock}
                        title="Real-Time Data"
                        description="Instant insights for faster decision-making."
                        delay={0.5}
                    />
                    <FeatureItem
                        icon={Eye}
                        title="Vision Capabilities"
                        description="AI-powered image and video recognition."
                        delay={0.6}
                    />
                    <FeatureItem
                        icon={Layers}
                        title="Optimized UX/UI"
                        description="Smart design that enhances user experience."
                        delay={0.7}
                    />
                    <FeatureItem
                        icon={TrendingUp}
                        title="Predictive Analytics"
                        description="Make data-driven decisions with AI insights."
                        delay={0.8}
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="flex items-center space-x-3 mb-3">
                <Icon className="w-5 h-5 text-[#EFFC76]" />
                <h4 className="text-white font-semibold text-lg">{title}</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default Innovation;
