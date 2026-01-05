"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, Layers, Zap, ArrowRight, Settings, CheckCircle2 } from "lucide-react";
import AboutSquadLogCard from "./AboutSquadLogCard";

const AboutSquadLog = () => {
    return (
        <section className="bg-black py-24 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EFFC76]/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Bot size={14} className="text-[#EFFC76]" />
                        <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">About SquadLog</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-sans text-white mb-6 leading-tight font-medium"
                    >
                        AI Meets Design,<br />
                        <span className="text-gray-400">Purpose Into Ideas!</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 mb-12 text-base leading-relaxed max-w-lg"
                    >
                        SquadLog is a premium AI agency template crafted for teams pushing the boundaries of technology. We blend cutting-edge capabilities with sleek, modern design.
                    </motion.p>

                    <div className="space-y-6">
                        <AboutSquadLogCard
                            delay={0.3}
                            icon={Bot}
                            title="Advanced AI, Streamlined Design"
                            description="Nubien blends cutting-edge AI capabilities with sleek, modern design. It's built for agencies that need to showcase sophisticated technology."
                            tags={["AI Design", "Tech Innovation"]}
                        />
                        <AboutSquadLogCard
                            delay={0.4}
                            icon={Settings}
                            title="Effortless Customization"
                            description="The template comes with flexible design options that adapt to your unique vision. With easy-to-use customization tools, fine-tune every detail."
                            tags={["Easy Customization", "Brand Identity"]}
                        />
                        <AboutSquadLogCard
                            delay={0.5}
                            icon={Zap}
                            title="Future-Proof and Scalable"
                            description="Nubien is built to grow with your agency. Whether you're adding new services or expanding your team, we scale with you."
                            hasButton
                        />
                    </div>
                </div>

                {/* Right Column: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 group"
                >
                    {/* Image Overlay/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297461136-82lw8fca1639?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />

                    {/* Optional Content Overlay on Image if needed, keeping it clean for now to match design visual which seems to be just an image on the right in some variants, or maybe the user wants the clean look. The provided image shows a split. */}
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSquadLog;
