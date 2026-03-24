"use client";
import React from "react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We used Alytics to track onboarding drop-off and spotted a friction point instantly. After one small UX tweak, our activation rate jumped by 23%.",
      name: "Carter June",
      role: "Growth Lead",
      avatar: "/about/fashion-model-black-sunglasses-head_114579-8615.jpg",
    },
    {
      quote:
        "I've tried nearly every analytics tool out there, and Alytics is by far the most intuitive. No need for devs to set things up—our marketing team was running insights independently in hours.",
      name: "Elena Park",
      role: "Marketing Lead",
      avatar: "/about/portrait-smiling-woman_329181-18480.jpg",
    },
    {
      quote:
        "It's like product analytics finally caught up with design. We use Alytics not just for numbers—but to tell the story behind them. It's become our go-to tool for every launch.",
      name: "James Nair",
      role: "Product Designer",
      avatar: "/about/young-alone-person-2010-one_1301-1744.jpg",
    },
    {
      quote:
        "Alytics gave us visibility we didn't even know we were missing. Within the first week, we discovered which features were actually driving retention.",
      name: "Marcus Lee",
      role: "Product Manager",
      avatar:
        "/about/beautiful-young-girl-with-professional-makeup-hairstyle-sitting-restaurant_2221-595.jpg",
    },
    {
      quote:
        "Since switching to Alytics, we finally understand how users interact with our product. The event tracking is super intuitive and actionable.",
      name: "Sarah Bond",
      role: "CTO",
      avatar:
        "/about/portrait-pretty-brunette-woman-with-long-hair-bright-make-up-stylish-cozy-sweater-scarf-playful-mood-gray-wall-toned-colors_291049-1233.jpg",
    },
    {
      quote:
        "The best analytics platform we've used. It's simple, powerful, and the team loves it. Highly recommended for any SaaS business.",
      name: "Emily Chen",
      role: "Founder",
      avatar:
        "/about/young-girl-with-long-hair-wearing-colorful-dress-looking-camera-positive-happy-smiling_141793-28870.jpg",
    },
  ];

  // Duplicate the array to create the infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] font-medium text-sm mb-6 shadow-sm backdrop-blur-sm">
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Hear What Others <br /> Say About Us
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          See what top teams say after switching to a smarter product analytics
          platform.
        </p>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative w-full">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {extendedTestimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="w-[350px] md:w-[400px] flex-shrink-0 bg-neutral-900/50 p-8 rounded-3xl border border-white/5 hover:border-[#d946ef]/50 shadow-sm hover:shadow-[0_0_30px_-10px_rgba(217,70,239,0.1)] transition-all whitespace-normal backdrop-blur-sm group"
            >
              <Quote className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] mb-6 fill-current opacity-80" />
              <p className="text-gray-400 text-lg leading-relaxed mb-8 h-40 overflow-hidden">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] transition-colors">{item.name}</h4>
                  <div className="flex gap-1 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;
