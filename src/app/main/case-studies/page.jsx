import PortfolioCard from "@/components/case-studies/PortfolioCard";
import PortfolioFaqs from "@/components/case-studies/PortfolioFaqs";
import PortfolioReady from "@/components/case-studies/PortfolioReady";
import React from "react";
import CosmicBackground from "@/components/Home/CosmicBackground";

const Portfoliopage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden pb-30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative z-10 mt-10">
        <section>
          <PortfolioCard />
        </section>
        <section>
          <PortfolioFaqs />
        </section>
        <section>
          <PortfolioReady />
        </section>
      </div>
    </div>
  );
};

export default Portfoliopage;
