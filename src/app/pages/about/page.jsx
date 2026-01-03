
import NewButton from "@/Share/NewButton";
import SmoothButton from "@/Share/SmoothButton";
import Image from "next/image";
import React from "react";
import { Atom } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen  bg-black/50  overflow-hidden  pb-20">
      <div className="mt-20 max-w-11/12 mx-auto space-y-30">
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

            <h1 className="text-left mb-4 text-white md:text-center text-[44px] md:text-[54px] lg:text-[86px] font-medium leading-tight">
              Pioneering AI Innovation <br className="hidden md:block" /> with
              Revolution!
            </h1>
            <p className=" mb-7 text-[20px] text-white/80 md:text-[22px] text-left md:text-center md:max-w-[550px]">
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

        <div className=" max-w-11/12 md:max-w-9/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gaap-20">
          {/* Left Side  img stakey */}
          <div className="bg-black p-3 max-w-[538px] rounded-2xl">
            <img
              className="max-w-[528px] sm:max-h-[300px]  md:max-h-[340px]  lg:max-h-[534px] rounded-2xl"
              src={"/about/about1.png"}
              alt="About"
            ></img>
          </div>

          {/* RIght side box */}
          <div>

            {/* <button class="relative overflow-hidden border border-purple-500/30 px-6 py-2 rounded-full bg-gradient-to-r from-purple-900/20 via-violet-900/20 to-blue-900/20 hover:border-purple-400/50 transition-all duration-300 group flex items-center gap-3">
              <span class="bg-gradient-to-br from-purple-600 via-violet-600 to-blue-600 rounded-full p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </span>

              <span class="text-gray-200 text-base font-medium">
                About Nubien
              </span>

              <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 blur-sm -z-10"></span>
            </button> */}
            <NewButton>About Squadlog</NewButton>
            <h1 className=" md:text-4xl">Shaping Tomorrow <br /> With Bold Ideas</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
