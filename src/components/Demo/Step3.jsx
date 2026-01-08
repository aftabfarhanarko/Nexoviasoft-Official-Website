import React from 'react';
import { Share2, BarChart3, Mail, Zap, Layout, Settings } from 'lucide-react';

const Step3 = () => {
    const steps = [
        {
            title: "Connect your product",
            description: "Integrate in minutes with your existing stack—no engineering lift required.",
            icon: <Share2 className="w-10 h-10 text-blue-600" />,
            graphic: (
                <div className="relative w-full h-32 flex items-center justify-center">
                    <div className="absolute w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <Zap className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute w-full h-full animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-400 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                    </div>
                </div>
            )
        },
        {
            title: "Track User Behavior",
            description: "See what's used, what's dropped, and what keeps users engaged.",
            icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
            graphic: (
                <div className="relative w-full h-32 flex items-end justify-center px-8 pb-4">
                    <div className="w-full h-24 bg-gray-50 rounded-t-full overflow-hidden relative">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-16 bg-blue-600 origin-bottom transform -rotate-45 transition-transform duration-1000 animate-[wiggle_3s_ease-in-out_infinite]"></div>
                         <div className="absolute bottom-0 w-full border-t border-gray-200"></div>
                    </div>
                </div>
            )
        },
        {
            title: "Turn Insights Into Action",
            description: "Get clear, actionable recommendations to boost retention and grow MRR.",
            icon: <Mail className="w-10 h-10 text-blue-600" />,
            graphic: (
                <div className="relative w-full h-32 flex items-center justify-center">
                    <div className="w-24 h-16 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:bg-blue-100 transition-colors">
                        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 transform -skew-x-12 translate-x-full group-hover:animate-shimmer"></div>
                        <Mail className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-white text-blue-600 font-medium text-sm mb-6 shadow-sm">
                        How It Works
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Get Clear Answers <br /> In 3 Simple Steps
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        From data to clarity—uncover insights, take action, and grow smarter in three simple steps.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-500 mb-8 h-12">{step.description}</p>
                            
                            {/* Graphic Area */}
                            <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center h-48 overflow-hidden group-hover:bg-blue-50/30 transition-colors">
                                {step.graphic}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Step3;
