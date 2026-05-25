"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 2;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Cinematic Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

          {/* Central Logo / Name */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-4xl md:text-7xl font-cinzel font-black tracking-[0.3em] text-[#cfa144] drop-shadow-[0_0_20px_rgba(207,161,68,0.5)] uppercase mb-2">
                CHOWKATI ALOK RAJ
              </h1>

              {/* Glitch overlay */}
              <motion.h1
                animate={{ x: [-2, 2, -1, 0], opacity: [0, 0.8, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="text-4xl md:text-7xl font-cinzel font-black tracking-[0.3em] text-[#ff0000] absolute top-0 left-0 uppercase mix-blend-screen"
              >
                CHOWKATI ALOK RAJ
              </motion.h1>
              <motion.h1
                animate={{ x: [2, -2, 1, 0], opacity: [0, 0.8, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="text-4xl md:text-7xl font-cinzel font-black tracking-[0.3em] text-[#00aaff] absolute top-0 left-0 uppercase mix-blend-screen"
              >
                CHOWKATI ALOK RAJ
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center mb-16 text-center gap-4 px-4"
            >
              <h2 className="text-sm md:text-xl font-orbitron tracking-[0.4em] md:tracking-[0.5em] text-white/70 uppercase">
                Dive into different fictions
              </h2>
              <p className="text-[10px] md:text-xs font-share-tech tracking-widest text-white/40 uppercase">
                For the best experience, please use a desktop or laptop.
              </p>
            </motion.div>

            {/* Loading Bar Container */}
            <div className="w-64 md:w-96 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#cfa144] shadow-[0_0_15px_#cfa144]"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>

            {/* Percentage Text */}
            <div className="mt-4 font-share-tech text-[#cfa144] tracking-widest flex items-center gap-4">
              <span>SYS.BOOT</span>
              <span>[{progress >= 100 ? 100 : progress}%]</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
