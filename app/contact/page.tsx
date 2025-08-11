import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="bg-black text-pink-500 min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div 
        className="text-4xl font-bold mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxery dark AirBNB
      </motion.h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-pink-300 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-pink-300 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea 
            id="message" 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <motion.div 
          type="submit" 
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Location</h2>
        <p className="text-pink-300">123 Luxury Ave, High-End City, Techland</p>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold">Business Hours</h2>
        <p className="text-pink-300">Mon-Fri: 9 AM - 9 PM</p>
        <p className="text-pink-300">Sat-Sun: 10 AM - 8 PM</p>
      </div>
    </div>
  );
};

export default Contact;