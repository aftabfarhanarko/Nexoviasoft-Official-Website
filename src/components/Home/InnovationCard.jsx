"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Apple,
    Trello,
    Figma,
    Slack,
    Ghost,
    CheckCircle2,
    Mic,
    Activity,
    Zap,
} from "lucide-react";

const InnovationCard = ({ title, description, type, delay = 0 }) => {
    return (
        <motion.div
            className="relative p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden group hover:border-purple-500/50 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon/Header Icon */}
            <div className="flex justify-center mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center border border-purple-500/30">
                    <Zap className="w-6 h-6 text-purple-400" fill="currentColor" />
                </div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10 mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[80%] mx-auto">
                    {description}
                </p>
            </div>

            {/* Dynamic Visual Content */}
            <div className="relative z-10 mt-auto min-h-[160px] flex items-center justify-center bg-[#111] rounded-2xl border border-white/5 p-4 overflow-hidden">
                {type === "integrations" && <IntegrationsVisual />}
                {type === "authentication" && <AuthenticationVisual />}
                {type === "speech" && <SpeechVisual />}
            </div>
        </motion.div>
    );
};

const IntegrationsVisual = () => {
    // Mock icons for the integrations tree
    const icons = [
        { Icon: Apple, color: "text-white" },
        { Icon: Trello, color: "text-blue-400" },
        { Icon: Ghost, color: "text-yellow-300" }, // Snapchat/Ghost proxy
        { Icon: Slack, color: "text-purple-400" }, // Slack proxy (using Blackberry in design, switching to Slack/similar)
        { Icon: Figma, color: "text-pink-400" },
        { Icon: Zap, color: "text-orange-400" }, // Nike proxy
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center pt-4">
            <div className="flex space-x-3 mb-6">
                {icons.map(({ Icon, color }, i) => (
                    <motion.div
                        key={i}
                        className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 ${color}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                    >
                        <Icon size={16} />
                    </motion.div>
                ))}
            </div>
            {/* Connecting Lines SVG */}
            <svg className="w-full h-12 -mt-4" preserveAspectRatio="none">
                <path
                    d="M30 0 C30 20, 150 20, 150 40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M70 0 C70 20, 150 20, 150 40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M110 0 C110 20, 150 20, 150 40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M190 0 C190 20, 150 20, 150 40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M230 0 C230 20, 150 20, 150 40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                    fill="none"
                />
                <path
                    d="M270 0 C270 20, 150 20, 150 40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.5"
                    fill="none"
                />
            </svg>
            {/* Central Node */}
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)] z-20 -mt-3">
                <div className="w-5 h-5 bg-white rounded-sm transform rotate-45" /> {/* Stack icon proxy */}
            </div>
        </div>
    );
};

const AuthenticationVisual = () => {
    const tags = [
        "Data Analysis", "Chatbots", "Cognitive",
        "Intelligent", "Infrastructure"
    ]
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            {/* Background tags - blurred */}
            <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-2 opacity-30 blur-[1px] scale-110">
                {tags.concat(tags).map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-full border border-white/20 text-xs text-gray-400 bg-white/5">{tag}</span>
                ))}
            </div>

            {/* Central Interactive Element */}
            <motion.div
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-b from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
                <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                <CheckCircle2 className="text-white w-8 h-8 drop-shadow-md" />
            </motion.div>
        </div>
    );
};

const SpeechVisual = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Speech Bubble */}
            <motion.div
                className="mb-4 bg-purple-600 rounded-full px-4 py-1 text-xs font-semibold text-white shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                Speech Recognition
            </motion.div>

            {/* Player UI */}
            <div className="w-[80%] h-12 bg-[#1A1A1A] rounded-full border border-white/10 flex items-center px-2 shadow-inner">
                <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center mr-2">
                    <Mic size={14} className="text-purple-400" />
                </div>
                {/* Waveform */}
                <div className="flex-1 flex items-center justify-center gap-[2px] h-full overflow-hidden opacity-50">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-[2px] bg-purple-500 rounded-full"
                            animate={{ height: [8, 16, 8] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.05,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InnovationCard;
