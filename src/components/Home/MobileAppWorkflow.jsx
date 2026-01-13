"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Layers, 
  Code2, 
  Wifi, 
  ShieldCheck, 
  Rocket,
  Palette,
  AppWindow,
  QrCode
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

// --- Mini UI Components for Mobile App Dev ---

const MockupPrototyping = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-3">
     <div className="w-8 h-12 border border-dashed border-gray-500 rounded bg-white/5"></div>
     <div className="text-gray-600">→</div>
     <div className="w-8 h-12 border border-white/20 rounded bg-white/5 flex flex-col items-center justify-center gap-1">
        <div className="w-4 h-4 rounded-full bg-[#EFFC76]/20"></div>
        <div className="w-5 h-1 bg-white/10 rounded"></div>
     </div>
  </div>
);

const MockupUI = () => (
   <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#EFFC76]/5 to-transparent"></div>
        <div className="w-10 h-16 bg-[#0A0A0A] border border-white/10 rounded-xl relative shadow-xl transform rotate-[-5deg] overflow-hidden">
             {/* Screen Content */}
             <div className="h-2 w-full bg-[#EFFC76]/20 mb-1"></div>
             <div className="grid grid-cols-2 gap-1 p-1">
                 <div className="h-6 bg-white/5 rounded"></div>
                 <div className="h-6 bg-white/5 rounded"></div>
                 <div className="h-6 bg-white/5 rounded"></div>
                 <div className="h-6 bg-white/5 rounded"></div>
             </div>
             <div className="absolute bottom-1 bg-[#EFFC76] w-6 h-1 rounded-full left-1/2 -translate-x-1/2"></div>
        </div>
   </div>
);

const MockupCrossPlatform = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col items-center justify-center gap-2">
        <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-black text-[8px] text-blue-400 font-bold">iOS</div>
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-black text-[8px] text-green-400 font-bold">And</div>
        </div>
        <div className="px-2 py-1 bg-white/5 rounded text-[9px] text-center text-gray-300 font-mono border border-white/5">
            write_once();
        </div>
    </div>
)

const MockupAPI = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-between px-4">
        <Smartphone size={16} className="text-gray-400" />
        <div className="flex-1 mx-2 relative h-1 bg-white/10 rounded-full overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "100%" }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               className="w-1/2 h-full bg-[#EFFC76]"
            />
        </div>
        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
            <span className="text-[8px] font-mono text-[#EFFC76]">JSON</span>
        </div>
    </div>
)

const MockupTesting = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center justify-center gap-2">
          {/* Phone 1 */}
          <div className="w-6 h-10 border border-white/10 rounded bg-white/5 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
          {/* Phone 2 */}
          <div className="w-5 h-8 border border-white/10 rounded bg-white/5 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
          {/* Tablet */}
          <div className="w-8 h-10 border border-white/10 rounded bg-white/5 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
    </div>
)

const MockupStore = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col items-center justify-center gap-1">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EFFC76] to-[#dce867] flex items-center justify-center shadow-lg">
             <div className="w-6 h-6 border-2 border-black rounded-lg"></div>
        </div>
        <div className="flex gap-1 mt-1">
            <div className="px-1.5 py-0.5 rounded bg-white/10 text-[6px] text-gray-300">App Store</div>
            <div className="px-1.5 py-0.5 rounded bg-white/10 text-[6px] text-gray-300">Play Store</div>
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

const MobileAppWorkflow = () => {
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
                Mobile Development Cycle
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Start to Finish, <span className="font-serif italic text-[#EFFC76]">In Your Quality</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Building high-performance, engaging mobile apps for iOS and Android platforms.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-rabbit-mobile">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Paths Definition - Identical to DevOps/Web/Cloud for same animation */}
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
                                filter="url(#glow-rabbit-mobile)"
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
                    title="User" 
                    italicTitle="Experience"
                    subtitle="Designing intuitive, touch-first mobile interfaces."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupPrototyping />
                </FeatureCard>

                <FeatureCard 
                    title="Mobile" 
                    italicTitle="Design"
                    subtitle="Pixel-perfect visuals tailored for iOS and Android."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupUI />
                </FeatureCard>

                <FeatureCard 
                    title="Native &" 
                    italicTitle="Hybrid"
                    subtitle="Using React Native, Flutter, or native Swift/Kotlin."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupCrossPlatform />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub - Mobile Icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#EFFC76] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#EFFC76] to-[#dce867] rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(239,252,118,0.3)] relative z-20">
                            <Smartphone size={40} className="fill-current" />
                        </div>
                    </div>
                </div>


                 {/* --- Row 3 --- */}
                 <FeatureCard 
                    title="API" 
                    italicTitle="Integration"
                    subtitle="Seamless connection to backends and third-party services."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupAPI />
                </FeatureCard>

                 <FeatureCard 
                    title="Device" 
                    italicTitle="Testing"
                    subtitle="Rigorous QA across multiple devices and screen sizes."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupTesting />
                </FeatureCard>

                 <FeatureCard 
                    title="Store" 
                    italicTitle="Launch"
                    subtitle="Handling App Store and Google Play submissions."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupStore />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default MobileAppWorkflow;
