"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Star, Headset, MessageCircle, CheckCircle2 } from "lucide-react";

const Support = () => {
    return (
        <section className="bg-black py-24 px-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-[#EFFC76]/20 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#EFFC76]/20 mb-8"
                    >
                        <Headset size={14} className="text-[#EFFC76]" />
                        <span className="text-gray-300 text-sm font-medium">24/7 Support</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight font-medium"
                    >
                        Here When You<br />
                        <span className="text-gray-400">Need Us Most.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-xl mx-auto mb-10 text-base"
                    >
                        Nubien comes with dedicated support to help you launch and maintain
                        your site without friction.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#EFFC76] hover:bg-[#EFFC76] text-black px-8 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#EFFC76]/20"
                    >
                        View About Nubien
                    </motion.button>
                </div>

                {/* Central Visual - Moving Cards */}
                <div className="relative h-[400px] mb-24 flex items-center justify-center perspective-1000">
                    <CardsDisplay />
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <FeatureCard
                        icon={MessageCircle}
                        title="Fast Responses"
                        description="Get timely answers to your questions."
                        delay={0.4}
                    />
                    <FeatureCard
                        icon={Star}
                        title="Expert Guidance"
                        description="Our team understands both design and tech."
                        delay={0.5}
                    />
                    <FeatureCard
                        icon={Headset}
                        title="Continuous Help"
                        description="Support doesn't stop after launch."
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

const CardsDisplay = () => {
    // Simulated cards with colors/gradients since we don't have the exact images
    const cards = [
        { color: "bg-zinc-800", rotate: -15, x: -280, scale: 0.8, z: 0 },
        { color: "bg-zinc-700", rotate: -8, x: -150, scale: 0.9, z: 10 },
        { color: "bg-zinc-600", rotate: 0, x: 0, scale: 1.1, z: 20, active: true },
        { color: "bg-zinc-700", rotate: 8, x: 150, scale: 0.9, z: 10 },
        { color: "bg-zinc-800", rotate: 15, x: 280, scale: 0.8, z: 0 },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Floating Chat Bubbles */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-10 left-[15%] md:left-[25%] z-30 bg-[#EFFC76] text-black px-4 py-2 rounded-2xl rounded-bl-sm text-sm font-medium shadow-lg"
            >
                Hi! How can we help?
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20, x: 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-16 right-[15%] md:right-[25%] z-30 bg-[#EFFC76] text-black px-4 py-2 rounded-2xl rounded-br-sm text-sm font-medium shadow-lg"
            >
                Problem Solved
            </motion.div>

            {/* Cards */}
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, scale: card.scale, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
                    className={`absolute w-48 h-64 rounded-2xl ${card.color} shadow-2xl border border-white/10 overflow-hidden group`}
                    style={{
                        rotate: card.rotate,
                        x: card.x,
                        zIndex: card.z,
                    }}
                >
                    {/* Placeholder Content for Images */}
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 relative">
                        {/* active card overlay controls */}
                        {card.active && (
                            <div className="absolute inset-0 border-2 border-[#EFFC76]/50 rounded-2xl pointer-events-none">
                                <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full border-2 border-[#EFFC76] shadow-sm" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#EFFC76] shadow-sm" />
                                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full border-2 border-[#EFFC76] shadow-sm" />
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#EFFC76] shadow-sm" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-dashed border-white/30" />
                            </div>
                        )}

                        {/* Gradient/Image Placeholder */}
                        <div className={`w-full h-full opacity-60 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-${[
                            "1524504388940-b1c1722653e1", // Bag
                            "1494976388531-d377034f0d38", // Car
                            "1546069901-ba9599a7e63c", // Food/Lemonish
                            "1618005182384-a83a8bd57fbe", // Abstract
                            "1515886657613-9f3515b0c78f", // Fashion
                        ][index]}?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center`} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors group"
    >
        <div className="w-10 h-10 rounded-full bg-[#EFFC76]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon size={20} className="text-[#EFFC76]" />
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);

export default Support;
