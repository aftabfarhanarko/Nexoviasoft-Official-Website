"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SectionsView = () => {
  const features = [
    {
      title: "Unified Metrics",
      description:
        "See your MRR and active users in one clean, unified view — no more switching tabs.",
      image: "/cover1.jpg",
      alt: "Unified Metrics Dashboard",
    },
    {
      title: "AI Growth Insights",
      description:
        "Actionable suggestions from your data, without digging into spreadsheets or dashboards.",
      image: "/cover2.jpg",
      alt: "AI Insights",
    },
    {
      title: "Product Usage Tracking",
      description:
        "Track how users engage with your app live to uncover patterns and optimize features.",
      image: "/cover3.jpg",
      alt: "Integration List",
    },
    {
      title: "Feature Impact Analysis",
      description:
        "Know exactly which features drive long-term retention—and which ones don't contribute.",
      image: "/bigbanner.jpg",
      alt: "Feature Impact Graph",
    },
    {
      title: "Feature Impact Analysis",
      description:
        "Know exactly which features drive long-term retention—and which ones don't contribute.",
      image: "/bigbanner.jpg",
      alt: "Feature Impact Graph",
    },
    {
      title: "Feature Impact Analysis",
      description:
        "Know exactly which features drive long-term retention—and which ones don't contribute.",
      image: "/bigbanner.jpg",
      alt: "Feature Impact Graph",
    },
  ];

  return (
    <section className="py-24 -mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#EFFC76] text-black text-xs font-bold px-3 py-1 rounded-full">
              <MessageCircle size={15} className="text-black" />
            </span>
            <span className="text-gray-300 text-sm font-medium">
              Unique Features
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Make Your Platform <br /> Work Harder For You
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Streamline your business with unified metrics and AI-powered
            analytics—all in one place.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-[1px] rounded-[30px] bg-gradient-to-br from-white/10 via-[#EFFC76]/40 to-transparent overflow-hidden cursor-pointer"
            >
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(239,252,118,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(148,163,184,0.18),_transparent_55%)] opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 rounded-[28px] bg-gradient-to-b from-black/80 via-neutral-900/95 to-black/95 border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.9)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,1)] backdrop-blur-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative mb-6 h-[260px] md:h-[320px] rounded-2xl overflow-hidden bg-neutral-900/80 ring-1 ring-white/10 group-hover:ring-[#EFFC76]/50 transition-all duration-500">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 top-0 h-9 flex items-center justify-between px-4 bg-gradient-to-r from-white/10 via-black/40 to-white/5 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-300/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide text-gray-300/90">
                      Live application view
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                {/* Content */}
                <div className="px-4 pb-5 pt-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-200/90">
                      Application insight
                    </span>
                    <span className="text-[11px] font-medium text-gray-400">
                      App 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-[22px] md:text-2xl font-semibold text-white mb-2 group-hover:text-[#EFFC76] tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300/95 leading-relaxed text-[15px] md:text-base">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#EFFC76]" />
                      Ready for live applications
                    </span>
                    <span className="uppercase tracking-[0.18em] text-gray-500">
                      Premium UI
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.05}
            centeredSlides
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-16"
            style={{
              "--swiper-pagination-color": "#EFFC76",
              "--swiper-pagination-bullet-inactive-color": "#4B5563",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative mb-7 p-[1px] rounded-[30px] bg-gradient-to-br from-white/10 via-[#EFFC76]/40 to-transparent overflow-hidden cursor-pointer"
                >
                  <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(239,252,118,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(148,163,184,0.18),_transparent_55%)] opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 rounded-[28px] bg-gradient-to-b from-black/80 via-neutral-900/95 to-black/95 border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.9)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,1)] backdrop-blur-2xl transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative mb-6 h-[260px] rounded-2xl overflow-hidden bg-neutral-900/80 ring-1 ring-white/10 group-hover:ring-[#EFFC76]/50 transition-all duration-500">
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 top-0 h-9 flex items-center justify-between px-4 bg-gradient-to-r from-white/10 via-black/40 to-white/5 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400/80" />
                          <span className="w-2 h-2 rounded-full bg-amber-300/80" />
                          <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                        </div>
                        <span className="text-[11px] font-medium tracking-wide text-gray-300/90">
                          Live application view
                        </span>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="px-4 pb-5 pt-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-200/90">
                          Application insight
                        </span>
                        <span className="text-[11px] font-medium text-gray-400">
                          App 0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-[20px] font-semibold text-white mb-2 group-hover:text-[#EFFC76] tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300/95 leading-relaxed text-[15px]">
                        {feature.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#EFFC76]" />
                          Ready for live applications
                        </span>
                        <span className="uppercase tracking-[0.18em] text-gray-500">
                          Premium UI
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SectionsView;
