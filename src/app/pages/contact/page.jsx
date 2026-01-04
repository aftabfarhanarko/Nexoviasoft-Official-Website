import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import FormFqs from "@/components/Contact/FormFqs";
import ContactReady from "@/components/Contact/ContactReady";

const Contactpage = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pb-30">
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
  );
};

export default Contactpage;
