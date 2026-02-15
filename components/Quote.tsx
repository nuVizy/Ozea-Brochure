import React from 'react';
import FadeIn from './FadeIn';

const Quote: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 bg-white flex items-center justify-center">
      <FadeIn>
        <blockquote className="max-w-4xl text-center">
          <p className="text-3xl md:text-5xl font-light italic text-ozea-dark leading-snug font-serif">
            "Imagine saying your vows with only the sea as your witness."
          </p>
        </blockquote>
      </FadeIn>
    </section>
  );
};

export default Quote;