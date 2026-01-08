"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Percent } from "lucide-react";
import Image from "next/image";
import SmoothButton from "@/Share/SmoothButton";

const teamMembers = [
    {
        name: "Arlene McCoy",
        role: "Co-Founder, CEO",
        image: "/about/member-1.jpg",
    },
    {
        name: "Lena Williams",
        role: "Co-Founder, CTO",
        image: "/about/member-2.jpg",
    },
    {
        name: "Maya Johnson",
        role: "Senior Developer",
        image: "/about/member-3.jpg",
    },
    {
        name: "Zara Patel",
        role: "Chief Operations Officer",
        image: "/about/member-4.jpg",
    },
    {
        name: "Emma Davis",
        role: "Chief Product Officer",
        image: "/about/member-5.jpg",
    },
    {
        name: "Chloe Anderson",
        role: "Senior Product Designer",
        image: "/about/member-6.jpg",
    },
];

const TeamCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-3 flex items-center gap-4 hover:border-[#EFFC76]/50 transition-colors duration-300"
        >
            {/* Image */}
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-800 shrink-0">
                {/* Placeholder for image if not found, or actual image */}
                <div className="absolute inset-0 bg-gray-700 animate-pulse" />
                {/* Note: Using a placeholder div. In a real app, use next/image with the src. 
              Since I don't have the exact image paths yet, I'll assume they might exist or use placeholders.
              The design shows specific images. I'll use a placeholder style if image load fails or just generic paths.
           */}
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>

            {/* Info */}
            <div className="flex-grow">
                <h3 className="text-white font-medium text-lg leading-tight mb-1 group-hover:text-[#EFFC76] transition-colors">
                    {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
            </div>

            {/* Button */}
            <div className="rounded-xl bg-[#EFFC76] p-2.5 flex items-center justify-center shrink-0 group-hover:bg-[#EFFC76] transition-colors cursor-pointer">
                <Percent className="w-5 h-5 text-black" />
                {/* The icon in the image looks like a % or similar abstract shape. 
            Using Percent as a placeholder or close match from lucide. 
            Actually, looking closer it might be a specific logo or different icon. 
            I'll use Percent for now as it looks somewhat similar in the blurry image (a circle with a slash/dots). 
            Wait, looking at the Uploaded Image again, it looks like a percentage sign inside a box. 
        */}
            </div>
        </motion.div>
    );
};

const OurTeam = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EFFC76]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EFFC76]/10 blur-[120px] rounded-full pointer-events-none" />


            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Search className="w-4 h-4 text-[#EFFC76]" />
                        <span className="text-gray-300 text-sm">Our Team</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight max-w-4xl"
                    >
                        Meet the Team Making <br />
                        <span className="text-gray-400">Things Happen Every Day</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mb-8"
                    >
                        Our team is made up of passionate professionals who bring their
                        expertise and creativity to every project.
                    </motion.p>

                    {/* Button */}
                    <SmoothButton>  View About Reboot</SmoothButton>
                    
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
