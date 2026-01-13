"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { servicesData } from "@/constants/services";
import CosmicBackground from "@/components/Home/CosmicBackground";
import { motion } from "framer-motion";
import Link from "next/link";
import SmoothButton from "@/Share/SmoothButton";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Zap,
  MessageSquare,
  Check,
} from "lucide-react";
import DevOpsWorkflow from "@/components/Home/DevOpsWorkflow";
import WebDevelopmentWorkflow from "@/components/Home/WebDevelopmentWorkflow";
import CloudComputingWorkflow from "@/components/Home/CloudComputingWorkflow";
import MobileAppWorkflow from "@/components/Home/MobileAppWorkflow";

const ServiceDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const service = servicesData[currentIndex];
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  if (!service) {
    return notFound();
  }

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden selection:bg-[#EFFC76] selection:text-black">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <CosmicBackground />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Navigation */}
        <Link
          href="/main/services"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#EFFC76]/50 group-hover:bg-[#EFFC76]/10 transition-all">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
          </div>
          <span className="font-medium">Back to Services</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#EFFC76]">
                Service
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                {service.subtitle}
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-10">
              {service.longDescription}
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/main/contact">
                <SmoothButton>
                  <span className="flex items-center gap-2">
                    Get Started <ArrowRight size={18} />
                  </span>
                </SmoothButton>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            {/* Features Section */}
            <div className="lg:col-span-2">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                 >
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Zap className="text-[#EFFC76]" /> Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features && service.features.map((feature, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="font-semibold text-lg">{feature}</h3>
                            </div>
                        ))}
                    </div>
                 </motion.div>

                 {/* Benefits Section */}
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                 >
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <CheckCircle className="text-[#EFFC76]" /> Benefits
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.benefits && service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#EFFC76]/20 flex items-center justify-center text-[#EFFC76]">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-gray-300">{benefit}</span>
                            </div>
                        ))}
                    </div>
                 </motion.div>
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                    <p className="text-gray-400 mb-8">
                        Let's discuss how our {service.title} services can help you achieve your goals.
                    </p>
                    <Link href="/main/contact" className="block w-full">
                        <div className="w-full py-4 rounded-xl bg-[#EFFC76] text-black font-bold text-center hover:scale-105 transition-transform">
                            Book a Consultation
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        {/* Workflow Section for All Services */}
        <div className="mb-24 -mx-4 md:-mx-8">
             {slug === 'web-development' ? (
                <WebDevelopmentWorkflow />
             ) : slug === 'cloud-computing' ? (
                <CloudComputingWorkflow />
             ) : slug === 'mobile-app-development' ? (
                <MobileAppWorkflow />
             ) : (
                <DevOpsWorkflow />
             )}
        </div>

        {/* Next Service Navigation */}
        <div className="border-t border-white/10 pt-20">
            <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 uppercase tracking-wider text-sm">Next Service</span>
            </div>
            <Link href={`/main/services/${nextService.slug}`} className="group block">
                <h2 className="text-4xl md:text-6xl font-bold group-hover:text-[#EFFC76] transition-colors mb-4">
                    {nextService.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-400 group-hover:translate-x-4 transition-transform">
                    <span>View Service</span>
                    <ArrowRight size={24} />
                </div>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
