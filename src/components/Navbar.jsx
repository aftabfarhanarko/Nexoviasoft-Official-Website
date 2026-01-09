"use client";

import SmoothButton from "@/Share/SmoothButton";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
            src="/squadlog-logo.png"
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
                <div className="w-[720px] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
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
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-6 bg-[#0A0A0A] border border-white/10 rounded-3xl flex flex-col space-y-4 md:hidden shadow-2xl">
            <Link
              href="/"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link
              href="/products"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/products/squadcart"
              className="block text-gray-300 hover:text-white text-lg pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              SquadCart
            </Link>
            <Link
              href="/products"
              className="block text-gray-300 hover:text-white text-lg pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              CleverERP
            </Link>

            <Link
              href="/faq"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <SmoothButton className="w-full flex justify-center">
                  Get In Touch
                </SmoothButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
