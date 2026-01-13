"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  Terminal, 
  Rocket, 
  ShieldCheck, 
  Activity, 
  Database,
  CheckCircle2,
  Play,
  Lock,
  Server
} from "lucide-react";

// --- Animation Variants ---
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

// --- Mini UI Components for Cards ---

const MockupTerminal = () => (
  <div className="bg-black/40 rounded-lg p-3 font-mono text-[10px] text-gray-400 border border-white/5 space-y-1.5 h-24 overflow-hidden">
    <div className="flex gap-1.5 mb-2">
      <div className="w-2 h-2 rounded-full bg-red-500/50" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
      <div className="w-2 h-2 rounded-full bg-green-500/50" />
    </div>
    <div className="flex gap-2">
       <span className="text-[#EFFC76]">$</span> <span>terraform init</span>
    </div>
    <div className="text-gray-500">Initializing the backend...</div>
    <div className="flex gap-2">
       <span className="text-[#EFFC76]">$</span> <span>terraform apply</span>
    </div>
    <div className="text-green-400">Apply complete! Resources: 5 added.</div>
  </div>
);

const MockupPipeline = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center space-y-3">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-md bg-[#EFFC76]/20 flex items-center justify-center text-[#EFFC76]"><GitBranch size={12} /></div>
      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-full bg-[#EFFC76] rounded-full" />
      </div>
      <div className="text-[10px] text-gray-400">Build</div>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-md bg-[#EFFC76]/20 flex items-center justify-center text-[#EFFC76]"><CheckCircle2 size={12} /></div>
      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-[#EFFC76] rounded-full" />
      </div>
      <div className="text-[10px] text-gray-400">Test</div>
    </div>
  </div>
);

const MockupMonitoring = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-end gap-1 relative">
    <div className="absolute top-2 right-2 text-[10px] text-[#EFFC76] font-mono">99.9% UP</div>
    {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
      <motion.div 
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 1, delay: i * 0.1 }}
        className="flex-1 bg-gradient-to-t from-[#EFFC76]/10 to-[#EFFC76] rounded-t-sm opacity-60"
      />
    ))}
  </div>
);

const MockupSecurity = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center gap-3">
        <div className="h-16 w-16 rounded-full border-4 border-[#EFFC76]/20 flex items-center justify-center relative">
            <Lock size={20} className="text-[#EFFC76]" />
            <div className="absolute inset-0 border-t-4 border-[#EFFC76] rounded-full animate-spin"></div>
        </div>
        <div className="space-y-1">
            <div className="h-2 w-20 bg-white/10 rounded-full"></div>
            <div className="h-2 w-16 bg-white/10 rounded-full"></div>
            <div className="text-[10px] text-[#EFFC76] mt-1">Scanning...</div>
        </div>
    </div>
)

const MockupDeployment = () => (
   <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-between">
      <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] text-gray-300">Production</span>
          </div>
          <span className="text-[10px] text-gray-500">v2.4.0</span>
      </div>
      <div className="w-full bg-[#EFFC76] text-black text-[10px] font-bold py-1.5 rounded text-center cursor-pointer hover:bg-white transition-colors">
          Deploy Now
      </div>
   </div>
)

