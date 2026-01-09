"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="text-center mb-20 mt-19">
      <div className="flex justify-center items-center  mb-10">
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-[#EFFC76] text-black text-xs font-bold px-3 py-1 rounded-full">
            <Package size={15} className="text-black" />
          </span>
          <span className="text-gray-300 text-sm font-medium">Products</span>
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight"
      >
        Our SaaS Products for
        <br />
        <span className="text-gray-400">Modern Businesses</span>
      </motion.h2>
    </div>
  );
};

export default ProductHeader;
