"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ServiceCard = ({ icon: Icon, title, subtitle, description, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative flex flex-col justify-between h-full bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300"
        >
            {/* Top Content */}
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-full ${title === 'AI-Powered Development' ? 'bg-purple-600' :
                        title === 'AI Chatbots' ? 'bg-indigo-600' :
                            title === 'Predictive Analytics' ? 'bg-blue-600' :
                                title === 'Computer Vision Solutions' ? 'bg-violet-600' :
                                    title === 'Speech Recognition' ? 'bg-blue-500' :
                                        'bg-indigo-500'
                        } text-white`}>
                        {Icon && <Icon size={20} />}
                    </div>
                    <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{subtitle}</p>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* Image/Visual Area */}
            <div className="relative w-full h-48 mt-auto rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        {/* Fallback pattern if no image */}
                        <div className={`w-32 h-32 rounded-full blur-3xl opacity-30 ${title === 'AI-Powered Development' ? 'bg-purple-500' :
                            title === 'AI Chatbots' ? 'bg-orange-500' :
                                'bg-blue-500'
                            }`} />
                    </div>
                )}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default ServiceCard;
