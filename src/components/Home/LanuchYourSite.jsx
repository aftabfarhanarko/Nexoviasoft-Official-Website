"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";

const LanuchYourSite = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Gradients/Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-indigo-900/10 pointer-events-none" />

            {/* Decorative Grid Background - Optional if needed to match exact texture */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image/Visual Placeholder */}
                {/* Based on the design, there is a faint face/image on the bottom left. 
            We'll use a placeholder or gradient effect if no asset is provided, 
            or try to mimic the "face" look with a placeholder div if I can't generate an image. 
            For now, I will use a sophisticated gradient/shape placeholder that implies the visual.
        */}
                <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    {/* Placeholder for the person image */}
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-neutral-800 to-transparent opacity-50" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.5, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center pb-20"
                    >
                        {/* Visual Representation of "Person"/Image */}
                        <div className="w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-40"></div>
                    </motion.div>
                    {/* Text Overlay for "Your New Art..." seen in background? Hard to read, leaving clean. */}
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col items-start">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <div className="p-1 bg-purple-500 rounded-full">
                            <Rocket className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">Launch Your Site</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Launch Your Site with Nubie <br />
                        <span className="text-gray-500">In a Minutes of Time!</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-400 text-lg mb-10 max-w-lg"
                    >
                        Build your site effortlessly and showcase your work with confidence. Ready to stand out? Get started today!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-8"
                    >
                        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-600/25 w-full sm:w-auto">
                            Book an Appointment
                        </button>

                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-1 mb-1">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                                ))}
                            </div>
                            <span className="text-gray-400 text-sm">200+ Agencies Rated</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LanuchYourSite;
