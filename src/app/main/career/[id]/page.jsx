"use client";
import React, { useState } from "react";
import CosmicBackground from "@/components/Home/CosmicBackground";
import { useQuery, useMutation } from "@/hooks/useApi";
import { Loader2, CheckCircle, ArrowLeft, MapPin, Briefcase, Clock, Users, UploadCloud, FileText, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const JobApplyPage = () => {
  const { id } = useParams();
  const router = useRouter();
  
  const { data, isLoading: isJobLoading, isError: isJobError } = useQuery(`/recruitment/job-postings/${id}`);
  const job = data?.data;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    cvData: null,
    cvFilename: "",
  });

  const [applyMutation, { isLoading, isError, error }] = useMutation();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!job) return;

    const payload = {
      ...formData,
      jobPostingId: job.id,
      position: job.title,
      skills: formData.skills.split(",").map((s) => s.trim()),
    };

    const result = await applyMutation("/recruitment/candidates", {
      method: "POST",
      body: payload,
    });

    if (result.data) {
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/career");
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          cvData: reader.result,
          cvFilename: file.name,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cvData: null, cvFilename: "" }));
  };

  return (
    <div className="min-h-screen mt-20 relative overflow-x-hidden pb-30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>

      <div className="relative mt-20 max-w-4xl mx-auto space-y-8 px-4 md:px-8">
        <Link 
          href="/career" 
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Careers
        </Link>

        {isJobLoading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-3xl z-10 relative">
            <Loader2 size={40} className="text-[#d946ef] animate-spin mb-4" />
            <p className="text-gray-400">Loading job details...</p>
          </div>
        ) : isJobError || !job ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-3xl z-10 relative">
            <p className="text-red-400 text-lg">Failed to load job details. The position may no longer be available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 z-10 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-5 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 h-fit"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{job.title}</h1>
              <div className="flex items-center mb-6">
                <span className="flex items-center text-[#d946ef] bg-[#d946ef]/10 px-3 py-1 rounded-full font-medium text-sm">
                  {job.department}
                </span>
                {job.type && (
                  <span className="ml-2 flex items-center text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full font-medium text-sm">
                    {job.type}
                  </span>
                )}
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <MapPin size={18} className="text-[#d946ef] mr-3" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock size={18} className="text-[#d946ef] mr-3" />
                  <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users size={18} className="text-[#d946ef] mr-3" />
                  <span>{job.applicants} Applicants</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
                <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-wrap">
                  {job.description}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Submit Your Application</h2>
                
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <CheckCircle size={70} className="text-green-500 mb-4" />
                    <p className="text-white text-xl font-medium">Application Submitted!</p>
                    <p className="text-gray-400 mt-2 text-center max-w-sm">
                      Thank you for applying for the {job.title} role. We will review your application and get back to you shortly. Redirecting...
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d946ef] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d946ef] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d946ef] transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Years of Experience</label>
                      <input
                        type="text"
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d946ef] transition-colors"
                        placeholder="e.g., 3 Years"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Skills (Comma separated)</label>
                      <textarea
                        name="skills"
                        required
                        value={formData.skills}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d946ef] transition-colors resize-none"
                        placeholder="React, Next.js, Tailwind CSS"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Upload CV / Resume (PDF, DOCX)</label>
                      
                      {!formData.cvFilename ? (
                        <div className="relative border-2 border-dashed border-white/20 rounded-xl p-6 hover:border-[#d946ef]/50 transition-colors bg-white/5 text-center group cursor-pointer">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <UploadCloud size={30} className="mx-auto text-gray-400 group-hover:text-[#d946ef] transition-colors mb-2" />
                          <p className="text-sm text-gray-300 font-medium">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500 mt-1">PDF or Word files (Max. 5MB)</p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-[#d946ef]/10 border border-[#d946ef]/30 rounded-xl p-4">
                          <div className="flex items-center space-x-3 overflow-hidden">
                            <FileText size={24} className="text-[#d946ef] flex-shrink-0" />
                            <span className="text-sm text-white font-medium truncate">{formData.cvFilename}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-gray-400 hover:text-red-400 transition-colors p-1"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}
                    </div>

                    {isError && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm">
                        {error?.message || "Failed to submit application. Please try again."}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#d946ef] to-[#f97316] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 mt-4"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Submitting Application...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplyPage;
