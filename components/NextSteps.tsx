import React from 'react';
import { SECTIONS } from '../constants';
import FadeIn from './FadeIn';

const NextSteps: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-ozea-dark text-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <FadeIn>
            <h2 className="text-3xl font-light">Your Path to OZEA</h2>
             <p className="text-gray-400 font-light mt-4">
                We invite you to take the next step in creating your legacy.
            </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-ozea-black uppercase tracking-widest text-xs font-medium hover:bg-gray-100 transition-colors min-w-[200px]">
                Arrange Viewing
            </button>
            <button className="px-8 py-4 border border-white text-white uppercase tracking-widest text-xs font-medium hover:bg-white/10 transition-colors min-w-[200px]">
                Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-white/30 text-gray-300 uppercase tracking-widest text-xs font-medium hover:text-white transition-colors min-w-[200px]">
                Request Full Pricing
            </button>
        </FadeIn>

      </div>
    </section>
  );
};

export default NextSteps;