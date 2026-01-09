"use client";

import SmoothButton from "@/Share/SmoothButton";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium focus:outline-none"
            >
              Products
              <ChevronDown size={14} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Content */}
            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-2 w-48 shadow-xl">
                  <Link
                    href="/squadcart"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
                  >
                    SquadCart
                  </Link>
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
            
            {/* Mobile Products Menu */}
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium px-2">Products</p>
              <Link
                href="/squadcart"
                className="block text-gray-300 hover:text-white text-lg pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                SquadCart
              </Link>
            </div>

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
