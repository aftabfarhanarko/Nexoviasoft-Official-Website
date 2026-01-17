import React from "react";
import Image from "next/image";

const CoverImages = () => {
  return (
    <section className="w-full pt-6 md:pt-24 flex justify-center px-4 sm:px-6 lg:px-8 pb-24 -mt-20 relative z-20">
      <div className="absolute inset-x-0 -top-10 bottom-0 max-w-6xl mx-auto pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(239,252,118,0.25),_transparent_55%),radial-gradient(circle_at_center,_rgba(148,163,184,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_65%)] blur-2xl md:blur-3xl opacity-70 md:opacity-90" />
      </div>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-[#EFFC76]/70 via-white/40 to-transparent opacity-70 group-hover:opacity-100 group-hover:blur-[22px] blur-[18px] transition-all duration-700" />
          <div className="relative rounded-[24px] overflow-hidden border border-white/15 bg-gradient-to-b from-black/70 via-black/90 to-black shadow-[0_30px_100px_rgba(0,0,0,1)]">
            <div className="absolute inset-x-0 top-0 h-10 flex items-center justify-between px-5 bg-gradient-to-r from-white/8 via-black/70 to-white/5 border-b border-white/10 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[11px] tracking-[0.16em] uppercase text-gray-300/90">
                Live product dashboard
              </span>
              <span className="text-[11px] text-gray-500">HD preview</span>
            </div>
            <Image
              src="/bigbanner.jpg"
              alt="Dashboard Preview"
              width={1400}
              height={900}
              className="w-full h-auto rounded-[24px] object-cover transform transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/40 to-transparent md:from-black md:via-black/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverImages;
