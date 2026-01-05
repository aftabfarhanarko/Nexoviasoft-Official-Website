import OurServices from "@/components/Services/OurServices";
import Topservices from "@/components/Services/Topservices";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pb-30 pt-20">
      <section>
        <Topservices />
      </section>
      <section>
        <OurServices />
      </section>
    </div>
  );
};

export default page;
