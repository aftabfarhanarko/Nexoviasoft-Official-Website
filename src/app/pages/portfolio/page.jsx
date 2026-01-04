import PortfolioCard from '@/components/portfolio/PortfolioCard';
import PortfolioFqs from '@/components/portfolio/PortfolioFqs';
import PortfolioReady from '@/components/portfolio/PortfolioReady';
import React from 'react';

const Portfoliopage = () => {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden pb-20">
            <section>
                <PortfolioCard/>
            </section>
            <section>
                <PortfolioFqs />
            </section>
            <section>
                <PortfolioReady/>
            </section>
        </div>
    );
};

export default Portfoliopage;