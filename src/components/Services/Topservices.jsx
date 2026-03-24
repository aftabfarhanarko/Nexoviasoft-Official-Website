"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  TrendingUp, 
  MessageSquare, 
  Box, 
  Image as ImageIcon, 
  FileText, 
  Code,
  X,
  Bot,
  User
} from "lucide-react";

const Topservices = () => {
  return (
    <section className="bg-black py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
          >
            <div className="w-4 h-4 rounded-full border border-[#d946ef] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#d946ef] rounded-full" />
            </div>
            <span className="text-gray-300 text-sm font-medium">Our services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight"
          >
            How we help you shape your future
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
          >
            NexoviaSoft is a premium digital agency delivering cutting-edge solutions for your business growth. We transform ideas into digital reality.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          {/* Card 1: Custom Development (Tall - Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:row-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-300"
          >
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-medium text-white mb-4">Custom Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Web Applications</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Mobile Solutions</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Enterprise Systems</li>
              </ul>
            </div>
            
            {/* Visual - Tree Node */}
            <div className="flex-1 flex flex-col items-center justify-end pb-8 relative z-10 mt-auto">
              <div className="relative flex flex-col items-center">
                 {/* Center Node */}
                 <div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl mb-8 relative z-10">
                    <Sparkles className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] w-8 h-8" fill="currentColor" />
                 </div>
                 
                 {/* Connecting Lines */}
                 <svg className="absolute top-14 left-1/2 -translate-x-1/2 w-64 h-24 pointer-events-none">
                    <path d="M128 0 V 40 M128 40 L 32 40 L 32 80 M128 40 L 224 40 L 224 80 M128 40 L 128 80" 
                          stroke="#333" strokeWidth="2" fill="none" />
                 </svg>

                 {/* Bottom Nodes */}
                 <div className="flex gap-12 mt-4">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10">
                        <ImageIcon className="text-gray-500 w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10">
                        <FileText className="text-gray-500 w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10">
                        <Code className="text-gray-500 w-5 h-5" />
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          {/* Card 2: Cloud Solutions (Wide - Top Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-300"
          >
             <div className="flex flex-col md:flex-row justify-between relative z-10">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-2xl font-medium text-white mb-4">Cloud Solutions</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Infrastructure Migration</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Security Optimization</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> DevOps & CI/CD</li>
                  </ul>
                </div>
                
                {/* Visual - Line Chart */}
                <div className="flex-1 md:ml-12 h-40 md:h-auto flex items-end relative">
                    <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                        {/* Gradient Area */}
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        
                        {/* Historical Data */}
                        <path d="M0 80 C 40 75, 60 55, 100 60 C 140 65, 160 35, 200 30" 
                              fill="none" stroke="#d946ef" strokeWidth="2" />
                        
                        {/* Prediction Data (Dashed) */}
                        <path d="M200 30 C 230 25, 260 15, 300 10" 
                              fill="none" stroke="#d946ef" strokeWidth="2" strokeDasharray="4 4" />

                        {/* Fill Area */}
                        <path d="M0 80 C 40 75, 60 55, 100 60 C 140 65, 160 35, 200 30 C 230 25, 260 15, 300 10 V 100 H 0 Z" 
                              fill="url(#chartGradient)" stroke="none" opacity="0.5" />
                        
                        {/* Points */}
                        <circle cx="100" cy="60" r="4" fill="#111" stroke="#d946ef" strokeWidth="2" />
                        <circle cx="200" cy="30" r="4" fill="#d946ef" stroke="#d946ef" strokeWidth="2" />
                        <circle cx="300" cy="10" r="4" fill="#111" stroke="#d946ef" strokeWidth="2" />
                        
                        {/* Labels */}
                        <text x="210" y="20" fill="white" fontSize="10" opacity="0.8">NexoviaSoft</text>
                        <circle cx="205" cy="17" r="2" fill="#d946ef" />
                        <text x="210" y="35" fill="gray" fontSize="10">Competitors</text>
                        <circle cx="205" cy="32" r="2" fill="gray" />
                    </svg>
                </div>
             </div>
          </motion.div>

          {/* Card 3: UI/UX Design (Small - Bottom Center/Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#d946ef] rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-black mb-4">UI/UX Design</h3>
              <ul className="space-y-2 text-black/70 font-medium">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-black rounded-full" /> Brand Identity</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-black rounded-full" /> User Research</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-black rounded-full" /> Interactive Prototypes</li>
              </ul>
            </div>
            
            {/* Visual - Wireframe Cube */}
            <div className="absolute bottom-8 right-8 w-24 h-24 opacity-40 mix-blend-multiply">
               <svg viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="1.5" className="w-full h-full">
                  <path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" />
                  <path d="M50 15 L50 55 L85 75 M50 55 L15 75" />
                  <path d="M50 55 L85 35 M15 35 L50 55" /> 
               </svg>
            </div>
          </motion.div>

          {/* Card 4: Digital Marketing (Wide - Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-300"
          >
             <div className="flex flex-col md:flex-row gap-8 relative z-10 h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-white mb-4">Digital Marketing</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> SEO & SEM</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Content Strategy</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-500 rounded-full" /> Social Media Growth</li>
                  </ul>
                  
                  {/* Floating Tags */}
                  <div className="mt-8 relative h-20 overflow-hidden">
                      <div className="absolute top-0 left-0 bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-lg text-gray-400 text-xs transform -rotate-6">
                          SEO Ranking
                      </div>
                      <div className="absolute top-8 left-8 bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-lg text-gray-400 text-xs transform rotate-3 opacity-50">
                          Conversion Rate
                      </div>
                       <div className="absolute top-12 left-20 bg-gradient-to-r from-[#d946ef] to-[#f97316] border border-[#d946ef]/20 px-3 py-1.5 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] text-xs transform -rotate-3">
                          ROI +150%
                      </div>
                  </div>
                </div>
                
                {/* Visual - Chat UI with 3D Transform */}
                <div className="flex-1 relative min-h-[200px] flex items-end justify-end perspective-1000">
                    <div className="w-full max-w-[280px] bg-[#1A1A1A] rounded-t-2xl rounded-bl-2xl border border-white/10 overflow-hidden shadow-2xl transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-6 origin-bottom-right"
                         style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' }}>
                        {/* Chat Header */}
                        <div className="bg-[#d946ef] p-3 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot className="w-4 h-4 text-black" />
                                <span className="text-black font-medium text-sm">Marketing Bot</span>
                            </div>
                            <X className="w-4 h-4 text-black opacity-50" />
                        </div>
                        
                        {/* Chat Body */}
                        <div className="p-4 space-y-3 bg-[#1A1A1A]">
                            <div className="text-center text-[10px] text-gray-600 mb-2">September 21st at 11:15 AM</div>
                            
                            <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                                    <Bot className="w-3 h-3 text-gray-400" />
                                </div>
                                <div className="bg-white/5 p-2 rounded-lg rounded-tl-none text-xs text-gray-300">
                                    Ready to scale your business?
                                </div>
                            </div>
                            
                            <div className="flex gap-2 flex-row-reverse">
                                 <div className="w-6 h-6 rounded-full bg-[#d946ef] flex-shrink-0 flex items-center justify-center">
                                    <User className="w-3 h-3 text-black" />
                                </div>
                                <div className="bg-white p-2 rounded-lg rounded-tr-none text-xs text-black">
                                    We need more organic traffic.
                                </div>
                            </div>

                             <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                                    <Bot className="w-3 h-3 text-gray-400" />
                                </div>
                                <div className="bg-white/5 p-2 rounded-lg rounded-tl-none text-xs text-gray-300">
                                    Our SEO strategy can help you rank #1.
                                </div>
                            </div>
                            
                            <div className="ml-8 bg-[#111] border border-white/10 rounded-lg p-2 flex items-center justify-between group cursor-pointer hover:border-[#d946ef]/50">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] text-xs">Growth Plan</span>
                                <TrendingUp className="w-3 h-3 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Topservices;