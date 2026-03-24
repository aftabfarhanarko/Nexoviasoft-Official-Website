"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import AppointmentModal from './AppointmentModal';

const PartOfUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="relative w-full py-20 px-4 md:px-8 bg-transparent overflow-hidden flex items-center justify-center min-h-[600px]">
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <div className="w-5 h-5 rounded-full bg-[#6C5CE7] flex items-center justify-center">
                        <Settings className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm md:text-base text-gray-200 font-medium">Become a Part of Us</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6"
                >
                    Ready to Elevate Your Brand
                    <br className="hidden md:block" />
                    <span className="text-gray-300"> with Next-Gen Innovation?</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                >
                    Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <button onClick={() => setIsModalOpen(true)} className="inline-block px-8 py-4 rounded-lg bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white font-medium text-lg transition-colors shadow-[0_0_20px_rgba(108,92,231,0.4)] hover:shadow-[0_0_30px_rgba(108,92,231,0.6)]">
                        Book an Appointment
                    </button>
                </motion.div>

            </div>
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default PartOfUs;
