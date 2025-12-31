"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[#1F0A55] text-white py-16 px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Purple Glow - Top Right */}
        <motion.div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium Purple Glow - Bottom Left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-purple-800/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Small Purple Accent - Center */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-500 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 2.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/squadlog-logo.png"}
            height={160}
            width={160}
            alt="Logo"
          ></Image>
          <p className="text-gray-400 text-sm">
            Made remotely with <span className="text-purple-500">💜</span> and
            passion
          </p>
          <p className="text-gray-500 text-sm">- Westhill Studio.</p>
        </motion.div>

        {/* Template Pages */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Template Pages</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "About", "Portfolio", "Contact", "FAQ"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#a78bfa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="transition-colors">
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-3 text-gray-400">
            {["Twitter (X)", "Instagram", "Youtube", "Framer"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#a78bfa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="transition-colors">
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Subscribe Form */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">Subscribe Form</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <motion.input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm"
              whileFocus={{ scale: 1.02, borderColor: "#a78bfa" }}
            />
            <motion.button
              className="px-6 py-3 bg-purple-600 rounded-lg font-medium whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#7c3aed",
                boxShadow: "0 0 20px rgba(167, 139, 250, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Subscribe Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-500 text-sm">© 2024 Mandro Design</p>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <motion.a
            href="#"
            className="transition-colors"
            whileHover={{ color: "#a78bfa" }}
          >
            Terms & Conditions
          </motion.a>
          <span className="text-gray-600">|</span>
          <motion.a
            href="#"
            className="transition-colors"
            whileHover={{ color: "#a78bfa" }}
          >
            Privacy Policy
          </motion.a>
        </div>
        <motion.div
          className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L3 6H6V12H10V6H13L8 2Z" fill="currentColor" />
          </svg>
          Made in Framer
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
