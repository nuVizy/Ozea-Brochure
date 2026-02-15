import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-ozea-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/de8d8i155/image/upload/v1771009392/DayShot_DiningArea_01_copy_qklbxq.png"
          alt="OZEA Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl w-full text-center z-10 space-y-10 pt-12">
        <FadeIn delay={0.2} direction="down">
            <div className="inline-block border-b border-white/40 pb-2">
                <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white font-medium">
                    Private Brochure
                </span>
            </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-6xl md:text-8xl font-light text-white leading-[1.1] tracking-wide drop-shadow-lg">
            {SECTIONS.COVER.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-200 mt-4 italic font-serif">
              {SECTIONS.COVER.subtitle}
          </p>
        </FadeIn>
      </div>

       <FadeIn delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-4 text-white opacity-90">
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium drop-shadow-md">Scroll</span>
            <div className="w-[1px] h-12 bg-white/80 shadow-sm"></div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;