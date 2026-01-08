import React from 'react';
import { Clock, Smartphone, Zap, Shield, FileText, Layout } from 'lucide-react';

const Beifect = () => {
    const benefits = [
        {
            icon: <Clock className="w-6 h-6 text-blue-600" />,
            title: "Real-Time Tracking",
            description: "Monitor user activity instantly for smarter decision-making."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-blue-600" />, // Using Smartphone as a proxy for "All-in-One" or "Device"
            title: "All-in-One View",
            description: "Keep all your analytics in one place, without jumping between tools."
        },
        {
            icon: <Zap className="w-6 h-6 text-blue-600" />,
            title: "Actionable Insights",
            description: "Track the metrics that matter most for sustainable business growth."
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: "Secure Data",
            description: "Keep your analytics safe with advanced security and strong encryption."
        },
        {
            icon: <FileText className="w-6 h-6 text-blue-600" />,
            title: "Custom Reports",
            description: "Create tailored reports that fit your needs and highlight key insights."
        },
        {
            icon: <Layout className="w-6 h-6 text-blue-600" />,
            title: "Simple to Use",
            description: "Navigate easily—no steep learning curve, start making better decisions quickly."
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-medium text-sm mb-6">
                        Benefits
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Benefits That Truly <br /> Matter To You
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Monitor metrics as they happen, so you can respond quickly and keep your goals on track.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                <div className="group-hover:text-white transition-colors duration-300 text-white">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beifect;
