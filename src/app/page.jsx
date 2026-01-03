import Banner from "@/components/home/Banner";
import Innovation from "@/components/home/Innovation";
import Service from "@/components/home/Service";
import Packed from "@/components/home/Packed";
import React from "react";

const TestPages = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Packed />
      </section>
      <section >
        <Innovation />
      </section>
      <section>
        <Service />
      </section>

    </div>
  );
};

export default TestPages;
