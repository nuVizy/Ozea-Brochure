import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const VenueHire: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Inclusions */}
        <div>
            <FadeIn className="mb-8">
                <h2 className="text-3xl font-light text-ozea-black mb-2">Included in Venue Hire</h2>
                <div className="w-12 h-[1px] bg-ozea-green"></div>
            </FadeIn>
            <div className="space-y-6">
                {SECTIONS.INCLUSIONS.included.map((item, idx) => (
                    <FadeIn key={idx} delay={idx * 0.05} className="flex items-start gap-4 group">
                        <div className="p-1 rounded-full bg-gray-50 text-ozea-green mt-0.5 group-hover:bg-ozea-green group-hover:text-white transition-colors">
                            <Check size={16} />
                        </div>
                        <p className="text-gray-700 font-light leading-relaxed">{item}</p>
                    </FadeIn>
                ))}
            </div>
        </div>

        {/* Enhancements */}
        <div className="bg-ozea-dark text-white p-10 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <FadeIn className="mb-8 relative z-10">
                <h2 className="text-3xl font-light text-white mb-2">Available Enhancements</h2>
                <div className="w-12 h-[1px] bg-white/30"></div>
            </FadeIn>
            
            <div className="space-y-8 relative z-10">
                {SECTIONS.INCLUSIONS.enhancements.map((item, idx) => (
                    <FadeIn key={idx} delay={0.2 + (idx * 0.05)} className="flex items-start gap-4">
                         <span className="w-4 h-[1px] bg-white/30 mt-3 flex-shrink-0"></span>
                        <p className="text-gray-300 font-light leading-relaxed text-lg">{item}</p>
                    </FadeIn>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default VenueHire;