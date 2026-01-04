"use client";
import React from "react";
import Card from "@/components/About/Card";
import NewButton from "@/Share/NewButton";
import { Bot, ShieldCheck, Scaling } from "lucide-react";

const FullCardAdImages = () => {
  const cards = [
    {
      icon: Bot,
      badge: "Innovate",
      title: "Built for Cutting-Edge AI Teams",
      description:
        "Whether you're developing LLMs, intelligent tools, or autonomous agents, Nubien gives you a launch-ready site that speaks the language of innovation. The layout is purpose-built to help you showcase your services, and vision clearly.",
      tags: ["AI Agency", "Future Ready"],
    },
    {
      icon: ShieldCheck,
      badge: "Trust",
      title: "Designed to Build Instant Trust",
      description:
        "Nubien is crafted with clean typography, smooth transitions, and modern layouts that convey credibility at first glance. Perfect for agencies and startups needing to look established and reliable from day one.",
      tags: ["Trust By Design", "Modern UX"],
    },
    {
      icon: Scaling,
      badge: "Scale",
      title: "Scales With Your Vision",
      description:
        "From product launches to team showcases and case studies, Nubien is flexible and scalable. As your agency grows, the template adapts—so your site evolves without needing a redesign.",
      buttonText: "Book an Appointment",
    },
  ];

  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 items-start relative my-10">
      {/* Left Side - Sticky Image */}
      <div className="relative fixed  md:top-32 bg-[#111] p-3 rounded-2xl border border-white/5 h-fit self-start">
        <div className="relative rounded-2xl overflow-hidden aspect-[5/5] w-full">
          <img
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            src="https://i.ibb.co.com/jPBNM5b4/image.png"
            alt="About SquadLog"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Right Side - Scrollable Cards */}
      <div className="flex flex-col gap-8">
        <div className="mb-4">
          <NewButton>About Squadlog</NewButton>
          <h2 className="text-4xl md:text-5xl font-medium text-white mt-6 leading-tight">
            Shaping Tomorrow <br />
            <span className="text-gray-400">With Bold Ideas</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Nubien is a next-gen AI agency template built for bold visionaries,
            researchers, and builders shaping the future of intelligence.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative md:sticky transition-all duration-500"
              style={{ top: `calc(130px + ${index * 30}px)` }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullCardAdImages;
