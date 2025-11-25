import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.exp-item');
      
      items.forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });
    }, comp);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={comp} className="py-20 px-4 max-w-6xl mx-auto z-10 relative scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-4">
        <Briefcase className="text-blue-500" />
        Experience
      </h2>

      <div className="relative border-l border-slate-700 ml-4 md:ml-10 space-y-12">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="exp-item relative pl-8 md:pl-12">
            {/* Dot on timeline */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-900 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                  <h4 className="text-lg text-blue-400 font-medium">{exp.company}</h4>
                </div>
                <div className="text-slate-400 text-sm md:text-right mt-1 md:mt-0">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-slate-300 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 text-blue-500 mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;