"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do you approach a new project?",
    answer:
      "We start with a deep dive into your business goals and requirements. This discovery phase ensures we understand your vision before moving into design and development.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We are experts in modern tech stacks including React, Next.js, Node.js, Python, and Cloud platforms like AWS and Google Cloud, ensuring your solution is built for the future.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer ongoing maintenance and support packages to keep your application secure, up-to-date, and performing optimally after launch.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on project complexity. We work in agile sprints to deliver value quickly, typically delivering MVPs in 4-8 weeks.",
  },
  {
    question: "Can you update or modernize my existing system?",
    answer:
      "Yes, we specialize in legacy system modernization. We can refactor your existing codebase, improve performance, and add new features without disrupting your operations.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible engagement models tailored to your needs, including fixed-price contracts for well-defined projects and dedicated team models for ongoing development.",
  },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="w-11/12 md:max-w-[1280px] border border-white/10 md:px-15 p-5 rounded-lg mx-auto py-20 bg-transparent"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left Side - Header */}
        <div className="sticky top-32 self-start">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-8">
            <div className="p-1 rounded-full bg-[#EFFC76] flex items-center justify-center">
              <HelpCircle size={14} className="text-black" />
            </div>
            <span className="text-gray-300 text-sm font-medium">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Frequently <br />
            <span className="text-gray-400">Asked Questions</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>
        </div>

        {/* Right Side - Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "bg-[#111] border-[#EFFC76]/30"
                  : "bg-transparent border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-medium text-white group-hover:text-[#EFFC76] transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#EFFC76] border-[#EFFC76] text-black rotate-180"
                      : "bg-white/5 border-white/10 text-gray-400 group-hover:bg-white/10"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
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
  );
};

export default Frequently;
