"use client";
import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto py-20">
      <div className="relative rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/10 group">
        
        {/* Top Gradient/Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#EFFC76]/20 blur-[120px] pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

        {/* Video Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 p-4 md:p-8"
        >
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-[#EFFC76]/20 aspect-video w-full bg-black/50 relative">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/tgc6YH6X9b0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
            </div>
        </motion.div>

        {/* Bottom subtle glow */}
         <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#EFFC76]/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Video;
