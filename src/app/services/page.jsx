import Service from "@/components/Home/Service";
import OurServices from "@/components/Services/OurServices";
import React from "react";
import CosmicBackground from "@/components/Home/CosmicBackground";

const page = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden pb-30 pt-20">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative z-10">
        <section>
          <Service />
        </section>
        <section>
          <OurServices />
        </section>
      </div>
    </div>
  );
};

export default page;
