"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Search, 
  Share2, 
  BarChart3, 
  Mail, 
  Target,
  Megaphone,
  MousePointerClick
} from "lucide-react";

// --- Animation Variants (Same to Same) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 0.3, 
    transition: { 
      duration: 1.5, 
      ease: "easeInOut",
      delay: 0.5 
    } 
  }
};

// --- Mini UI Components for Digital Marketing ---

const MockupSEO = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-2">
        <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 w-full">
            <Search size={10} className="text-gray-400" />
            <div className="h-1 w-20 bg-gray-600 rounded-full"></div>
        </div>
        <div className="space-y-1 pl-1">
             <div className="h-2 w-3/4 bg-[#EFFC76]/20 rounded mb-1"></div>
             <div className="h-1 w-full bg-white/10 rounded"></div>
             <div className="h-1 w-5/6 bg-white/10 rounded"></div>
        </div>
    </div>
);

const MockupSocial = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center border border-white/5">
             <Share2 size={12} className="text-blue-400" />
        </div>
        <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center border border-white/5">
             <div className="w-3 h-3 rounded-sm border-2 border-pink-400"></div>
        </div>
        <div className="w-8 h-8 rounded bg-sky-500/20 flex items-center justify-center border border-white/5">
             <div className="w-3 h-3 rounded-full border-2 border-sky-400"></div>
        </div>
         <div className="absolute -bottom-1 -right-1 bg-[#EFFC76] text-black text-[8px] px-1.5 py-0.5 rounded-tl font-bold uppercase"> Viral</div>
    </div>
);

const MockupContent = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-14 bg-white/5 border border-white/10 rounded flex flex-col p-1 gap-1 transform rotate-[-5deg]">
            <div className="w-full h-6 bg-white/5 rounded overflow-hidden relative">
                <div className="absolute w-4 h-4 bg-[#EFFC76] rounded-full top-1 left-1 opacity-50"></div>
            </div>
            <div className="w-full h-1 bg-white/10 rounded"></div>
             <div className="w-2/3 h-1 bg-white/10 rounded"></div>
        </div>
        <div className="flex gap-1">
             <div className="w-1 h-1 rounded-full bg-[#EFFC76]"></div>
             <div className="w-1 h-1 rounded-full bg-gray-600"></div>
             <div className="w-1 h-1 rounded-full bg-gray-600"></div>
        </div>
    </div>
)

const MockupAds = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative overflow-hidden">
        <div className="h-full w-full flex items-center gap-3">
             <div className="flex-1 space-y-2">
                 <div className="h-1.5 w-1/2 bg-white/10 rounded"></div>
                 <div className="h-1.5 w-3/4 bg-white/10 rounded"></div>
             </div>
             <div className="w-16 h-10 bg-[#EFFC76] rounded-md flex items-center justify-center shadow-lg transform scale-105">
                 <MousePointerClick size={16} className="text-black" />
                 <span className="text-[8px] text-black font-bold ml-1">CLICK</span>
             </div>
        </div>
    </div>
)

const MockupEmail = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center">
         <div className="relative w-12 h-8 bg-white/10 rounded border border-white/10 flex items-center justify-center group overflow-hidden">
             <Mail size={14} className="text-gray-300 relative z-10" />
             <div className="absolute inset-0 bg-[#EFFC76] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
         </div>
         <div className="ml-2 space-y-1">
             <div className="h-1 w-10 bg-[#EFFC76] rounded-full"></div>
             <div className="h-1 w-6 bg-white/10 rounded-full"></div>
         </div>
    </div>
)

const MockupAnalytics = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-end justify-between gap-1 px-4 pb-2">
        <div className="w-2 bg-white/10 h-4 rounded-t-sm"></div>
        <div className="w-2 bg-white/10 h-6 rounded-t-sm"></div>
        <div className="w-2 bg-white/10 h-5 rounded-t-sm"></div>
        <div className="w-2 bg-white/10 h-8 rounded-t-sm"></div>
        <div className="w-2 bg-[#EFFC76] h-12 rounded-t-sm shadow-[0_0_8px_#EFFC76]"></div>
        <div className="absolute top-2 right-2 text-[#EFFC76] text-[8px] font-mono">+125%</div>
    </div>
)


