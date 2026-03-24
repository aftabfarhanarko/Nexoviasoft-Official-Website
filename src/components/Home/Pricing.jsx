"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PricingCard from "./PricingCard";
import { Rocket, Bell, Layout } from "lucide-react";
import { useQuery } from "@/hooks/useApi";

const pricingPlans = [
  {
    plan: "Starter",
    price: "1,499",
    description: "Perfect for small businesses establishing a web presence.",
    tag: "Most Pick",
    icon: Rocket,
    stats: {
      projects: "2-3",
      revisions: "Weeks",
    },
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "SEO Optimization",
      "1 Month Support",
      "CMS Integration",
    ],
  },
  {
    plan: "Professional",
    price: "3,999",
    description: "Ideal for growing startups needing robust applications.",
    tag: "Advanced",
    icon: Bell,
    stats: {
      projects: "1-2",
      revisions: "Months",
    },
    features: [
      "Advanced Web Application",
      "Database Integration",
      "Performance Optimization",
      "3 Months Support",
      "Analytics Dashboard",
    ],
  },
  {
    plan: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for large organizations.",
    tag: "Recommended",
    icon: Layout,
    stats: {
      projects: "3-6+",
      revisions: "Months",
    },
    features: [
      "Full-Stack Solution",
      "Cloud Infrastructure",
      "Security Audits",
      "Dedicated Team",
      "Priority Support",
    ],
  },
];

const Pricing = () => {
  const { data, isLoading, isError } = useQuery("/price-package");
  const apiPlans = data?.data ?? [];

  const fallbackPlans = pricingPlans.map((plan, index) => ({
    badge: plan.tag,
    description: plan.description,
    features: plan.features,
    iconUrl: null,
    id: index,
    price: plan.price,
    projectLimit: plan.stats?.projects,
    revisionLimit: plan.stats?.revisions,
    status: null,
    title: plan.plan,
    type: null,
  }));

  const cardsData = apiPlans.length ? apiPlans : fallbackPlans;

  return (
    <section id="pricing" className="py-24 -mt-26 md:-mt-18 relative overflow-hidden">
      {/* Background Gradients - Removed for global theme */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-r from-[#d946ef] to-[#f97316] blur-[100px] rounded-full pointer-events-none" /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-[#d946ef]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] font-medium tracking-wide uppercase text-sm">
              Engagement Models
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Flexible Plans for Every Need— <br />
            <span className="text-gray-400">
              Perfect for Startups and Enterprises.
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our pricing plans are designed to make getting started as effortless
            as possible. With flexible options tailored to suit a variety of
            needs and budgets.
          </motion.p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cardsData.map((items, index) => (
            <PricingCard
              key={items.id ?? index}
              items={items}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>

        {/* Pricing Cards Slider (Mobile) */}
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
            className="pb-12"
            style={{
              "--swiper-pagination-color": "#d946ef",
              "--swiper-pagination-bullet-inactive-color": "#666",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {cardsData.map((items, index) => (
              <SwiperSlide key={items.id ?? index} className="h-auto">
                <div className="h-full px-1 mb-7">
                  <PricingCard items={items} delay={0} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
