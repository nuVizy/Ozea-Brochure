import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Spaces: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-32">
        <FadeIn className="text-center">
            <h2 className="text-3xl font-light text-ozea-black">The Spaces</h2>
        </FadeIn>

        {SECTIONS.SPACES.map((space, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                    <FadeIn delay={0.2}>
                         <div className="aspect-[3/2] bg-gray-100 overflow-hidden">
                            <img src={space.image} alt={space.title} className="w-full h-full object-cover" />
                        </div>
                    </FadeIn>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    <FadeIn>
                        <span className="text-xs font-semibold tracking-widest text-ozea-green uppercase">{space.subtitle}</span>
                        <h3 className="text-3xl font-light text-ozea-black mt-2">{space.title}</h3>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">{space.description}</p>
                    </FadeIn>
                    
                    {space.highlights && (
                        <FadeIn delay={0.2} className="pt-4">
                            <ul className="space-y-2">
                                {space.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-500 font-light">
                                        <span className="text-ozea-green">•</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    )}
                    
                    {space.footer && (
                         <FadeIn delay={0.3} className="pt-4 border-t border-gray-100">
                             <p className="text-sm text-ozea-dark italic">{space.footer}</p>
                         </FadeIn>
                    )}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Spaces;