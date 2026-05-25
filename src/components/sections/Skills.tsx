"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 95 },
  { name: "React.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Three.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 88 },
  { name: "GSAP", level: 80 },
  { name: "Node.js", level: 82 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#020813] relative overflow-hidden font-rajdhani min-h-screen flex items-center">
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI4NiI+PHBvbHlnb24gcG9pbnRzPSIyNSw1MCA1MCwzNy41IDUwLDEyLjUgMjUsMCAwLDEyLjUgMCwzNy41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MGE1ZmEiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-[length:50px_86px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-cyan-500/50 bg-cyan-900/20 text-cyan-400 font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          >
            S.T.A.R.K. SYSTEMS ACTIVE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-wider drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          >
            Tactical Arsenal
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Arc Reactor Core (Left Side) */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-cyan-500/40"
            ></motion.div>
            
            {/* Middle Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] rounded-full border-[2px] border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute w-2 h-4 bg-cyan-400 left-1/2 -ml-1 top-0 origin-[1px_140px]" style={{ transform: `rotate(${i * 30}deg)` }}></div>
              ))}
            </motion.div>

            {/* Inner Core */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-[150px] h-[150px] rounded-full bg-cyan-500/20 border-4 border-cyan-300 shadow-[0_0_50px_rgba(6,182,212,0.8),inset_0_0_30px_rgba(6,182,212,0.8)] flex items-center justify-center backdrop-blur-md"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,1)] blur-[2px]"></div>
            </motion.div>
          </div>

          {/* HUD Data Panels (Right Side) */}
          <div className="flex flex-col gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-cyan-950/30 border border-cyan-500/30 p-4 overflow-hidden group"
              >
                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>

                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-bold text-cyan-100 tracking-widest uppercase">{skill.name}</h3>
                  <span className="text-cyan-400 font-share-tech font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 w-full bg-cyan-950/50 rounded-sm overflow-hidden border border-cyan-900">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] relative"
                  >
                    {/* Progress scanline */}
                    <div className="absolute top-0 bottom-0 right-0 w-4 bg-white/50 blur-[2px]"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
