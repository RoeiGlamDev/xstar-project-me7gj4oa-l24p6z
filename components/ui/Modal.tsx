import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        className="bg-black bg-opacity-80 rounded-lg shadow-lg p-6 max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <h2 className="text-pink-500 text-2xl font-bold mb-4">{title}</h2>
        <p className="text-white mb-6">{content}</p>
        <button
          className="bg-pink-500 text-black font-semibold py-2 px-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      />
    </div>
  );
};

export default Modal;