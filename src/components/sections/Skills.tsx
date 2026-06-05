"use client";

import { motion } from "framer-motion";

const competencies = [
  { name: "Visual Communication", description: "Crafting compelling narratives through aesthetics." },
  { name: "Design Thinking", description: "Solving complex problems with empathy." },
  { name: "User Experience Design", description: "Architecting seamless and intuitive journeys." },
  { name: "Interaction Design", description: "Creating meaningful dialogues between user and system." },
  { name: "Information Architecture", description: "Structuring content for effortless discovery." },
  { name: "Motion Design", description: "Breathing life into interfaces with purposeful animation." },
  { name: "Branding & Storytelling", description: "Forging emotional connections through identity." },
  { name: "Creative Technology", description: "Bridging the gap between imagination and code." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#020813] relative overflow-hidden font-rajdhani min-h-screen flex items-center">
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI4NiI+PHBvbHlnb24gcG9pbnRzPSIyNSw1MCA1MCwzNy41IDUwLDEyLjUgMjUsMCAwLDEyLjUgMCwzNy41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2MGE1ZmEiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-[length:50px_86px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-cyan-500/50 bg-cyan-900/20 text-cyan-400 font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          >
            CREATIVE CORE ACTIVE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-wider drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] mb-6"
          >
            Design Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-cyan-100/70 max-w-3xl mx-auto font-light tracking-wide"
          >
            Where technology meets visual storytelling and human-centered design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Creative Core (Left Side) */}
          <div className="relative h-[450px] flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full border-[0.5px] border-dashed border-cyan-500/30"
            ></motion.div>
            
            {/* Middle Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/40 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-1 h-3 bg-cyan-400/80 left-1/2 -ml-[2px] top-0 origin-[2px_160px]" style={{ transform: `rotate(${i * 45}deg)` }}></div>
              ))}
            </motion.div>

            {/* Inner Core */}
            <motion.div 
              animate={{ scale: [1, 1.03, 1], filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-600/20 border border-cyan-300/50 shadow-[0_0_60px_rgba(6,182,212,0.6),inset_0_0_40px_rgba(6,182,212,0.4)] flex items-center justify-center backdrop-blur-xl"
            >
              <div className="w-[100px] h-[100px] rounded-full bg-cyan-100 shadow-[0_0_50px_rgba(255,255,255,0.9)] blur-[3px]"></div>
              <div className="absolute w-[60px] h-[60px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,1)] blur-[1px]"></div>
            </motion.div>
          </div>

          {/* Design Competencies (Right Side) */}
          <div className="flex flex-col gap-4">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                className="relative bg-cyan-950/20 border border-cyan-800/40 p-5 overflow-hidden group hover:bg-cyan-900/30 hover:border-cyan-400/60 transition-all duration-500 cursor-default rounded-sm"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md pointer-events-none"></div>
                
                {/* HUD Corner Accents (Subtle) */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/30 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/30 group-hover:border-cyan-300 transition-colors duration-300"></div>

                <div className="relative z-10 flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-100/90 tracking-wider uppercase group-hover:text-cyan-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                    {competency.name}
                  </h3>
                  <p className="text-sm md:text-base text-cyan-200/50 font-light tracking-wide group-hover:text-cyan-100/80 transition-colors duration-300">
                    {competency.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
