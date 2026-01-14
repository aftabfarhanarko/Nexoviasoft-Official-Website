"use client";
import React from "react";
import { motion } from "framer-motion";

const ComparisonItem = ({
  icon: Icon,
  color,
  bg,
  text,
  iconColor,
  isPremium = false,
}) => {
  const variants = {
    hidden: { opacity: 0, x: isPremium ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={variants}
      className="flex items-center gap-2.5 md:gap-4 group/item"
    >
      <div className="">
        <div
          className={` w-3 md:w-6 h-3 md:h-6  rounded-full flex items-center justify-center shrink-0 ${bg} transition-transform duration-300 group-hover/item:scale-110`}
        >
          <Icon
            className={`w-3.5 h-3.5 ${iconColor || color}`}
            strokeWidth={3}
          />
        </div>
      </div>
      <span
        className={`font-medium text-sm  md:text-lg tracking-tight ${
          isPremium ? "text-white" : "text-gray-400"
        }`}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default ComparisonItem;
