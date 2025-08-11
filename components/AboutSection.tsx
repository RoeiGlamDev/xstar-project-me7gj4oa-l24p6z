import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', title: 'CEO', expertise: 'Tech Innovator' },
  { name: 'Bob Smith', title: 'CTO', expertise: 'AI Specialist' },
  { name: 'Charlie Lee', title: 'Lead Developer', expertise: 'Full Stack Engineer' },
  { name: 'Dana White', title: 'UX/UI Designer', expertise: 'User Experience Expert' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">About luxery dark AirBNB</h2>
        <p className="mb-4">
          At luxery dark AirBNB, we redefine the hospitality experience through cutting-edge technology and an elegant aesthetic. Our journey began with a mission to deliver exceptional stays that blend luxury with innovation, creating unforgettable memories for our guests.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-4">
          Our mission at luxery dark AirBNB is to leverage the latest advancements in technology to provide a seamless and luxurious experience for every traveler. We aim to connect people with extraordinary accommodations that reflect their unique tastes while ensuring the highest standards of service and comfort.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-sm mb-1">{member.title}</p>
              <p className="text-gray-400">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
        <p>
          At luxery dark AirBNB, our core values center around innovation, excellence, and customer satisfaction. We believe in creating a diverse and inclusive environment where technology and creativity thrive, ensuring that every guest experiences the pinnacle of luxury and comfort.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;