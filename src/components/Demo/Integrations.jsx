"use client";
import React from "react";
import { Layout, Database, MessageSquare, Globe } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      name: "Nuvo",
      icon: <Layout className="w-6 h-6 text-white" />,
      color: "bg-blue-600",
      description: "Sync your project data effortlessly.",
    },
    {
      name: "Alyta",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "bg-orange-500",
      description: "Connect your databases in seconds.",
    },
    {
      name: "Kapt",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "bg-gray-900",
      description: "Streamline team communication.",
    },
    {
      name: "Vellis",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-blue-400",
      description: "Integrate with your global tools.",
    },
  ];

  return (
    <section id="integrations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-medium text-sm mb-6">
              Integrations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              Connect Alytics with your favorite tools to streamline workflows
              and keep everything running smoothly.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30">
              Get Started Now
            </button>
          </div>

          {/* Right Content - Integration Cards */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

            <div className="relative space-y-4  border">
              {integrations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  style={{
                    marginLeft: index % 2 === 0 ? "0" : "2rem",
                    opacity: 0,
                    animation: `fadeInRight 0.5s ease-out forwards ${
                      index * 0.1
                    }s`,
                  }}
                >
                  <div
                    className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-lg shadow-${item.color}/20`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.name}
                    </h3>
                    <div className="h-2 w-32 bg-gray-100 rounded-full mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Integrations;
