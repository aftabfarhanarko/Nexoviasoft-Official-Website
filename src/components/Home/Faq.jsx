"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
    {
        question: "What core services does NexoviaSoft provide?",
        answer:
            "We offer a comprehensive suite of digital services including Custom Web Development, Cloud Computing Solutions, Mobile App Development (iOS & Android), UI/UX Design, and Digital Marketing strategies.",
    },
    {
        question: "How does your project development process work?",
        answer:
            "Our process is agile and collaborative. We start with Discovery & Strategy, move to Design & Prototyping, then Development & Testing, and finally Deployment & Support, ensuring you are involved at every step.",
    },
    {
        question: "Do you offer custom software solutions?",
        answer:
            "Yes, we specialize in building bespoke software tailored to your unique business challenges. Whether it's an internal tool, a SaaS platform, or a complex enterprise system, we build it from the ground up.",
    },
    {
        question: "Can you help migrate our business to the Cloud?",
        answer:
            "Absolutely. Our Cloud Computing experts can help you migrate your infrastructure to AWS, Azure, or Google Cloud, optimizing for security, scalability, and cost-efficiency.",
    },
    {
        question: "What industries do you specialize in?",
        answer:
            "We have experience working across various industries including FinTech, Healthcare, E-commerce, Education, and Logistics, adapting our solutions to meet specific industry standards and regulations.",
    },
    {
        question: "Do you provide ongoing maintenance and support?",
        answer:
            "Yes, we build long-term partnerships. We offer various support and maintenance packages to ensure your digital products remain secure, updated, and bug-free after launch.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20  text-white -mt-26 md:-mt-22 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column: Title & Description */}
                    <div className="lg:w-1/3 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#d946ef] text-white text-sm font-medium mb-4 shadow-[#d946ef]">
                                FAQ
                            </span>
                            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
                                Frequently <br />
                                <span className="text-gray-400">Asked Questions</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Have questions? Our FAQ section has you covered with quick
                                answers to the most common inquiries.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-medium text-gray-200">
                                            {faq.question}
                                        </span>
                                        <span className="shrink-0 ml-4 p-1 rounded-full bg-white/5 text-white/70">
                                            {activeIndex === index ? (
                                                <X className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5" />
                                            )}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background gradients for aesthetics */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#d946ef] to-[#f97316] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
        </section>
    );
};

export default Faq;
