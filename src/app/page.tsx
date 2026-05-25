import Preloader from "@/components/Preloader";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Playground from "@/components/sections/Playground";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import PortalDivider from "@/components/ui/PortalDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary selection:text-primary-foreground">
      <Preloader />
      <Navbar />
      
      {/* 
        We use an ID based routing for the navigation. 
        Each section will have a corresponding ID.
      */}
      <div id="home">
        <Hero />
      </div>
      
      <PortalDivider nextSectionName="The Marauder's Profile" sectionId="about" />
      <About />
      
      <Education />
      
      <PortalDivider nextSectionName="The Chronograph" sectionId="experience" />
      <Experience />
      
      <PortalDivider nextSectionName="Skill Arsenal" sectionId="skills" />
      <Skills />
      
      <PortalDivider nextSectionName="Mainframe Archives" sectionId="projects" />
      <Projects />
      
      <PortalDivider nextSectionName="Singularity" sectionId="playground" />
      <Playground />
      
      <PortalDivider nextSectionName="Incoming Transmissions" sectionId="contact" />
      <Contact />
      
      <Footer />
    </main>
  );
}
