import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';
import { Check, Plus } from 'lucide-react';

const Inclusions: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-ozea-light">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-12">
            <h2 className="text-3xl font-light text-ozea-black">Private Hire Inclusions</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Included */}
            <div className="lg:col-span-2 bg-white p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                    <div className="p-2 bg-ozea-green/10 rounded-full text-ozea-green"><Check size={20}/></div>
                    <h3 className="text-lg font-medium text-ozea-black">Included in Venue Hire</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {SECTIONS.INCLUSIONS.included.map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-ozea-black rounded-full mt-2 flex-shrink-0 opacity-20"></span>
                            <span className="text-sm text-gray-600 font-light leading-relaxed">{item}</span>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Optional */}
            <div className="bg-ozea-dark text-white p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <div className="p-2 bg-white/10 rounded-full text-white"><Plus size={20}/></div>
                    <h3 className="text-lg font-medium">Available Enhancements</h3>
                </div>
                <ul className="space-y-4">
                    {SECTIONS.INCLUSIONS.enhancements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="text-ozea-green mt-0.5 text-xs">+</span>
                            <span className="text-sm text-gray-300 font-light leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Inclusions;