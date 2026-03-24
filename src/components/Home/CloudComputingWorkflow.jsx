"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  TrendingUp, 
  Globe,
  Database,
  Lock,
  Cpu,
  ArrowUpRight
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

// --- Mini UI Components for Cloud Computing ---

const MockupMigration = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-3">
     <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
            <Server size={12} className="text-gray-500" />
            <span className="text-[10px] text-gray-500">On-Prem</span>
        </div>
        <ArrowUpRight size={12} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] animate-bounce" />
        <div className="flex items-center gap-1.5">
            <Cloud size={12} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
            <span className="text-[10px] text-white">Cloud</span>
        </div>
     </div>
     <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
        <motion.div 
           initial={{ width: 0 }}
           whileInView={{ width: "100%" }}
           transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
           className="h-full bg-[#d946ef]"
        />
     </div>
     <div className="text-[8px] text-center text-gray-400">Transferring Data...</div>
  </div>
);

const MockupServerless = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
     <div className="w-10 h-10 rounded-full border border-[#d946ef]/30 flex items-center justify-center relative">
        <Zap size={16} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
        <div className="absolute inset-0 border border-[#d946ef] rounded-full animate-ping opacity-20"></div>
     </div>
     <div className="space-y-1">
        <div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
        <div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
        <div className="text-[9px] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Function Triggered</div>
     </div>
  </div>
);

const MockupSecurity = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-2">
     <div className="flex items-center gap-2">
        <Lock size={12} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
        <span className="text-[10px] text-white">IAM Policy</span>
     </div>
     <div className="bg-white/5 rounded p-1.5 font-mono text-[8px] text-gray-400">
        <div>{"{"}</div>
        <div className="pl-2">"Effect": <span className="text-green-400">"Allow"</span>,</div>
        <div className="pl-2">"Action": <span className="text-yellow-400">"s3:*"</span></div>
        <div>{"}"}</div>
     </div>
  </div>
);

const MockupScaling = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-end justify-between px-2 pb-1 relative">
        {/* Bars */}
        <div className="w-3 bg-white/10 h-6 rounded-t-sm"></div>
        <div className="w-3 bg-white/10 h-10 rounded-t-sm"></div>
        <div className="w-3 bg-gradient-to-r from-[#d946ef] to-[#f97316] h-14 rounded-t-sm animate-pulse"></div>
        <div className="w-3 bg-[#d946ef] h-20 rounded-t-sm"></div>
        
        {/* Trend Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
             <path d="M 10 70 L 35 60 L 60 40 L 85 20" stroke="#d946ef" strokeWidth="1" fill="none" />
        </svg>
    </div>
)

const MockupProviders = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 grid grid-cols-2 gap-2">
        <div className="bg-white/5 rounded flex items-center justify-center text-[10px] text-gray-400">AWS</div>
        <div className="bg-white/5 rounded flex items-center justify-center text-[10px] text-gray-400">Azure</div>
        <div className="bg-white/5 rounded flex items-center justify-center text-[10px] text-gray-400">GCP</div>
        <div className="bg-white/5 rounded border border-[#d946ef]/30 flex items-center justify-center text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Unified</div>
    </div>
)

const MockupCost = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-2">
        <div className="flex justify-between items-end">
             <div className="flex flex-col gap-1">
                 <div className="h-8 w-8 rounded bg-red-500/20 flex items-center justify-center text-red-400 text-xs line-through">$100</div>
                 <span className="text-[8px] text-gray-500">Before</span>
             </div>
             <div className="mb-4 text-gray-600">→</div>
             <div className="flex flex-col gap-1">
                 <div className="h-8 w-8 rounded bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">$40</div>
                 <span className="text-[8px] text-gray-500">Optimized</span>
             </div>
        </div>
    </div>
)


// --- Main Card Component ---
const FeatureCard = ({ title, subtitle, italicTitle, icon: Icon, children, className }) => (
  <motion.div 
    variants={cardVariants}
    className={`bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 relative hover:border-[#d946ef]/50 transition-colors duration-500 group overflow-hidden ${className} w-full`}
  >
    {/* Glow Effect */}
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full blur-3xl group-hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-all duration-500"></div>

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

const CloudComputingWorkflow = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative z-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] mb-6"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef] animate-pulse"></div>
                Cloud Infrastructure
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Scalable Power, <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Limitless Potential</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Transition to a secure, flexible cloud environment designed for modern enterprise needs.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-cloud">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Paths Definition */}
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
                                stroke="#d946ef" 
                                strokeWidth="1" 
                                strokeOpacity="0.2" 
                            />
                            
                            {/* Animated Rabbit */}
                            <motion.circle 
                                r="3" 
                                fill="#d946ef"
                                filter="url(#glow-rabbit-cloud)"
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
                                stroke="#d946ef"
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
                                fill="#d946ef" 
                            />
                        </React.Fragment>
                    ))}
                </svg>
            </div>


            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full relative z-10">
                
                {/* --- Row 1 --- */}
                <FeatureCard 
                    title="Cloud" 
                    italicTitle="Migration"
                    subtitle="Seamlessly move legacy systems to the modern cloud."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupMigration />
                </FeatureCard>

                <FeatureCard 
                    title="Serverless" 
                    italicTitle="Architecture"
                    subtitle="Run code without managing servers. Pay only for usage."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupServerless />
                </FeatureCard>

                <FeatureCard 
                    title="Cloud" 
                    italicTitle="Security"
                    subtitle="Advanced IAM, encryption, and compliance controls."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupSecurity />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Cloud Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d946ef] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative z-20">
                            <Cloud size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="Auto" 
                    italicTitle="Scaling"
                    subtitle="Infrastructure that grows and shrinks with demand."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupScaling />
                </FeatureCard>

                 <FeatureCard 
                    title="Multi" 
                    italicTitle="Cloud"
                    subtitle="Strategy for AWS, Azure, and Google Cloud."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupProviders />
                </FeatureCard>

                 <FeatureCard 
                    title="Cost" 
                    italicTitle="Optimization"
                    subtitle="Maximize efficiency and reduce cloud spend."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupCost />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default CloudComputingWorkflow;
