"use client";
import React from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  // Always visible as per user request
  const isVisible = true;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] p-3 rounded-full border border-[#d946ef]/30 bg-black/20 backdrop-blur-md hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-all duration-300 group shadow-[0_0_15px_rgba(217,70,239,0.1)]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
