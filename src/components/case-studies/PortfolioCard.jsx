"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import SmoothButton from "@/Share/SmoothButton";

const PortfolioCard = () => {
  const ref = useRef(null);

  const projects = [
    {
      year: "2024",
      client: "Lemonide Tech",
      features: [
        "AI Integration",
        "Responsive Design",
        "Custom Layouts",
        "Fast Loading",
      ],
      tags: ["E-Commerce", "Portfolio"],
      gradient: "from-[#EFFC76]/40 to-[#EFFC76]/40",
      images: ["/portfolio/watch.png", "/portfolio/phone.png"],
    },
    {
      year: "2025",
      client: "Viper Studio",
      features: [
        "Modern Typography",
        "User Friendly",
        "Flexible CMS",
        "SEO Optimized",
      ],
      tags: ["Business", "Agency"],
      gradient: "from-[#EFFC76]/40 to-[#EFFC76]/40",
      images: ["/portfolio/cap.png", "/portfolio/woman.png"],
    },
    {
      year: "2025",
      client: "Million One",
      features: [
        "Easy Customization",
        "Interactive Elements",
        "Retina Ready",
        "High Performance",
      ],
      tags: ["Case Studies", "Agency"],
      gradient: "from-[#EFFC76]/40 to-[#EFFC76]/40",
      images: ["/portfolio/car.png", "/portfolio/bottle.png"],
    },
  ];

  return (
    <div
      className="bg-transparent text-white py-24  relative overflow-hidden"
      id="portfolio-section"
    >
      <div className="max-w-[1400px] mx-auto  mt-5 px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex justify-center items-center  mb-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#EFFC76] text-black text-xs font-bold px-3 py-1 rounded-full">
              2026
            </span>
            <span className="text-gray-300 text-sm font-medium">
              Case Studio
            </span>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Info Card - Spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`lg:col-span-4 rounded-3xl p-8 bg-gradient-to-br ${project.gradient} border border-white/10 relative group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />

                <div className="flex items-center gap-4 mb-8">
                  <span className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-semibold text-gray-400">
                    {project.year}
                  </span>
                  <h3 className="text-2xl font-bold">{project.client}</h3>
                </div>

                <div className="space-y-4 mb-12">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-[#EFFC76] rounded-full p-0.5">
                        <Check size={12} className="text-black" />
                      </div>
                      <span className="text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Image Card 1 - Spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="lg:col-span-4 h-[300px] lg:h-auto rounded-3xl overflow-hidden relative border border-white/10 group"
              >
                <div className="absolute inset-0 bg-gray-900/50 -z-10" />
                <img
                  src={project.images[0]}
                  alt={`${project.client} Work 1`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Image Card 2 - Spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="lg:col-span-4 h-[300px] lg:h-auto rounded-3xl overflow-hidden relative border border-white/10 group"
              >
                <div className="absolute inset-0 bg-gray-900/50 -z-10" />
                <img
                  src={project.images[1]}
                  alt={`${project.client} Work 2`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
