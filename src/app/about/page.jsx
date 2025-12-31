import NewButton from "@/Shaire/NewButton";
import React from "react";
import { FaMendeley } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen  bg-black/50  overflow-hidden ">
      <div className="mt-20 max-w-11/12 mx-auto">
        <div className=" mt-40 flex flex-col  justify-center items-center text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full  flex flex-col items-center md:items-center justify-center text-center md:text-center">
           {/* Responsive Button: Center on large screens, Left on mobile */}
<div className="w-full flex justify-center md:justify-center mb-8">
  <div className="w-full max-w-md md:max-w-none flex justify-start md:justify-center">
    <button className="relative overflow-hidden flex items-center justify-center gap-3 px-6 py-1.5 rounded-full border border-purple-500/40 hover:border-purple-400/70 transition-all duration-500 group shadow-xl hover:shadow-purple-500/30">
      
      {/* Year Badge - Responsive size */}
      <span className="relative bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 rounded-full font-bold text-white px-2 md:px-4 py-1.5 md:py-2 text-sm md:text-lg shadow-xl group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all duration-300">
        2026
        {/* Subtle shine effect */}
        <span className="absolute inset-0 rounded-full bg-white opacity-20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      </span>

      {/* Text */}
      <span className="text-gray-100 font-medium text-base md:text-lg tracking-wide">
        Explore Our Journey
      </span>

      {/* Glowing border on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-80 blur-xl -z-10 transition-opacity duration-500"></span>

      {/* Animated background glow on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 scale-0 group-hover:scale-150 transition-transform duration-700 -z-10"></span>
    </button>
  </div>
</div>

            {/* Heading - Left on mobile, Center on md+ */}
            <h1 className="text-left mb:6 text-white md:text-center text-[44px] md:text-[54px] lg:text-[86px] font-medium leading-tight">
              Pioneering AI Innovation <br className="hidden md:block" /> with Revolution!
            </h1>
            <p className="text-[20px] text-white/80 md:text-[22px] text-left md:text-center md:max-w-[550px]">
              Reboot is your trusted agency for creative strategy. We specialize
              in cutting-edge digital business solutions.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AboutPage;
