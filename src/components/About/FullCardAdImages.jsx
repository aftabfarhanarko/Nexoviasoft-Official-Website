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
      title: "Future-Proof Solutions",
      description:
        "Leveraging the latest in AI, Cloud, and Web technologies to build scalable solutions that keep you ahead of the curve. We turn complex challenges into elegant, efficient systems.",
      tags: ["Innovation", "Scalability"],
    },
    {
      icon: ShieldCheck,
      badge: "Trust",
      title: "Reliable & Secure Architecture",
      description:
        "We prioritize security and reliability in every line of code. Our development practices ensure your digital assets are protected, compliant, and consistently performant.",
      tags: ["Security", "Performance"],
    },
    {
      icon: Scaling,
      badge: "Scale",
      title: "Growth-Oriented Partnership",
      description:
        "From MVP to Enterprise, our solutions are designed to scale seamlessly with your business. We are your long-term technical partner committed to your sustained success.",
      buttonText: "Book an Appointment",
    },
  ];

  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20 items-start relative my-10">
      {/* Left Side - Sticky Image */}
      <div className="relative fixed  md:top-32 bg-white/5 p-3 rounded-2xl border border-white/5 h-fit self-start">
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
            Empowering Business <br />
            <span className="text-gray-400">Through Technology</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            SquadLog is a premier digital transformation agency. We partner with visionaries,
            enterprises, and startups to build robust web, mobile, and cloud solutions that drive real business value.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative md:sticky transition-all duration-500"
              style={{ top: `calc(130px + ${index * 30}px)` }}
            >
              <div className=" bg-white/10 rounded-2xl p-1.5">
                <Card {...card} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullCardAdImages;
