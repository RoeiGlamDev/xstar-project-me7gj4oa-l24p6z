import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setEmail('');
    }
  };

  return (
    <section className="bg-black text-pink-500 py-10 px-5">
      <motion.div 
        className="text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Join the luxery dark AirBNB Community
      </motion.h2>
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Stay updated with the latest luxury accommodations and exclusive offers tailored for you.
      </motion.p>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <motion.div
          type="submit"
          className="bg-pink-500 text-black p-2 rounded-r-lg hover:bg-pink-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Subscribe
        </motion.button>
      </form>
      <motion.div 
        className="text-sm text-center mt-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        By subscribing, you agree to receive emails from luxery dark AirBNB. 
      </motion.p>
    </section>
  );
};

export default NewsletterSection;