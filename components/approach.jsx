// import React from 'react';
// import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

// export default function Approach() {
//   return (
//     <div>
      
//     </div>
//   );
// }

"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "motion/react";
const CanvasRevealEffect = dynamic(() => import("@/components/ui/canvas-reveal-effect"), { ssr: false });

export default function Approach() {
  return (
    <section className=" w-full">
      <div
        className="py-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card 
        title="5+ Years Supporting Leaders Globally" 
        icon={<AceternityIcon order = "Experience" />}>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-[#2bb673]" />
        </Card>

        <Card 
        title="Diverse Clients Across Countries" 
        icon={<AceternityIcon order = "Clients" />}>
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-[#2bb673]" />
    
        </Card>
        <Card 
        title="US & UK Business Formation & Compliance Expertise" 
        icon={<AceternityIcon order = "Expertise" />}>
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-[#2bb673]" />
        </Card>

        <Card 
        title="International Wellness & People Support Capabilities" 
        icon={<AceternityIcon order = "Capabilities" />}>
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-[#2bb673]" />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  return (
    <div
      onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
      onClick = {isMobile ? () => setHovered((prev) => !prev) : undefined}
      className="rounded-2xl group/canvas-card flex items-center justify-center bg-black  max-w-sm w-full mx-auto p-4 relative h-[20rem] relative">
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon
        className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className={`text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center
                     ${hovered ? "-translate-y-4 opacity-0" : ""}`}>
          {icon}
        </div>
        <h2
          className={`dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200
            ${hovered ? "opacity-100 -translate-y-2 text-white" : "opacity-0"}`}>
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
   <div>
    <h1 className="text-xl sm:text-2xl font-extrabold text-white">{order}</h1>
   </div>
  );
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   strokeWidth="1.5"
    //   stroke="currentColor"
    //   className={className}
    //   {...rest}>
    //   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    // </svg>
    <>
    </>
  );
};


