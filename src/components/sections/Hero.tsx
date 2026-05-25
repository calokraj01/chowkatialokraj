"use client";

import { motion } from "framer-motion";
import StarfieldBackground from "@/components/StarfieldBackground";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Star Wars Hyperspace Background */}
      <StarfieldBackground />

      {/* Realistic Sci-Fi Spaceship Window Frame Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none drop-shadow-[0_0_50px_rgba(0,0,0,1)] overflow-hidden">
        <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
          <defs>
            {/* The mask punches a rounded window hole through the metallic border */}
            <mask id="window-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect x="4%" y="6%" width="92%" height="88%" rx="80" ry="80" fill="black" />
            </mask>
            
            {/* Seamless metallic texture */}
            <pattern id="metal-pattern" patternUnits="userSpaceOnUse" width="400" height="400">
              <image href="/metal_texture.png" width="400" height="400" />
            </pattern>
            
            {/* Gradient for the inner thick rim to give a 3D bevel effect */}
            <linearGradient id="inner-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            
            {/* Sci-fi glow effect for LED lights */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Solid Metallic Texture Frame with hole in middle */}
          <rect width="100%" height="100%" fill="url(#metal-pattern)" mask="url(#window-mask)" />
          
          {/* Moody shadow multiplied over the metal to give it cinematic cockpit lighting */}
          <rect width="100%" height="100%" fill="#020617" opacity="0.6" mask="url(#window-mask)" style={{ mixBlendMode: 'multiply' }} />

          {/* Thick Inner Metallic Rim (chamfered bevel effect) */}
          <rect x="4%" y="6%" width="92%" height="88%" rx="80" ry="80" fill="none" stroke="url(#inner-rim)" strokeWidth="16" opacity="0.9" />
          <rect x="4%" y="6%" width="92%" height="88%" rx="80" ry="80" fill="none" stroke="#000" strokeWidth="4" opacity="0.8" />

          {/* Industrial Rivets/Bolts pattern */}
          <rect x="2.5%" y="4%" width="95%" height="92%" rx="90" ry="90" fill="none" stroke="#000" strokeWidth="5" strokeDasharray="1 80" strokeLinecap="round" opacity="0.5" />

          {/* High-Tech Cockpit LED Light Bars */}
          <rect x="40%" y="2.5%" width="20%" height="1%" rx="4" fill="#0ea5e9" filter="url(#glow)" opacity="0.9" />
          <rect x="40%" y="96.5%" width="20%" height="1%" rx="4" fill="#e11d48" filter="url(#glow)" opacity="0.9" />
          
          <rect x="2%" y="40%" width="0.5%" height="20%" rx="4" fill="#0ea5e9" filter="url(#glow)" opacity="0.6" />
          <rect x="97.5%" y="40%" width="0.5%" height="20%" rx="4" fill="#0ea5e9" filter="url(#glow)" opacity="0.6" />
        </svg>
      </div>

      {/* Vignette Overlay (Darkens edges to focus on center) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] z-10 opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10 relative pt-20 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text Content - Left Side */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-1 px-4 rounded-sm bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] font-orbitron">
                Transmission Incoming
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] font-orbitron uppercase"
            >
              Chowkati <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(56,189,248,0.8)]">
                Alok Raj
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-100/70 mb-10 max-w-xl mx-auto md:mx-0 font-light leading-relaxed font-share-tech"
            >
              Creative Frontend Engineer & Jedi of Digital Experiences. I build immersive web systems with bold visuals, high performance, and modern motion.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 font-orbitron"
            >
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-white font-bold text-sm tracking-widest uppercase overflow-hidden"
              >
                {/* Glowing border effect */}
                <span className="absolute inset-0 border border-blue-400 rounded-sm shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all group-hover:shadow-[0_0_30px_rgba(96,165,250,0.8)] group-hover:bg-blue-500/10"></span>
                
                {/* Scanline effect on hover */}
                <span className="absolute inset-0 translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></span>
                
                <span className="relative z-10">Enter Database</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 h-14 px-8 bg-transparent text-white/70 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors"
              >
                <span className="relative z-10">Download Intel</span>
                <Download className="w-4 h-4 relative z-10" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            </motion.div>
          </div>

          {/* Image Profile - Right Side */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 w-full flex justify-center md:justify-end relative"
          >
            {/* Hologram Base Emitter */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-64 h-8 rounded-[100%] bg-blue-500/40 blur-xl shadow-[0_0_50px_rgba(59,130,246,0.8)] z-0"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 rounded-[100%] bg-blue-300 shadow-[0_0_20px_rgba(147,197,253,1)] z-0"></div>
            
            {/* Hologram Beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[120%] bg-gradient-to-t from-blue-500/30 to-transparent blur-md clip-path-polygon-[20%_100%,80%_100%,100%_0,0_0] z-0 pointer-events-none mix-blend-screen"></div>

            <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden z-10 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] group perspective-1000">
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  filter: [
                    "brightness(1) contrast(1.2) sepia(0.3) hue-rotate(180deg) saturate(1.5)", 
                    "brightness(1.2) contrast(1.1) sepia(0.3) hue-rotate(180deg) saturate(1.8)", 
                    "brightness(1) contrast(1.2) sepia(0.3) hue-rotate(180deg) saturate(1.5)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full preserve-3d"
              >
                {/* Scanlines Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 pointer-events-none mix-blend-overlay opacity-50"></div>
                
                {/* User Image */}
                <img 
                  src="/22N31A6722_CAlokRaj.png" 
                  alt="Chowkati Alok Raj" 
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90"
                  onError={(e) => {
                    // Fallback to a placeholder if the user hasn't added their picture yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1506880018603-83d5b62f40ca?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Glitch Overlay Effect */}
                <motion.div 
                  animate={{ opacity: [0, 0.1, 0, 0.2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1] }}
                  className="absolute inset-0 bg-blue-400 mix-blend-color-burn z-30"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
