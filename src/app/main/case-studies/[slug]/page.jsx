"use client";
import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import CosmicBackground from "@/components/Home/CosmicBackground";
import { motion } from "framer-motion";
import Link from "next/link";
import SmoothButton from "@/Share/SmoothButton";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  Trophy,
  Globe,
  Calendar,
  Tag,
  Flag,
} from "lucide-react";
import Image from "next/image";
import { useQuery } from "@/hooks/useApi";

const CaseStudyDetail = () => {
  const params = useParams();
  const slug = params.slug;

  const [activeImage, setActiveImage] = useState(0);

  const {
    data: detailData,
    isLoading: isDetailLoading,
    isError: isDetailError,
  } = useQuery(`/case-studies/${slug}`);

  const {
    data: listData,
  } = useQuery("/case-studies");

  const project = detailData?.data || detailData || null;

  const projects = Array.isArray(listData?.data)
    ? listData.data
    : Array.isArray(listData)
    ? listData
    : [];

  const currentIndex = projects.findIndex(
    (p) => String(p.id) === String(slug)
  );

  const nextProject =
    currentIndex !== -1 && projects.length > 1
      ? projects[(currentIndex + 1) % projects.length]
      : null;

  if (!project && !isDetailLoading && !isDetailError) {
    return notFound();
  }

  if (!project) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const images = [
    project.imageUrl,
    ...(Array.isArray(project.projectimage) ? project.projectimage : []),
  ].filter(Boolean);

  const results = Array.isArray(project.results)
    ? project.results
    : project.results
    ? [project.results]
    : [];

  return (
    <div className="min-h-screen  text-white relative overflow-x-hidden selection:bg-[#EFFC76] selection:text-black">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none ">
        <CosmicBackground />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Navigation */}
        <Link
          href="/main/case-studies"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#EFFC76]/50 group-hover:bg-[#EFFC76]/10 transition-all">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
          </div>
          <span className="font-medium">Back to Works</span>
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
              {project.badge && (
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#EFFC76]">
                  Featured
                </span>
              )}
              {project.industry && (
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#EFFC76]">
                  {project.industry}
                </span>
              )}
              {project.categories?.map((cat, i) => (
                <span
                  key={cat.id || i}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#EFFC76]"
                >
                  {cat.name}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SmoothButton>
                    <span className="flex items-center gap-2">
                      Visit Live Site <ExternalLink size={18} />
                    </span>
                  </SmoothButton>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Project Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Globe size={16} />
              <span className="text-sm uppercase tracking-wider">Client</span>
            </div>
            <p className="text-lg font-semibold">
              {project.client?.name || project.clientName}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Calendar size={16} />
              <span className="text-sm uppercase tracking-wider">Duration</span>
            </div>
            <p className="text-lg font-semibold">{project.duration}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Layers size={16} />
              <span className="text-sm uppercase tracking-wider">Services</span>
            </div>
            <p className="text-lg font-semibold">
              {project.categories?.[0]?.name || project.industry}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Tag size={16} />
              <span className="text-sm uppercase tracking-wider">Focus</span>
            </div>
            <p className="text-lg font-semibold">
              {project.industry || "Development"}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Flag size={16} />
              <span className="text-sm uppercase tracking-wider">Country</span>
            </div>
            <p className="text-lg font-semibold">Bangladesh</p>
          </div>
        </motion.div>

        {/* Main Image */}
        <div className="mb-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#EFFC76]/5 group"
          >
            <Image
              src={images[activeImage]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Image Navigation Buttons */}
          <div className="flex justify-center gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === index
                    ? "border-[#EFFC76] scale-110 shadow-lg shadow-[#EFFC76]/20"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>


        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* Sidebar / Sticky */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-[#EFFC76] rounded-full" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EFFC76] mt-2.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EFFC76]/10 flex items-center justify-center mb-6 text-[#EFFC76]">
                <Layers size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Challenge
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.problem_statement}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EFFC76]/10 flex items-center justify-center mb-6 text-[#EFFC76]">
                <Cpu size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Solution
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {project.solution_overview}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Impact & Results
            </h2>
            <p className="text-gray-300">
              The measurable impact we delivered through our solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#EFFC76]/30 transition-colors group"
              >
                <Trophy
                  className="text-[#EFFC76] mb-6 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#EFFC76] transition-colors">
                  Result {index + 1}
                </h3>
                <p className="text-gray-300 leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Project CTA */}
        {nextProject && (
          <div className="border-t border-white/10 pt-20">
            <Link
              href={`/main/case-studies/${nextProject.id}`}
              className="group block"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#EFFC76] text-sm font-medium tracking-wider uppercase mb-2 block">
                    Next Case Study
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold group-hover:text-gray-300 transition-colors">
                    {nextProject.title}
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#EFFC76] group-hover:border-[#EFFC76] group-hover:text-black transition-all">
                  <ArrowRight
                    size={22}
                    className="group-hover:-rotate-45 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyDetail;
