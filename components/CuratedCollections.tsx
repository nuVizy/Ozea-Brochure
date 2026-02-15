import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const CuratedCollections: React.FC = () => {
  const { CURATED_COLLECTIONS } = SECTIONS;

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-ozea-light">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
             <span className="text-xs font-semibold tracking-widest text-ozea-green uppercase mb-4 block">{CURATED_COLLECTIONS.title}</span>
             <p className="text-gray-600 font-light leading-relaxed text-lg">
                 {CURATED_COLLECTIONS.intro}
             </p>
        </FadeIn>

        {CURATED_COLLECTIONS.packages.map((pkg, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-sm p-8 md:p-12 lg:p-16">
                
                {/* Package Header */}
                <FadeIn className="text-center mb-16">
                    <h3 className="text-3xl md:text-5xl font-light text-ozea-black mb-3">{pkg.name}</h3>
                    <p className="text-xs text-ozea-green uppercase tracking-[0.2em]">{pkg.subtitle}</p>
                    
                     {pkg.description && (
                         <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mt-8 whitespace-pre-line text-lg">
                             {pkg.description}
                         </p>
                     )}

                    <div className="w-12 h-[1px] bg-gray-200 mx-auto mt-8"></div>
                </FadeIn>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-20">
                    {pkg.sections.map((section, sIdx) => (
                        <FadeIn key={sIdx} delay={sIdx * 0.1}>
                            <h4 className="text-lg font-medium text-ozea-black border-b border-gray-100 pb-4 mb-8 uppercase tracking-wide">
                                {section.title}
                            </h4>
                            <div className="space-y-10">
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx}>
                                        <h5 className="text-base font-medium text-ozea-black mb-2">{item.title}</h5>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Footer Quote */}
                <FadeIn className="bg-ozea-light/50 p-8 md:p-12 text-center mb-16 rounded-sm">
                    <p className="text-gray-600 font-serif italic text-lg leading-relaxed max-w-4xl mx-auto">
                        "{pkg.footer}"
                    </p>
                </FadeIn>

                {/* Pricing Grid */}
                <FadeIn delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {pkg.pricing.map((price, pIdx) => (
                            <div key={pIdx} className="border border-gray-100 p-6 text-center hover:border-ozea-green/30 transition-colors">
                                <span className="text-xs text-gray-400 uppercase tracking-wide block mb-2">{price.count}</span>
                                <span className="text-xl font-light text-ozea-black">{price.price}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>

            </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedCollections;