"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What do I need to get started?",
    answer:
      "You'll need a basic understanding of React and Next.js. We provide detailed documentation to guide you through the setup process.",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "Everything is customizable! You can change colors, fonts, layouts, and components to match your brand identity using Tailwind CSS.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "We've designed the code structure to be cleaner and modular. Even if you're new to Next.js, you'll find it intuitive to make changes.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with the product, ensuring a risk-free purchase for you.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Basic knowledge of HTML/CSS is helpful, but our pre-built components make it easy to build pages without deep coding expertise.",
  },
  {
    question: "What will I get after purchasing the template?",
    answer:
      "You get the full source code, documentation, free updates, and access to our support team for any technical issues.",
  },
];

const PortfolioFqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFFC76] text-black text-sm font-medium mb-4 shadow-[0_0_15px_rgba(239,252,118,0.5)]">
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
                    activeIndex === index ? "border-[#EFFC76]/50" : "border-white/5 hover:border-[#EFFC76]/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg font-medium transition-colors ${activeIndex === index ? "text-[#EFFC76]" : "text-gray-200"}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${
                      activeIndex === index ? "bg-[#EFFC76] text-black" : "bg-white/5 text-white/70"
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
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EFFC76]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EFFC76]/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </section>
  );
};

// export default Fqa;

export default PortfolioFqs;
