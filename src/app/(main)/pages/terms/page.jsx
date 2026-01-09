import TermsPages from '@/components/Terms/TermsPages';
import React from 'react';
import CosmicBackground from '@/components/Home/CosmicBackground';

const page = () => {
    return (
        <div className="min-h-screen relative overflow-x-hidden pb-30 pt-20">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <CosmicBackground />
            </div>
            <div className="relative z-10">
                <section>
                    <TermsPages />
                </section>
            </div>
        </div>
    );
};

export default page;