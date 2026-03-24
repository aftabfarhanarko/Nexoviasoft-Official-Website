import AboutNexoviaSoft from "@/components/Home/AboutNexoviaSoft";
import Banner from "@/components/Home/Banner";
import Comparison from "@/components/Home/Comparison";
import Faq from "@/components/Home/Faq";
import Innovation from "@/components/Home/Innovation";
import Integration from "@/components/Home/Integration";
import LaunchYourSite from "@/components/Home/LaunchYourSite";
import OurProcess from "@/components/Home/OurProcess";
// import PartOfUs from "@/components/Home/PartOfus";
import Pricing from "@/components/Home/Pricing";
// import Service from "@/components/Home/Service";
import Support from "@/components/Home/Support";
import Testimonial from "@/components/Home/Testimonial";
import CosmicBackground from "@/components/Home/CosmicBackground";
import DevOpsWorkflow from "@/components/Home/DevOpsWorkflow";
import PortfolioCard from "@/components/case-studies/PortfolioCard";

const TestPages = () => {
  return (
    <div className="">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative pt-20 z-10">
        <section>
          <Banner />
        </section>

        <section>
          <Innovation />
        </section>

        {/* grid-cols-1 lg:grid-cols-12 gap-6 */}
        <section>
          <PortfolioCard />
        </section>
        <section>
          <Support />
        </section>
        <section>
          <AboutNexoviaSoft />
        </section>
        <section>
          <Integration />
        </section>

        <section>
          <Pricing />
        </section>
        <section>
          <OurProcess />
        </section>
        <section>
          <LaunchYourSite />
        </section>

        <section>
          <DevOpsWorkflow />
        </section>
        <section>
          <Comparison />
        </section>

        <section>
          <Testimonial />
        </section>

        <section>
          <Faq />
        </section>
      </div>
    </div>
  );
};

export default TestPages;
