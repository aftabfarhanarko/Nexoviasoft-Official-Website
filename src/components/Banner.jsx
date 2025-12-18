"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "./Navbar";

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  // Cursor follow effect
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

      {/* Navbar Component */}
      <Navbar />

      {/* Banner Component */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background Gradient - Glowing Orb Effect */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Main large glowing orb */}
            <motion.div
              className="w-[900px] h-[400px]  blur-[120px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(16, 16, 16, 0) 70%)",
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Secondary blue glow layer */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]  blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(16, 16, 16, 0) 70%)",
              }}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner bright core */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, rgba(96, 165, 250, 0.4) 40%, rgba(16, 16, 16, 0) 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
              2025
            </span>
            <span className="text-gray-300 text-sm">Next-Gen AI Studio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              AI-Driven Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Redefining the Future.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Creating latest solutions that redefine innovation.
          </motion.p>
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Stay ahead with AI-powered technology for the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 cursor-none">
              Connect With Us
            </button>
            <button className="px-8 py-3 bg-purple-600/20 backdrop-blur-sm text-white rounded-full font-semibold border border-purple-500/50 hover:bg-purple-600/30 transition-all duration-300 hover:scale-105 cursor-none">
              What is Nubian?
            </button>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            className="mt-20 flex items-center justify-center space-x-12 opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-2xl font-bold tracking-wider">IPSUM</div>
            <div className="text-2xl font-bold tracking-wider">∞</div>
            <div className="text-2xl font-bold tracking-wider">BOOL</div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-4 border-gray-800 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;
