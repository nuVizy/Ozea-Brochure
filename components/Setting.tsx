import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Setting: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
      <div className="w-full md:w-1/2">
         <FadeIn>
             <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                 <img 
                    src="https://res.cloudinary.com/de8d8i155/image/upload/v1771009329/ceremony_new_arch_cb5amy.png" 
                    alt="The Setting" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-6 left-6 text-white text-xs tracking-widest uppercase">
                     Sea Caves, Paphos
                 </div>
             </div>
         </FadeIn>
      </div>
      
      <div className="w-full md:w-1/2 space-y-8">
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-light text-ozea-black">{SECTIONS.SETTING.title}</h2>
          <div className="w-16 h-[1px] bg-ozea-green opacity-40 mt-4 mb-8"></div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <p className="text-gray-600 font-light leading-loose text-lg">
            {SECTIONS.SETTING.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Setting;