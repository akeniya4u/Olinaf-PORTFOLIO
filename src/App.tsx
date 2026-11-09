import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCV={() => setCvModalOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Technical & Professional Skills */}
        <Skills />

        {/* Experience & Community Activities */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Professional Certifications */}
        <Certifications />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCV={() => setCvModalOpen(true)} />

      {/* Printable / Downloadable CV Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
