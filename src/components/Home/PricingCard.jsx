"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layout, Bell, Briefcase } from "lucide-react";

const PricingCard = ({
    plan,
    price,
    description,
    features,
    tag,
    stats,
    icon: Icon,
    delay = 0,
}) => {
    return (
        <motion.div
            className="relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden group hover:border-[#EFFC76]/50 transition-colors duration-500 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EFFC76]/5 to-[#EFFC76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header */}
            <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#EFFC76]/20 flex items-center justify-center border border-[#EFFC76]/30">
                    {Icon ? (
                        <Icon className="w-6 h-6 text-[#EFFC76]" />
                    ) : (
                        <Zap className="w-6 h-6 text-[#EFFC76]" />
                    )}
                </div>
                {tag && (
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white">
                        {tag}
                    </span>
                )}
            </div>

            <div className="relative z-10 mb-8">
                <h3 className="text-lg font-medium text-white mb-2">{plan}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold text-white">${price}</span>
                    <span className="text-gray-400 text-sm">/ Month</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>

            {/* Stats */}
            <div className="relative z-10 flex gap-3 mb-8">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-white font-semibold text-sm block">
                        {stats.projects}+
                    </span>
                    <span className="text-gray-500 text-xs">Projects</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-white font-semibold text-sm block">
                        {stats.revisions}+
                    </span>
                    <span className="text-gray-500 text-xs">Revisions</span>
                </div>
            </div>

            {/* Features */}
            <div className="relative z-10 space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EFFC76]/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#EFFC76]" />
                        </div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 w-full py-4 rounded-xl font-medium text-black bg-gradient-to-r from-[#EFFC76] to-[#EFFC76] hover:from-[#EFFC76] hover:to-[#EFFC76] transition-all duration-300 shadow-lg shadow-[#EFFC76]/20"
            >
                Book an Appointment
            </motion.button>
        </motion.div>
    );
};

export default PricingCard;
