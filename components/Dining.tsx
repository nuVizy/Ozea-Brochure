import React, { useState } from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Dining: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
                <h2 className="text-3xl font-light text-ozea-black mb-6">{SECTIONS.DINING.intro.title}</h2>
                <div className="space-y-4 text-gray-600 font-light leading-relaxed whitespace-pre-line">
                    {SECTIONS.DINING.intro.text}
                </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-ozea-light p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-ozea-black mb-6">Service Styles</h3>
                <div className="space-y-6">
                    {SECTIONS.DINING.serviceStyles.map((style, idx) => (
                        <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                            <h4 className="text-lg font-medium text-ozea-black">{style.name}</h4>
                            <p className="text-sm text-gray-500">{style.desc}</p>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>

        {/* Menus Accordion */}
        <div className="space-y-4">
             <FadeIn><h3 className="text-2xl font-light text-center mb-8">Dining Menus</h3></FadeIn>
             {SECTIONS.DINING.menus.map((menu, idx) => (
                 <FadeIn key={idx} delay={idx * 0.1} className="border border-gray-200">
                     <button 
                        onClick={() => toggleMenu(idx)}
                        className="w-full flex items-center justify-between p-6 md:p-8 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                     >
                        <div>
                            <h4 className="text-xl font-medium text-ozea-black">{menu.name}</h4>
                            <p className="text-ozea-green font-medium mt-1">{menu.price}</p>
                        </div>
                        {openMenu === idx ? <ChevronUp className="text-gray-400"/> : <ChevronDown className="text-gray-400"/>}
                     </button>
                     
                     {openMenu === idx && (
                         <div className="p-6 md:p-8 bg-white border-t border-gray-100">
                             <p className="text-gray-600 italic mb-8 border-l-2 border-ozea-green pl-4">{menu.description}</p>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 {menu.sections.map((section, sIdx) => (
                                     <div key={sIdx} className="space-y-2">
                                         <h5 className="text-sm font-semibold uppercase tracking-wide text-gray-400">{section.title}</h5>
                                         <ul className="space-y-2">
                                             {section.items.map((item, i) => (
                                                 <li key={i} className="text-sm text-gray-600 font-light leading-relaxed">{item}</li>
                                             ))}
                                         </ul>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     )}
                 </FadeIn>
             ))}
        </div>

        {/* Upgrades */}
        <div className="bg-ozea-black text-white p-8 md:p-12">
            <FadeIn>
                <h3 className="text-xl font-light mb-8 text-center uppercase tracking-widest">Signature Upgrades</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SECTIONS.DINING.upgrades.map((upgrade, idx) => (
                    <FadeIn key={idx} delay={0.2} className="space-y-4">
                        <h4 className="text-lg font-medium border-b border-white/20 pb-2">{upgrade.title}</h4>
                        <ul className="space-y-2">
                             {upgrade.items.map((item, i) => (
                                 <li key={i} className="text-sm text-gray-300 font-light">{item}</li>
                             ))}
                        </ul>
                    </FadeIn>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Dining;