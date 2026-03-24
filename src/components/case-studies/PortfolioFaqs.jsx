"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is your typical process for a case study project?",
    answer:
      "We follow a structured approach: Discovery, Strategy, Design, Development, and Launch. Each phase is collaborative, ensuring the final product aligns perfectly with your business goals.",
  },
  {
    question: "Do you build custom solutions or use templates?",
    answer:
      "We primarily build custom solutions tailored to your specific needs. While we can use frameworks to accelerate development, the design and functionality are unique to your brand.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the project scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide a detailed timeline during the proposal phase.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, scalable technologies such as React, Next.js, Node.js, Python, and cloud services like AWS and Google Cloud to ensure high performance and future-proofing.",
  },
  {
    question: "Do you offer maintenance after the project is live?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to handle updates, security patches, and performance monitoring so you can focus on your business.",
  },
  {
    question: "Can you help with rebranding and design?",
    answer:
      "Absolutely. Our UI/UX design team specializes in creating compelling brand identities and user-friendly interfaces that resonate with your target audience.",
  },
];

const PortfolioFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-transparent text-white relative overflow-hidden">
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#d946ef] text-white text-sm font-medium mb-4 shadow-[0_0_15px_rgba(217,70,239,0.5)]">
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
                  className={`bg-[#0A0A0A] rounded-2xl overflow-hidden border transition-colors ${
                    activeIndex === index ? "border-[#d946ef]/50" : "border-white/5 hover:border-[#d946ef]/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg font-medium transition-colors ${activeIndex === index ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" : "text-gray-200"}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${
                      activeIndex === index ? "bg-[#d946ef] text-white" : "bg-white/5 text-white/70"
                    }`}>
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

export default PortfolioFaqs;
