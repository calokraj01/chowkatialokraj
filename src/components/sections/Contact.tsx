"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0c0400] text-[#ffb770]">
      {/* Mystical Portal Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 mix-blend-screen">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-full border-[10px] border-dashed border-[#ff6b00]/30 flex items-center justify-center shadow-[0_0_100px_rgba(255,107,0,0.5),inset_0_0_100px_rgba(255,107,0,0.5)]"
        >
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[700px] h-[700px] rounded-full border-[5px] border-dotted border-[#ff9500]/40 flex items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 180, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ff6b00]/10 to-transparent blur-3xl"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-cinzel font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#ffe7b3] to-[#ff8c00] drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]">
            Open a Portal
          </h2>
          <p className="mt-4 font-serif text-[#ffb770]/80 text-xl max-w-2xl mx-auto">
            Send a message across the multiverse. The mystic arts await your communication.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#1a0800]/60 backdrop-blur-md border-2 border-[#ff6b00]/30 p-8 md:p-12 rounded-xl shadow-[0_0_50px_rgba(255,107,0,0.2)]"
        >
          {/* Corner Runes */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#ff9500] opacity-60"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ff9500] opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ff9500] opacity-60"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#ff9500] opacity-60"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 font-serif">
            <div className="relative group">
              <input type="text" id="name" required className="w-full bg-transparent border-b border-[#ff6b00]/50 py-4 outline-none text-xl transition-colors focus:border-[#ff9500] peer" placeholder=" " />
              <label htmlFor="name" className="absolute left-0 top-4 text-xl text-[#ffb770]/50 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#ff9500] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl">
                Your True Name
              </label>
            </div>

            <div className="relative group">
              <input type="email" id="email" required className="w-full bg-transparent border-b border-[#ff6b00]/50 py-4 outline-none text-xl transition-colors focus:border-[#ff9500] peer" placeholder=" " />
              <label htmlFor="email" className="absolute left-0 top-4 text-xl text-[#ffb770]/50 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#ff9500] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl">
                Your Dimensional Coordinates (Email)
              </label>
            </div>

            <div className="relative group mt-6">
              <textarea id="message" required rows={4} className="w-full bg-transparent border-b border-[#ff6b00]/50 py-4 outline-none text-xl transition-colors focus:border-[#ff9500] peer resize-none" placeholder=" "></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-xl text-[#ffb770]/50 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#ff9500] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl">
                The Incantation (Message)
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className="mt-6 w-full h-16 bg-[#ff6b00] text-[#1a0800] hover:bg-[#ff9500] font-cinzel font-black tracking-widest text-xl uppercase transition-all shadow-[0_0_20px_rgba(255,107,0,0.5)] hover:shadow-[0_0_40px_rgba(255,149,0,0.8)] disabled:opacity-70 flex items-center justify-center relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 animate-spin text-[#1a0800]" />
                    Conjuring...
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3 text-[#1a0800]">
                    <Sparkles className="w-6 h-6" />
                    Portal Opened!
                  </motion.div>
                ) : (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    Cast Spell
                    <Send className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
