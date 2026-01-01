"use client";

import SmoothButton from "@/Shaire/SmoothButton";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/squadlog-logo.png"
              alt="Squadlog Logo"
              width={150}
              height={150}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <SmoothButton>Get In Touch</SmoothButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-4 pb-4">
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
              href="/portfolio"
              className="block text-gray-300 hover:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
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
              <SmoothButton>Get In Touch</SmoothButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
