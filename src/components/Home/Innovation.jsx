"use client";
import React from "react";
import InnovationCard from "./InnovationCard";
import { Clock, Eye, Layers, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Innovation = () => {
  const cards = [
    {
      title: "Custom Software Solutions",
      description:
        "SquadLog builds robust, scalable applications tailored to your business needs.",
      type: "integrations",
      delay: 0,
    },
    {
      title: "Secure Cloud Infrastructure",
      description:
        "Reliable and secure cloud deployment for optimal performance.",
      type: "authentication",
      delay: 0.2,
    },
    {
      title: "Advanced AI Integration",
      description:
        "Leverage the power of AI to automate and enhance your business processes.",
      type: "speech",
      delay: 0.4,
    },
  ];

  return (
    <section className=" -mt-18  md:-mt-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 relative">
          {cards.map((card, index) => (
            <InnovationCard key={index} {...card} />
          ))}
        </div>

        {/* Mobile View - Swiper Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="pb-16"
            style={{
              "--swiper-pagination-color": "#EFFC76",
              "--swiper-pagination-bullet-inactive-color": "#666",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full px-1">
                  <InnovationCard {...card} delay={0} isMobile={true} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
