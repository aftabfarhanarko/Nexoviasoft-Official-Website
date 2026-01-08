"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import TextColorLetters from "@/Share/TextColorLetters";
import Image from "next/image";

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

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

  // Partner logos for marquee
  const logos = [
    "/logos/logo-ipsum.svg",
    "/logos/logo-ipsum-2.svg",
    "/logos/logo-ipsum-3.svg",
    "/logos/logo-ipsum.svg",
    "/logos/logo-ipsum-2.svg",
    "/logos/logo-ipsum-3.svg",
  ];

  return (
    <div className="min-h-screen  bg-black text-white overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />

      {/* Banner Component */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20">
        {/* Static Background Image */}
        <div className="absolute inset-0  w-full h-full z-0">
          <Image
            src="/banerImages.png"
            alt="Background"
            fill
            className="object-cover object-bottom opacity-70"
            priority
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#EFFC76]/45 via-[#EFFC76]/15 to-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-grow">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#EFFC76] text-black text-xs font-bold px-3 py-1 rounded-full">
              2025
            </span>
            <span className="text-gray-300 text-sm font-medium">Next-Gen AI Studio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.1] tracking-tight text-white">
              AI-Driven Success
              <br />
              <span className="text-white/90">Redefining the Future.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="space-y-2 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
              Creating latest solutions that redefine innovation.
            </p>
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
              Stay ahead with AI-powered technology for the future.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className="px-8 py-3.5 bg-gray-100 text-black rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105 cursor-none min-w-[180px]">
              Connect With Us
            </button>
            <button className="px-8 py-3.5 bg-[#EFFC76] text-black rounded-full font-medium border border-[#EFFC76] hover:bg-[#EFFC76]/90 transition-all duration-300 hover:scale-105 cursor-none min-w-[180px]">
              What is Nubien?
            </button>
          </motion.div>

          {/* Partner Logos Marquee */}
          <motion.div 
            className="w-full max-w-4xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
            
            <div className="flex items-center justify-center gap-16 md:gap-24 grayscale">
                <span className="text-2xl font-bold font-sans tracking-widest">LOGO</span>
                <span className="text-xl font-bold font-mono border-2 border-current p-1 px-2">LOGO IPSUM</span>
                <span className="text-2xl font-black italic tracking-tighter">IPSUM</span>
                <span className="text-2xl font-bold font-sans tracking-widest hidden md:block">LOGO</span>
                <span className="text-xl font-bold font-mono border-2 border-current p-1 px-2 hidden md:block">LOGO IPSUM</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
