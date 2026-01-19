"use client";
import { useState } from "react";

export default function FlipCard({ title, description }) {
  const [flipped, setFlipped] = useState(false);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <div
      className="w-[300px] h-[220px] cursor-pointer [perspective:1200px]"
      onMouseEnter={!isMobile ? () => setFlipped(true) : undefined}
      onMouseLeave={!isMobile ? () => setFlipped(false) : undefined}
      onClick={isMobile ? () => setFlipped(!flipped) : undefined}
    >
      {/* CARD */}
      <div
        className={`relative w-full h-full duration-700 transition-transform
        [transform-style:preserve-3d]
        ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-[#2bb673] shadow-xl shadow-black
          flex items-center justify-center
          [backface-visibility:hidden]"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center px-4">
            {title}
          </h3>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#2bb673] text-white shadow-xl shadow-black
          flex items-center justify-center px-6
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]"
        >
          <p className="text-center text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
