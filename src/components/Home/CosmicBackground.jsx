"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CosmicBackground = () => {
  const [stars] = useState(() =>
    [...Array(50)].map((_, i) => ({
      id: i,
      width: Math.random() * 2 + 1 + "px",
      height: Math.random() * 2 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      duration: Math.random() * 3 + 2,
    }))
  );

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505] -z-10">
      {/* Premium Modern Glow Effects */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[80%] aspect-square rounded-full bg-[#EFFC76]/10 blur-[120px] pointer-events-none"
      />

      {/* Secondary Ambient Glows */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[100%] pointer-events-none opacity-30"
      >
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-[#EFFC76]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[35%] h-[35%] bg-[#EFFC76]/5 rounded-full blur-[90px]" />
      </motion.div>

      {/* Stars Background */}
      <div className="absolute inset-0 opacity-40">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white/60"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Elegant Horizon Line */}
      {/* <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[100%] max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#EFFC76]/30 to-transparent blur-[1px]" /> */}
      {/* <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#EFFC76]/80 to-transparent" /> */}

      {/* Bottom Fade for Smooth Transition */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
};

export default CosmicBackground;
