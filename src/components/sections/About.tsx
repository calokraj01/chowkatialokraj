"use client";

import { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, MonitorPlay, Zap, Trophy, Wand2 } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } },
  };

  const inkVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-[#0d0510] text-[#e8d5b5]" ref={ref}>
      {/* Epic Magical Map Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30 mix-blend-screen bg-[url('/magical_map.png')] bg-cover bg-center"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Mystical Background Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] z-0"></div>

      {/* Floating Magical Dust Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 800,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              x: [null, `calc(${Math.random() * 100}vw - 50px)`],
              opacity: [0, Math.random() * 0.8 + 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Magical Wand Glow following mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#8c1c13]/20 blur-[120px] pointer-events-none z-0 mix-blend-screen"
        animate={{ x: mousePos.x - 250, y: mousePos.y - 250 }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="text-center mb-16">
          <motion.div variants={inkVariants} className="inline-flex items-center gap-2 mb-4 text-[#d4af37]">
            <Wand2 className="w-5 h-5 animate-pulse" />
            <span className="font-cinzel tracking-[0.2em] uppercase text-sm font-bold">The Marauder's Profile</span>
          </motion.div>
          <motion.h2 variants={inkVariants} className="text-5xl md:text-7xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-[#f3e5ab] to-[#d4af37]">
            I solemnly swear...
          </motion.h2>
          <motion.div variants={inkVariants} className="mt-6 font-cinzel text-xl text-[#d4af37]/80">
            ...to engineer exceptional digital experiences.
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Main Magical Bio */}
          <motion.div variants={inkVariants} className="md:col-span-2 relative p-10 border-2 border-[#d4af37]/30 rounded-lg bg-[#1a0f2e]/60 backdrop-blur-sm group overflow-hidden">
            {/* Corner flourishes */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/50"></div>

            <h3 className="text-3xl font-cinzel mb-6 text-[#f3e5ab]">The Master of Arts</h3>
            <p className="text-lg leading-relaxed font-serif text-[#e8d5b5]/80">
              Much like wielding a wand, I craft digital experiences using powerful spells written in JavaScript and TypeScript.
              As a <strong className="text-[#d4af37] font-semibold font-cinzel">Frontend Engineer</strong> and <strong className="text-[#d4af37] font-semibold font-cinzel">Full Stack Wizard</strong>,
              I conjure responsive interfaces and robust architectures out of thin air. Currently serving as the <strong className="text-[#d4af37] font-semibold font-cinzel">Co-Founder & CTO at Ecliptz Labs</strong>,
              where we brew potions of scale and weave charms of performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Frontend Spellcasting", "Full Stack Alchemy", "UI/UX Charms", "CTO Potions"].map((label) => (
                <span key={label} className="px-4 py-2 font-cinzel text-xs uppercase tracking-wider border border-[#d4af37]/40 text-[#d4af37] rounded transition-all hover:bg-[#d4af37]/20 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Magical Artifact (Image) */}
          <motion.div variants={inkVariants} className="relative border-2 border-[#d4af37]/30 p-2 rounded-lg bg-[#1a0f2e]/60 group">
            <div className="w-full h-full relative overflow-hidden rounded filter sepia-[0.3] contrast-125 group-hover:sepia-0 transition-all duration-1000">
              <img src="/wizard_profile.jpg" alt="Chowkati Alok Raj as a Wizard" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000" />
              {/* Magical fog overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#110814] via-transparent to-[#110814]/30"></div>
            </div>
            <p className="absolute bottom-6 left-0 right-0 text-center font-cinzel text-[#d4af37] text-xl tracking-widest drop-shadow-[0_0_5px_#000]">
              Chowkati Alok Raj
            </p>
          </motion.div>

          {/* Magical Stats */}
          {[
            { label: "Spells Cast", value: "15+", icon: Code2, desc: "Projects" },
            { label: "Artifacts", value: "20+", icon: Wand2, desc: "Tech" },
            { label: "Alliances", value: "3+", icon: Zap, desc: "Clients" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={inkVariants}
              className="relative border border-[#d4af37]/30 p-8 rounded-xl bg-[#0a0510]/80 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-700 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              {/* Magical Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d4af37]/0 group-hover:to-[#d4af37]/20 transition-all duration-700"></div>
              
              <stat.icon className="relative z-10 w-10 h-10 text-[#d4af37] mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
              <h4 className="relative z-10 text-4xl md:text-5xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#d4af37] mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">{stat.value}</h4>
              <p className="relative z-10 text-xs md:text-sm font-cinzel uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#d4af37] font-bold">{stat.label}</p>
              
              <div className="relative z-10 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-3 group-hover:w-24 transition-all duration-500"></div>
              
              <p className="relative z-10 text-[10px] md:text-[11px] font-serif tracking-widest uppercase text-[#e8d5b5]/50 group-hover:text-[#e8d5b5]/80 transition-colors">{stat.desc}</p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
