"use client";

import SmoothButton from "@/Share/SmoothButton";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-4 py-2 md:px-6 md:py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl relative">
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
            href="/pages/about"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/pages/portfolio"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/pages/contact"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Contact
          </Link>
          <Link
            href="/pages/services"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="/demo"
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Demo
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/pages/contact">
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
              href="/pages/about"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pages/portfolio"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/pages/contact"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4">
              <Link href="/pages/contact" onClick={() => setIsMenuOpen(false)}>
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
