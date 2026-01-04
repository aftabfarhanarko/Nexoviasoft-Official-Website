"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What do I need to get started?",
    answer:
      "To get started, simply choose a plan that suits your needs, sign up, and you'll get instant access to our platform and resources.",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "Our template is highly customizable. You can easily change colors, fonts, layouts, and content to match your brand identity without any coding knowledge.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "It's designed with beginners in mind! We provide a drag-and-drop interface and comprehensive documentation to help you every step of the way.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with our product for any reason, simply contact our support team for a full refund.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No coding skills are required! Our platform is built for non-technical users, allowing you to build and manage your site effortlessly.",
  },
  {
    question: "What will I get after purchasing the template?",
    answer:
      "You'll receive the full source code, documentation, lifetime updates, and access to our premium support team.",
  },
];

const PortfolioFqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="w-11/12 md:max-w-[1280px] border md:px-15 p-5 rounded-lg mx-auto py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounnd.png')" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left Side - Header */}
        <div className="sticky top-32 self-start">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-8">
            <div className="p-1 rounded-full bg-purple-600 flex items-center justify-center">
              <HelpCircle size={14} className="text-white" />
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
                  ? "bg-[#111] border-purple-500/30"
                  : "bg-transparent border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-purple-600 border-purple-500 text-white rotate-180"
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


export default PortfolioFqs;