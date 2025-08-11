import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Smart Home Automation',
    description: 'Experience seamless control over your living environment with our advanced smart home technology.',
    icon: <i className="fas fa-home"></i>,
  },
  {
    title: 'High-Speed Internet',
    description: 'Stay connected with lightning-fast internet, perfect for remote work and streaming.',
    icon: <i className="fas fa-wifi"></i>,
  },
  {
    title: 'Luxury Amenities',
    description: 'Indulge in high-end amenities that elevate your stay to the next level of luxury.',
    icon: <i className="fas fa-cocktail"></i>,
  },
  {
    title: '24/7 Concierge Service',
    description: 'Our dedicated concierge team is available to assist you at any hour, ensuring a hassle-free experience.',
    icon: <i className="fas fa-concierge-bell"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-16" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore the Features of luxery dark AirBNB
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;