"use client";
import React from "react";
import { motion } from "framer-motion";

const ProductHeader = () => {
  return (
    <div className="text-center pt-20 mb-[-50px] relative z-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans text-white leading-tight tracking-tight"
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EFFC76] to-white">Products</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto"
      >
        Powering the next generation of digital commerce and operations.
      </motion.p>
    </div>
  );
};

export default ProductHeader;
