import SmoothButton from "@/Share/SmoothButton";
import FullCardAdImages from "@/components/About/FullCardAdImages";
import ElevateBrands from "@/components/About/ElevateBrands";
import Frequently from "@/components/About/Frequently";
import BecomePart from "@/components/About/BecomePart";
import Video from "@/components/About/Video";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pb-30">
      <div className="mt-20 max-w-11/12 mx-auto space-y-30">
        <div className="mt-40 flex flex-col justify-center items-center text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-center md:items-center justify-center text-center md:text-center">
            {/* Responsive Button: Center on large screens, Left on mobile */}
            <div className="w-full flex justify-center md:justify-center mb-8">
              <div className="w-full max-w-md md:max-w-none flex justify-start md:justify-center">
                <button className="relative overflow-hidden flex items-center justify-center gap-3 px-6 py-1.5 rounded-full border border-[#EFFC76]/40 hover:border-[#EFFC76]/70 transition-all duration-500 group shadow-xl hover:shadow-[#EFFC76]/30">
                  {/* Year Badge - Responsive size */}
                  <span className="relative bg-gradient-to-br from-[#EFFC76] via-[#EFFC76] to-[#EFFC76] rounded-full font-bold text-black px-2 md:px-4 py-1.5 md:py-2 text-sm md:text-lg shadow-xl group-hover:scale-110 group-hover:shadow-[#EFFC76]/50 transition-all duration-300">
                    2026
                    {/* Subtle shine effect */}
                    <span className="absolute inset-0 rounded-full bg-white opacity-20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  </span>

                  {/* Text */}
                  <span className="text-gray-100 font-medium text-base md:text-lg tracking-wide">
                    Explore Our Journey
                  </span>

                  {/* Glowing border on hover */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EFFC76] via-[#EFFC76] to-[#EFFC76] opacity-0 group-hover:opacity-80 blur-xl -z-10 transition-opacity duration-500"></span>

                  {/* Animated background glow on hover */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EFFC76]/20 to-[#EFFC76]/20 scale-0 group-hover:scale-150 transition-transform duration-700 -z-10"></span>
                </button>
              </div>
            </div>

            <h1 className="text-left mb-4 text-white md:text-center text-4xl md:text-5xl lg:text-7xl font-medium leading-tight">
              Pioneering AI Innovation <br className="hidden md:block" /> with
              Revolution!
            </h1>
            <p className="mb-7 text-[20px] text-white/80 md:text-[22px] text-left md:text-center md:max-w-[550px]">
              Reboot is your trusted agency for creative strategy. We specialize
              in cutting-edge digital business solutions.
            </p>
            <div className="font-medium w-full">
              {/* Large screen: center, Mobile: left align */}
              <div className="flex justify-center md:justify-center lg:justify-center xl:justify-center max-md:justify-start">
                <SmoothButton>View This Website</SmoothButton>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Video />
        </div>

        <section>
          <FullCardAdImages />
        </section>

        <section>
          <ElevateBrands />
        </section>

        <section>
          <Frequently />
        </section>
        <section>
          <BecomePart />
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
