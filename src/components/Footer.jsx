"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Check } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/50 bg-black text-white pt-20 pb-10 px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Center Purple Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EFFC76]/20 blur-[120px] rounded-full opacity-50" />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#EFFC76] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-[#EFFC76] rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Logo */}
          {/* Logo and Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/fxiedLogo.png"}
              height={160}
              width={160}
              alt="Logo"
            ></Image>
            <p className="text-gray-400 text-sm">
              Made remotely with <span className="text-[#EFFC76]">💜</span> and
              passion
            </p>
            <p className="text-gray-500 text-sm">- Westhill Studio.</p>
          </motion.div>
        </motion.div>

        {/* Template Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-medium text-white">Our Company</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "Contact", href: "/contact" },
              { name: "FAQ", href: "/faq" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-[#EFFC76] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-medium text-white">Legal</h3>
          <ul className="space-y-3">
            {[
              { name: "Terms & Conditions", href: "/terms-and-conditions" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Refund Policy", href: "/refund-policy" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-[#EFFC76] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-medium text-white">Social</h3>
          <ul className="space-y-3">
            {[
              { name: "Twitter (X)", href: "https://twitter.com" },
              { name: "Instagram", href: "https://instagram.com" },
              { name: "Youtube", href: "https://youtube.com" },
              { name: "Framer", href: "https://framer.com" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="text-gray-400 hover:text-[#EFFC76] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-lg font-medium text-white">Subscribe Form</h3>
          <div className="relative max-w-sm">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="w-full bg-[#0F0F0F] border border-white/10 rounded-full py-3.5 pl-6 pr-32 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all"
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#EFFC76] hover:bg-[#EFFC76] text-black text-xs font-medium px-5 rounded-full transition-colors">
              Subscribe Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 max-w-[1400px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
      >
        <p>© 2024 SquadLog. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <Link
            href="/terms-and-conditions"
            className="hover:text-[#EFFC76] transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-[#EFFC76] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refund-policy"
            className="hover:text-[#EFFC76] transition-colors"
          >
            Refund Policy
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
