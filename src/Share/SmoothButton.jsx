"use client";
import { motion } from "framer-motion";

export default function SmoothButton({ children, className = "" }) {
  return (
    <div className={className}>
      <motion.button
        className="px-6 py-2.5 bg-gradient-to-br from-[#EFFC76] to-[#EFFC76] rounded-full text-black text-md shadow-2xl font-medium"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(239, 252, 118, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 25px 50px -12px rgba(239, 252, 118, 0.3)",
            "0 25px 50px -12px rgba(239, 252, 118, 0.5)",
            "0 25px 50px -12px rgba(239, 252, 118, 0.3)",
          ],
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 200,
            damping: 15,
          },
          boxShadow: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {children}
      </motion.button>

      {/* <motion.button
          className="px-10 py-5 bg-gradient-to-br from-[#EFFC76] via-[#EFFC76] to-[#EFFC76] rounded-2xl font-bold text-black text-xl shadow-2xl"
          whileHover={{
            scale: 1.08,
            rotate: [0, -1, 1, 0],
            boxShadow: "0 30px 60px -15px rgba(239, 252, 118, 0.7)",
          }}
          whileTap={{ scale: 0.92 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            mass: 0.5,
          }}
        >
          Get In Touch
        </motion.button> */}
    </div>
  );
}
