import SmoothButton from "@/Share/SmoothButton";
import FullCardAdImages from "@/components/About/FullCardAdImages";
import ElevateBrands from "@/components/About/ElevateBrands";
import Frequently from "@/components/About/Frequently";
import BecomePart from "@/components/About/BecomePart";
import Video from "@/components/About/Video";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import CosmicBackground from "@/components/Home/CosmicBackground";

const AboutPage = () => {
  return (
    <div className="min-h-screen mt-20 relative overflow-x-hidden pb-30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CosmicBackground />
      </div>
      <div className="relative  mt-20 max-w-11/12 mx-auto space-y-10">
        <div className="flex justify-center items-center ">
          <div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#d946ef] text-white text-xs font-bold px-3 py-1 rounded-full">
              2026
            </span>
            <span className="text-gray-300 text-sm font-medium">
            About NexoviaSoft
            </span>
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
