import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Package',
    price: '$99/month',
    features: [
      '1 Listing',
      'Basic Tech Support',
      '24/7 Customer Service',
      'Access to Analytics Dashboard',
    ],
  },
  {
    title: 'Standard Package',
    price: '$199/month',
    features: [
      'Up to 5 Listings',
      'Priority Tech Support',
      '24/7 Customer Service',
      'Advanced Analytics Dashboard',
      'Social Media Integration',
    ],
  },
  {
    title: 'Premium Package',
    price: '$299/month',
    features: [
      'Unlimited Listings',
      'Dedicated Tech Support',
      '24/7 Customer Service',
      'Comprehensive Analytics Dashboard',
      'Marketing Tools Access',
      'Custom Domain Setup',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans for luxery dark AirBNB
        </motion.h2>
        <motion.div
          className="mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Explore our technology-driven pricing tiers tailored for your luxurious stays.
        </motion.p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
              <p className="text-xl mb-4">{tier.price}</p>
              <ul className="mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="bg-pink-500 text-black py-2 px-4 rounded-full hover:bg-pink-600 transition"
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;