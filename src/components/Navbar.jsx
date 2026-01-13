"use client";

import SmoothButton from "@/Share/SmoothButton";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Home,
  Layers,
  Zap,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    {
      title: "SquadCart",
      description: "E-commerce platform with analytics and integrations.",
      href: "/products/squadcart",
      badge: "Live",
    },
    {
      title: "CleverERP",
      description: "ERP to manage finance, inventory, and workflows.",
      href: "/products",
      badge: "New",
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-4 py-2 md:px-6 md:py-3 flex items-center justify-between w-full max-w-7xl shadow-2xl relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 pl-2">
            <Image
              src="/fxiedLogo.png"
              alt="Squadlog Logo"
              width={120}
              height={40}
              className="rounded-md object-contain h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                href="/products"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                onFocus={() => setIsProductsOpen(true)}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8">
                  <div className="w-[720px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-6 border-b border-white/10">
                      <div>
                        <div className="text-white font-semibold tracking-tight">
                          Products
                        </div>
                        <div className="text-gray-400 text-sm mt-1">
                          Browse all our SaaS products in one place.
                        </div>
                      </div>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        View all
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {products.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="text-white font-semibold tracking-tight">
                                  {item.title}
                                </div>
                                <div className="text-gray-400 text-sm mt-2 leading-relaxed">
                                  {item.description}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#EFFC76] text-black px-2 py-1 rounded-full">
                                  {item.badge}
                                </span>
                                <ArrowRight
                                  size={16}
                                  className="text-[#EFFC76] opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <SmoothButton>Get In Touch</SmoothButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-8 left-4 right-4 z-50">
        <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl grid grid-cols-5 items-end px-2 py-3 shadow-2xl relative">
          <div className="flex justify-center w-full">
            <Link
              href="/"
              className="text-gray-400 hover:text-[#EFFC76] transition-colors flex flex-col items-center gap-1 group"
            >
              <Home
                size={20}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              <span className="text-[10px] font-medium tracking-wide">
                Home
              </span>
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <Link
              href="/products"
              className="text-gray-400 hover:text-[#EFFC76] transition-colors flex flex-col items-center gap-1 group"
            >
              <Layers
                size={20}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              <span className="text-[10px] font-medium tracking-wide">
                Products
              </span>
            </Link>
          </div>

          {/* Floating Central Button */}
          <div className="relative -top-6 flex flex-col items-center justify-end w-full">
            <Link href="/contact">
              <div className="bg-white/10 backdrop-blur-lg p-3 rounded-xl  border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] transform transition-transform hover:scale-110 flex items-center justify-center">
                <Image
                  src="/customIcon.png"
                  alt="Center Icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            </Link>
            <span className="text-[10px] font-medium tracking-wide text-gray-400 mt-1">
              Contact
            </span>
          </div>

          <div className="flex justify-center w-full">
            <Link
              href="/services"
              className="text-gray-400 hover:text-[#EFFC76] transition-colors flex flex-col items-center gap-1 group"
            >
              <Zap
                size={20}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              <span className="text-[10px] font-medium tracking-wide">
                Services
              </span>
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`text-gray-400 hover:text-[#EFFC76] transition-colors flex flex-col items-center gap-1 group ${
                isMenuOpen ? "text-[#EFFC76]" : ""
              }`}
            >
              <Menu
                size={20}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              <span className="text-[10px] font-medium tracking-wide">
                More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col px-8 md:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between py-6">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/fxiedLogo.png"
                  alt="Squadlogo"
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                style={{ marginTop: "0" }}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-8 mt-8 pb-32 flex-grow">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact", href: "/contact" },
                { name: "Products", href: "/products" },
                { name: "SquadCart", href: "/products/squadcart", sub: true },
                { name: "CleverERP", href: "/products", sub: true },
                { name: "FAQ", href: "/faq" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block transition-all duration-300 ${
                      item.sub
                        ? "text-lg text-gray-500 pl-6 font-medium hover:text-[#EFFC76]"
                        : "text-4xl md:text-5xl font-medium text-white hover:text-[#EFFC76] tracking-tight"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <button className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-4 rounded-full hover:bg-[#EFFC76] hover:text-black hover:border-[#EFFC76] transition-all group">
                    <span className="font-semibold text-lg">
                      Free Consultation
                    </span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 mt-auto pt-8 pb-8"
              >
                {[
                  FaFacebookF,
                  FaInstagram,
                  FaXTwitter,
                  FaLinkedinIn,
                  FaYoutube,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-[#EFFC76] transition-colors p-2 -ml-2"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
