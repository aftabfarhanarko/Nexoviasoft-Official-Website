"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SmoothButton from "@/Share/SmoothButton";
import { useQuery } from "@/hooks/useApi";

const ContactForm = () => {
  const { data } = useQuery("/service-request");
  console.log("Contactpage", data);

  
  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto py-30">
      {/* Header Section */}
      <div className="flex flex-col mt-9 items-center justify-center text-center gap-6 mb-16 relative">
        <div className="flex justify-center items-center  mb-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#EFFC76] text-black text-xs font-bold px-3 py-1 rounded-full">
              <MessageCircle size={15} className="text-black" />
            </span>
            <span className="text-gray-300 text-sm font-medium">
              24/7 Collaborate With Us
            </span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight"
        >
          Have Any Doubts? We <br />
          are Ready to Help.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-lg"
        >
          Whether you need guidance, support, or a fresh start, our team is
          ready to assist you.
        </motion.p>

        <SmoothButton> Fill The Form Out!</SmoothButton>

        {/* Background glow for header */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#EFFC76]/20 blur-[100px] pointer-events-none -z-10" />
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Glow effect behind form */}
        <div className="absolute inset-0 bg-[#EFFC76]/10 blur-[60px] rounded-[2rem] transform scale-95 translate-y-4 pointer-events-none" />

        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden">
          {/* Subtle top gradient inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-[#EFFC76]/10 blur-[80px] pointer-events-none" />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                First name*
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                How can we reach you?*
              </label>
              <input
                type="email"
                placeholder="jane@framer.com"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Where Are you from?*
              </label>
              <div className="relative">
                <select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all appearance-none cursor-pointer">
                  <option value="">Select your country...</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Company Type */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                What's the type of your company?*
              </label>
              <div className="relative">
                <select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all appearance-none cursor-pointer">
                  <option value="">Select category</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Message*
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#EFFC76]/50 focus:ring-1 focus:ring-[#EFFC76]/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EFFC76] to-[#EFFC76] hover:from-[#EFFC76] hover:to-[#EFFC76] text-black font-medium transition-all shadow-lg shadow-[#EFFC76]/20"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
