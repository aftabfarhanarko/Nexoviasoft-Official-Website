import AboutSquadLog from "@/components/Home/AboutSquadLog";
import Banner from "@/components/Home/Banner";
import Comparision from "@/components/Home/Comparision";
import Fqa from "@/components/Home/Fqa";
import Innovation from "@/components/Home/Innovation";
import Intregration from "@/components/Home/Intregration";
import LanuchYourSite from "@/components/Home/LanuchYourSite";
import OurProccess from "@/components/Home/OurProccess";
import OurTeam from "@/components/Home/OurTeam";
import Packed from "@/components/Home/Packed";
import PartOfUs from "@/components/Home/PartOfus";
import Pricing from "@/components/Home/Pricing";
import Portfolio from "@/components/Home/Protfolio";
import Service from "@/components/Home/Service";
import Support from "@/components/Home/Support";
import Testimonial from "@/components/Home/Testimonial";

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




      <section>
        <Portfolio />
      </section>



      <section>
        <Support />
      </section>

      <section>
        <AboutSquadLog />
      </section>

      <section>
        <Intregration />
      </section>

      <section>
        <Pricing />
      </section>
      <section>
        <OurProccess />
      </section>
      <section>
        <LanuchYourSite />
      </section>

      <section>
        <OurTeam />
      </section>
      <section>
        <Comparision />
      </section>

      <section>
        <Testimonial />
      </section>

      <section>
        <Fqa />
      </section>

      <section>
        <PartOfUs />
      </section>
    </div>
  );
};

export default TestPages;