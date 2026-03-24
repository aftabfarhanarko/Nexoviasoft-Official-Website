"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does NexoviaSoft track project progress?",
      answer:
        "We use industry-standard project management tools like Jira and Trello to track milestones, tasks, and progress. You'll have real-time access to see exactly where your project stands.",
    },
    {
      question: "Do I need technical skills to work with you?",
      answer:
        "Not at all. We handle all the technical heavy lifting. We communicate in plain English, ensuring you understand the solutions we're building for your business.",
    },
    {
      question: "Can NexoviaSoft integrate with tools we already use?",
      answer:
        "Yes, we specialize in API integrations. We can connect your new custom software with existing tools like Salesforce, HubSpot, Slack, Stripe, and many others.",
    },
    {
      question: "Is my data secure with your solutions?",
      answer:
        "Security is our top priority. We implement best practices for data encryption, secure authentication, and compliance with standards like GDPR and SOC 2 where applicable.",
    },
    {
      question: "Can I get a consultation before committing?",
      answer:
        "Absolutely. We offer a free initial consultation to discuss your project ideas, requirements, and business goals before you sign any contract.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316] text-sm font-medium mb-6 backdrop-blur-sm">
            FAQ's
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Common Questions
            <br />
            With Clear Answers
          </h2>
          <p className="text-gray-400 text-lg">
            Here are answers to the most common things
            <br className="hidden md:block" />
            people ask before getting started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border rounded-2xl transition-all duration-300 backdrop-blur-sm overflow-hidden ${
                openIndex === index
                  ? "bg-neutral-900/80 border-[#d946ef]/50 shadow-[0_0_30px_-10px_rgba(217,70,239,0.15)]"
                  : "bg-neutral-900/30 border-white/5 hover:bg-neutral-900/50 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300 ${
                    openIndex === index ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f97316]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
