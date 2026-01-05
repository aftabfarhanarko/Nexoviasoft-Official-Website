"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSquadLogCard = ({ icon: Icon, title, description, tags, hasButton, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#EFFC76]/30 transition-all duration-300 group hover:bg-zinc-900/60"
        >
            <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#EFFC76] group-hover:text-[#EFFC76] group-hover:bg-[#EFFC76]/10 transition-colors">
                    <Icon size={20} />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-semibold text-lg">{title}</h3>
                        {hasButton && (
                            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10">Resolve</span>
                        )}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {description}
                    </p>

                    {tags && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-[#EFFC76]/10 text-[#EFFC76] border border-[#EFFC76]/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {hasButton && (
                        <button className="bg-[#EFFC76] hover:bg-[#EFFC76] text-black px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#EFFC76]/20 w-full sm:w-auto">
                            Book an Appointment
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default AboutSquadLogCard;
