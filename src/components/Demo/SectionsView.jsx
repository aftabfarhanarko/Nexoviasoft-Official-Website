import React from 'react';
import Image from 'next/image';

const SectionsView = () => {
    const features = [
        {
            title: "Unified Metrics",
            description: "See your MRR and active users in one clean, unified view — no more switching tabs.",
            image: "/cover1.jpg",
            alt: "Unified Metrics Dashboard"
        },
        {
            title: "AI Growth Insights",
            description: "Actionable suggestions from your data, without digging into spreadsheets or dashboards.",
            image: "/cover2.jpg",
            alt: "AI Insights"
        },
        {
            title: "Product Usage Tracking",
            description: "Track how users engage with your app live to uncover patterns and optimize features.",
            image: "/cover3.jpg",
            alt: "Integration List"
        },
        {
            title: "Feature Impact Analysis",
            description: "Know exactly which features drive long-term retention—and which ones don't contribute.",
            image: "/bigbanner.jpg",
            alt: "Feature Impact Graph"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-medium text-sm mb-6">
                        Unique Features
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Make Your Platform <br /> Work Harder For You
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Streamline your business with unified metrics and AI-powered analytics—all in one place.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            {/* Image Container - Adjusted to match 'card this type p-4/5' */}
                            <div className="bg-[#FAFAFA] rounded-[32px] p-5 mb-6 h-[300px] md:h-[400px] relative overflow-hidden flex items-center justify-center border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-gray-50">
                                <Image
                                    src={feature.image}
                                    alt={feature.alt}
                                    fill
                                    className="object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* Content */}
                            <div className="px-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionsView;
