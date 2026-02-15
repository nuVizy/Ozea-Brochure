import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Roadmap: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-light text-ozea-black">{SECTIONS.ROADMAP.title}</h2>
        </FadeIn>
        
        <div className="space-y-12 relative border-l border-gray-100 ml-6 md:ml-0 md:border-none">
            {SECTIONS.ROADMAP.phases.map((phase, index) => (
                <FadeIn key={index} delay={index * 0.1} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                    <div className="md:w-1/3 md:text-right">
                        <span className="text-2xl md:text-3xl font-light text-ozea-green block mb-1">{phase.time}</span>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/3 top-3 w-3 h-3 bg-white border-2 border-ozea-green rounded-full -translate-x-1.5 z-10"></div>
                    {/* Mobile Dot */}
                    <div className="md:hidden absolute -left-[25px] top-2 w-3 h-3 bg-white border-2 border-ozea-green rounded-full z-10"></div>

                    <div className="md:w-2/3 pb-8 md:pb-0 border-b border-gray-50 md:border-none">
                        <h3 className="text-lg font-medium text-ozea-black mb-2">{phase.title}</h3>
                        <p className="text-gray-500 font-light leading-relaxed">{phase.desc}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;