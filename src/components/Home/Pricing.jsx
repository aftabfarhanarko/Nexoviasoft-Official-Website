"use client";
import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { Rocket, Bell, Layout } from "lucide-react";

const pricingPlans = [
    {
        plan: "Starter",
        price: "99",
        description: "Perfect for individuals and freelancers starting out.",
        tag: "Most Pick",
        icon: Rocket,
        stats: {
            projects: "100",
            revisions: "75",
        },
        features: [
            "All templates unlocked",
            "Unlimited Licenses",
            "Lifetime Updates",
            "Email support",
            "30-Days Money-back Guarantee",
        ],
    },
    {
        plan: "Professional",
        price: "599",
        description: "Ideal for growing agencies and small businesses.",
        tag: "Advanced",
        icon: Bell,
        stats: {
            projects: "150",
            revisions: "125",
        },
        features: [
            "All templates unlocked",
            "Unlimited Licenses",
            "Lifetime Updates",
            "Email support",
            "30-Days Money-back Guarantee",
        ],
    },
    {
        plan: "Enterprise",
        price: "2,599",
        description: "Advanced solutions for large teams and startups.",
        tag: "Recommended",
        icon: Layout,
        stats: {
            projects: "180",
            revisions: "140",
        },
        features: [
            "All templates unlocked",
            "Unlimited Licenses",
            "Lifetime Updates",
            "Email support",
            "30-Days Money-back Guarantee",
        ],
    },
];

const Pricing = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#EFFC76]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <div className="h-px w-8 bg-[#EFFC76]" />
                        <span className="text-[#EFFC76] font-medium tracking-wide uppercase text-sm">
                            Pricing
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Flexible Plans for Every Need— <br />
                        <span className="text-gray-400">Perfect for Agencies, and Startups.</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our pricing plans are designed to make getting started as effortless
                        as possible. With flexible options tailored to suit a variety of
                        needs and budgets.
                    </motion.p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} {...plan} delay={0.3 + index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
