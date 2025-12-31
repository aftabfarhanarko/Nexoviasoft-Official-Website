"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NewButton from "@/Shaire/NewButton";
import SmoothButton from "@/Shaire/SmoothButton";

const Packed = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation for text opacity
  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.5], [0.6, 0.8, 1]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  // Images data
  const images = [
    { id: 1, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 2, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 3, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 4, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 5, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 6, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 7, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 8, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 9, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 10, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 11, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
    { id: 12, src: "https://i.ibb.co.com/FkZsgLqk/download.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black/80 backdrop-blur-sm bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Us Button */}
        <motion.div className="flex justify-center mb-8">
          <NewButton>About Us</NewButton>
        </motion.div>

        {/* Main Text with Scroll Effect */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl font-light leading-tight"
            style={{ opacity: textOpacity }}
          >
            Built on creativity, collaboration, and top excellence, SYNC is a
            dynamic team of industry experts committed to achieving exceptional
            great results...
          </motion.h1>
        </motion.div>

        {/* Book Appointment Button */}
        <motion.div className="flex justify-center mb-60">
          <SmoothButton>Book an Appointment</SmoothButton>
        </motion.div>

        {/* Circular Spinning Images Container */}
        <div className="relative w-full h-[800px] flex items-center justify-center my-32">
          {/* Center Content  bg-black/80 backdrop-blur-sm */}
          <motion.div
            className="absolute z-30 text-center items-center rounded-3xl max-w-3xl py-16 px-12 shadow-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 200,
            }}
          >
            <div className="mb-6 flex mx-auto">
              <NewButton>Features</NewButton>
            </div>
            <motion.h1
              className="text-5xl font-light leading-tight mb-6"
              style={{ opacity: textOpacity }}
            >
              Packed with Innovation.
            </motion.h1>
            <p className="text-gray-300 text-[15px] mb-8">
              Nubien is packed with cutting-edge features designed to <br />{" "}
              elevate your agency or portfolio.
            </p>
            <SmoothButton>Book an Appointment</SmoothButton>
          </motion.div>

          {/* Rotating Images Circle */}
          <motion.div
            className="absolute z-10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {images.map((img, index) => {
              const angle = (index * 360) / images.length;
              const radius = 450;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={img.id}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: x - 64,
                    y: y - 64,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-2xl"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 60,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    whileHover={{
                      scale: 1.15,
                      zIndex: 10,
                      boxShadow: "0 20px 60px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery image ${img.id}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section Heading */}
        <motion.div
          className="text-center mt-32 pb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Packed with Innovation.
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nubien is packed with cutting-edge features designed to
            <br />
            elevate your agency or portfolio.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Packed;
