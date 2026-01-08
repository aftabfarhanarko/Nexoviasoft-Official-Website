import React from 'react';
import { CreditCard, Activity, BarChart2, PieChart, Hexagon } from 'lucide-react';

const Banners = () => {
    return (
        <section className=" max-w-7xl mx-auto relative bg-white pt-20 pb-32 overflow-hidden">
            {/* Floating Icons Background Elements - Positioned absolutely */}
            <div className="hidden lg:block absolute top-20 left-20 animate-bounce duration-[3000ms]">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform -rotate-6">
                    <Activity className="w-12 h-12 text-blue-500" />
                </div>
            </div>
            <div className="hidden lg:block absolute bottom-20 left-40 animate-bounce duration-[4000ms]">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform rotate-3">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">N</span>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block absolute top-32 right-20 animate-bounce duration-[3500ms]">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform rotate-6">
                    <BarChart2 className="w-12 h-12 text-orange-500" />
                </div>
            </div>
            <div className="hidden lg:block absolute bottom-32 right-40 animate-bounce duration-[4500ms]">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3">
                    <Hexagon className="w-12 h-12 text-indigo-600 fill-current" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Trusted Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-white"></div>
                        </div>
                        <span className="text-blue-600 font-medium text-sm">Trusted by 1M+ users</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 max-w-4xl leading-tight">
                        Turn Scattered Data Into <br className="hidden md:block" />
                        Smart Decisions
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
                        One simple dashboard to track your SaaS growth, MRR, churn and user behavior—without the chaos.
                    </p>

                    {/* CTA Section */}
                    <div className="flex flex-col items-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
                            Get Started For Free
                        </button>
                        
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <CreditCard size={16} />
                            <span>No credit card required</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banners;
