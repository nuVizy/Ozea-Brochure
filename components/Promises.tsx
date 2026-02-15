import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Promises: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-ozea-light border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="mb-12 text-center">
            <h2 className="text-2xl font-light text-ozea-black">{SECTIONS.PROMISES.title}</h2>
        </FadeIn>
        <FadeIn delay={0.2} className="whitespace-pre-line text-center text-gray-600 font-light leading-relaxed">
            {SECTIONS.PROMISES.content}
        </FadeIn>
      </div>
    </section>
  );
};

export default Promises;