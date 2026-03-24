"use client";
import React from "react";
import { Layout, Database, MessageSquare, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Integrations = () => {
  const integrations = [
    {
      name: "Nuvo",
      icon: <Layout className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      color: "bg-[#d946ef]/10",
      description: "Sync your project data effortlessly.",
    },
    {
      name: "Alyta",
      icon: <Database className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      color: "bg-[#d946ef]/10",
      description: "Connect your databases in seconds.",
    },
    {
      name: "Kapt",
      icon: <MessageSquare className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      color: "bg-[#d946ef]/10",
      description: "Streamline team communication.",
    },
    {
      name: "Vellis",
      icon: <Globe className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />,
      color: "bg-[#d946ef]/10",
      description: "Integrate with your global tools.",
    },
  ];

  return (
    <section id="integrations" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] font-medium text-sm mb-6 backdrop-blur-sm">
              Integrations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Connect Alytics with your favorite tools to streamline workflows
              and keep everything running smoothly.
            </p>
            <button className="bg-[#d946ef] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#f97316] transition-all shadow-lg hover:shadow-[#d946ef]/20">
              Get Started Now
            </button>
          </div>

          {/* Right Content - Integration Cards */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative space-y-4">
              {integrations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-900/50 p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-[#d946ef]/50 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                  style={{
                    marginLeft: index % 2 === 0 ? "0" : "2rem",
                  }}
                >
                  <div
                    className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center border border-[#d946ef]/20`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
