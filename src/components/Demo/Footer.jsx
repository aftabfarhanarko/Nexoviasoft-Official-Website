import React from "react";
import Link from "next/link";
import { Layout } from "lucide-react";
// import logo from '/squadlog-logo.png'

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          {/* Left Side */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Layout size={20} strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Squadlog{" "}
              </span>
            </div>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Turn complex data into clear, actionable insights so you can make
              smarter decisions and drive growth with confidence
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Template
            </button>
          </div>

          {/* Right Side - Links */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            {/* Sections Column */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-6">Sections</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-6">Socials</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Twitter/X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>

            {/* Pages Column */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-6">Pages</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-900 font-medium">
            All Rights Reserved © 2024 Alytics
          </p>
          <p className="text-gray-900 font-medium">Template by Asad Khaleel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
