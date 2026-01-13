"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail
} from "lucide-react";

/**
 * Fluid Lux Footer V3
 * Features:
 * - Anti-container / No borders
 * - Massive Organic CTA
 * - Floating Typography
 * - Deep Cosmic Atmosphere
 */

const FooterLink = ({ href, children }) => (
    <Link href={href} className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors py-1">
        <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{children}</span>
            <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#EFFC76]">
                {children}
            </span>
        </span>
    </Link>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <footer ref={containerRef} className="relative bg-[#050505] pt-32 pb-12 overflow-hidden">
        
      {/* 1. Deep Atmosphere (Premium) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
         {/* Deep Gradient Base - Lighter */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#1A1A1A] to-[#111] z-0"/>
         
         {/* Subtle Grid Pattern - Slightly more visible */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] z-10" />

         {/* Noise Texture for Grain */}
         <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

         {/* Subtle Ambient Light - Enhanced Brightness */}
         <motion.div 
            animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-[#EFFC76]/10 to-transparent rounded-full blur-[120px] z-10" 
         />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* 2. Massive Organic CTA */}
        <div className="flex flex-col items-center text-center mb-32 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group cursor-pointer"
            >
                <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tight text-white/90 leading-[0.9] group-hover:text-white transition-colors duration-500">
                    Have an idea?
                </h2>
                <div className="h-4 md:h-8" /> {/* Spacer */}
                <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tight text-gray-500 leading-[0.9] group-hover:text-[#EFFC76] transition-colors duration-500">
                    Let&apos;s build it.
                </h2>
                
                {/* Floating Magnetic Button */}
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-[#EFFC76] rounded-full flex items-center justify-center mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                >
                    <ArrowRight size={48} className="text-black" />
                </motion.div>
            </motion.div>
        </div>


        {/* 3. Floating Navigation (No Grid Lines) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-24">
            
            {/* Brand - Minimal */}
            <div className="max-w-xs">
                <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-6 inline-block">
                    SquadLog.
                </Link>
                <p className="text-gray-500 leading-relaxed mb-8">
                    Crafting digital experiences with precision and passion. 
                    Based remotely, working globally.
                </p>
                <div className="flex gap-4">
                    {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                        <a key={i} href="#" className="text-gray-500 hover:text-[#EFFC76] transition-colors">
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links - Floating Columns */}
            <div className="flex flex-wrap gap-12 md:gap-24">
                {/* Company & Services Grouped */}
                <div className="flex gap-12 md:gap-24">
                     <div>
                        <h4 className="text-white font-medium mb-6">Company</h4>
                        <div className="flex flex-col gap-3">
                            {['About', 'Work', 'Agency', 'Contact'].map(item => (
                                <FooterLink key={item} href="#">{item}</FooterLink>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h4 className="text-white font-medium mb-6">Services</h4>
                        <div className="flex flex-col gap-3">
                            {['Web Dev', 'Mobile', 'SaaS', 'Design'].map(item => (
                                <FooterLink key={item} href="#">{item}</FooterLink>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-6">Legal</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: 'Privacy Policy', href: '/privacy-policy' },
                                { name: 'Terms & Conditions', href: '/terms-conditions' },
                                { name: 'Refund Policy', href: '/refund-policy' }
                            ].map(item => (
                                <FooterLink key={item.name} href={item.href}>{item.name}</FooterLink>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter - Minimalist */}
                <div className="max-w-xs">
                     <h4 className="text-white font-medium mb-6">Stay Updated</h4>
                     <div className="relative group">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76] transition-colors rounded-none"
                        />
                        <button className="absolute right-0 top-3 text-gray-500 group-focus-within:text-[#EFFC76] transition-colors">
                            <ArrowUpRight size={20} />
                        </button>
                     </div>
                </div>
            </div>
        </div>


        {/* 4. Bottom Anchor - Barely There */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
            <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={14} /> New York, NY
                 </div>
                 <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Mail size={14} /> hello@squadlog.com
                 </div>
            </div>

             <div className="flex gap-6 text-sm text-gray-600">
                <span>&copy; {currentYear} SquadLog</span>
             </div>
             
             {/* Giant Faded Anchor Text behind everything */}
             <div className="absolute -bottom-20 right-0 pointer-events-none select-none mix-blend-overlay opacity-20">
                 <h1 className="text-[15vw] font-bold text-white/5 leading-none">
                    LOG
                 </h1>
             </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
