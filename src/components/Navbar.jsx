"use client";

import SmoothButton from "@/Share/SmoothButton";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
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
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
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
                className={`transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white pr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#050505]/98 backdrop-blur-3xl z-40 flex flex-col pt-32 px-6 md:hidden"
            >
              <div className="flex flex-col space-y-6">
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
                      className={`block text-3xl font-bold tracking-tight hover:text-[#EFFC76] transition-colors ${
                        item.sub ? "text-xl text-gray-400 pl-4 font-medium" : "text-white"
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
                  className="pt-8"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block">
                    <button className="w-full bg-[#EFFC76] text-black font-bold text-lg py-4 rounded-full hover:bg-white transition-colors">
                      Get In Touch
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
