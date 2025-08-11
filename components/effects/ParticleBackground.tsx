import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Particle } from './Particle';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {
  count?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ count = 100 }) => {
  useEffect(() => {
    // Additional setup or cleanup can be done here if needed
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas className="w-full h-full" style={{ backgroundColor: ''black' '}}>
        <ambientLight intensity={0.5} />
        <motion.div>
          {Array.from({ length: count }).map((_, index) => (
            <Particle key={index} />
          ))}
        </motion.group>
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-pink-500 text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to luxery dark AirBNB
        </motion.h1>
      </div>
    </div>
  );
};

export default ParticleBackground;