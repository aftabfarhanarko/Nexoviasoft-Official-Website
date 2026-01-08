"use client";
"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does your platform track feature usage?",
            answer: "We automatically collect interaction data across your product and visualize which features are being used most — no manual tagging needed."
        },
        {
            question: "Do I need technical skills to use Alytics?",
            answer: "Not at all. Alytics is built for product managers, marketers, and founders. Our visual interface lets you create reports and segments without writing a single line of SQL or code."
        },
        {
            question: "Can Alytics integrate with tools we already use?",
            answer: "Yes, we integrate with Segment, Slack, HubSpot, Salesforce, and 50+ other tools. You can push data in from your warehouse or send insights out to your marketing platforms."
        },
        {
            question: "Is my data secure on Alytics?",
            answer: "Security is our top priority. We are SOC 2 Type II compliant, GDPR ready, and use enterprise-grade encryption for all data in transit and at rest."
        },
        {
            question: "Can I try Alytics before committing?",
            answer: "Absolutely. We offer a 14-day free trial with full access to all features. No credit card required to start, so you can explore the platform risk-free."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                        FAQ's
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Common Questions<br />With Clear Answers
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Here are answers to the most common things<br className="hidden md:block" />
                        people ask before getting started.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className={`border rounded-2xl transition-all duration-300 ${
                                openIndex === index 
                                    ? 'bg-white border-gray-200 shadow-sm' 
                                    : 'bg-gray-50/50 border-transparent hover:bg-gray-50'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-medium ${
                                    openIndex === index ? 'text-gray-900' : 'text-gray-600'
                                }`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-180' : ''
                                }`}>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-gray-900" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-500" />
                                    )}
                                </div>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="px-6 pb-6 text-gray-500 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
