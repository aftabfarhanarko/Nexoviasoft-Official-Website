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

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Banners />
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
  );
};

export default DemoPage;
