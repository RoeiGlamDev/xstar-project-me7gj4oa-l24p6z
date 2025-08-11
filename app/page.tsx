import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center h-screen bg-black text-pink-500">
    <motion.div
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Welcome to luxery dark AirBNB
    </motion.h1>
    <motion.div
      className="text-xl mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Experience the pinnacle of luxury stays in technology's finest residences.
    </motion.p>
    <motion.div
      className="bg-pink-500 text-black py-2 px-4 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      Discover More
    </motion.button>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto text-center">
      <motion.div
        className="text-4xl font-bold mb-8 text-pink-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Features of luxery dark AirBNB
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-pink-500">Smart Home Technology</h3>
          <p className="mt-2">
            Embrace the future with our integrated smart home features, providing seamless control over your environment.
          </p>
        </motion.div>
        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-pink-500">Elegant Interiors</h3>
          <p className="mt-2">
            Indulge in luxurious interiors designed with the finest materials to ensure a comfortable stay.
          </p>
        </motion.div>
        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-pink-500">Personalized Service</h3>
          <p className="mt-2">
            Our dedicated team is here to cater to your every need, ensuring a bespoke experience.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const LuxuryDesignSection: React.FC = () => (
  <section className="py-20 bg-black text-pink-500">
    <div className="container mx-auto text-center">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose luxery dark AirBNB?
      </motion.h2>
      <motion.div
        className="text-lg mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Discover a new standard of luxury in short-term rentals, where technology meets comfort and elegance.
      </motion.p>
      <motion.div
        className="bg-pink-500 text-black py-2 px-4 rounded-md shadow-lg hover:bg-pink-600 transition duration-300"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Book Your Stay
      </motion.button>
    </div>
  </section>
);

const HomePage: React.FC = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <LuxuryDesignSection />
  </div>
);

export default HomePage;