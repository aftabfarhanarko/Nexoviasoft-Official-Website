"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const PricingCard = ({ items, delay = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    badge,
    description,
    features,
    iconUrl,
    price,
    projectLimit,
    revisionLimit,
    title,
    id: pricePackageId,
    type: serviceType,
  } = items;

  return (
    <motion.div
      className="relative p-6 md:p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden group hover:border-[#EFFC76]/50 transition-colors duration-500 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFFC76]/5 to-[#EFFC76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex justify-between items-start mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#EFFC76]/20 flex items-center justify-center border border-[#EFFC76]/30">
          {iconUrl ? (
            <img
              src={iconUrl}
              className="w-5 h-5 md:w-6 md:h-6 text-[#EFFC76]"
            />
          ) : (
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#EFFC76]" />
          )}
        </div>
        {badge && (
          <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-white/5 border border-white/10 text-white">
            {badge}
          </span>
        )}
      </div>

      <div className="relative z-10 mb-6 md:mb-8">
        <h3 className="text-base md:text-lg font-medium text-white mb-2">
          {title}
        </h3>
        <div className="flex items-baseline gap-1 mb-3 md:mb-4">
          <span className="text-3xl md:text-5xl font-bold text-white">
            {price}
          </span>
          <span className="text-gray-400 text-xs md:text-sm">/ Month</span>
        </div>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex gap-2 md:gap-3 mb-6 md:mb-8">
        <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 border border-white/5">
          <span className="text-white font-semibold text-xs md:text-sm block">
            {projectLimit}+
          </span>
          <span className="text-gray-500 text-[10px] md:text-xs">Projects</span>
        </div>
        <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 border border-white/5">
          <span className="text-white font-semibold text-xs md:text-sm block">
            {revisionLimit}+
          </span>
          <span className="text-gray-500 text-[10px] md:text-xs">
            Revisions
          </span>
        </div>
      </div>

      <div className="relative z-10 space-y-3 md:space-y-4 mb-6 md:mb-8 flex-grow">
        {Array.isArray(features) &&
          features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3">
              <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#EFFC76]/20 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#EFFC76]" />
              </div>
              <span className="text-gray-400 text-xs md:text-sm">
                {feature}
              </span>
            </div>
          ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className="relative z-70 w-full py-3 md:py-4 rounded-xl font-medium text-sm md:text-base text-black bg-gradient-to-r from-[#EFFC76] to-[#EFFC76] hover:from-[#EFFC76] hover:to-[#EFFC76] transition-all duration-300 shadow-lg shadow-[#EFFC76]/20"
      >
        Book an Appointment
      </motion.button>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pricePackageId={pricePackageId}
        serviceType={serviceType || "Web Development"}
      />
    </motion.div>
  );
};

export default PricingCard;
j