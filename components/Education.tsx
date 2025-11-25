import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto z-10 relative scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
        <GraduationCap className="text-green-500" />
        Education
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors hover:bg-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
            <p className="text-blue-400 mb-2">{edu.degree}</p>
            <p className="text-slate-500 text-sm">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;