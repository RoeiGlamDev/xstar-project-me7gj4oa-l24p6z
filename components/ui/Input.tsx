import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isError: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, isError }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="mb-6">
      <label className={block text-pink-500 mb-2 ${isFocused ? 'text-pink-300' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={w-full p-3 border rounded-lg transition duration-300 ease-in-out ${
          isError ? 'border-red-500' : 'border-black'
        } bg-black text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-pink-500}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {isError && <span className="text-red-500 text-sm mt-1">This field is required</span>}
    </div>
  );
};

export default Input;