import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Styling: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-ozea-light">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
            <h2 className="text-3xl font-light text-ozea-black">Styling Notes</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SECTIONS.STYLING.images.map((src, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                        <img 
                            src={src} 
                            alt="Moodboard" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </FadeIn>
            ))}
        </div>

        <FadeIn delay={0.3} className="bg-white p-8 md:p-12 border border-gray-100">
            <h3 className="text-lg font-medium text-ozea-black mb-6 uppercase tracking-widest">Brochure Guidance</h3>
            <ul className="space-y-4">
                {SECTIONS.STYLING.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                        <span className="w-2 h-2 rounded-full bg-ozea-green mt-2 flex-shrink-0"></span>
                        <p className="text-gray-600 font-light leading-relaxed">{note}</p>
                    </li>
                ))}
            </ul>
        </FadeIn>
      </div>
    </section>
  );
};

export default Styling;