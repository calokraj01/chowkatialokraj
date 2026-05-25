"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PortalDivider({ nextSectionName = "Entering New Sector", sectionId }: { nextSectionName?: string, sectionId?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start tracking when the top of the container hits the bottom of the viewport
    // End tracking when the bottom of the container hits the top of the viewport
    offset: ["start end", "end start"]
  });

  // Map scroll progress to opacity and vertical movement (parallax)
  // Starts fading in immediately so there is no dead zone
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.9], [30, -30]);
  const letterSpacing = useTransform(scrollYProgress, [0.1, 0.9], ["0.5em", "1em"]);

  return (
    <div id={sectionId ? `${sectionId}-portal` : undefined} className="relative w-full">
      {/* Top Blend Gradient casting upwards into the previous section */}
      <div className="absolute top-[-150px] left-0 right-0 h-[150px] bg-gradient-to-t from-[#020202] to-transparent z-20 pointer-events-none"></div>

      <div ref={ref} className="w-full min-h-screen bg-[#020202] flex items-center justify-center relative overflow-hidden">
        {/* Very subtle background noise/texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <motion.div 
        style={{ opacity, y }}
        className="flex flex-col items-center gap-6 text-white/30"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-white/20"></div>
        
        <motion.span 
          style={{ letterSpacing }}
          className="font-orbitron text-[10px] md:text-sm uppercase font-light text-center px-4"
        >
          {nextSectionName}
        </motion.span>
        
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-white/20"></div>
      </motion.div>
      </div>

      {/* Bottom Blend Gradient casting downwards into the next section */}
      <div className="absolute bottom-[-150px] left-0 right-0 h-[150px] bg-gradient-to-b from-[#020202] to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
