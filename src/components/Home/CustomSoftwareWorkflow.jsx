"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  FileCode, 
  Settings, 
  Database, 
  Server, 
  RefreshCw,
  GitBranch,
  TerminalSquare
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

// --- Mini UI Components for Custom Software ---

const MockupRequirements = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-2">
        <div className="flex gap-2 items-center">
             <div className="w-4 h-4 rounded-full border border-[#d946ef] flex items-center justify-center text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">✓</div>
             <div className="h-2 w-32 bg-white/10 rounded"></div>
        </div>
        <div className="flex gap-2 items-center">
             <div className="w-4 h-4 rounded-full border border-[#d946ef] flex items-center justify-center text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">✓</div>
             <div className="h-2 w-24 bg-white/10 rounded"></div>
        </div>
        <div className="flex gap-2 items-center">
             <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-[10px] text-gray-500"></div>
             <div className="h-2 w-28 bg-white/5 rounded"></div>
        </div>
    </div>
);

const MockupArchitecture = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
         <div className="flex flex-col gap-2 items-center">
             <div className="w-8 h-6 rounded border border-white/20 bg-white/5"></div>
             <div className="h-3 w-0.5 bg-gray-500"></div>
             <div className="flex gap-2">
                 <div className="w-6 h-6 rounded border border-white/20 bg-white/5"></div>
                 <div className="w-6 h-6 rounded border border-white/20 bg-white/5"></div>
             </div>
         </div>
         <div className="h-full w-0.5 bg-gradient-to-r from-[#d946ef] to-[#f97316] mx-1"></div>
         <div className="w-8 h-10 rounded border border-[#d946ef]/50 bg-gradient-to-r from-[#d946ef] to-[#f97316] flex items-center justify-center">
             <Database size={14} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
         </div>
    </div>
);

const MockupDevelopment = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-between font-mono text-[8px] text-gray-400 p-2">
         <div className="flex gap-1 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">
             <span>function</span>
             <span className="text-white">init()</span>
             <span>{"{"}</span>
         </div>
         <div className="pl-2 flex gap-1">
             <span className="text-blue-400">const</span>
             <span>data</span>
             <span>=</span>
             <span className="text-green-400">await</span>
             <span>fetch();</span>
         </div>
         <div className="pl-2 flex gap-1">
             <span className="text-purple-400">return</span>
             <span>process(data);</span>
         </div>
         <div>{"}"}</div>
         <div className="w-full h-1 bg-[#d946ef] rounded mt-1 animate-pulse"></div>
    </div>
)

const MockupIntegration = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative">
         <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center z-10">
             <span className="text-[8px] font-bold">APP</span>
         </div>
         <div className="w-20 h-0.5 bg-gray-600 absolute"></div>
         <motion.div 
            animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#d946ef] absolute"
         />
         <div className="w-10 h-10 border border-white/10 bg-white/5 rounded flex items-center justify-center z-10 translate-x-14">
             <span className="text-[8px] font-bold">API</span>
         </div>
    </div>
)

const MockupQA = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-1">
         <div className="w-16 h-12 bg-white/5 rounded border border-white/10 p-1 flex flex-col gap-1">
             <div className="w-full h-1.5 bg-red-500/50 rounded"></div>
             <div className="w-full h-1.5 bg-green-500/50 rounded"></div>
             <div className="w-full h-1.5 bg-green-500/50 rounded"></div>
             <div className="w-full h-1.5 bg-green-500/50 rounded"></div>
         </div>
         <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] text-xl">✔</div>
    </div>
)

const MockupMaintenance = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
         <RefreshCw size={20} className="text-gray-500 animate-[spin_4s_linear_infinite]" />
         <div className="flex flex-col gap-1">
             <div className="px-2 py-0.5 bg-green-900/30 border border-green-500/30 rounded text-[8px] text-green-400">v2.0.1 Stable</div>
             <div className="w-16 h-1 bg-white/10 rounded overflow-hidden">
                 <div className="w-full h-full bg-[#d946ef] animate-[shimmer_2s_infinite]"></div>
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

const CustomSoftwareWorkflow = () => {
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
                Software Lifecycle
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Tailored Logic, <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Scalable Systems</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                 End-to-end development for complex business requirements and enterprise solutions.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-custom">
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
                                stroke="#d946ef" 
                                strokeWidth="1" 
                                strokeOpacity="0.2" 
                            />
                            
                            {/* Animated Rabbit */}
                            <motion.circle 
                                r="3" 
                                fill="#d946ef"
                                filter="url(#glow-rabbit-custom)"
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
                    title="Req." 
                    italicTitle="Analysis"
                    subtitle="Deep dive into business logic and technical specifications."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupRequirements />
                </FeatureCard>

                <FeatureCard 
                    title="System" 
                    italicTitle="Arch."
                    subtitle="Designing robust databases and scalable server structures."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupArchitecture />
                </FeatureCard>

                <FeatureCard 
                    title="Full Stack" 
                    italicTitle="Dev"
                    subtitle="Writing clean, efficient, and maintainable code."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupDevelopment />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Monitor/Code Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d946ef] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative z-20">
                            <Monitor size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="API" 
                    italicTitle="Integrations"
                    subtitle="Connecting seamlessly with third-party tools and services."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupIntegration />
                </FeatureCard>

                 <FeatureCard 
                    title="Quality" 
                    italicTitle="Assurance"
                    subtitle="Rigorous testing to ensure bug-free performance."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupQA />
                </FeatureCard>

                 <FeatureCard 
                    title="Support &" 
                    italicTitle="Scaling"
                    subtitle="Ongoing maintenance and feature enhancements."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupMaintenance />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default CustomSoftwareWorkflow;
