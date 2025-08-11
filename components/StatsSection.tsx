import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: number;
}

const statsData: Stat[] = [
  { label: 'Premium Listings', value: 120 },
  { label: 'Satisfied Guests', value: 2500 },
  { label: 'Luxury Properties', value: 75 },
  { label: 'Awards Won', value: 10 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Achievements of luxery dark AirBNB
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-extrabold mb-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
              </h3>
              <p className="text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;