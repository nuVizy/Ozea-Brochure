import React from 'react';
import { BRAND_NAME, SECTIONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 bg-white border-t border-gray-100 flex flex-col items-center justify-center space-y-4 px-6 text-center">
      <span className="text-2xl font-light tracking-widest text-ozea-black mb-4">{BRAND_NAME}</span>
      <p className="text-xs text-gray-500 uppercase tracking-widest">{SECTIONS.FOOTER.contact}</p>
      <div className="h-[1px] w-12 bg-gray-200 my-2"></div>
      <p className="text-[10px] text-gray-400 max-w-lg leading-relaxed">{SECTIONS.FOOTER.legal}</p>
      <p className="text-[10px] text-gray-300">Private Digital Brochure. Do not distribute.</p>
    </footer>
  );
};

export default Footer;