import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Journey: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
             <FadeIn>
                 <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                     <img 
                        src="https://res.cloudinary.com/de8d8i155/image/upload/v1771081550/The_Beach_Set_up_dwh21o.png" 
                        alt="Venue Atmosphere" 
                        className="w-full h-full object-cover grayscale-[20%]"
                     />
                 </div>
             </FadeIn>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
            <FadeIn>
                <h2 className="text-3xl font-light text-ozea-black">{SECTIONS.JOURNEY.title}</h2>
                <div className="w-16 h-[1px] bg-ozea-green opacity-40 mt-4"></div>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-4 text-gray-600 font-light leading-relaxed">
                {SECTIONS.JOURNEY.text.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Journey;