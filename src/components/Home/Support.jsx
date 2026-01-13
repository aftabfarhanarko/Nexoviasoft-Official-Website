"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  Headset,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import SmoothButton from "@/Share/SmoothButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    icon: MessageCircle,
    title: "Fast Responses",
    description: "Get timely answers to your questions.",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description: "Our team understands both design and tech.",
  },
  {
    icon: Headset,
    title: "Continuous Help",
    description: "Support doesn't stop after launch.",
  },
];

const Support = () => {
  return (
    <section className=" py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#EFFC76]/20 mb-8"
          >
            <Headset size={14} className="text-[#EFFC76]" />
            <span className="text-gray-300 text-sm font-medium">
              24/7 Support
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans text-white mb-6 leading-tight font-medium"
          >
            Here When You
            <br />
            <span className="text-gray-400">Need Us Most.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto mb-10 text-base"
          >
            Partner with SquadLog for dedicated support that ensures your
            digital products evolve and scale seamlessly.
          </motion.p>

          <SmoothButton>View About SquadLog </SmoothButton>
        </div>

        {/* Central Visual - Moving Cards */}
        <div className="relative h-[400px] mb-24 flex items-center justify-center perspective-1000">
          <CardsDisplay />
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={0.4 + index * 0.1} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden -mt-8 max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="pb-14 [&_.swiper-pagination-bullet]:bg-gray-500 [&_.swiper-pagination-bullet-active]:bg-[#EFFC76] [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3"
            onClick={(swiper) => {
              swiper.autoplay.stop();
            }}
            onTouchMove={(swiper) => {
              // Ensure it resumes after manual move (handled by disableOnInteraction: false)
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index} className="h-auto">
                <FeatureCard {...feature} delay={0} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const CardsDisplay = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [activeIndex, setActiveIndex] = React.useState(null);

  // 7 Cards for a fuller fan effect
  const cards = [
    {
      // Card 1 (Left Outer)
      rotate: isMobile ? -15 : -25,
      x: isMobile ? -100 : -280,
      y: isMobile ? 25 : 35,
      scale: 0.85,
      z: 0,
      img: "1524504388940-b1c1722653e1", // Bag
    },
    {
      // Card 2
      rotate: isMobile ? -10 : -15,
      x: isMobile ? -65 : -190,
      y: isMobile ? 15 : 18,
      scale: 0.9,
      z: 10,
      img: "1494976388531-d377034f0d38", // Car
    },
    {
      // Card 3
      rotate: isMobile ? -5 : -7,
      x: isMobile ? -35 : -100,
      y: isMobile ? 5 : 5,
      scale: 0.95,
      z: 20,
      img: "1546069901-ba9599a7e63c", // Food
    },
    {
      // Center
      rotate: 0,
      x: 0,
      y: 0,
      scale: 1.05,
      z: 30,
      active: true,
      img: "1618005182384-a83a8bd57fbe", // Main
    },
    {
      // Card 5
      rotate: isMobile ? 5 : 7,
      x: isMobile ? 35 : 100,
      y: isMobile ? 5 : 5,
      scale: 0.95,
      z: 20,
      img: "1515886657613-9f3515b0c78f", // Fashion
    },
    {
      // Card 6
      rotate: isMobile ? 10 : 15,
      x: isMobile ? 65 : 190,
      y: isMobile ? 15 : 18,
      scale: 0.9,
      z: 10,
      img: "1534528741775-53994a69daeb", // Art/Abstract
    },
    {
      // Card 7 (Right Outer)
      rotate: isMobile ? 15 : 25,
      x: isMobile ? 100 : 280,
      y: isMobile ? 25 : 35,
      scale: 0.85,
      z: 0,
      img: "1542291026-7eec264c27ff", // Product
    },
  ];

  return (
    <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center translate-y-8">
      {/* Floating Chat Bubbles - Updated Position */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -top-12 left-[5%] md:left-[25%] z-40 bg-[#3B82F6] text-white px-5 py-2.5 rounded-2xl rounded-bl-none text-sm font-semibold shadow-xl shadow-blue-900/20"
      >
        Hey, it&apos;s me!
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -top-8 right-[5%] md:right-[25%] z-40 bg-[#8B5CF6] text-white px-5 py-2.5 rounded-2xl rounded-br-none text-sm font-semibold shadow-xl shadow-purple-900/20"
      >
        Problem Solved
      </motion.div>

      {/* Cards */}
      {cards.map((card, index) => {
        const isActive = activeIndex === index;
        return (
            <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 200, rotate: 0 }}
            animate={{
                opacity: 1,
                scale: isActive ? 1.15 : card.scale,
                y: card.y,
                rotate: isActive ? 0 : card.rotate,
                x: card.x,
                zIndex: isActive ? 100 : card.z,
            }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                // Remove delay when interactive to make it snappy
                delay: 0, 
            }}
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onMouseLeave={() => !isMobile && setActiveIndex(null)}
            onClick={() => setActiveIndex(isActive ? null : index)}
            className={`absolute w-32 h-44 sm:w-44 sm:h-64 md:w-52 md:h-72 rounded-[16px] md:rounded-[24px] bg-neutral-800 shadow-2xl overflow-hidden group origin-bottom cursor-pointer`}
            >
            {/* Card Border & Glow */}
            <div className="absolute inset-0 rounded-[16px] md:rounded-[24px] border border-white/10 z-10" />

            {/* Image */}
            <div
                className={`w-full h-full bg-neutral-900 relative`}
            >
                <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${isActive ? 'scale-110' : ''}`}
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-${card.img}?auto=format&fit=crop&w=600&q=80')`,
                }}
                />
                {/* Overlay Gradient for depth - fades out when active */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                
                {/* Active Highlight */}
                {card.active && (
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/0 via-white/5 to-white/10 opacity-50 pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-50'}`} />
                )}
            </div>
            </motion.div>
        );
      })}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-neutral-900/50 border border-white/5 hover:border-[#EFFC76]/50 transition-all duration-300 hover:bg-neutral-900/80   rounded-2xl p-6   group"
  >
    <div className="w-10 h-10 rounded-full  bg-[#EFFC76]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon size={20} className="text-[#EFFC76]" />
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

export default Support;
