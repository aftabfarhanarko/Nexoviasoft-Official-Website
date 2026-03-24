"use client";

import React from "react";
import Card from "@/components/About/Card";
import NewButton from "@/Share/NewButton";
import { Bot, ShieldCheck, Scaling } from "lucide-react";

const FullCardAdImages = () => {
  const cards = [
    {
      icon: Bot,
      badge: "Workflow",
      title: "Smart Project Co-pilot",
      description:
        "Let NexoviaSoft watch your delivery pipeline, surface risks, and nudge owners before deadlines slip.",
      tags: ["Delivery health", "Risk alerts"],
    },
    {
      icon: ShieldCheck,
      badge: "Audit",
      title: "Secure Activity Timeline",
      description:
        "Every decision, change request, and deployment is captured in one clear, tamper-resistant history.",
      tags: ["Audit trail", "Compliance"],
    },
    {
      icon: Scaling,
      badge: "Scale",
      title: "Repeatable Playbooks",
      description:
        "Turn your best project setups into templates so every new client starts fast and stays consistent.",
      buttonText: "Explore the platform",
    },
  ];

  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start my-16">
      <div className="flex flex-col gap-6 ">
        <NewButton>About NexoviaSoft</NewButton>
        <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
          Built for real-world delivery teams
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          NexoviaSoft keeps projects, clients, and releases in one workflow so
          nothing slips between tools, chats, or spreadsheets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
            Track every milestone from brief to launch.
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
            Give clients a clear, always-current status view.
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
            Standardize how you kick off and run projects.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white/10 rounded-2xl p-1.5">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullCardAdImages;
