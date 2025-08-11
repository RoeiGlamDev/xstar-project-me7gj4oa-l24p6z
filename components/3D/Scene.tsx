import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  className?: string;
}

const Model: React.FC = () => {
  const { nodes, materials } = useGLTF('/path/to/your/model.glb'); // Replace with your model path

  return (
    <group>
      <mesh geometry={nodes.YourMesh.geometry} material={materials.YourMaterial} />
    </group>
  );
};

const Scene: React.FC<SceneProps> = ({ className }) => {
  useEffect(() => {
    document.title = 'luxery dark AirBNB | Elegant and High-End Stays';
  }, []);

  return (
    <motion.div
      className={`w-full h-screen bg-black flex justify-center items-center ${className`}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls />
      </Canvas>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-pink-500">
        <h1 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform">
          Welcome to luxery dark AirBNB
        </h1>
        <p className="text-lg text-center max-w-md mb-8 hover:scale-105 transition-transform">
          Discover our exquisite selection of luxury accommodations designed for the modern traveler.
        </p>
        <button className="px-6 py-2 border border-pink-500 text-pink-500 bg-black rounded hover:bg-pink-500 hover:text-black transition-colors">
          Explore Stays
        </button>
      </div>
    </motion.div>
  );
};

export default Scene;