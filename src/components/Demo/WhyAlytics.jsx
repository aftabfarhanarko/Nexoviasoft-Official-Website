import React from 'react';
import { X, Check, Sparkles } from 'lucide-react';

const WhyAlytics = () => {
    const otherTools = [
        "Data lives in too many places",
        "Reporting eats up hours",
        "Insights are too generic",
        "No smart guidance for decisions",
        "Hard to see what's really working"
    ];

    const alyticsFeatures = [
        "All your metrics, one platform",
        "Reports generate instantly",
        "Insights tailored to your goals",
        "AI suggests your next move",
        "Clear path to consistent growth"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                        Why Alytics
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        A Smarter Way To<br />Grow With Data
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Turn complex metrics into clear insights that<br className="hidden md:block" />
                        help you make better decisions, faster.
                    </p>
                </div>

                {/* Comparison Card */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Other Tools - Left Side */}
                        <div className="bg-gray-50/50 rounded-[2.5rem] p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Tools</h3>
                            <div className="space-y-6">
                                {otherTools.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 text-gray-500">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                                            <X size={14} className="text-gray-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Alytics - Right Side */}
                        <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-blue-600 shadow-2xl shadow-blue-100/50 scale-105 md:-ml-8 z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Sparkles className="text-white w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Alytics</h3>
                            </div>
                            
                            <div className="space-y-6">
                                {alyticsFeatures.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 text-gray-700">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                            <Check size={14} className="text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAlytics;
