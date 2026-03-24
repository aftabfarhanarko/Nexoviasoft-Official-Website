"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Percent } from "lucide-react";
import Image from "next/image";
import SmoothButton from "@/Share/SmoothButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const teamMembers = [
  {
    name: "Alexander West",
    role: "Founder & CEO",
    image: "/about/member-1.jpg",
  },
  {
    name: "Sophia Chen",
    role: "CTO & Lead Architect",
    image: "/about/member-2.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "Senior Full-Stack Developer",
    image: "/about/member-3.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product Design",
    image: "/about/member-4.jpg",
  },
  {
    name: "David Kim",
    role: "Cloud Infrastructure Lead",
    image: "/about/member-5.jpg",
  },
  {
    name: "Olivia Martinez",
    role: "Digital Marketing Strategist",
    image: "/about/member-6.jpg",
  },
];

const TeamCard = ({ member }) => {
  return (
    <div className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-3 flex items-center gap-4 hover:border-[#d946ef]/50 transition-colors duration-300 h-full">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-800 shrink-0">
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-grow">
        <h3 className="text-white font-medium text-lg leading-tight mb-1 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors">
          {member.name}
        </h3>
        <p className="text-gray-400 text-sm">{member.role}</p>
      </div>

      {/* Button */}
      <div className="rounded-xl bg-[#d946ef] p-2.5 flex items-center justify-center shrink-0 group-hover:bg-[#d946ef] transition-colors cursor-pointer">
        <Percent className="w-5 h-5 text-black" />
      </div>
    </div>
  );
};

const OurTeam = () => {

  return (
    <section className="py-24 -mt-30 md:-mt-22 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Search className="w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
            <span className="text-gray-300 text-sm">Our Team</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight max-w-4xl"
          >
            Meet the Minds Behind <br />
            <span className="text-gray-400">Your Success</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mb-8"
          >
            Expert developers, designers, and strategists dedicated to
            delivering excellence.
          </motion.p>

          {/* Button */}
          <SmoothButton> View About NexoviaSoft</SmoothButton>
        </div>

        {/* Desktop Team Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Styles for Swiper Pagination */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.2) !important;
              opacity: 1 !important;
              width: 10px !important;
              height: 10px !important;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              background: #d946ef !important;
              width: 24px !important;
              border-radius: 5px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