// --- Main Card Component ---
const FeatureCard = ({ title, subtitle, italicTitle, icon: Icon, children, className }) => (
  <motion.div 
    variants={cardVariants}
    className={`bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 relative hover:border-[#EFFC76]/50 transition-colors duration-500 group overflow-hidden ${className} w-full`}
  >
    {/* Glow Effect */}
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#EFFC76]/5 rounded-full blur-3xl group-hover:bg-[#EFFC76]/10 transition-all duration-500"></div>

    <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
            <h3 className="text-xl md:text-2xl text-white font-medium mb-3">
                {title} <span className="font-serif italic text-gray-300 ml-1">{italicTitle}</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {subtitle}
            </p>
        </div>
        
        {/* Visual Mockup Container */}
        <div className="mt-auto">
             {children}
        </div>
    </div>
  </motion.div>
);

const DigitalMarketingWorkflow = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative z-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-[#EFFC76] mb-6"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-[#EFFC76] animate-pulse"></div>
                Marketing Strategy
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Reach, Engage, <span className="font-serif italic text-[#EFFC76]">Convert</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Data-driven strategies to amplify your brand voice and accelerate growth.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-marketing">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Paths Definition - Identical to others */}
                    {[
                        "M 700 450 C 700 350, 250 550, 250 380",  // Top Left
                        "M 700 450 C 700 350, 700 400, 700 380",  // Top Center
                        "M 700 450 C 700 350, 1150 550, 1150 380", // Top Right
                        "M 700 450 C 700 550, 250 350, 250 520",  // Bottom Left
                        "M 700 450 C 700 550, 700 500, 700 520",  // Bottom Center
                        "M 700 450 C 700 550, 1150 350, 1150 520"  // Bottom Right
                    ].map((pathD, i) => (
                        <React.Fragment key={i}>
                            {/* Base Line */}
                            <motion.path 
                                variants={lineVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                d={pathD}
                                stroke="#EFFC76" 
                                strokeWidth="1" 
                                strokeOpacity="0.2" 
                            />
                            
                            {/* Animated Rabbit */}
                            <motion.circle 
                                r="3" 
                                fill="#EFFC76"
                                filter="url(#glow-rabbit-marketing)"
                                style={{ offsetPath: `path('${pathD}')` }}
                                initial={{ offsetDistance: "0%", opacity: 0 }}
                                animate={{ 
                                    offsetDistance: "100%", 
                                    opacity: [0, 1, 1, 0] 
                                }}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: i * 0.1, 
                                    repeatDelay: 0.5
                                }}
                            />

                           {/* Impact Ripple */}
                           <motion.circle 
                                cx={pathD.split(" ").slice(-2)[0]} 
                                cy={pathD.split(" ").slice(-1)[0]}
                                r="2"
                                fill="transparent"
                                stroke="#EFFC76"
                                strokeWidth="2"
                                animate={{ r: [2, 12], opacity: [1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.1 + 1.4, 
                                    repeatDelay: 0.5
                                }}
                           />

                            {/* Endpoint Dot */}
                            <motion.circle 
                                initial={{ scale: 0 }} 
                                whileInView={{ scale: 1 }} 
                                transition={{ delay: 0.5 }} 
                                cx={pathD.split(" ").slice(-2)[0]}
                                cy={pathD.split(" ").slice(-1)[0]}
                                r="3" 
                                fill="#EFFC76" 
                            />
                        </React.Fragment>
                    ))}
                </svg>
            </div>


            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full relative z-10">
                
                {/* --- Row 1 --- */}
                <FeatureCard 
                    title="SEO" 
                    italicTitle="Optimization"
                    subtitle="Ranking higher on search engines to drive organic traffic."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupSEO />
                </FeatureCard>

                <FeatureCard 
                    title="Social" 
                    italicTitle="Media"
                    subtitle="Building active communities across all major platforms."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupSocial />
                </FeatureCard>

                <FeatureCard 
                    title="Content" 
                    italicTitle="Strategy"
                    subtitle="Creating valuable content that resonates and converts."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupContent />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Megaphone/Trends Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#EFFC76] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#EFFC76] to-[#dce867] rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(239,252,118,0.3)] relative z-20">
                            <TrendingUp size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="PPC &" 
                    italicTitle="Ads"
                    subtitle="Targeted advertising campaigns for immediate results."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupAds />
                </FeatureCard>

                 <FeatureCard 
                    title="Email" 
                    italicTitle="Marketing"
                    subtitle="Nurturing leads with personalized automation flows."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupEmail />
                </FeatureCard>

                 <FeatureCard 
                    title="Data" 
                    italicTitle="Analytics"
                    subtitle="Tracking measuring and optimizing every campaign performance."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupAnalytics />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingWorkflow;
