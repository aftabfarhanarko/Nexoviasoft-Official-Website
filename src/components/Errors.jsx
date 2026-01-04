"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Errors = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto -mt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-1.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit"
        >
          <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            OOPS
          </span>
          <span className="text-gray-300 text-sm font-medium pr-2">
            Page Not Found
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight"
        >
          404 - Oops Page <br />
          <span className="text-gray-400">Not Found in Data.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed"
        >
          Oops! The web page you're looking for doesn't exist. Please click the
          below button to get back to the home.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium transition-all shadow-lg shadow-purple-500/25">
              Back To Homepage
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none"
      >
        <img
          src="https://i.ibb.co.com/pjCyMhxJ/image.png"
          alt="Error Background"
          className="w-full max-w-[1400px] h-auto object-contain opacity-90"
        />
      </motion.div>
    </div>
  );
};


export default Errors;