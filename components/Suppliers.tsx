import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const Suppliers: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
         <FadeIn>
             <h2 className="text-2xl font-light text-ozea-black mb-8">Recommended Supplier Collection</h2>
             <div className="w-16 h-[1px] bg-ozea-green mx-auto mb-8"></div>
             <p className="text-gray-600 font-light leading-loose whitespace-pre-line text-lg">
                 {SECTIONS.SUPPLIERS.text}
             </p>
         </FadeIn>
      </div>
    </section>
  );
};

export default Suppliers;