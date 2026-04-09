"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useQuery } from "@/hooks/useApi";
const Banner = () => {
  // Partner logos for marquee
  const { data, isLoading, isError } = useQuery("/hero-crasol");

  return (
    <div className="min-h-screen text-white  mt-2 md:-mt-8  overflow-hidden bg-transparent">
      {/* Banner Component */}
      <section className="relative md:mt-0 min-h-screen flex flex-col items-center justify-center pt-20">
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-grow">
          {/* Badge */}
          <motion.div
            className="inline-flex -mt-15 items-center space-x-2 bg-gradient-to-r from-[#d946ef]/10 to-[#f97316]/10 backdrop-blur-md border border-[#d946ef]/30 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#d946ef] to-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-[#d946ef]/20">
              Premium
            </span>
            <span className="text-gray-200 text-sm font-medium">
              Software Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className=" mb-5 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.1] tracking-tight text-white">
              Transforming Ideas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">Into Digital Reality.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className=" md:space-y-2  mb-6 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide">
              Creating latest solutions that redefine innovation.
            </p>
            <p className=" hidden md:block text-gray-400 text-lg md:text-xl font-light tracking-wide">
              Stay ahead with AI-powered technology for the future.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className=" grid grid-cols-2 items-center justify-center  gap-2 md:gap-15 mb-15 md:mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className=" px-3 md:px-8  py-2.5 md:py-3 bg-gradient-to-r from-[#d946ef]/20 to-[#f97316]/20 text-white rounded-full text-[14px] border border-white/10 md:text-lg font-medium hover:from-[#d946ef]/40 hover:to-[#f97316]/40 transition-all duration-300 hover:scale-105 ">
              Connect With Us
            </button>
            <button className=" px-3 md:px-8  py-2.5 md:py-3 bg-[#d946ef] text-white rounded-full text-[14px] md:text-lg  font-medium border border-[#d946ef] hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-all duration-300 hover:scale-105 ">
              What is NexoviaSoft?
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
              {isLoading ? (
                <span className="text-gray-500 animate-pulse">
                  Loading partners...
                </span>
              ) : isError ? (
                <span className="text-red-500 text-sm">
                  Failed to load partners
                </span>
              ) : (
                data?.data?.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="relative w-40 h-40 grayscale opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={item.logoUrl}
                      alt="Partner Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
