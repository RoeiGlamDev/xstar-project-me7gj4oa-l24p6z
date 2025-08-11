import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    image: '/images/jane-doe.jpg',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    image: '/images/john-smith.jpg',
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Designer',
    image: '/images/emily-johnson.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold">About luxery dark AirBNB</h1>
        <p className="mt-4 text-lg">Elevating your stay with technology and elegance.</p>
      </header>
      
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold">Our History</h2>
          <p className="mt-6">
            Established in 2021, luxery dark AirBNB redefines the way travelers experience luxury stays. 
            With a focus on technology, we integrate smart solutions into our properties, ensuring 
            comfort and convenience for our guests.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <ul className="mt-6 space-y-4 text-left">
            <li>🌟 Innovation: Embracing cutting-edge technology for a seamless experience.</li>
            <li>🤝 Integrity: Building trust through transparency and ethical practices.</li>
            <li>🌍 Sustainability: Committed to eco-friendly solutions and practices.</li>
          </ul>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-pink-400">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;