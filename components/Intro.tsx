import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Intro: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-ozea-black">
            {SECTIONS.WELCOME.title}
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2} className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
          {SECTIONS.WELCOME.text.map((p, i) => <p key={i}>{p}</p>)}
        </FadeIn>

        <FadeIn delay={0.4} className="pt-12">
             <blockquote className="max-w-3xl mx-auto border-t border-b border-gray-100 py-12">
              <p className="text-3xl md:text-4xl font-light italic text-ozea-dark leading-snug font-serif">
                "{SECTIONS.WELCOME.quote}"
              </p>
            </blockquote>
        </FadeIn>
      </div>
    </section>
  );
};

export default Intro;