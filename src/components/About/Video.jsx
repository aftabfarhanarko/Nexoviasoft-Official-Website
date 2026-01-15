"use client";
import React from "react";
import { motion } from "framer-motion";
import { Activity, Users, Shield, Zap, Clock, Layout } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Project Insights",
    description:
      "Track progress, deadlines, and risks across all active client projects in one place.",
  },
  {
    icon: Users,
    title: "Client Collaboration Hub",
    description:
      "Keep conversations, feedback, and approvals organized so nothing gets lost.",
  },
  {
    icon: Shield,
    title: "Secure Delivery Pipeline",
    description:
      "From staging to production, deployments stay traceable and safe for your team.",
  },
  {
    icon: Zap,
    title: "Automation First",
    description:
      "Automate recurring tasks and alerts so your team can focus on high-impact work.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery Rhythm",
    description:
      "Keep sprints and launches aligned with clear timelines and proactive alerts.",
  },
  {
    icon: Layout,
    title: "Single Workspace View",
    description:
      "See product strategy, specs, and delivery status in one shared SquadLog workspace.",
  },
];

const Video = () => {
  return (
    <div className="w-11/12 md:max-w-[1280px] -mt-20 mx-auto py-20">
      <div className="relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#EFFC76]/20 blur-[120px] pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/40 border border-white/15 text-xs md:text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#EFFC76] mr-2" />
              How SquadLog works for your product
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Built for teams shipping real digital products.
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-xl">
              SquadLog connects strategy, design, and engineering into one flow,
              so every release feels predictable, transparent, and on time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full rounded-2xl bg-black/40 border border-white/10 p-4 md:p-5 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EFFC76]/15 flex items-center justify-center text-[#EFFC76]">
                  <item.icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#EFFC76]/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Video;
