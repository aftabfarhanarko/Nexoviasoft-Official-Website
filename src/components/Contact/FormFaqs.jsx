"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the best way to start a project with you?",
    answer:
      "Simply fill out the contact form above or schedule a consultation call. We'll discuss your project requirements, goals, and timeline to propose the best solution.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Costs vary depending on the scope and complexity of the project. After our initial discovery call, we provide a detailed proposal with transparent pricing options.",
  },
  {
    question: "Can we sign a Non-Disclosure Agreement (NDA)?",
    answer:
      "Yes, we take intellectual property and confidentiality very seriously. We are happy to sign an NDA before discussing any sensitive details of your project.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Typically, we work with a milestone-based payment structure. This ensures you only pay for completed and approved work stages. We can discuss specific terms during our proposal phase.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients globally. We use tools like Slack, Zoom, and Jira to ensure seamless communication and collaboration regardless of time zones.",
  },
  {
    question: "How do you handle project updates and communication?",
    answer:
      "We believe in transparency. You will have a dedicated project manager and regular updates via your preferred communication channels to keep you informed of progress.",
  },
];

const FormFaqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="w-11/12 md:max-w-[1280px] border border-white/10 md:px-15 p-5 rounded-lg mx-auto py-20 bg-white/5"
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


export default FormFaqs;