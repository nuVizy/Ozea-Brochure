import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Investment: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <FadeIn>
            <h2 className="text-4xl font-light text-ozea-black mb-6">{SECTIONS.INVESTMENT.title}</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                {SECTIONS.INVESTMENT.description}
            </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-100 py-12 my-12">
            {SECTIONS.INVESTMENT.ranges.map((range, idx) => (
                <div key={idx} className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-gray-400">{range.label}</p>
                    <p className="text-xl md:text-2xl font-light text-ozea-black">{range.value}</p>
                </div>
            ))}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto bg-ozea-light p-8 md:p-12">
            <FadeIn delay={0.3} className="space-y-2">
                <h4 className="text-sm font-medium uppercase tracking-wide text-ozea-black">Factors</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{SECTIONS.INVESTMENT.factors}</p>
            </FadeIn>
            <FadeIn delay={0.4} className="space-y-2">
                <h4 className="text-sm font-medium uppercase tracking-wide text-ozea-black">Payment Structure</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{SECTIONS.INVESTMENT.payment}</p>
            </FadeIn>
        </div>

        <FadeIn delay={0.5} className="flex flex-col md:flex-row gap-6 justify-center pt-8">
            <button className="px-8 py-4 bg-ozea-dark text-white font-light uppercase tracking-widest text-sm hover:bg-ozea-black transition-colors duration-300">
                {SECTIONS.INVESTMENT.ctas[0]}
            </button>
             <button className="px-8 py-4 border border-ozea-dark text-ozea-dark font-light uppercase tracking-widest text-sm hover:bg-ozea-dark hover:text-white transition-colors duration-300">
                {SECTIONS.INVESTMENT.ctas[2]}
            </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Investment;