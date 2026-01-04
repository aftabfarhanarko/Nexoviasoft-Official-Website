"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NewButton from "@/Share/NewButton";
import SmoothButton from "@/Share/SmoothButton";
import { Atom } from "lucide-react";

const Packed = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation for text opacity only (no scaling)
  const textOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.5], [0.6, 0.8, 1]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  const images = [
    { id: 1, src: "https://i.ibb.co/sdp63YQ0/download-1.jpg" },
    { id: 2, src: "https://i.ibb.co/FkZsgLqk/download.jpg" },
    { id: 3, src: "https://i.ibb.co/QZZvhNf/image.png" },
    { id: 4, src: "https://i.ibb.co/YF9fKqvV/images-9.jpg" },
    { id: 5, src: "https://i.ibb.co/gLzqRBdv/image.png" },
    { id: 6, src: "https://i.ibb.co/FLxYhZQd/image.png" },
    { id: 7, src: "https://i.ibb.co/Mk5bvwKv/image.png" },
    { id: 8, src: "https://i.ibb.co/8Lq8r3PK/image.png" },
    { id: 9, src: "https://i.ibb.co/HfKz1QK0/image.png" },
    { id: 10, src: "https://i.ibb.co/DgbYd61T/image.png" },
    { id: 11, src: "https://i.ibb.co/R49nK4FZ/image.png" },
    { id: 12, src: "https://i.ibb.co.com/pjRGYLkQ/image.png" },
  ];

  return (
    <div ref={sectionRef} className="text-white overflow-hidden bg-black pb-20">
      <div className="bg-black/80 backdrop-blur-sm bg-gradient-to-b from-black via-gray-900 to-black max-w-[1480px] mx-auto px-4  border-white">
        {/* অন্যান্য অংশ অপরিবর্তিত */}
        <motion.div className="flex justify-center mb-8">
          <motion.div
            className="inline-flex items-center border border-white/30  space-x-3 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-2xl">
              <Atom />
            </span>
            <span className="text-gray-200 text-sm font-medium">About Us</span>
          </motion.div>
        </motion.div>

        <motion.div
          ref={sectionRef}
          className="text-center mb-7 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-4xl font-light leading-tight"
            style={{ opacity: textOpacity }}
          >
            Built on creativity, collaboration, and top excellence, SYNC is a
            dynamic team of industry experts committed to achieving exceptional
            great results...
          </motion.h1>
        </motion.div>

        <motion.div className="flex justify-center mb-80">
          <SmoothButton>Book an Appointment</SmoothButton>
        </motion.div>
        <div className="">
          {/* Main Rotating Gallery Section - Fixed */}
          <div className=" relative w-full flex items-center justify-center pt-32  pb-80 overflowvisible-">
            {/* Background container for full visibility */}
            <div className="relative w-full  flex items-center justify-center">
              {/* Rotating Images Container */}
              <motion.div
                className="absolute inset-0 z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {images.map((img, index) => {
                  const angle = (index * 360) / images.length;
                  const radius = 450; // একটু বড় radius দিলাম যাতে ভালো দেখায়
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={img.id}
                      className="absolute "
                      style={{
                        left: "50%",
                        top: "50%",
                        x: x - 64, // image width/2
                        y: y - 64, // image height/2
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <motion.div
                        className="relative bg-black/10 p-1 w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        animate={{ rotate: -360 }} // counter rotate to keep upright
                        transition={{
                          duration: 60,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                      >
                        <img
                          src={img.src}
                          alt={`Gallery image ${img.id}`}
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Center Text Card - Always on Top */}
              <motion.div
                className="relative z-30 text-center md:max-w-[800px] -mt-20 md:mt-10  md:py-16 md:px-12  "
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <div className="mb-8 ">
                  <motion.div
                    className="inline-flex items-center border border-white/30  space-x-3 bg-black/50 backdrop-blur-md px-5 py-3 rounded-full"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-2xl">
                      2026
                    </span>
                    <span className="text-gray-200 text-sm font-medium">
                      Next-Gen AI Squadlog
                    </span>
                  </motion.div>
                </div>

                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Packed with Innovation.
                </motion.h1>

                <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
                  Nubien is packed with cutting-edge features designed to <br className=" md:block hidden" />
                  elevate your agency or portfolio.
                </p>

                <SmoothButton>Book an Appointment</SmoothButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packed;
{
  /* <motion.div
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
</motion.div> */
}