const MockupDatabase = () => (
    <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 grid grid-cols-2 gap-2">
        <div className="bg-white/5 rounded p-1.5 flex flex-col justify-center items-center gap-1">
            <Database size={14} className="text-gray-400" />
            <div className="text-[8px] text-gray-500">Primary</div>
        </div>
        <div className="bg-white/5 rounded p-1.5 flex flex-col justify-center items-center gap-1">
             <Database size={14} className="text-gray-400" />
             <div className="text-[8px] text-gray-500">Replica</div>
        </div>
        <div className="col-span-2 h-1 bg-white/10 rounded-full overflow-hidden mt-1">
             <div className="h-full w-full bg-[#EFFC76] animate-pulse"></div>
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

const DevOpsWorkflow = () => {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative z-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-[#EFFC76] mb-6"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-[#EFFC76] animate-pulse"></div>
                DevOps Workflow
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-medium text-white tracking-tight"
            >
                Smarter Dev, <span className="font-serif italic text-[#EFFC76]">Supercharged By DevOps</span>
            </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            >
                From code to cloud, we optimize every step of your software lifecycle for speed, security, and scalability.
            </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
            
            {/* Desktop SVG Lines (Absolute) */}
             <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Center Point approx: 700 450 */}
                    {/* Top Left Connection */}
                    <path d="M 700 450 C 700 350, 250 550, 250 380" stroke="#EFFC76" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="250" cy="380" r="4" fill="#EFFC76" />
                    
                    {/* Top Center Connection */}
                    <path d="M 700 450 C 700 350, 700 400, 700 380" stroke="#EFFC76" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="700" cy="380" r="4" fill="#EFFC76" />

                    {/* Top Right Connection */}
                    <path d="M 700 450 C 700 350, 1150 550, 1150 380" stroke="#EFFC76" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="1150" cy="380" r="4" fill="#EFFC76" />

                    {/* Bottom Left Connection */}
                    <path d="M 700 450 C 700 550, 250 350, 250 520" stroke="#EFFC76" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="250" cy="520" r="4" fill="#EFFC76" />

                    {/* Bottom Center Connection */}
                    <path d="M 700 450 C 700 550, 700 500, 700 520" stroke="#EFFC76" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
                     <circle cx="700" cy="520" r="4" fill="#EFFC76" />

                    {/* Bottom Right Connection */}
                    <path d="M 700 450 C 700 550, 1150 350, 1150 520" stroke="#EFFC76" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="1150" cy="520" r="4" fill="#EFFC76" />
                </svg>
            </div>


            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full relative z-10">
                
                {/* --- Row 1 --- */}
                
                {/* Card 1 */}
                <FeatureCard 
                    title="Infrastructure" 
                    italicTitle="As Code"
                    subtitle="Provision resources instantly with terraform blueprints."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupTerminal />
                </FeatureCard>

                {/* Card 2 */}
                <FeatureCard 
                    title="CI/CD" 
                    italicTitle="Automated Pipelines"
                    subtitle="Ship features faster with automated test and deploy workflows."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                    <MockupPipeline />
                </FeatureCard>

                {/* Card 3 */}
                <FeatureCard 
                    title="Real-time" 
                    italicTitle="Monitoring"
                    subtitle="Gain deep insights into system health and performance."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                     <MockupMonitoring />
                </FeatureCard>


                {/* --- Row 2 (Spacer for Center Hub) --- */}
                <div className="hidden xl:flex items-center justify-center col-span-3 py-12 relative">
                     {/* Central Pulsing Hub */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#EFFC76] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 bg-gradient-to-b from-[#EFFC76] to-[#dce867] rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(239,252,118,0.3)] relative z-20">
                            <Rocket size={40} className="fill-current" />
                        </div>
                         {/* Mobile decorative lines if needed, but keeping clean for now */}
                    </div>
                </div>


                 {/* --- Row 3 --- */}

                 {/* Card 4 */}
                 <FeatureCard 
                    title="Security" 
                    italicTitle="DevSecOps"
                    subtitle="Automated vulnerability scanning at every commit."
                    className="xl:max-w-sm xl:justify-self-end"
                >
                    <MockupSecurity />
                </FeatureCard>

                 {/* Card 5 */}
                 <FeatureCard 
                    title="Rapid" 
                    italicTitle="Deployment"
                    subtitle="Zero-downtime deployments to production environments."
                    className="xl:max-w-sm xl:justify-self-center"
                >
                   <MockupDeployment />
                </FeatureCard>

                 {/* Card 6 */}
                 <FeatureCard 
                    title="Scalable" 
                    italicTitle="Architecture"
                    subtitle="Database and service scaling that grows with you."
                    className="xl:max-w-sm xl:justify-self-start"
                >
                    <MockupDatabase />
                </FeatureCard>
            
            </div>
            
        </div>

      </div>
    </section>
  );
};

export default DevOpsWorkflow;
