"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, badge, title, description, tags, buttonText }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-500"
        >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] group-hover:scale-110 transition-transform duration-300">
                        {Icon && <Icon size={24} />}
                    </div>
                    {badge && (
                        <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400">
                            {badge}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {tags && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#1A1A1A] text-gray-300 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {buttonText && (
                    <button className="px-6 py-2.5 rounded-xl bg-[#d946ef] hover:bg-[#d946ef] text-white text-sm font-medium transition-colors shadow-lg shadow-[#d946ef]/20">
                        {buttonText}
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
