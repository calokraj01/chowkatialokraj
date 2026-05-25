"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    school: "Malla Reddy College of Engineering & Tech",
    location: "Hyderabad",
    score: "Pursuing",
    duration: "2022 - 2026",
    board: "JNTUH",
  },
  {
    id: 2,
    degree: "12th Grade (Senior Secondary)",
    school: "Pallavi Model School",
    location: "Hyderabad",
    score: "66.4%",
    duration: "2020 - 2022",
    board: "CBSE",
  },
  {
    id: 3,
    degree: "10th Grade (Secondary)",
    school: "St. Martins High School",
    location: "Hyderabad",
    score: "75.83%",
    duration: "2007 - 2020",
    board: "ICSE",
  },
];

export default function Education() {
  return (
    <section className="py-16 bg-[#110814] relative overflow-hidden font-serif text-[#e3c79b]">
      {/* Texture to seamlessly blend with About section */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10 justify-center"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
          <h2 className="text-3xl font-black uppercase tracking-wider text-[#d4af37] font-cinzel flex items-center gap-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <GraduationCap className="w-6 h-6 text-[#8c1c13]" />
            Academic Intel
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a0f2e]/60 border border-[#d4af37]/20 rounded p-6 hover:border-[#d4af37]/60 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)] group relative overflow-hidden"
            >
              {/* Subtle magical hover glow */}
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs font-bold font-cinzel bg-[#110814]/80 border border-[#8c1c13]/50 rounded text-[#d4af37]/70 mb-3 group-hover:text-[#d4af37] transition-colors">
                  {edu.board}
                </span>
                <h3 className="text-lg font-black font-cinzel text-[#d4af37] mb-2 leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-[#e3c79b]/80 font-medium italic">
                  {edu.school}
                </h4>
              </div>

              <div className="space-y-3 mt-6 text-sm text-[#e3c79b]/70 border-t border-[#d4af37]/10 pt-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#8c1c13]" />
                  <span className="font-medium">{edu.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#8c1c13]" />
                  <span className="font-medium">{edu.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-[#d4af37]" />
                  <span className="font-bold text-[#d4af37]">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
