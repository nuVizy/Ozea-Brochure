import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Suites: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold tracking-widest text-ozea-green uppercase mb-4 block">Exclusive Sanctuaries</span>
            <h2 className="text-4xl md:text-5xl font-light text-ozea-black mb-6">Private Suites</h2>
            <div className="w-16 h-[1px] bg-ozea-green mx-auto opacity-50"></div>
        </FadeIn>

        {SECTIONS.SUITES.map((suite, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                    <FadeIn delay={0.1} className="relative group">
                         {/* Decorative backing for luxury feel */}
                        <div className={`absolute -inset-4 bg-gray-50 -z-10 transition-transform duration-700 ease-out group-hover:scale-95 ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}></div>
                        
                        <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-sm">
                            <img 
                                src={suite.image} 
                                alt={suite.name} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                    <FadeIn delay={0.2}>
                        <h3 className="text-3xl md:text-4xl font-light text-ozea-black mb-3">{suite.name}</h3>
                        <p className="text-xs text-ozea-green uppercase tracking-widest mb-8 border-l border-ozea-green pl-3">{suite.availability}</p>
                        
                        <p className="text-gray-600 font-light leading-loose text-lg mb-10">
                            {suite.description}
                        </p>

                        <div className="border-t border-gray-100 pt-8">
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Suite Amenities</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                                {suite.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <span className="w-1 h-1 bg-ozea-green rounded-full mt-2.5 flex-shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {suite.footer && (
                            <div className="bg-ozea-light/50 p-6 md:p-8 mt-6">
                                 <p className="text-sm text-gray-500 italic font-serif leading-relaxed text-center">"{suite.footer}"</p>
                            </div>
                        )}
                    </FadeIn>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Suites;