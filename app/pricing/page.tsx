import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$99/month',
    features: ['Access to basic listings', 'Standard support', 'Monthly analytics'],
  },
  {
    name: 'Premium',
    price: '$199/month',
    features: ['Access to all listings', 'Priority support', 'Weekly analytics', 'Custom branding'],
  },
  {
    name: 'Enterprise',
    price: '$499/month',
    features: ['Unlimited access', 'Dedicated account manager', 'Real-time analytics', 'Custom integrations'],
  },
];

const FAQ = [
  {
    question: 'What is luxery dark AirBNB?',
    answer: 'luxery dark AirBNB is a technology-driven platform for high-end, luxurious vacation rentals.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Our pricing plans are designed to fit various business needs, from startups to large enterprises.',
  },
  {
    question: 'What support do you offer?',
    answer: 'We provide 24/7 support across all our plans to ensure a seamless experience.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen p-10">
      <motion.div
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing Plans for luxery dark AirBNB
      </motion.h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-xl mb-2">{plan.price}</p>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="bg-pink-500 text-black px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ.map((item) => (
            <div key={item.question} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;