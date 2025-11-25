import React, { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import AIChat from './components/AIChat';
import { PERSONAL_INFO } from './constants';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4 border-b border-slate-800/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tighter text-blue-400 hover:text-blue-300 transition-colors">MS.</a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#experience" className="hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-all">Experience</a>
            <a href="#skills" className="hover:text-white hover:underline decoration-purple-500 decoration-2 underline-offset-4 transition-all">Skills</a>
            <a href="#education" className="hover:text-white hover:underline decoration-green-500 decoration-2 underline-offset-4 transition-all">Education</a>
            <a href="#contact" className="hover:text-white hover:underline decoration-pink-500 decoration-2 underline-offset-4 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <div className="bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900">
          <Experience />
          <Skills />
          <Education />
        </div>
        
        {/* Contact / Footer */}
        <footer id="contact" className="relative z-10 bg-slate-950 py-20 border-t border-slate-800 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              I'm always open to new challenges in backend and full-stack development. 
              Feel free to reach out via email or LinkedIn.
            </p>
            
            <div className="flex justify-center gap-8 mb-12">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="group text-slate-300 hover:text-blue-400 transition-colors flex flex-col items-center gap-2">
                <div className="p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-blue-400 group-hover:scale-110 transition-all">
                  <Mail size={24} />
                </div>
                <span className="text-sm">Email</span>
              </a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="group text-slate-300 hover:text-blue-400 transition-colors flex flex-col items-center gap-2">
                 <div className="p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-blue-400 group-hover:scale-110 transition-all">
                  <Linkedin size={24} />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
               <a href={`https://${PERSONAL_INFO.portfolio}`} target="_blank" rel="noreferrer" className="group text-slate-300 hover:text-blue-400 transition-colors flex flex-col items-center gap-2">
                 <div className="p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-blue-400 group-hover:scale-110 transition-all">
                  <ExternalLink size={24} />
                </div>
                <span className="text-sm">Portfolio</span>
              </a>
            </div>
            
            <div className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Manas Singh. Built with React, Three.js & Tailwind.
            </div>
          </div>
        </footer>
      </main>

      <AIChat />
    </div>
  );
};

export default App;