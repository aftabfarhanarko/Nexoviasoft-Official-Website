import React from "react";
import { Atom } from "lucide-react";

const NewButton = ({ children }) => {
  return (
    <div>
      <button className="relative overflow-hidden border border-[#EFFC76]/30 px-4 flex justify-center items-center gap-3 py-1.5 rounded-full bg-gradient-to-r from-[#EFFC76]/20 via-[#EFFC76]/20 to-[#EFFC76]/20 hover:border-[#EFFC76]/50 transition-all duration-300 group">
        <span className="bg-gradient-to-br from-[#EFFC76] via-[#EFFC76] to-[#EFFC76] rounded-full font-semibold p-1.5 text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Atom />
        </span>
        <span className="text-gray-200 text-md">{children}</span>

        {/* Animated gradient border effect */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#EFFC76] via-[#EFFC76] to-[#EFFC76] blur-sm -z-10"></span>
      </button>
    </div>
  );
};

export default NewButton;
