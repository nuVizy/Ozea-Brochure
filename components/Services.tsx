import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  // Combine items from different support categories for this view
  const planningItems = [
    ...SECTIONS.SUPPORT.destination.items,
    ...SECTIONS.SUPPORT.suppliers.items
  ];

  return (
    <section className="w-full py-24 bg-ozea-dark text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-light mb-8">{SECTIONS.SUPPORT.title}</h2>
                    <p className="text-gray-300 font-light text-lg mb-12 max-w-md leading-relaxed">
                        Beyond the venue, we offer a spectrum of support to ensure your journey is effortless. Our team acts as your personal concierge on the ground in Cyprus.
                    </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {planningItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-ozea-green"></div>
                                <span className="text-gray-200 font-light">{item}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
             <div className="w-full lg:w-1/2 relative">
                <FadeIn delay={0.4} className="relative z-10">
                    <div className="aspect-[3/4] max-w-sm mx-auto bg-gray-800 overflow-hidden border border-white/10">
                         <img 
                            src="https://res.cloudinary.com/de8d8i155/image/upload/v1770930809/DayShot_CeremonyArea_01_copy_pb1b2v.png" 
                            alt="Wedding Planning" 
                            className="w-full h-full object-cover opacity-80"
                         />
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
  );
};

export default Services;