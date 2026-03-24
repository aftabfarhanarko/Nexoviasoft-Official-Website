"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const OurPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "429" : "389",
      description: "Great for small teams getting started.",
      features: [
        "5,000 tracked users",
        "Core analytics",
        "Simple dashboards",
        "Email support",
        "Weekly reports",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      price: isAnnual ? "677" : "9769",
      description: "For fast-growing teams who are scaling.",
      features: [
        "Everything in starter",
        "50,000 tracked users",
        "Funnel & drop-off analysis",
        "Custom dashboards",
        "Team collaboration tools",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: isAnnual ? "2749" : "2979",
      description: "Great for enterprizes to convert more.",
      features: [
        "All Growth features",
        "Unlimited tracked users",
        "Dedicated account manager",
        "SLA & compliance support",
        "Advanced integrations",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] text-sm font-medium mb-6 backdrop-blur-sm">
            Our Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose The Best
            <br />
            Plan That Suites You
          </h2>
          <p className="text-gray-400 text-lg">
            Flexible pricing built for every stage — from
            <br className="hidden md:block" />
            startup to scale, no hidden fees.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="bg-neutral-900/50 p-1.5 rounded-full border border-white/10 shadow-sm inline-flex backdrop-blur-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-[#d946ef] text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isAnnual
                    ? "bg-[#d946ef] text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-neutral-900/50 rounded-[2rem] p-8 backdrop-blur-sm ${
                plan.isPopular
                  ? "border-2 border-[#d946ef] shadow-[0_0_50px_-12px_rgba(217,70,239,0.2)] scale-105 z-10"
                  : "border border-white/5 hover:border-[#d946ef]/50"
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit bg-[#d946ef] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-white mb-6">
                  What's included
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <div className="mt-1 min-w-[18px]">
                        <Check
                          size={18}
                          className={plan.isPopular ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" : "text-white"}
                          strokeWidth={3}
                        />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all shadow-lg ${
                  plan.isPopular
                    ? "bg-[#d946ef] text-white hover:bg-[#f97316] hover:shadow-[#d946ef]/20"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPricing;
