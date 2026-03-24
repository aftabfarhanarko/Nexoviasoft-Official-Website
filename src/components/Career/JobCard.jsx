import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const JobCard = ({ job, onApply }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#d946ef]/50 rounded-3xl p-6 transition-colors shadow-lg group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/5 to-[#f97316]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="flex items-center text-[#d946ef] bg-[#d946ef]/10 px-3 py-1 rounded-full font-medium">
                {job.department}
              </span>
              {job.type && (
                <span className="flex items-center text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full font-medium">
                  {job.type}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-base mb-6 line-clamp-3 leading-relaxed flex-grow">
          {job.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-300 text-sm">
            <MapPin size={16} className="text-[#d946ef] mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Clock size={16} className="text-[#d946ef] mr-2" />
            {new Date(job.postedDate).toLocaleDateString()}
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Briefcase size={16} className="text-[#d946ef] mr-2" />
            Exp Required
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Users size={16} className="text-[#d946ef] mr-2" />
            {job.applicants} Applied
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <Link
            href={`/career/${job.id}`}
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#d946ef] hover:to-[#f97316] hover:border-transparent transition-all group-hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]"
          >
            <span className="font-semibold text-sm">Apply Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
