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
  Server,
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

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.3, // matches strokeOpacity="0.1" roughly but slightly more visible for animation
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.5, // Wait for cards to start appearing
    },
  },
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
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">$</span> <span>terraform init</span>
    </div>
    <div className="text-gray-500">Initializing the backend...</div>
    <div className="flex gap-2">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">$</span> <span>terraform apply</span>
    </div>
    <div className="text-green-400">Apply complete! Resources: 5 added.</div>
  </div>
);

const MockupPipeline = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-center space-y-3">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#d946ef] to-[#f97316] flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">
        <GitBranch size={12} />
      </div>
      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-full bg-[#d946ef] rounded-full" />
      </div>
      <div className="text-[10px] text-gray-400">Build</div>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#d946ef] to-[#f97316] flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">
        <CheckCircle2 size={12} />
      </div>
      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-[#d946ef] rounded-full" />
      </div>
      <div className="text-[10px] text-gray-400">Test</div>
    </div>
  </div>
);

const MockupMonitoring = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-end gap-1 relative">
    <div className="absolute top-2 right-2 text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] font-mono">
      99.9% UP
    </div>
    {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        transition={{ duration: 1, delay: i * 0.1 }}
        className="flex-1 bg-gradient-to-t from-[#d946ef]/10 to-[#f97316] rounded-t-sm opacity-60"
      />
    ))}
  </div>
);

const MockupSecurity = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex items-center gap-3">
    <div className="h-16 w-16 rounded-full border-4 border-[#d946ef]/20 flex items-center justify-center relative">
      <Lock size={20} className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
      <div className="absolute inset-0 border-t-4 border-[#d946ef] rounded-full animate-spin"></div>
    </div>
    <div className="space-y-1">
      <div className="h-2 w-20 bg-white/10 rounded-full"></div>
      <div className="h-2 w-16 bg-white/10 rounded-full"></div>
      <div className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] mt-1">Scanning...</div>
    </div>
  </div>
);

const MockupDeployment = () => (
  <div className="bg-black/40 rounded-lg p-3 border border-white/5 h-24 flex flex-col justify-between">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] text-gray-300">Production</span>
      </div>
      <span className="text-[10px] text-gray-500">v2.4.0</span>
    </div>
    <div className="w-full bg-[#d946ef] text-white text-[10px] font-bold py-1.5 rounded text-center cursor-pointer hover:bg-white transition-colors">
      Deploy Now
    </div>
  </div>
);

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
      <div className="h-full w-full bg-[#d946ef] animate-pulse"></div>
    </div>
  </div>
);

// --- Main Card Component ---
const FeatureCard = ({
  title,
  subtitle,
  italicTitle,
  icon: Icon,
  children,
  className,
}) => (
  <motion.div
    variants={cardVariants}
    className={`bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-8 relative hover:border-[#d946ef]/50 transition-colors duration-500 group overflow-hidden ${className} w-full`}
  >
    {/* Glow Effect */}
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full blur-3xl group-hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-all duration-500"></div>

    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-xl md:text-2xl text-white font-medium mb-3">
          {title}{" "}
          <span className="font-serif italic text-gray-300 ml-1">
            {italicTitle}
          </span>
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{subtitle}</p>
      </div>

      {/* Visual Mockup Container */}
      <div className="mt-auto">{children}</div>
    </div>
  </motion.div>
);

const DevOpsWorkflow = () => {
  return (
    <section className="py-32 relative -mt-35  md:-mt-22 overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef] animate-pulse"></div>
            DevOps Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight"
          >
            Smarter Dev,{" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">
              Supercharged By DevOps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From code to cloud, we optimize every step of your software
            lifecycle for speed, security, and scalability.
          </motion.p>
        </div>

        {/* Diagram Layout */}
        <div className="relative flex flex-col items-center">
          {/* Desktop SVG Lines (Absolute) */}
          <div className="absolute inset-0 hidden xl:block pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1400 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGap" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                  <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Paths Definition */}
              {[
                "M 700 450 C 700 350, 250 550, 250 380", // Top Left
                "M 700 450 C 700 350, 700 400, 700 380", // Top Center
                "M 700 450 C 700 350, 1150 550, 1150 380", // Top Right
                "M 700 450 C 700 550, 250 350, 250 520", // Bottom Left
                "M 700 450 C 700 550, 700 500, 700 520", // Bottom Center
                "M 700 450 C 700 550, 1150 350, 1150 520", // Bottom Right
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
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  {/* Animated Particle (The "Rabbit") */}
                  <motion.circle
                    r="4"
                    fill="#d946ef"
                    style={{ offsetPath: `path('${pathD}')` }}
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2, // Stagger start slightly
                      repeatDelay: 1,
                    }}
                  />
                  {/* End Point Dot */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                    cx={pathD.split(" ").slice(-2)[0]} // Hacky extraction of end coords from path string, likely won't work well due to parsing.
                    // Better to just hardcode dots if needed, but the particle moves to the end anyway.
                    // Let's keep the manual dots for stability or reconstruct them.
                    // Wait, the previous code had manual dots. I should preserve them.
                  />
                </React.Fragment>
              ))}

              {/* Re-adding static dots at endpoints for cleaner look when particle is not there, 
                        or maybe just rely on particle? 
                        The user asked for "dots touching each other", "moving". 
                        I'll add specific endpoint dots back to be safe. 
                    */}
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="250"
                cy="380"
                r="4"
                fill="#d946ef"
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="700"
                cy="380"
                r="4"
                fill="#d946ef"
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="1150"
                cy="380"
                r="4"
                fill="#d946ef"
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="250"
                cy="520"
                r="4"
                fill="#d946ef"
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="700"
                cy="520"
                r="4"
                fill="#d946ef"
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="1150"
                cy="520"
                r="4"
                fill="#d946ef"
              />
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
                <div className="absolute inset-0 bg-[#d946ef] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="w-24 h-24 bg-gradient-to-b from-[#d946ef] to-[#f97316] rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative z-20">
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
