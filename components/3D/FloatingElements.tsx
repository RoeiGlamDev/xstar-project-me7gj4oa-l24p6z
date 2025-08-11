import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-pink-500 text-6xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to luxery dark AirBNB
      </motion.h1>
      
      <Canvas>
        <OrbitControls />
        {/ 3D Floating Elements Here /}
        {/ Example Sphere /}
        <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#ff007f" />
        </mesh>
      </Canvas>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hover:text-pink-500 transition-colors"
        >
          Discover your next luxurious stay with us.
        </motion.p>
      </div>
    </div>
  );
};

export default FloatingElements;