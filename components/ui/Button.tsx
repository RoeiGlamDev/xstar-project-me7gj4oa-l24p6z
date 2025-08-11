import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-pink-600 text-black hover:bg-pink-500',
  secondary: 'bg-black text-pink-600 hover:bg-gray-800',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      className={`py-2 px-4 rounded transition-all duration-300 ease-in-out ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Button for ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;