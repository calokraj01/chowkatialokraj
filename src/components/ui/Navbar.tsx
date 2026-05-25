"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Home, User, Briefcase, Code, LayoutGrid, Mail } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: LayoutGrid },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPortaling, setIsPortaling] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Section Observer for Dynamic Navbar Theme
    const elements = document.querySelectorAll('[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the corresponding nav item to set active
            const rawId = entry.target.id;
            const id = rawId.endsWith('-portal') ? rawId.replace('-portal', '') : rawId;
            
            const navItem = navItems.find(item => item.href === `#${id}`);
            if (navItem && !isPortaling) {
              setActive(navItem.name);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -49% 0px" } // 1px tripwire in the middle of the viewport
    );

    const observedElements: Element[] = [];
    elements.forEach(el => {
      if (el.tagName.toLowerCase() === 'section' || el.id.endsWith('-portal')) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observedElements.forEach(el => observer.unobserve(el));
    };
  }, [isPortaling]);

  // Dynamic Theme Mapping based on active section
  const themeMap: Record<string, string> = {
    "Home": "from-blue-500 via-purple-500 to-cyan-500",
    "About": "from-[#d4af37] via-[#8c1c13] to-[#d4af37]",
    "Experience": "from-[#b87333] via-[#8b4513] to-[#d4af37]",
    "Skills": "from-cyan-300 via-teal-500 to-cyan-600",
    "Projects": "from-[#0f0] via-[#050] to-[#0f0]",
    "Contact": "from-[#ff6b00] via-[#ff9500] to-[#ff0000]",
  };

  const activeIndicatorMap: Record<string, string> = {
    "Home": "from-blue-500/20 to-cyan-500/20 border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
    "About": "from-[#d4af37]/20 to-[#8c1c13]/20 border-[#d4af37]/50 shadow-[0_0_10px_rgba(212,175,55,0.3)]",
    "Experience": "from-[#b87333]/20 to-[#8b4513]/20 border-[#b87333]/50 shadow-[0_0_10px_rgba(184,115,51,0.3)]",
    "Skills": "from-cyan-300/20 to-teal-500/20 border-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.3)]",
    "Projects": "from-[#0f0]/20 to-[#050]/20 border-[#0f0]/50 shadow-[0_0_10px_rgba(0,255,0,0.3)]",
    "Contact": "from-[#ff6b00]/20 to-[#ff9500]/20 border-[#ff6b00]/50 shadow-[0_0_10px_rgba(255,107,0,0.3)]",
  };

  const scrollbarColorMap: Record<string, string> = {
    "Home": "#3b82f6",
    "About": "#d4af37",
    "Experience": "#b87333",
    "Skills": "#22d3ee",
    "Projects": "#00ff00",
    "Contact": "#ff6b00",
  };

  const currentTheme = themeMap[active] || themeMap["Home"];
  const currentIndicator = activeIndicatorMap[active] || activeIndicatorMap["Home"];

  useEffect(() => {
    // Dynamic Scrollbar Coloring
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--scrollbar-color', scrollbarColorMap[active] || "#3b82f6");
    }
  }, [active]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    if (active === item.name || isPortaling) return;

    // Start Portal
    setIsPortaling(true);
    setMobileMenuOpen(false);

    setTimeout(() => {
      // Hard Cut
      const target = document.querySelector(item.href) as HTMLElement;
      if (target) {
        if (lenis) {
          lenis.scrollTo(target, { immediate: true });
        } else {
          window.scrollTo(0, target.offsetTop);
        }
      }
      setActive(item.name);
      
      // End Portal
      setTimeout(() => setIsPortaling(false), 100);
    }, 600);
  };

  return (
    <>
      {/* Portal Transition Overlay */}
      <AnimatePresence>
        {isPortaling && (
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
          >
             {/* Swirling energy effect */}
             <motion.div 
               animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               className="w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] rounded-full border-[20px] border-dashed border-[#ff9500]/50 absolute shadow-[0_0_150px_#ff6b00]"
             />
             <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               className="w-[60vw] md:w-[30vw] h-[60vw] md:h-[30vw] rounded-full border-[10px] border-dotted border-blue-500/80 absolute shadow-[0_0_100px_#0055ff]"
             />
             <h2 className="text-4xl md:text-7xl font-cinzel text-white absolute z-10 font-black tracking-widest drop-shadow-[0_0_20px_#fff]">
               JUMPING
             </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
          scrolled ? "top-4 w-[95%] md:w-auto" : "top-[8%] w-[95%] md:w-auto"
        )}
      >
        {/* Animated Glowing Border */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentTheme} p-[1px] opacity-70 transition-colors duration-1000`}>
          <div className={`absolute inset-0 rounded-full blur-md bg-gradient-to-r ${currentTheme} opacity-50 animate-pulse transition-colors duration-1000`}></div>
        </div>
        
        <div className="relative flex items-center justify-between md:justify-center gap-2 p-2 rounded-full bg-black/80 backdrop-blur-2xl shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-white/5">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-white/10 transition-colors text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigate(e, item)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-colors hover:text-white cursor-pointer font-orbitron",
                  active === item.name ? "text-white" : "text-white/50"
                )}
              >
                {active === item.name && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 bg-gradient-to-r ${currentIndicator} rounded-full border transition-colors duration-1000`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleNavigate(e, item)}
                  className="flex items-center gap-4 text-2xl font-medium p-4 rounded-2xl hover:bg-muted active:bg-primary/20 transition-colors cursor-pointer"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
