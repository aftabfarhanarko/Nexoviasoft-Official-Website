"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  PenTool, 
  Image as ImageIcon, 
  Type, 
  Layers, 
  Printer,
  Shapes,
  Brush
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

// --- Mini UI Components for Graphic Design ---

const MockupLogo = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
             {[...Array(16)].map((_, i) => (
                 <div key={i} className="border border-white/10"></div>
             ))}
        </div>
        <div className="relative w-12 h-12 border-2 border-[#d946ef] rounded-full flex items-center justify-center">
             <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
        </div>
    </div>
);

const MockupBranding = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-2">
        <div className="flex gap-2">
             <div className="w-8 h-8 rounded-full bg-[#d946ef]"></div>
             <div className="w-8 h-8 rounded-full bg-black border border-white/10"></div>
             <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        </div>
        <div className="flex gap-2">
             <div className="h-2 w-16 bg-white/10 rounded"></div>
             <div className="h-2 w-8 bg-white/5 rounded"></div>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded"></div>
    </div>
);

const MockupIllustration = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative">
         <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" className="text-gray-400">
             <path d="M5 35 C 15 35, 15 5, 25 20 S 45 35, 55 5" strokeWidth="2" strokeLinecap="round" />
             <circle cx="25" cy="20" r="2" className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] fill-[#d946ef]" />
             <circle cx="40" cy="25" r="2" className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] fill-[#d946ef]" />
             <line x1="25" y1="20" x2="40" y2="25" stroke="#d946ef" strokeWidth="1" strokeDasharray="2 2" />
         </svg>
    </div>
)

const MockupTypography = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-1">
        <span className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">A</span>
        <span className="text-4xl font-sans text-white font-bold">g</span>
        <div className="flex flex-col gap-1 ml-2">
            <div className="w-8 h-0.5 bg-gray-500"></div>
            <div className="w-6 h-0.5 bg-gray-500"></div>
            <div className="w-8 h-0.5 bg-gray-500"></div>
        </div>
    </div>
)

const MockupMarketing = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative">
         {/* Flyer */}
         <div className="w-12 h-16 bg-white/5 border border-white/10 rounded transform -rotate-6 z-10 flex flex-col p-1 gap-1">
             <div className="w-full h-6 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded"></div>
             <div className="w-full h-1 bg-white/10 rounded"></div>
             <div className="w-2/3 h-1 bg-white/10 rounded"></div>
         </div>
         {/* Business Card */}
         <div className="absolute bottom-2 right-4 w-12 h-8 bg-[#d946ef] rounded text-white flex items-center justify-center shadow-lg transform rotate-12 z-20">
             <div className="w-2 h-2 rounded-full bg-black/20 mr-1"></div>
             <div className="w-6 h-1 bg-black/20 rounded"></div>
         </div>
    </div>
)

const MockupPrint = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center items-center gap-2 relative">
         <Printer size={16} className="text-gray-400 absolute top-2 right-2" />
         <div className="w-16 h-10 border border-white/10 bg-white/5 rounded relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d946ef]"></div>
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d946ef]"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#d946ef]"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d946ef]"></div>
         </div>
         <div className="flex gap-1">
             <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
             <div className="w-3 h-3 rounded-full bg-magenta-400 opacity-80" style={{ backgroundColor: '#ff00ff' }}></div>
             <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
             <div className="w-3 h-3 rounded-full bg-black border border-white/20"></div>
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

const GraphicDesignWorkflow = () => {
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
                Visual Identity
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Bold Concepts, <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Timeless Design</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Translating your brand's essence into stunning visual narratives.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-graphic">
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
                                filter="url(#glow-rabbit-graphic)"
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
                    title="Logo" 
                    italicTitle="Design"
                    subtitle="Crafting memorable symbols that represent your brand core."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupLogo />
                </FeatureCard>

                <FeatureCard 
                    title="Brand" 
                    italicTitle="Identity"
                    subtitle="Defining color palettes, typography, and visual language."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupBranding />
                </FeatureCard>

                <FeatureCard 
                    title="Vector" 
                    italicTitle="Illustration"
                    subtitle="Custom artwork and icons to enhance your storytelling."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupIllustration />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Palette Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d946ef] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative z-20">
                            <Palette size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="Typography" 
                    italicTitle="& Layout"
                    subtitle="Structuring text for readability and aesthetic appeal."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupTypography />
                </FeatureCard>

                 <FeatureCard 
                    title="Marketing" 
                    italicTitle="Materials"
                    subtitle="Brochures, flyers, and business cards that stand out."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupMarketing />
                </FeatureCard>

                 <FeatureCard 
                    title="Print" 
                    italicTitle="Ready"
                    subtitle="Preparing files with CMYK color and proper bleed."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupPrint />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default GraphicDesignWorkflow;
