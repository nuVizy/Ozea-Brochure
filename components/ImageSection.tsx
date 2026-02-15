import React from 'react';
import { motion } from 'framer-motion';

interface ImageSectionProps {
  src: string;
  alt: string;
  heightClass?: string;
  overlay?: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, heightClass = "h-[60vh]", overlay = false }) => {
  return (
    <section className={`w-full ${heightClass} relative overflow-hidden bg-gray-100`}>
      <motion.img
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover filter grayscale-[20%] contrast-[0.95]"
      />
      {overlay && <div className="absolute inset-0 bg-black/10"></div>}
    </section>
  );
};

export default ImageSection;