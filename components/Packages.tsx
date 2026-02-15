import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Packages: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12 text-center md:text-left">
             <span className="text-xs font-semibold tracking-widest text-ozea-green uppercase">Investment</span>
            <h2 className="text-3xl font-light text-ozea-black mt-2">Curated Experiences</h2>
            <p className="text-sm text-gray-500 mt-4 max-w-2xl">
                Pricing varies based on season, day of the week, and final guest count. Below are our starting investment guidelines.
            </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECTIONS.PACKAGES.map((pkg, idx) => (
                <FadeIn key={idx} delay={idx * 0.15} className="border border-gray-200 p-8 flex flex-col h-full hover:border-ozea-green/50 transition-colors bg-white">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{pkg.type}</span>
                        <h3 className="text-xl font-serif text-ozea-black mt-2 mb-1">{pkg.name}</h3>
                        <p className="text-sm text-gray-500 italic">{pkg.guests}</p>
                    </div>
                    
                    <div className="flex-grow space-y-4 mb-8">
                        {pkg.includes.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                <span className="text-ozea-green text-xs mt-1">•</span>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-auto">
                        <p className="text-xs text-gray-400 mb-1">Starting Investment</p>
                        <p className="text-2xl font-light text-ozea-black">{pkg.investment}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
        
        {/* Planning Services Mini-Section */}
        <div className="mt-16 border-t border-gray-100 pt-16">
            <h3 className="text-lg font-medium text-ozea-black mb-8 text-center uppercase tracking-widest">Coordination Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SECTIONS.PLANNING.map((plan, idx) => (
                    <FadeIn key={idx} delay={0.3} className="text-center md:text-left">
                        <h4 className="font-semibold text-ozea-black">{plan.level}</h4>
                        <p className="text-xs text-ozea-green uppercase mb-3">{plan.focus}</p>
                        <ul className="text-sm text-gray-500 font-light space-y-1">
                            {plan.includes.slice(0,3).map((item, i) => <li key={i}>- {item}</li>)}
                        </ul>
                    </FadeIn>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;