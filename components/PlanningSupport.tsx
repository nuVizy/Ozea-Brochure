import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const PlanningSupport: React.FC = () => {
  return (
    <section className="w-full py-24 bg-ozea-dark text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Destination Support */}
                <div className="space-y-8">
                     <FadeIn>
                        <h3 className="text-2xl font-light tracking-wide border-b border-white/20 pb-4 mb-6">
                            {SECTIONS.SUPPORT.destination.title}
                        </h3>
                     </FadeIn>
                     <FadeIn delay={0.2} className="space-y-6">
                        {SECTIONS.SUPPORT.destination.items.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <span className="text-ozea-green text-xl">•</span>
                                <p className="text-gray-300 font-light leading-relaxed">{item}</p>
                            </div>
                        ))}
                     </FadeIn>
                </div>

                {/* Suppliers */}
                <div className="space-y-8">
                     <FadeIn delay={0.2}>
                        <h3 className="text-2xl font-light tracking-wide border-b border-white/20 pb-4 mb-6">
                            {SECTIONS.SUPPORT.suppliers.title}
                        </h3>
                     </FadeIn>
                     <FadeIn delay={0.4} className="space-y-6">
                        {SECTIONS.SUPPORT.suppliers.items.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <span className="text-ozea-green text-xl">•</span>
                                <p className="text-gray-300 font-light leading-relaxed">{item}</p>
                            </div>
                        ))}
                     </FadeIn>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PlanningSupport;