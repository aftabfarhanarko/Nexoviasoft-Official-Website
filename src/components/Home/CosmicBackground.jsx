"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CosmicBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [...Array(50)].map((_, i) => ({
      id: i,
      width: Math.random() * 2 + 1 + "px",
      height: Math.random() * 2 + 1 + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050505] -z-10">
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

      {/* Main Lime/Yellow Glow Horizon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[100%] opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#EFFC76]/20 via-transparent to-transparent blur-[80px]" />
      </div>
      
      {/* Soft Top Gradient to mimic the light source */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#EFFC76]/5 to-transparent pointer-events-none" />

      {/* Planet Curve / Horizon Line - Made subtler and matching color */}
      <div className="absolute top-[30%] md:top-[25%] left-1/2 -translate-x-1/2 w-[200%] aspect-square rounded-[100%] bg-gradient-to-b from-[#EFFC76]/5 via-[#050505] to-[#050505] blur-3xl opacity-40" />
      
      <div className="absolute top-[35%] md:top-[30%] left-1/2 -translate-x-1/2 w-[180%] aspect-square rounded-[100%] border-t border-[#EFFC76]/20 blur-sm opacity-30" />

      {/* Dynamic Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-[#EFFC76]/10 to-transparent transform -skew-x-12 blur-3xl opacity-20" />
        <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-[#ccf381]/10 to-transparent transform skew-x-12 blur-3xl opacity-20" />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
    </div>
  );
};

export default CosmicBackground;
