"use client";
import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto py-20">
      <div className="relative rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/10 group">
        
        {/* Top Gradient/Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-600/20 blur-[120px] pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 p-4 md:p-8"
        >
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 aspect-video w-full bg-black/50 relative">
                 {/* Placeholder for video - replacing with image from user request reference for now, or actual video tag */}
                <img 
                    src="https://framerusercontent.com/images/kL728uX6eK8GDqQZtC3FwQJqY.png" 
                    alt="Dashboard Interface" 
                    className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay (Optional) */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300 cursor-pointer">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Bottom subtle glow */}
         <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Video;
