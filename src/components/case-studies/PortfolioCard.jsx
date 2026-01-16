"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Check, ExternalLink } from "lucide-react";
import SmoothButton from "@/Share/SmoothButton";
import { caseStudiesData } from "@/constants/caseStudies";
import Link from "next/link";
import { useQuery } from "@/hooks/useApi";

const PortfolioCard = () => {

  // const projects = caseStudiesData;

  const { data, isLoading, isError } = useQuery("/case-studies");
  console.log("case-studies", data);

  return (
    <div
      className=" text-white   relative overflow-hidden"
      id="portfolio-section"
    >
      <div className="max-w-[1400px] mx-auto  mt-18 px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex justify-center items-center  mb-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#EFFC76] text-black text-xs font-bold px-3 py-1 rounded-full">
              2025
            </span>
            <span className="text-gray-300 text-sm font-medium">
              Featured Case Studies
            </span>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-8">
          {data?.data?.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-2 lg:grid-cols-12  md:gap-6"
            >
              {/* Info Card - Spans 4 cols */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className=" lg:col-span-4 rounded-l-xl md:rounded-3xl p-5 md:p-8  border-white/10 relative group overflow-hidden hover:border-[#EFFC76]/50 transition-colors duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EFFC76]/5 to-[#EFFC76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />

                <div className="flex  items-center gap-3 md:gap-4 mb-4 md:mb-8">
                  <span className="px-2 md:block hidden py-0.5 md:px-3 md:py-1 rounded-lg bg-black/40 border border-white/10 text-[10px] md:text-xs font-semibold text-gray-400">
                    2025
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-2 md:block hidden  md:space-y-4 mb-6 md:mb-12">
                  {project.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3">
                      <div className="bg-[#EFFC76] rounded-full md:block hidden p-[3px] md:p-1 shrink-0">
                        <Check
                          className="text-black w-2.5 h-2.5 md:w-3 md:h-3"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="md:block hidden grid grid-cols-2 gap-4 mt-auto">
                  {project.categories?.map((cat, i) => (
                    <span
                      key={i}
                      className="px-5 ml-2 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex   flex-wrap gap-2 md:gap-4 md:mt-8 pt-4 md:pt-6 md:border-t md:border-white/10">
                  <Link
                    className="z-20"
                    href={`/main/case-studies/${project.id}`}
                  >
                    <SmoothButton className=" text-[13px]  md:text-md ">
                      View Details
                    </SmoothButton>
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-[13px] z-20  md:text-md px-4 py-2 md:px-6 md:py-2.5 rounded-lg border border-white/20 hover:bg-white/10 hover:border-[#EFFC76]/50 transition-all flex items-center gap-2 text-sm md:text-md font-semibold text-gray-300 hover:text-white shadow-2xl"
                    >
                      Live Version{" "}
                      <ExternalLink size={14} className="md:w-4 md:h-4" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Image Card - Spans 8 cols (remaining space) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="lg:col-span-8 w-full h-[200px] md:h-[450px] rounded-r-xl md:rounded-3xl overflow-hidden relative border border-white/10 group"
              >
                <div className="absolute inset-0 bg-gray-900/50 -z-10" />
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Work`}
                  className="w-full h-full object-cover transition-transform duration-700 "
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
