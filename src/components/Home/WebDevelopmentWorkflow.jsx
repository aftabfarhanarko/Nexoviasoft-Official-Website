"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Globe, 
  Smartphone, 
  Zap,
  CheckCircle2,
  Brush,
  Database
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

// --- Mini UI Components for Web Dev ---

const MockupWireframe = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col gap-2">
    <div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
    <div className="flex gap-2 h-full">
        <div className="w-1/4 h-full bg-white/5 rounded"></div>
        <div className="w-3/4 h-full bg-white/5 rounded flex flex-col gap-1.5 p-1.5">
             <div className="h-1.5 w-full bg-[#EFFC76]/20 rounded-full"></div>
             <div className="h-1.5 w-2/3 bg-white/5 rounded-full"></div>
             <div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
        </div>
    </div>
  </div>
);

const MockupDesign = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-br from-[#EFFC76]/5 to-transparent"></div>
     <div className="w-10 h-10 rounded-lg bg-[#EFFC76] transform rotate-12 shadow-lg flex items-center justify-center">
        <Brush size={18} className="text-black" />
     </div>
     <div className="w-10 h-10 rounded-lg border border-white/20 transform -rotate-6 absolute bg-black/50 backdrop-blur-sm -ml-6 -mt-4"></div>
  </div>
);

const MockupCode = () => (
  <div className="bg-black/40 rounded-lg p-3 font-mono text-[9px] text-gray-400 border border-white/5 space-y-1 h-24 overflow-hidden">
     <div className="text-blue-400">export default <span className="text-yellow-400">function</span> <span className="text-[#EFFC76]">App</span>() {"{"}</div>
     <div className="pl-2 text-purple-400">return (</div>
     <div className="pl-4 text-gray-300">{"<div className='hero'>"}</div>
     <div className="pl-6 text-white">{"<h1>Web Dev</h1>"}</div>
     <div className="pl-4 text-gray-300">{"</div>"}</div>
     <div className="pl-2 text-purple-400">);</div>
     <div>{"}"}</div>
  </div>
);

const MockupDatabase = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
        <div className="w-12 h-16 border border-white/10 rounded flex flex-col items-center justify-center gap-1 bg-white/5">
            <Server size={14} className="text-[#EFFC76]" />
            <div className="h-0.5 w-6 bg-[#EFFC76]/50 rounded-full animate-pulse"></div>
        </div>
        <div className="h-0.5 w-4 bg-white/10"></div>
        <div className="w-12 h-16 border border-white/10 rounded flex flex-col items-center justify-center gap-1 bg-white/5">
            <Database size={14} className="text-gray-400" />
            <div className="h-0.5 w-6 bg-white/10 rounded-full"></div>
        </div>
    </div>
)

const MockupResponsive = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-end justify-center gap-2">
        <div className="w-6 h-12 border border-white/20 rounded bg-white/5"></div>
        <div className="w-10 h-16 border border-white/20 rounded-md bg-white/5 border-[#EFFC76]/50 shadow-[0_0_10px_rgba(239,252,118,0.1)]"></div>
        <div className="w-14 h-10 border border-white/20 rounded bg-white/5"></div>
    </div>
)

const MockupLaunch = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 size={16} className="text-[#EFFC76]" />
            <span className="text-xs text-white font-medium">All Systems Go</span>
        </div>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
               className="h-full bg-[#EFFC76]"
            />
        </div>
        <div className="flex justify-between w-full mt-1 text-[8px] text-gray-500">
            <span>Optimization</span>
            <span>100%</span>
        </div>
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

const WebDevelopmentWorkflow = () => {
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
                Web Development Process
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Crafting Digital, <span className="font-serif italic text-[#EFFC76]">Built for Growth</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                From initial concept to final launch, we build pixel-perfect, scalable web experiences.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-web">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Paths Definition - Identical to DevOps for same animation */}
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
                                filter="url(#glow-rabbit-web)"
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
                    title="Strategy" 
                    italicTitle="& Planning"
                    subtitle="Defining user journeys and architecture for success."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupWireframe />
                </FeatureCard>

                <FeatureCard 
                    title="UI/UX" 
                    italicTitle="Design"
                    subtitle="Crafting beautiful, intuitive interfaces that convert."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupDesign />
                </FeatureCard>

                <FeatureCard 
                    title="Frontend" 
                    italicTitle="Development"
                    subtitle="Building responsive, interactive client-side applications."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupCode />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Web Code Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#EFFC76] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#EFFC76] to-[#dce867] rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(239,252,118,0.3)] relative z-20">
                            <Globe size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="Backend" 
                    italicTitle="& API"
                    subtitle="Robust server-side logic and secure database management."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupDatabase />
                </FeatureCard>

                 <FeatureCard 
                    title="Mobile" 
                    italicTitle="Responsive"
                    subtitle="Ensuring a flawless experience on every device size."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupResponsive />
                </FeatureCard>

                 <FeatureCard 
                    title="Deploy" 
                    italicTitle="& Optimize"
                    subtitle="SEO optimization and high-performance launch."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupLaunch />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default WebDevelopmentWorkflow;
