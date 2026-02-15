import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Logistics: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Weather */}
        <FadeIn className="bg-white p-10 shadow-sm">
            <h3 className="text-xl font-light text-ozea-black mb-6">Weather Plan</h3>
            <div className="space-y-4 text-sm text-gray-600 font-light leading-relaxed">
                <p><strong className="text-ozea-black font-medium block mb-1">Plan A</strong> {SECTIONS.LOGISTICS.weather.planA}</p>
                <div className="h-[1px] bg-gray-100 w-full my-2"></div>
                <p><strong className="text-ozea-black font-medium block mb-1">Plan B</strong> {SECTIONS.LOGISTICS.weather.planB}</p>
            </div>
        </FadeIn>

        {/* The Weekend */}
        <FadeIn delay={0.2} className="bg-white p-10 shadow-sm">
             <h3 className="text-xl font-light text-ozea-black mb-6">The Weekend</h3>
             <div className="space-y-4">
                 <div>
                     <span className="text-xs text-ozea-green uppercase tracking-wide font-semibold">Transport</span>
                     <p className="text-sm text-gray-600 font-light mt-1 leading-relaxed">{SECTIONS.LOGISTICS.weekend.transport}</p>
                 </div>
                  <div>
                     <span className="text-xs text-ozea-green uppercase tracking-wide font-semibold">Accommodation</span>
                     <p className="text-sm text-gray-600 font-light mt-1">We recommend staying in Coral Bay (10 mins) or Paphos Harbour (20 mins).</p>
                 </div>
             </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Logistics;