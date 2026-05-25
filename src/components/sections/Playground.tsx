"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function Wormhole() {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Pulse effect
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[1, 100, 100]}
        scale={2.5}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#ff6b00" : "#0055ff"}
          attach="material"
          distort={hovered ? 0.8 : 0.4}
          speed={hovered ? 5 : 2}
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </group>
  );
}

export default function Playground() {
  return (
    <section id="playground" className="relative h-screen bg-black overflow-hidden font-orbitron text-white">
      {/* Sci-Fi Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] z-0 pointer-events-none perspective-[1000px] transform-gpu rotateX-[60deg] scale-[2] translate-y-[20%]"></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 pointer-events-auto"
        >
          <div className="inline-block px-3 py-1 mb-4 border border-blue-500/50 text-blue-400 text-xs tracking-[0.3em] uppercase bg-blue-900/20 backdrop-blur-sm">
            Anomaly Detected
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(0,85,255,0.8)]">
            Singularity
          </h2>
          <p className="mt-4 text-blue-200/60 max-w-lg mx-auto font-share-tech text-lg mb-8">
            WARNING: Gravitational distortion field active. Do not approach the event horizon.
          </p>

          {/* Linguistic Protocols / Languages */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full max-w-3xl mx-auto pointer-events-auto bg-[#000510]/60 backdrop-blur-md border border-blue-500/30 p-6 shadow-[0_0_30px_rgba(0,85,255,0.15)] relative overflow-hidden"
            style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
          >
            {/* Tech Accents */}
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-blue-500"></div>

            <div className="flex items-center justify-between mb-6 border-b border-blue-500/30 pb-2">
              <h3 className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm font-orbitron flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Linguistic Protocols
              </h3>
              <span className="text-blue-500/50 text-xs font-mono tracking-widest">STATUS: ONLINE</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-share-tech text-left">
              {[
                { lang: "Pardhi", level: "Native", code: "NATIVE", percent: 100 },
                { lang: "English", level: "Proficient", code: "C2", percent: 95 },
                { lang: "Hindi", level: "Proficient", code: "C2", percent: 95 },
                { lang: "Telugu", level: "Upper Intermediate", code: "B2", percent: 75 }
              ].map((l, i) => (
                <div key={i} className="flex flex-col gap-2 relative group">
                  <div className="flex justify-between text-sm text-blue-100">
                    <span className="tracking-widest uppercase font-bold text-white group-hover:text-blue-300 transition-colors">
                      {l.lang} <span className="text-blue-500/60 ml-1 text-xs">[{l.code}]</span>
                    </span>
                    <span className="text-blue-400/80">{l.level}</span>
                  </div>
                  <div className="h-[3px] w-full bg-blue-900/30 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                      className="h-full bg-blue-500 shadow-[0_0_15px_#0055ff] relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[1px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Canvas Context */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={5} color="#0055ff" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Wormhole />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Foreground Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_100%)] z-10 pointer-events-none opacity-90"></div>
    </section>
  );
}
