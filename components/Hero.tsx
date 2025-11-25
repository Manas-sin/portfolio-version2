import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Professional "Mask Reveal" Animation
      tl.from(".hero-line-parent", {
        duration: 0,
        css: { overflow: "hidden" }
      })
      .from(".hero-line-child", {
        yPercent: 100,
        ease: "power4.out",
        duration: 1.5,
        stagger: 0.2
      })
      .from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.5");

    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={comp} className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 z-10 overflow-hidden select-none">
      
      {/* Subtle ambient light behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl relative z-10">
        
        {/* Professional Tagline */}
        <div className="hero-line-parent overflow-hidden mb-2">
           <p className="hero-line-child text-blue-400 font-medium tracking-[0.2em] text-sm md:text-base uppercase">
             Software Development Engineer
           </p>
        </div>

        {/* Name - Massive, Tight, Cinematic */}
        <div className="hero-line-parent overflow-hidden -my-2 py-4">
          <h1 className="hero-line-child text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 leading-[0.9]">
            MANAS
          </h1>
        </div>
        
        <div className="hero-line-parent overflow-hidden -my-2 py-4">
          <h1 className="hero-line-child text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 leading-[0.9]">
            SINGH
          </h1>
        </div>

        {/* Subtitle / Tech Stack */}
        <div className="hero-subtitle mt-12 mb-12">
            <div className="h-px w-24 bg-blue-500/50 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              {PERSONAL_INFO.subtitle}
            </p>
        </div>
        
        {/* Buttons - Minimalist */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contact" className="hero-btn group relative px-8 py-3 bg-white text-slate-900 rounded-sm font-semibold tracking-wide overflow-hidden transition-all hover:bg-slate-200">
             <span className="relative z-10">GET IN TOUCH</span>
          </a>
          <a href="#experience" className="hero-btn group px-8 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-sm font-medium tracking-wide hover:border-white hover:text-white transition-all">
            VIEW WORK
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 animate-bounce text-slate-600">
        <ArrowDown size={24} strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;