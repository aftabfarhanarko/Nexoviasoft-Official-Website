"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Layout, 
  Puzzle, 
  ShoppingCart, 
  Zap, 
  ShieldCheck,
  Code
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

// --- Mini UI Components for WordPress ---

const MockupTheme = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col gap-2">
        <div className="flex gap-2">
            <div className="w-1/3 h-12 bg-white/5 rounded border border-white/10 flex flex-col gap-1 p-1">
                 <div className="w-full h-2 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded"></div>
                 <div className="w-2/3 h-1 bg-white/10 rounded"></div>
            </div>
             <div className="w-2/3 h-12 bg-white/5 rounded border border-white/10 flex flex-col gap-1 p-1">
                 <div className="w-full h-8 bg-black/20 rounded border border-dashed border-white/10 flex items-center justify-center text-[8px] text-gray-500">Header</div>
                 <div className="flex gap-1 h-2">
                     <div className="w-1/2 bg-white/10 rounded"></div>
                     <div className="w-1/2 bg-white/10 rounded"></div>
                 </div>
            </div>
        </div>
        <div className="flex items-center gap-1.5 self-end">
            <span className="text-[9px] text-gray-400">theme.json</span>
            <div className="w-2 h-2 rounded-full bg-[#d946ef]"></div>
        </div>
    </div>
);

const MockupPlugins = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
         <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
             <Puzzle size={14} className="text-gray-400" />
         </div>
         <div className="text-gray-600">+</div>
         <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
             <div className="w-3 h-3 bg-[#d946ef] rounded-sm transform rotate-45"></div>
         </div>
         <div className="text-gray-600">=</div>
         <div className="w-10 h-10 rounded border border-[#d946ef]/30 bg-gradient-to-r from-[#d946ef] to-[#f97316] flex items-center justify-center relative">
             <Zap size={16} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
             <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-black"></div>
         </div>
    </div>
);

const MockupWooCommerce = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-1.5">
        <div className="flex justify-between items-center text-[10px] text-gray-400 px-1">
             <span>Product</span>
             <span>Price</span>
        </div>
        <div className="w-full h-6 bg-white/5 rounded flex items-center justify-between px-2 border border-white/10">
             <div className="w-12 h-2 bg-white/10 rounded"></div>
             <div className="w-8 h-2 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded"></div>
        </div>
        <div className="w-full h-6 bg-white/5 rounded flex items-center justify-between px-2 border border-white/10">
             <div className="w-10 h-2 bg-white/10 rounded"></div>
             <div className="w-8 h-2 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded"></div>
        </div>
        <div className="w-full flex justify-end">
             <div className="w-16 h-4 bg-[#d946ef] rounded text-[8px] text-white font-bold flex items-center justify-center">Checkout</div>
        </div>
    </div>
)

const MockupSpeed = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col items-center justify-center relative">
         <svg className="w-16 h-16 transform -rotate-90">
             <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
             <circle cx="32" cy="32" r="28" stroke="#d946ef" strokeWidth="4" fill="none" strokeDasharray="175" strokeDashoffset="10" />
         </svg>
         <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-xl font-bold text-white">99</span>
             <span className="text-[8px] text-gray-400">Score</span>
         </div>
    </div>
)

const MockupSecurity = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-3">
         <div className="relative">
             <ShieldCheck size={24} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
             <motion.div 
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: [0, 1, 0], scale: 2 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border border-[#d946ef] rounded-full"
             />
         </div>
         <div className="space-y-1">
             <div className="flex items-center gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                 <span className="text-[9px] text-gray-300">Firewall Active</span>
             </div>
             <div className="flex items-center gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                 <span className="text-[9px] text-gray-300">Malware Scan</span>
             </div>
         </div>
    </div>
)

const MockupBuilder = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center gap-2">
         <div className="flex gap-1 justify-center">
             <div className="px-1.5 py-0.5 rounded border border-white/10 text-[8px] text-gray-400">Elementor</div>
             <div className="px-1.5 py-0.5 rounded border border-white/10 text-[8px] text-gray-400">Gutenberg</div>
             <div className="px-1.5 py-0.5 rounded border border-white/10 text-[8px] text-gray-400">ACF</div>
         </div>
         <div className="w-full h-8 border border-dashed border-gray-600 rounded bg-white/5 flex items-center justify-center text-[8px] text-gray-500">
             Drag & Drop Zone
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

const WordPressWorkflow = () => {
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
                CMS Excellence
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Flexible Power, <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Easy Management</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Custom themes and plugins engineered for performance and scalability.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-wp">
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
                                filter="url(#glow-rabbit-wp)"
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
                    title="Custom" 
                    italicTitle="Themes"
                    subtitle="Pixel-perfect implementation of your unique brand designs."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupTheme />
                </FeatureCard>

                <FeatureCard 
                    title="Plugin" 
                    italicTitle="Dev"
                    subtitle="Extending functionality with custom-coded solutions."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupPlugins />
                </FeatureCard>

                <FeatureCard 
                    title="Easy" 
                    italicTitle="Management"
                    subtitle="Flexible editing with Gutenberg, Elementor, or ACF."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupBuilder />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - WP Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#d946ef] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative z-20">
                            <Globe size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="Woo" 
                    italicTitle="Commerce"
                    subtitle="Robust e-commerce stores optimized for sales."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupWooCommerce />
                </FeatureCard>

                 <FeatureCard 
                    title="Speed" 
                    italicTitle="Optimization"
                    subtitle="Achieving 90+ Google PageSpeed scores."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupSpeed />
                </FeatureCard>

                 <FeatureCard 
                    title="Security" 
                    italicTitle="Hardening"
                    subtitle="Protecting your site against threats and vulnerabilities."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupSecurity />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default WordPressWorkflow;
