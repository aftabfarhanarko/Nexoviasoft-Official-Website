"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PenTool, 
  Search, 
  LayoutTemplate, 
  MousePointer2, 
  Palette, 
  Components, 
  Users,
  Eye
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

// --- Mini UI Components for UI/UX Design ---

const MockupResearch = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-3">
     <div className="w-16 h-12 bg-white/5 rounded-lg border border-white/10 p-2 flex gap-1">
         <div className="w-4 h-4 rounded-full bg-gray-600"></div>
         <div className="flex-1 space-y-1">
             <div className="w-full h-1 bg-white/10 rounded"></div>
             <div className="w-2/3 h-1 bg-white/10 rounded"></div>
         </div>
     </div>
     <Search size={18} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
  </div>
);

const MockupWireframe = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center">
     <div className="w-20 h-16 border-2 border-dashed border-gray-600 rounded bg-white/5 flex flex-col p-1 gap-1">
        <div className="w-full h-2 bg-gray-700/50 rounded"></div>
        <div className="flex gap-1 flex-1">
            <div className="w-1/3 bg-gray-700/50 rounded h-full"></div>
            <div className="w-2/3 bg-gray-700/50 rounded h-full"></div>
        </div>
     </div>
  </div>
);

const MockupPrototyping = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-4 relative">
        <div className="w-10 h-14 border border-white/10 rounded bg-white/5 relative z-10"></div>
        <div className="absolute w-8 h-0.5 bg-gradient-to-r from-[#d946ef] to-[#f97316] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-10 h-14 border border-[#d946ef]/50 rounded bg-gradient-to-r from-[#d946ef] to-[#f97316] relative z-10 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
            <MousePointer2 size={12} className="absolute -bottom-2 -right-2 text-white fill-black" />
        </div>
    </div>
)

const MockupVisual = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#d946ef] to-green-400"></div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400"></div>
    </div>
)

const MockupDesignSystem = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 grid grid-cols-2 gap-2">
        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-[8px] text-gray-400">Button</div>
        <div className="bg-[#d946ef] rounded border border-[#d946ef] flex items-center justify-center text-[8px] text-white font-bold">Input</div>
        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-[8px] text-gray-400">Card</div>
        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-[8px] text-gray-400">Toggle</div>
    </div>
)

const MockupUserTesting = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col items-center justify-center gap-1">
        <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-black flex items-center justify-center">🙂</div>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-black flex items-center justify-center">😐</div>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-black flex items-center justify-center">😍</div>
        </div>
        <div className="w-20 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
             <div className="w-3/4 h-full bg-[#d946ef]"></div>
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

const UiUxDesignWorkflow = () => {
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
                Design Process
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Empathy Driven, <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Pixel Perfect</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Creating intuitive, accessible, and delightful experiences that solve real user problems.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-uiux">
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
                                filter="url(#glow-rabbit-uiux)"
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
                    title="User" 
                    italicTitle="Research"
                    subtitle="Understanding audience needs through deep analysis."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupResearch />
                </FeatureCard>

                <FeatureCard 
                    title="Wireframing" 
                    italicTitle="& Flow"
                    subtitle="Mapping out the skeletal structure and user journeys."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupWireframe />
                </FeatureCard>

                <FeatureCard 
                    title="Interactive" 
                    italicTitle="Prototype"
                    subtitle="Creating clickable high-fidelity previews for testing."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupPrototyping />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Pen Tool Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d946ef] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative z-20">
                            <PenTool size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="Visual" 
                    italicTitle="Design"
                    subtitle="Applying color theory, typography, and aesthetics."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupVisual />
                </FeatureCard>

                 <FeatureCard 
                    title="Design" 
                    italicTitle="System"
                    subtitle="Building reusable component libraries for consistency."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupDesignSystem />
                </FeatureCard>

                 <FeatureCard 
                    title="User" 
                    italicTitle="Testing"
                    subtitle="Validating decisions with real user feedback."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupUserTesting />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default UiUxDesignWorkflow;
