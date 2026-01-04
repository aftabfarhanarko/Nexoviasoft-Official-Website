"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Gift } from "lucide-react";

const ElevateBrands = () => {
  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto mt-10 py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <div className="p-1 rounded-full bg-purple-600 flex items-center justify-center">
               <Gift size={14} className="text-white" />
            </div>
            <span className="text-gray-300 text-sm font-medium">About Nubien</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Elevate Brands with <br />
            <span className="text-gray-400">Innovation Tech!</span>
          </h2>

          {/* Feature 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Smart Digital Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              We combine technology and creativity to build future-ready solutions 
              that help businesses thrive in a competitive landscape.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Elevating Brands with Strategy</h3>
            <p className="text-gray-400 leading-relaxed">
              Our expertise in branding, marketing, and design ensures your business 
              stands out, leaving a lasting impact on your audience.
            </p>
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
            <button className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-lg shadow-purple-500/25">
              Book an Appointment
            </button>
            
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 text-white">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" className="text-white" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">900+ People Rated</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[1rem] overflow-hidden aspect-square lg:aspect-[3/3] group bg-black p-2">
            <img 
              src="https://i.ibb.co.com/hRxNb4xf/image.png" 
              alt="Team Working" 
              className="w-full h-full rounded-[1rem] object-cover "
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ElevateBrands;
