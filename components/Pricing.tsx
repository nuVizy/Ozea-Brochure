import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { venue, bridal, honeymoon } = SECTIONS.PRICING;

  const formatPriceString = (str: string) => {
    const priceMatch = str.match(/€[\d,.]+/);
    const price = priceMatch ? priceMatch[0] : '';
    const text = str.replace(price, '').trim();
    return { price, text };
  };

  const venueInfo = formatPriceString(venue.price);
  const bridalInfo = formatPriceString(bridal.price);
  const honeymoonInfo = formatPriceString(honeymoon.price);

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-ozea-dark text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ozea-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-24">
             <span className="text-ozea-green text-xs font-bold tracking-[0.25em] uppercase mb-6 block">Investment</span>
             <h2 className="text-4xl md:text-6xl font-light mb-8 text-white">Venue & Suites</h2>
             <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Venue Card - Full Width */}
            <div className="lg:col-span-12">
                 <FadeIn delay={0.1} className="relative group">
                    <div className="absolute inset-0 bg-white/5 blur-sm transform group-hover:scale-[1.01] transition-transform duration-700 rounded-sm"></div>
                    <div className="relative bg-black/20 border border-white/10 p-8 md:p-16 backdrop-blur-md rounded-sm">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
                            <div className="space-y-4 max-w-2xl">
                                <h3 className="text-3xl font-light tracking-wide text-white">Exclusive Venue Hire</h3>
                                <p className="text-gray-300 font-light text-lg leading-relaxed opacity-90">
                                    {venueInfo.text}
                                </p>
                                <p className="text-ozea-green text-sm uppercase tracking-widest">{venue.note}</p>
                            </div>
                            <div className="flex-shrink-0 lg:text-right relative">
                                 <div className="absolute -inset-8 bg-ozea-green/10 blur-2xl rounded-full"></div>
                                 <p className="relative text-6xl md:text-7xl font-thin text-white tracking-tight">{venueInfo.price}</p>
                                 <p className="relative text-xs text-gray-400 mt-2 uppercase tracking-[0.2em]">Full Day Access</p>
                            </div>
                        </div>
                    </div>
                 </FadeIn>
            </div>

            {/* Bridal Lounge */}
            <div className="lg:col-span-6 flex">
                 <FadeIn delay={0.2} className="w-full flex flex-col bg-white/5 border border-white/10 p-10 md:p-12 hover:bg-white/[0.08] transition-all duration-500 rounded-sm group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         <div className="w-24 h-24 border border-white rounded-full"></div>
                    </div>
                    
                    <div className="mb-10 relative z-10">
                        <span className="text-ozea-green text-xs font-bold tracking-widest uppercase mb-3 block">For the Morning</span>
                        <h3 className="text-2xl font-light text-white mb-6">Ozea Bridal Lounge</h3>
                        <div className="flex items-baseline gap-3 border-b border-white/10 pb-8">
                             <p className="text-4xl md:text-5xl font-light text-white">{bridalInfo.price}</p>
                             <span className="text-sm text-gray-500 font-light uppercase tracking-wide">/ Fixed</span>
                        </div>
                        <p className="text-gray-400 font-light mt-6 italic leading-relaxed min-h-[48px]">{bridalInfo.text}</p>
                    </div>
                    
                    <ul className="space-y-5 flex-grow relative z-10">
                        {bridal.includes?.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="mt-1 text-ozea-green/80"><Check size={16} /></span>
                                <span className="text-sm text-gray-300 font-light leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                 </FadeIn>
            </div>

             {/* Honeymoon Suite */}
            <div className="lg:col-span-6 flex">
                <FadeIn delay={0.3} className="w-full flex flex-col bg-white/5 border border-white/10 p-10 md:p-12 hover:bg-white/[0.08] transition-all duration-500 rounded-sm group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                         <div className="w-24 h-24 border border-white rounded-none rotate-45"></div>
                    </div>

                    <div className="mb-10 relative z-10">
                        <span className="text-ozea-green text-xs font-bold tracking-widest uppercase mb-3 block">For the Night</span>
                        <h3 className="text-2xl font-light text-white mb-6">Signature Suite</h3>
                         <div className="flex items-baseline gap-3 border-b border-white/10 pb-8">
                             <p className="text-4xl md:text-5xl font-light text-white">{honeymoonInfo.price}</p>
                             <span className="text-sm text-gray-500 font-light uppercase tracking-wide">/ Night</span>
                        </div>
                        <p className="text-gray-400 font-light mt-6 italic leading-relaxed min-h-[48px]">{honeymoonInfo.text}</p>
                    </div>

                    <ul className="space-y-5 flex-grow relative z-10">
                        {honeymoon.includes?.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="mt-1 text-ozea-green/80"><Check size={16} /></span>
                                <span className="text-sm text-gray-300 font-light leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;