import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-black bg-opacity-50 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="relative overflow-hidden rounded-lg"
        style={{
          background: ''rgba(255', 105, 180, 0.1)',
          backdropFilter: ''blur(10px)'',
        }}
      >
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
        <div className="p-4">
          <h3 className="text-pink-500 text-xl font-semibold">{title}</h3>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>
      </div>
      <footer className="mt-4">
        <p className="text-pink-400 text-sm">
          Experience luxury like never before at luxery dark AirBNB.
        </p>
      </footer>
    </motion.div>
  );
};

export default Card;