"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Settings, Clock } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Co-Founder & CTO",
    company: "Ecliptz Labs",
    duration: "09/2025 - PRESENT",
    location: "Hyderabad Sea",
    description: [
      "Navigating scalable client platform development.",
      "Charting internal SaaS products and MVPs.",
      "Forging premium frontend systems.",
      "Architected projects including Linkrcap.",
    ],
  },
  {
    id: 2,
    role: "First Mate (Full Stack)",
    company: "Innoflexus Solutions",
    duration: "03/2025 – 10/2025",
    location: "Remote Waters",
    description: [
      "Built scalable full stack galleons.",
      "Developed APIs and deep-sea backend systems.",
      "Crafted responsive frontend sails.",
      "Collaborated on production-ready treasures.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const gearRotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const gearRotate2 = useTransform(scrollYProgress, [0, 1], [0, -720]);

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#0d0704] text-[#d4af37]" ref={containerRef}>
      {/* Metallic/Rusty Texture Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay z-0 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/rust.png')] pointer-events-none"></div>

      {/* Giant Background Gears */}
      <motion.div style={{ rotate: gearRotate1 }} className="absolute top-[20%] left-0 -translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] opacity-[0.07] pointer-events-none z-0">
        <Settings className="w-full h-full text-[#b87333]" strokeWidth={0.5} />
      </motion.div>
      <motion.div style={{ rotate: gearRotate2 }} className="absolute bottom-[20%] right-0 translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0">
        <Settings className="w-full h-full text-[#b87333]" strokeWidth={0.5} />
      </motion.div>

      {/* Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_100%)] z-0 pointer-events-none opacity-80"></div>

      {/* Torn edge -> Industrial border top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#8c1c13] via-[#b87333] to-[#8c1c13] opacity-50 z-10 shadow-[0_0_20px_#8c1c13]"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <motion.div style={{ rotate: gearRotate1 }} className="mb-6 text-[#b87333] drop-shadow-[0_0_10px_rgba(184,115,51,0.5)]">
            <Clock className="w-20 h-20" strokeWidth={1} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e3c79b] to-[#8b4513] drop-shadow-[0_0_15px_rgba(184,115,51,0.4)] tracking-widest uppercase">
            The Chronograph
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Copper Pipe Timeline */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[10px] bg-[#0a0502] border-x border-[#3d271d] md:-translate-x-1/2 z-0 shadow-[inset_0_0_10px_#000]"></div>

          {/* Flowing Steam/Energy in Pipe */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 top-0 w-[6px] bg-gradient-to-b from-[#ff9500] via-[#ff6b00] to-[#8c1c13] md:-translate-x-1/2 z-0 shadow-[0_0_20px_#ff6b00]"
          ></motion.div>

          <div className="flex flex-col gap-16 md:gap-32 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center justify-between group perspective-1000">

                  {/* Left Side (Empty for Odd, Content for Even) */}
                  <div className={`hidden md:block w-[calc(50%-4rem)] ${isEven ? "" : "invisible"}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        className="bg-[#1a0a05]/90 backdrop-blur-md border border-[#b87333]/50 p-8 relative shadow-[0_0_30px_rgba(184,115,51,0.2)] text-right preserve-3d"
                        style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                      >
                        {/* Rivets */}
                        <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>
                        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>
                        <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>
                        <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>

                        {/* Metallic Inner Border */}
                        <div className="absolute inset-3 border border-[#b87333]/20 pointer-events-none"></div>

                        <div className="inline-block font-orbitron text-[#ff9500] font-bold text-sm tracking-widest border-b border-[#b87333]/50 pb-1 mb-6 shadow-[0_2px_10px_rgba(255,149,0,0.2)]">
                          {exp.duration}
                        </div>
                        <h3 className="text-3xl font-cinzel font-black mb-2 text-[#e3c79b] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">{exp.role}</h3>
                        <h4 className="text-xl font-share-tech text-[#b87333] mb-8 tracking-widest">{exp.company}</h4>
                        <ul className="flex flex-col gap-4 font-serif items-end">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-3 max-w-sm flex-row-reverse text-right">
                              <span className="text-[#ff6b00] font-black mt-1 drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]">
                                <Settings className="w-4 h-4 animate-[spin_4s_linear_infinite]" />
                              </span>
                              <span className="leading-relaxed font-medium text-[#d4af37]/80">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Marker (Rotating Gear) */}
                  <motion.div
                    style={{ rotate: gearRotate1 }}
                    className="absolute left-[30px] md:left-1/2 w-16 h-16 -translate-x-1/2 z-20 text-[#ff9500] drop-shadow-[0_0_20px_rgba(255,107,0,0.8)] flex items-center justify-center bg-[#1a0a05] rounded-full border-[3px] border-[#b87333]"
                  >
                    <Settings className="w-10 h-10" strokeWidth={1.5} />
                  </motion.div>

                  {/* Right Side (Content for Odd, Empty for Even, Mobile Content for All) */}
                  <div className={`w-full pl-24 md:pl-0 md:w-[calc(50%-4rem)] ${!isEven ? "" : "md:invisible"}`}>
                    {(!isEven || true) && (
                      <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        className={`bg-[#1a0a05]/90 backdrop-blur-md border border-[#b87333]/50 p-8 relative shadow-[0_0_30px_rgba(184,115,51,0.2)] text-left preserve-3d ${isEven ? "md:hidden" : ""}`}
                        style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                      >
                        {/* Rivets */}
                        <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>
                        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>
                        <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>
                        <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#3d271d] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_1px_3px_rgba(0,0,0,0.8)] border border-[#1a0a05]"></div>

                        {/* Metallic Inner Border */}
                        <div className="absolute inset-3 border border-[#b87333]/20 pointer-events-none"></div>

                        <div className="inline-block font-orbitron text-[#ff9500] font-bold text-sm tracking-widest border-b border-[#b87333]/50 pb-1 mb-6 shadow-[0_2px_10px_rgba(255,149,0,0.2)]">
                          {exp.duration}
                        </div>
                        <h3 className="text-3xl font-cinzel font-black mb-2 text-[#e3c79b] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">{exp.role}</h3>
                        <h4 className="text-xl font-share-tech text-[#b87333] mb-8 tracking-widest">{exp.company}</h4>
                        <ul className="flex flex-col gap-4 font-serif items-start">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-3 max-w-sm">
                              <span className="text-[#ff6b00] font-black mt-1 drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]">
                                <Settings className="w-4 h-4 animate-[spin_4s_linear_infinite]" />
                              </span>
                              <span className="leading-relaxed font-medium text-[#d4af37]/80">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
