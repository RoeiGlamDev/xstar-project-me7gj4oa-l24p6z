import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  mainHeadline: string;
  subheading: string;
  ctaText: string;
  trustIndicators: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainHeadline,
  subheading,
  ctaText,
  trustIndicators,
}) => {
  return (
    <section className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <motion.div
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {mainHeadline}
        </motion.h1>
        <motion.div
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subheading}
        </motion.p>
        <motion.div
          className="px-6 py-3 bg-pink-500 text-black font-semibold rounded-lg hover:bg-pink-400 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaText}
        </motion.button>
        <div className="mt-8">
          {trustIndicators.map((indicator, index) => (
            <motion.span
              key={index}
              className="inline-block mr-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              {indicator}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;