"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, company, image, text, rating, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="bg-[#111] border border-white/5 rounded-2xl p-8 relative group hover:border-[#EFFC76]/20 transition-colors duration-300"
        >
            {/* Subtle pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_70%,transparent_100%)] pointer-events-none rounded-2xl"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#EFFC76]/20 p-0.5">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover rounded-full bg-[#1A1A1A]"
                            />
                        </div>
                        {/* Decorative generic logo/icon */}
                        <div className="opacity-100">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-[#EFFC76]"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                        {[...Array(rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-[#EFFC76] fill-[#EFFC76]" />
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8">"{text}"</p>
                </div>

                <div>
                    <h4 className="text-white font-medium text-base">
                        {name} <span className="text-[#EFFC76] mx-1">•</span>{" "}
                        <span className="text-gray-400 text-sm font-normal">{role}</span>
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">{company}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
