import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/useTheme';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Volunteering } from './components/Volunteering';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

const PortfolioContent = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen text-slate-100 transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white ${
      theme === 'light'
        ? 'bg-slate-100 text-slate-800'
        : theme === 'midnight'
        ? 'bg-[#060814] text-slate-100'
        : 'bg-slate-950 text-slate-100'
    }`}>
      {/* Interactive Ambient Particles & Glow */}
      <ParticleBackground />

      {/* Main Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Projects />
        <Volunteering />
        <Certificates />
        <Contact />
      </main>

      {/* Comprehensive Better Footer */}
      <Footer />

      {/* Interactive Resume View/Print Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {/* Dynamic Toast Notifications */}
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
