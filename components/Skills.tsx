import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../constants';
import { Cpu, Server, Database, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Use fromTo to strictly enforce start and end states
      // This prevents elements from getting stuck at opacity: 0
      gsap.fromTo(".skill-card", 
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#skills-grid",
            start: "top 85%",
          }
        }
      );
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={comp} className="py-24 px-4 max-w-7xl mx-auto z-10 relative scroll-mt-24">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-xl">
            A comprehensive list of technologies I use to build scalable, distributed systems.
          </p>
        </div>
        <div className="flex gap-4 text-slate-500 mt-4 md:mt-0">
            <Server size={20} />
            <Database size={20} />
            <Cloud size={20} />
        </div>
      </div>

      <div id="skills-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {SKILLS.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card opacity-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 p-6 rounded-sm text-center hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300 group cursor-default"
          >
            <span className="text-slate-300 font-medium tracking-wide group-hover:text-blue-400 transition-colors text-sm md:text-base">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;