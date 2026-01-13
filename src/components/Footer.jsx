"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  Send,
  Heart,
  Globe,
} from "lucide-react";

/**
 * Modern Footer Design
 * Features:
 * - Massive "SQUADLOG" background text
 * - Clean grid layout
 * - Neon accents (#EFFC76)
 * - Interactive hover states
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-8 overflow-hidden border-t border-white/5">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center leading-none">
          <h1 className="text-[15vw] md:text-[18vw] font-bold text-white/[0.03] tracking-tight font-sans whitespace-nowrap">
            SQUADLOG
          </h1>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFFC76]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
               {/* Replace with your actual Logo image if preferred, 
                   using text for now to match modern minimalist vibe */}
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                 <div className="w-8 h-8 bg-[#EFFC76] rounded-lg flex items-center justify-center">
                    <span className="text-black text-xl font-bold">S</span>
                 </div>
                 SquadLog.
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge digital solutions. 
              We craft experiences that merge aesthetic perfection with robust functionality.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#EFFC76] hover:border-[#EFFC76]/50 hover:bg-[#EFFC76]/5 transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Group: Company & Services (Span 4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-white">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Our Team', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-[#EFFC76] transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-[#EFFC76] transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-white">Services</h4>
              <ul className="space-y-4">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design', 'Consulting'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-[#EFFC76] transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-px bg-[#EFFC76] transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
           {/* Links Column 3: Legal (Span 2) */}
           <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-medium text-white">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#EFFC76] transition-colors text-sm flex items-center gap-2 group">
                     <span className="w-0 group-hover:w-2 h-px bg-[#EFFC76] transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Newsletter Section - Full Width Strip */}
        <div className="border-y border-white/10 py-12 mb-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#EFFC76]/0 group-hover:bg-[#EFFC76]/[0.02] transition-colors duration-500"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-medium text-white mb-2">Stay in the loop</h3>
                    <p className="text-gray-400 text-sm">Join our newsletter for the latest tech trends and updates.</p>
                </div>
                
                <div className="w-full max-w-md relative">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full bg-[#111] border border-white/10 rounded-full py-4 pl-6 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all"
                    />
                    <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#EFFC76] rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <p className="text-gray-500 text-sm">
                &copy; {currentYear} SquadLog. Made with <Heart size={12} className="inline text-[#EFFC76] fill-[#EFFC76] mx-1" /> remotely.
            </p>
            
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    All Systems Operational
                </div>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                    Back to Top
                </button>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
