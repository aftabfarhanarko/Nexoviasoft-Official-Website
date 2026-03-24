"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AppointmentModal from "./AppointmentModal";

const AboutNexoviaSoftCard = ({
  delay,
  icon: Icon,
  title,
  description,
  tags,
  hasButton,
  imageUrl,
  isMobile = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mobile version with image
  // Mobile version with image (Image top, Text split left & right)
  if (isMobile && imageUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-zinc-900/40 border border-white/5 hover:border-[#d946ef]/30 transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden"
      >
        {/* Image Section */}
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-2 gap-3 p-4">
          {/* Left Side */}
          <h3 className="text-white font-semibold text-sm leading-tight">
            {title}
          </h3>

          {/* Right Side */}
          <div>
            <p className="text-gray-400 text-xs leading-relaxed mb-2">
              {description}
            </p>

            {tags && (
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gradient-to-r from-[#d946ef] to-[#f97316] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] border border-[#d946ef]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Mobile version without image (for button card)
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#d946ef]/30 transition-all duration-300 group hover:bg-zinc-900/60 p-4"
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-white/5 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] group-hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors shrink-0">
            <Icon size={18} />
          </div>
          <h3 className="text-white font-semibold text-base leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-3">
          {description}
        </p>

        {hasButton && (
          <>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#d946ef] hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] text-white px-4 py-2 rounded-full text-xs font-medium transition-all shadow-lg shadow-[#d946ef]/20 w-full"
            >
              Book an Appointment
            </button>
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </>
        )}
      </motion.div>
    );
  }

  // Desktop version (original)
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#d946ef]/30 transition-all duration-300 group hover:bg-zinc-900/60"
    >
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-white/5 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] group-hover:bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors">
          <Icon size={20} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            {hasButton && (
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10">
                Resolve
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#d946ef] to-[#f97316] text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] border border-[#d946ef]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {hasButton && (
            <>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#d946ef] hover:bg-[#d946ef] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#d946ef]/20 w-full sm:w-auto mt-4"
              >
                Book an Appointment
              </button>
              <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutNexoviaSoftCard;
