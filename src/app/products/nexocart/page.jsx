import Banners from "@/components/Demo/Banners";
import CoverImages from "@/components/Demo/CoverImages";
import SectionsView from "@/components/Demo/SectionsView";
import Beifect from "@/components/Demo/Beifect";
import Step3 from "@/components/Demo/Step3";
import Integrations from "@/components/Demo/Integrations";
import Testimonials from "@/components/Demo/Testimonials";
import OurPricing from "@/components/Demo/OurPricing";
import WhyAlytics from "@/components/Demo/WhyAlytics";
import Faq from "@/components/Demo/Faq";
import React from "react";
import CosmicBackground from "@/components/Home/CosmicBackground";

const DemoPage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative z-10">
        <div className="pt-20">
          <Banners />
        </div>
        <CoverImages />
        <SectionsView />
        <Beifect />
        <Step3 />
        <Integrations />
        <WhyAlytics />
        <Testimonials />
        <OurPricing />
        <Faq />
      </div>
    </div>
  );
};

export default DemoPage;
