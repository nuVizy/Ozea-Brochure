import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const FAQ: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-light text-ozea-black">Frequently Asked Questions</h2>
            <p className="text-sm text-ozea-green uppercase tracking-widest mt-3">OZEA – Private Coastal Wedding Venue</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {SECTIONS.FAQ.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.05} className="border-b border-gray-100 pb-4">
                    <h4 className="text-sm font-medium text-ozea-black mb-2">{item.q}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed whitespace-pre-line">{item.a}</p>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;