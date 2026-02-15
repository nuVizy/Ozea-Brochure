import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Drinks: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-ozea-light">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-light text-ozea-black">Drinks Packages</h2>
        </FadeIn>

        {/* Featured Packages */}
        {SECTIONS.DRINKS.featured && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                 {SECTIONS.DRINKS.featured.map((pkg, idx) => (
                     <FadeIn key={idx} className="bg-ozea-black text-white p-10 md:p-12 relative overflow-hidden group">
                         {/* Decorative Elements */}
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                         <div className="absolute bottom-0 left-0 w-24 h-24 bg-ozea-green/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                         
                         <div className="relative z-10">
                             <div className="mb-8 border-b border-white/20 pb-6">
                                 <h3 className="text-2xl font-light tracking-wide mb-2">{pkg.name}</h3>
                                 <p className="text-xl text-ozea-green font-light">{pkg.price}</p>
                                 {pkg.note && <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{pkg.note}</p>}
                             </div>
                             
                             <ul className="space-y-4">
                                 {pkg.includes.map((item, i) => (
                                     <li key={i} className="flex items-start gap-3">
                                         <span className="mt-1.5 w-1 h-1 bg-ozea-green rounded-full flex-shrink-0"></span>
                                         <span className="text-sm text-gray-300 font-light leading-relaxed">
                                            <span className="text-white font-medium">{item.split(' – ')[0]}</span>
                                            {item.split(' – ')[1] ? ` – ${item.split(' – ')[1]}` : ''}
                                         </span>
                                     </li>
                                 ))}
                             </ul>
                         </div>
                     </FadeIn>
                 ))}
            </div>
        )}

        {/* Standard Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS.DRINKS.packages.map((pkg, idx) => (
                <FadeIn key={idx} delay={idx * 0.05} className="bg-white p-8 border border-gray-100 flex flex-col">
                    <div className="mb-6">
                        <h3 className="text-lg font-medium text-ozea-black mb-2">{pkg.name}</h3>
                        <p className="text-ozea-green font-medium">{pkg.price}</p>
                        {pkg.note && <p className="text-xs text-gray-400 mt-1">{pkg.note}</p>}
                    </div>
                    
                    {pkg.description ? (
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{pkg.description}</p>
                    ) : (
                        <ul className="space-y-2 mt-auto">
                            {pkg.includes?.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-500 font-light">
                                    <span className="text-gray-300">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Drinks;