"use client";
import React from "react";
import CosmicBackground from "@/components/Home/CosmicBackground";
import JobCard from "@/components/Career/JobCard";
import { useQuery } from "@/hooks/useApi";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const CareerPage = () => {
  const { data, isLoading, isError } = useQuery("/recruitment/job-postings");

  const jobs = data?.data || [];
  const activeJobs = jobs.filter((job) => job.status === "Active");

  return (
    <div className="min-h-screen mt-20 relative overflow-x-hidden pb-30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      
      <div className="relative mt-20 max-w-7xl mx-auto space-y-10 px-4 md:px-8">
        <div className="flex justify-center items-center">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#d946ef] text-white text-xs font-bold px-3 py-1 rounded-full">
              Hiring
            </span>
            <span className="text-gray-300 text-sm font-medium">
              Join NexoviaSoft
            </span>
          </motion.div>
        </div>

        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Shape the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]">
              Software Development
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            We are always looking for talented individuals to join our team. Explore our open positions and find the perfect role for you.
          </p>
        </motion.div>

        <div className="mt-16">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 size={40} className="text-[#d946ef] animate-spin mb-4" />
              <p className="text-gray-400">Loading open positions...</p>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white/5 border border-white/10 rounded-3xl">
              <p className="text-red-400">Failed to load job postings. Please try again later.</p>
            </div>
          ) : activeJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-white/5 border border-white/10 rounded-3xl">
              <p className="text-white text-xl font-semibold mb-2">No Open Positions</p>
              <p className="text-gray-400">Check back later for new opportunities!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
