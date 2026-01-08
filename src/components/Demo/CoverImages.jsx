import React from "react";
import Image from "next/image";

const CoverImages = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-20 -mt-20 relative z-20">
      <div className="relative w-full max-w-6xl">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-100 bg-white p-2 md:p-4">
          <Image
            src="/bigbanner.jpg"
            alt="Dashboard Preview"
            width={1400}
            height={900}
            className="w-full h-auto rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CoverImages;
