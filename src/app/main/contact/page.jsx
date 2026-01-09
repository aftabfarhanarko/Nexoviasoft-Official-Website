import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import FormFqs from "@/components/Contact/FormFqs";
import ContactReady from "@/components/Contact/ContactReady";
import CosmicBackground from "@/components/Home/CosmicBackground";

const Contactpage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden pb-30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative">
        <section>
          <ContactForm />
        </section>
        <section>
          <FormFqs />
        </section>
        <section>
          <ContactReady />
        </section>
      </div>
    </div>
  );
};

export default Contactpage;
