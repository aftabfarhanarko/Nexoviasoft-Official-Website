"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";
import SmoothButton from "@/Share/SmoothButton";

const LaunchYourSite = () => {
  return (
    <section className="relative py-24 -mt-27 md:-mt-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative md:block hidden h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          <img
            src="https://i.ibb.co.com/j9mhfwk5/image.png"
            alt="Launch Your Site"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <div className="p-1 bg-[#d946ef] rounded-full">
              <Rocket className="w-3 h-3 text-black" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Launch Your Site
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Launch Your Project with NexoviaSoft <br />
            <span className="text-gray-500">
              Efficient, Scalable, and Premium.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg mb-10 max-w-lg"
          >
            Transform your vision into reality effortlessly. Ready to stand out?
            Partner with us today!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <SmoothButton> Book an Appointment</SmoothButton>

            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#d946ef] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                Trusted by 50+ Clients
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaunchYourSite;
