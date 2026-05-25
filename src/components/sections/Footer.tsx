"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Embers animation for the background
  const embers = Array.from({ length: 40 });

  return (
    <footer className="relative bg-[#0a0a0a] pt-40 pb-12 overflow-hidden font-serif border-t-4 border-[#8c1c13]">
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#3a0a0a] via-[#0a0a0a] to-[#000000] z-0"></div>

      {/* Epic Dark Dragon Background Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.5] md:opacity-[0.25] mix-blend-screen bg-top md:bg-[center_15%] bg-contain md:bg-cover bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: "url('/dark_dragon.png')", filter: "contrast(1.5) grayscale(0.5)" }}
      ></div>

      {/* Floating Fire Embers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {isMounted && embers.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_10px_#ff0000]"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: 100,
              opacity: 0
            }}
            animate={{
              y: -800,
              x: `calc(${Math.random() * 100}vw - 200px)`,
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{ filter: "blur(1px)" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">


        {/* The End Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 3 }}
          className="mb-16 flex flex-col items-center"
        >
          <div className="mb-12 relative flex items-center justify-center">
            <div className="h-[2px] w-12 md:w-32 bg-gradient-to-r from-transparent to-[#cfa144]"></div>
            <span className="px-8 text-2xl md:text-4xl font-cinzel font-black tracking-[0.5em] text-[#8c1c13] drop-shadow-[0_0_15px_rgba(140,28,19,0.8)]">
              VALAR MORGHULIS
            </span>
            <div className="h-[2px] w-12 md:w-32 bg-gradient-to-l from-transparent to-[#cfa144]"></div>
          </div>

          <div className="flex gap-8 justify-center mt-6">
            {["Ravens (GitHub)", "The Citadel (LinkedIn)", "Whispers (Twitter)"].map((social) => (
              <a key={social} href="#" className="text-xs md:text-sm font-cinzel uppercase tracking-[0.2em] text-[#cfa144]/60 hover:text-[#cfa144] transition-colors hover:drop-shadow-[0_0_5px_rgba(207,161,68,0.8)]">
                {social}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Massive Name */}
        <div className="w-full mt-10 mb-8 pointer-events-none select-none flex justify-center px-4">
          <h1 className="text-[10vw] md:text-[7vw] font-black font-cinzel text-[#cfa144]/15 leading-none drop-shadow-[0_0_20px_rgba(207,161,68,0.1)] text-center tracking-tight">
            CHOWKATI ALOK RAJ
          </h1>
        </div>

        {/* Copyright */}
        <div className="text-[10px] md:text-xs tracking-[0.2em] opacity-40 uppercase flex flex-col gap-3 font-cinzel pb-8">
          <p>&copy; {currentYear} CHOWKATI ALOK RAJ. FIRST OF HIS NAME. ALL RIGHTS RESERVED.</p>
          <p>WINTER IS COMING. BUT THE CODE HAS BEEN DEPLOYED.</p>
        </div>
      </div>
    </footer>
  );
}
