"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  ShoppingCart, 
  BarChart2, 
  Layers,
  Zap
} from "lucide-react";
import Link from "next/link";
import SmoothButton from "@/Share/SmoothButton";

const ProductList = () => {
  const products = [
    {
      title: "SquadCart",
      description: "A comprehensive e-commerce solution designed to streamline your online business operations with powerful analytics and seamless integrations.",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-400",
      accent: "#06B6D4",
      link: "/products/squadcart",
      features: ["Advanced Analytics", "Inventory Management", "Multi-channel Sales"]
    },
    {
      title: "CleverERP",
      description: "An all-in-one ERP platform to manage operations, finance, inventory, and workflows with clarity and control.",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      accent: "#E0234E",
      link: "/products",
      features: ["Finance Automation", "Workflow Optimization", "Real-time Reporting"]
    },
  ];

  return (
    <section className="bg-transparent py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#EFFC76]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#EFFC76]" />
            <span className="text-gray-300 text-sm font-medium tracking-wide">Explore Our Suite</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Scale</span> & <span className="text-[#EFFC76]">Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed md:mx-0 mx-auto"
          >
            Discover our range of SaaS products designed to help your business grow and succeed in the digital age.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {products.map((product, index) => (
            <Link href={product.link} key={index} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-full"
              >
                  {/* Glass Card */}
                  <div className="relative h-full bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden transition-all duration-500 group-hover:border-[#EFFC76]/50 group-hover:shadow-[0_0_50px_-15px_rgba(239,252,118,0.2)]">
                      
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} p-0.5 mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <div className="w-full h-full bg-[#111] rounded-[14px] flex items-center justify-center">
                              <product.icon className="w-8 h-8 text-white" />
                          </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#EFFC76] transition-colors duration-300">
                              {product.title}
                          </h3>
                          <p className="text-gray-400 text-lg leading-relaxed mb-8">
                              {product.description}
                          </p>

                          {/* Features List */}
                          <div className="flex flex-wrap gap-3 mb-10">
                              {product.features.map((feature, i) => (
                                  <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 flex items-center gap-1.5">
                                      <Zap size={12} className="text-[#EFFC76]" />
                                      {feature}
                                  </span>
                              ))}
                          </div>

                          {/* CTA */}
                          <div className="flex items-center text-[#EFFC76] font-semibold tracking-wide group/btn">
                              <span className="mr-2">Learn more</span>
                              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                          </div>
                      </div>
                      
                      {/* Decorative Shapes */}
                      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl group-hover:bg-[#EFFC76]/10 transition-colors duration-500" />
                  </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
