"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

const projects = [
  {
    id: 1,
    title: "HARSH KUMAR SHAKTI",
    description: "A premium, cinematic portfolio built for a US-based actor and model. Engineered by Ecliptz Labs to showcase raw talent through bold aesthetics and seamless navigation.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", // Add actual screenshot to public/ and change this path
    link: "https://www.harshkumarshakti.com/",
    tags: ["Client Project", "Ecliptz Labs", "Portfolio"],
  },
  {
    id: 2,
    title: "eGateSNAP",
    description: "Our flagship proprietary product. An intelligent gate security system for colleges that strictly tracks student leaves, approvals, and latecomers with real-time monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Add actual screenshot to public/ and change this path
    link: "https://www.egatesnap.com/",
    tags: ["Ecliptz Product", "SaaS", "Security"],
  },
  {
    id: 3,
    title: "LINKRCAP",
    description: "A networking portal bridging the gap between startups and investors. Designed to turn early-stage ideas into clear, actionable next steps and secure funding.",
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80&w=800", // Add actual screenshot to public/ and change this path
    link: "https://www.linkrcap.com/",
    tags: ["Client Project", "Networking", "Startups"],
  },
  {
    id: 4,
    title: "ALOKSCOSMOS",
    description: "A complete 3D immersive portfolio website offering a space-like experience. Features unique 3D space components and stunning stellar interactions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", // Add actual screenshot to public/ and change this path
    link: "https://alokscosmos.vercel.app/",
    tags: ["3D Web", "Three.js", "Portfolio"],
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Use a MotionValue instead of React state to completely bypass React render cycle closures!
  const scrollRange = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const updateRange = () => {
      if (trackRef.current) {
        scrollRange.set(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    
    updateRange();
    // Re-measure if fonts load late or window resizes
    setTimeout(updateRange, 500);
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, [scrollRange]);

  // Framer Motion transforms the Y progress by multiplying it with the LATEST motion value directly.
  const x = useTransform(scrollYProgress, (progress) => {
    return -(progress * scrollRange.get());
  });

  return (
    <section id="projects" ref={targetRef} className="relative h-[200vh] bg-black font-share-tech text-[#0f0]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Matrix Rain Background */}
        <MatrixRain />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full h-full flex items-center">
          {/* Horizontal Scroll Track */}
          <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-16 md:gap-24 pl-[5vw] md:pl-[10vw] pr-[8vw] md:pr-[20vw] lg:pr-[28vw]">
            
            {/* Slide 1: Section Title */}
            <div className="w-[85vw] md:w-[40vw] flex-shrink-0 mr-8 md:mr-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-[#0f0]"></div>
                  <span className="text-[#0f0] font-mono uppercase tracking-widest text-sm">Classified Data</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#0f0] to-[#050] drop-shadow-[0_0_20px_rgba(0,255,0,0.4)] leading-tight mb-8">
                  Mainframe<br />Archives
                </h2>
                <p className="text-[#0f0]/70 font-mono text-lg md:text-xl leading-relaxed max-w-lg border-l-2 border-[#0f0]/30 pl-6">
                  Accessing highly classified digital constructs, proprietary infrastructure, and premium client operations. Swipe to decrypt.
                </p>
              </motion.div>
            </div>

            {/* Slide 2+: Project Cards */}
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group relative perspective-1000"
              >
                {/* Cyberpunk Glitch Background */}
                <div className="absolute -inset-2 bg-[#0f0]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"></div>
                
                <motion.div 
                  className="relative preserve-3d bg-black border-2 border-[#0f0] rounded-sm overflow-hidden flex flex-col h-full"
                  whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image Container with Glitch Overlay */}
                  <div className="relative h-64 md:h-[40vh] overflow-hidden border-b-2 border-[#0f0]">
                    {/* Scanline overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 pointer-events-none mix-blend-overlay opacity-50"></div>
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-150 mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Dark Tint overlay */}
                    <div className="absolute inset-0 bg-[#0f0]/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500"></div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/60 backdrop-blur-sm">
                      {project.link !== "#" ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#0f0] text-black flex items-center justify-center hover:bg-black hover:text-[#0f0] border-2 border-[#0f0] transition-colors shadow-[0_0_15px_rgba(0,255,0,0.5)] cursor-pointer">
                          <ExternalLink className="w-8 h-8" />
                        </a>
                      ) : (
                        <div className="w-16 h-16 bg-[#0f0] text-black flex items-center justify-center hover:bg-black hover:text-[#0f0] border-2 border-[#0f0] transition-colors shadow-[0_0_15px_rgba(0,255,0,0.5)] cursor-not-allowed opacity-50">
                          <ExternalLink className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cyberpunk Content */}
                  <div className="p-8 md:p-10 relative flex-grow flex flex-col justify-between">
                    {/* Corner decorators */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0f0] m-4"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0f0] m-4"></div>

                    <div>
                      <div className="text-sm text-[#0f0]/70 mb-2 font-bold tracking-widest uppercase">FILE {idx + 1}</div>
                      <h3 className="text-3xl md:text-5xl font-bold mb-6 uppercase drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]">{project.title}</h3>
                      <p className="text-[#0f0]/80 mb-8 leading-relaxed max-w-lg text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm uppercase tracking-wider bg-[#0f0]/10 border border-[#0f0]/40 text-[#0f0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
